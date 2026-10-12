/*
 * exif.js - minimal JPEG EXIF reader.
 *
 * Self-contained on purpose: the app has to work with no network, so it
 * cannot pull in a library at runtime. Reads only what the solve needs -
 * focal length, capture time, GPS, camera model, orientation.
 */

const TYPE_SIZE = { 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 6: 1, 7: 1, 8: 2, 9: 4, 10: 8, 11: 4, 12: 8 };

function readValue(dv, entry, le) {
  const { type, count, valueOffset, tiffStart } = entry;
  const size = TYPE_SIZE[type] || 1;
  const total = size * count;
  const base = total <= 4 ? valueOffset : tiffStart + dv.getUint32(valueOffset, le);
  const at = total <= 4 ? valueOffset : base;

  const one = (i) => {
    const o = at + i * size;
    switch (type) {
      case 1: case 7: return dv.getUint8(o);
      case 2: return dv.getUint8(o);
      case 3: return dv.getUint16(o, le);
      case 4: return dv.getUint32(o, le);
      case 5: { const n = dv.getUint32(o, le), d = dv.getUint32(o + 4, le); return d ? n / d : 0; }
      case 6: return dv.getInt8(o);
      case 8: return dv.getInt16(o, le);
      case 9: return dv.getInt32(o, le);
      case 10: { const n = dv.getInt32(o, le), d = dv.getInt32(o + 4, le); return d ? n / d : 0; }
      default: return 0;
    }
  };

  if (type === 2) {
    let s = '';
    for (let i = 0; i < count; i++) {
      const c = one(i);
      if (c === 0) break;
      s += String.fromCharCode(c);
    }
    return s.trim();
  }
  if (count === 1) return one(0);
  const out = [];
  for (let i = 0; i < count; i++) out.push(one(i));
  return out;
}

function readIFD(dv, tiffStart, ifdOffset, le, want, out) {
  if (ifdOffset <= 0 || tiffStart + ifdOffset + 2 > dv.byteLength) return;
  const n = dv.getUint16(tiffStart + ifdOffset, le);
  for (let i = 0; i < n; i++) {
    const e = tiffStart + ifdOffset + 2 + i * 12;
    if (e + 12 > dv.byteLength) return;
    const tag = dv.getUint16(e, le);
    const name = want[tag];
    if (!name) continue;
    out[name] = readValue(dv, {
      type: dv.getUint16(e + 2, le),
      count: dv.getUint32(e + 4, le),
      valueOffset: e + 8,
      tiffStart,
    }, le);
  }
}

function subIFDOffset(dv, tiffStart, ifdOffset, le, tag) {
  if (ifdOffset <= 0 || tiffStart + ifdOffset + 2 > dv.byteLength) return 0;
  const n = dv.getUint16(tiffStart + ifdOffset, le);
  for (let i = 0; i < n; i++) {
    const e = tiffStart + ifdOffset + 2 + i * 12;
    if (dv.getUint16(e, le) === tag) return dv.getUint32(e + 8, le);
  }
  return 0;
}

const IFD0 = { 0x010f: 'make', 0x0110: 'model', 0x0112: 'orientation' };
const EXIF = {
  0x829a: 'exposureTime', 0x8827: 'iso', 0x9003: 'dateTimeOriginal',
  0x920a: 'focalLength', 0xa405: 'focalLength35', 0x9011: 'offsetTimeOriginal',
  0xa002: 'pixelXDimension', 0xa003: 'pixelYDimension', 0x829d: 'fNumber',
  0xa434: 'lensModel',
};
const GPS = {
  0x0001: 'latRef', 0x0002: 'lat', 0x0003: 'lonRef', 0x0004: 'lon',
  0x0005: 'altRef', 0x0006: 'alt',
};

function dms(arr, ref) {
  if (!Array.isArray(arr) || arr.length < 3) return null;
  const v = arr[0] + arr[1] / 60 + arr[2] / 3600;
  return (ref === 'S' || ref === 'W') ? -v : v;
}

/** @returns {object} best-effort metadata; missing fields are simply absent. */
export function readExif(buffer) {
  const dv = new DataView(buffer);
  const out = {};
  if (dv.byteLength < 4 || dv.getUint16(0) !== 0xffd8) return out;

  let off = 2;
  let tiffStart = -1;
  while (off + 4 <= dv.byteLength) {
    if (dv.getUint8(off) !== 0xff) { off++; continue; }
    const marker = dv.getUint8(off + 1);
    if (marker === 0xd8 || (marker >= 0xd0 && marker <= 0xd9)) { off += 2; continue; }
    if (marker === 0xda) break;
    const size = dv.getUint16(off + 2);
    if (marker === 0xe1 && off + 10 < dv.byteLength && dv.getUint32(off + 4) === 0x45786966) {
      tiffStart = off + 10;
      break;
    }
    off += 2 + size;
  }
  if (tiffStart < 0) return out;

  const bo = dv.getUint16(tiffStart);
  if (bo !== 0x4949 && bo !== 0x4d4d) return out;
  const le = bo === 0x4949;
  const ifd0 = dv.getUint32(tiffStart + 4, le);

  readIFD(dv, tiffStart, ifd0, le, IFD0, out);
  const exifOff = subIFDOffset(dv, tiffStart, ifd0, le, 0x8769);
  if (exifOff) readIFD(dv, tiffStart, exifOff, le, EXIF, out);
  const gpsOff = subIFDOffset(dv, tiffStart, ifd0, le, 0x8825);
  if (gpsOff) {
    const g = {};
    readIFD(dv, tiffStart, gpsOff, le, GPS, g);
    const la = dms(g.lat, g.latRef), lo = dms(g.lon, g.lonRef);
    if (la !== null && lo !== null) out.gps = { lat: la, lon: lo };
  }
  return out;
}

/**
 * EXIF stores local time with no zone, so a bare parse would be wrong by the
 * UTC offset. Uses OffsetTimeOriginal when the camera recorded it, otherwise
 * falls back to the phone's current zone, which is right when the photo was
 * taken on the same trip.
 */
export function exifDate(meta) {
  const s = meta.dateTimeOriginal;
  if (!s) return null;
  const m = /^(\d{4}):(\d{2}):(\d{2})[ T](\d{2}):(\d{2}):(\d{2})/.exec(s);
  if (!m) return null;
  const [, Y, Mo, D, H, Mi, S] = m.map(Number);
  const off = meta.offsetTimeOriginal;
  const om = off && /^([+-])(\d{2}):(\d{2})$/.exec(off);
  if (om) {
    const sign = om[1] === '-' ? -1 : 1;
    const mins = sign * (Number(om[2]) * 60 + Number(om[3]));
    return new Date(Date.UTC(Y, Mo - 1, D, H, Mi, S) - mins * 60000);
  }
  return new Date(Y, Mo - 1, D, H, Mi, S);
}

/** Sensor width in mm, from the 35mm-equivalent ratio when the camera gives it. */
export function sensorWidthFrom(meta) {
  const f = meta.focalLength, f35 = meta.focalLength35;
  if (f && f35 && f > 0) {
    const crop = f35 / f;
    if (crop > 0.9 && crop < 6) return 36 / crop;
  }
  return null;
}
