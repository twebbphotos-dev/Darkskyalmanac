/* ══════════════════════════════════════════════════════════════════════════
   ZCLCalendar — the app's own date picker.

   Replaces <input type="date">, whose popup is drawn by the OS and cannot be
   themed (it renders white-on-blue on iOS regardless of CSS). This one is
   ordinary DOM, so it matches the gold-on-velvet palette everywhere and looks
   identical on every device.

   No dependencies. Injects its own stylesheet once, on first use.

   ── Usage ───────────────────────────────────────────────────────────────
     ZCLCalendar.attach(buttonEl, {
       value:    Date,                 // initially selected day
       min:      Date,                 // optional lower bound
       max:      Date,                 // optional upper bound
       format:   fn(date) -> string,   // optional label formatter
       onSelect: fn(date) { ... }      // fired when a day is chosen
     });
     ZCLCalendar.open({ anchor, value, min, max, onSelect });   // ad-hoc
     ZCLCalendar.close();

   `attach` keeps the trigger's text in sync with the selection; call
   `trigger._zclSet(date)` to update it from outside.
   ══════════════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  var MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December'];
  var DOW = ['S','M','T','W','T','F','S'];

  var CSS = ''
  // Kill every browser default that paints blue on iOS: the tap flash, text
  // selection, form accent and caret. Without these the picker shows system
  // blue on touch no matter what colours are set elsewhere.
  + '.zclcal-back *,.zclcal-back{-webkit-tap-highlight-color:transparent;'
  +   'accent-color:#CBA85A;caret-color:#CBA85A}'
  + '.zclcal-back ::selection{background:rgba(203,168,90,.3);color:#F2E4BE}'
  + '.zclcal-back button{color:inherit;-webkit-appearance:none;appearance:none}'

  // Surround
  + '.zclcal-back{position:fixed;inset:0;z-index:99998;background:rgba(6,5,12,.78);'
  +   '-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);'
  +   'display:flex;align-items:center;justify-content:center;padding:16px;'
  // The panel is a fixed height now, which can exceed a landscape phone. Allow
  // the surround to scroll so it is never clipped, and keep the panel from
  // being squashed (which would move the arrows again).
  +   'overflow-y:auto;-webkit-overflow-scrolling:touch;'
  +   'animation:zclcal-fade .16s ease-out}'
  + '@keyframes zclcal-fade{from{opacity:0}to{opacity:1}}'
  + '@keyframes zclcal-rise{from{opacity:0;transform:translateY(8px) scale(.985)}'
  +   'to{opacity:1;transform:none}}'

  // Panel — matches the app card: same velvet, same gold hairline, same radius
  + '.zclcal{width:min(336px,100%);background:#0d0a18;border:1px solid rgba(203,168,90,.28);'
  +   'border-radius:12px;padding:16px 16px 13px;'
  +   'box-shadow:0 22px 60px rgba(0,0,0,.66), 0 0 0 1px rgba(0,0,0,.4);'
  +   'font-family:Montserrat,system-ui,sans-serif;color:#F2E4BE;flex:none;'
  +   '-webkit-font-smoothing:antialiased;animation:zclcal-rise .18s ease-out}'

  // Header — title uses the app-wide small-caps label style
  + '.zclcal-head{display:flex;align-items:center;justify-content:space-between;gap:8px;'
  +   'margin-bottom:13px}'
  + '.zclcal-title{flex:1;text-align:center;font-size:12px;font-weight:600;letter-spacing:.16em;'
  +   'text-transform:uppercase;color:#E6CC85;white-space:nowrap;overflow:hidden;'
  +   'text-overflow:ellipsis;padding:0 2px}'
  + '.zclcal-nav{width:34px;height:34px;flex:none;border-radius:50%;'
  +   'border:1px solid rgba(203,168,90,.3);background:rgba(203,168,90,.05);color:#CBA85A;'
  +   'font:inherit;font-size:15px;line-height:1;cursor:pointer;display:flex;'
  +   'align-items:center;justify-content:center;touch-action:manipulation;'
  +   '-webkit-user-select:none;user-select:none;padding:0;transition:background .12s,color .12s}'
  + '.zclcal-nav:hover:not(:disabled){background:rgba(203,168,90,.16);color:#F2E4BE;'
  +   'border-color:rgba(203,168,90,.55)}'
  + '.zclcal-nav:active:not(:disabled){background:rgba(203,168,90,.26)}'
  + '.zclcal-nav:disabled{opacity:.22;cursor:default}'

  // Divider under the header, echoing the card rules elsewhere in the app
  + '.zclcal-rule{height:1px;background:linear-gradient(to right,transparent,'
  +   'rgba(203,168,90,.32),transparent);margin:0 0 9px}'

  // Weekday strip
  + '.zclcal-dow{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:5px}'
  + '.zclcal-dow span{text-align:center;font-size:9px;letter-spacing:.14em;color:#7A6E55;'
  +   'text-transform:uppercase;padding:2px 0}'

  // Day grid
  + '.zclcal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px}'
  + '.zclcal-day{aspect-ratio:1/1;min-height:37px;border:1px solid transparent;border-radius:9px;'
  +   'background:none;color:#C9BD97;font:inherit;font-size:13.5px;font-weight:400;cursor:pointer;'
  +   'display:flex;align-items:center;justify-content:center;touch-action:manipulation;'
  +   'padding:0;transition:background .12s,color .12s,border-color .12s}'
  + '.zclcal-day:hover:not(:disabled):not(.sel){background:rgba(203,168,90,.12);color:#F2E4BE}'
  + '.zclcal-day:active:not(:disabled){background:rgba(203,168,90,.22)}'
  + '.zclcal-day.out{color:#463F33}'
  + '.zclcal-day.out:hover{color:#8A7E60}'
  // today: gold ring, no fill
  + '.zclcal-day.today{border-color:rgba(203,168,90,.6);color:#E6CC85;font-weight:500}'
  // selected: warm gold fill with a soft halo, dark ink for contrast
  + '.zclcal-day.sel{background:linear-gradient(160deg,#E6CC85,#CBA85A);color:#15121d;'
  +   'font-weight:600;border-color:#E6CC85;box-shadow:0 0 0 3px rgba(203,168,90,.16)}'
  + '.zclcal-day:disabled{opacity:.18;cursor:default}'
  + '.zclcal-day:focus-visible{outline:2px solid #E6CC85;outline-offset:2px}'

  // Footer
  + '.zclcal-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;'
  +   'margin-top:12px;padding-top:11px;border-top:1px solid rgba(203,168,90,.16)}'
  + '.zclcal-btn{font:inherit;font-size:10px;letter-spacing:.14em;text-transform:uppercase;'
  +   'font-weight:600;color:#CBA85A;background:rgba(203,168,90,.06);'
  +   'border:1px solid rgba(203,168,90,.3);border-radius:8px;padding:9px 14px;cursor:pointer;'
  +   'touch-action:manipulation;transition:background .12s,color .12s}'
  + '.zclcal-btn:hover{background:rgba(203,168,90,.15);color:#F2E4BE}'
  + '.zclcal-btn.plain{border-color:transparent;background:none;color:#7A6E55}'
  + '.zclcal-btn.plain:hover{color:#C9BD97;background:none}'

  + '@media (prefers-reduced-motion: reduce){'
  +   '.zclcal,.zclcal-back{animation:none!important}'
  +   '.zclcal-day,.zclcal-nav,.zclcal-btn{transition:none!important}}';

  var styled = false;
  function injectCSS() {
    if (styled || typeof document === 'undefined') return;
    styled = true;
    var el = document.createElement('style');
    el.setAttribute('data-zclcal', '');
    el.textContent = CSS;
    document.head.appendChild(el);
  }

  // ── date helpers (all local-time, no UTC drift) ──
  function startOfDay(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function sameDay(a, b) {
    return !!a && !!b && a.getFullYear() === b.getFullYear()
      && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }
  function addMonths(d, n) {
    // Clamp the day so 31 Jan + 1 month lands on 28/29 Feb, not 3 March.
    var y = d.getFullYear(), m = d.getMonth() + n, day = d.getDate();
    var last = new Date(y, m + 1, 0).getDate();
    return new Date(y, m, Math.min(day, last));
  }
  function clamp(d, min, max) {
    if (min && d < min) return new Date(min);
    if (max && d > max) return new Date(max);
    return d;
  }
  function defaultFormat(d) {
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  }

  var state = null;   // { back, root, view, selected, min, max, onSelect, lastFocus }

  function close() {
    if (!state) return;
    var s = state;
    state = null;
    if (s.back && s.back.parentNode) s.back.parentNode.removeChild(s.back);
    document.removeEventListener('keydown', s.onKey, true);
    if (s.lastFocus && s.lastFocus.focus) { try { s.lastFocus.focus(); } catch (e) {} }
  }

  function build() {
    var s = state;
    var view = s.view;
    var first = new Date(view.getFullYear(), view.getMonth(), 1);
    var startPad = first.getDay();
    var daysInMonth = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
    var today = startOfDay(new Date());

    var html = ''
      + '<div class="zclcal-head">'
      +   '<button type="button" class="zclcal-nav" data-nav="-1" aria-label="Previous month">&#8249;</button>'
      +   '<div class="zclcal-title" id="zclcal-title">' + MONTHS[view.getMonth()] + ' ' + view.getFullYear() + '</div>'
      +   '<button type="button" class="zclcal-nav" data-nav="1" aria-label="Next month">&#8250;</button>'
      + '</div>'
      + '<div class="zclcal-rule"></div>'
      + '<div class="zclcal-dow">' + DOW.map(function (d) { return '<span>' + d + '</span>'; }).join('') + '</div>'
      + '<div class="zclcal-grid" role="grid">';

    // leading days from the previous month, so the grid always starts on Sunday
    var prevLast = new Date(view.getFullYear(), view.getMonth(), 0).getDate();
    for (var i = startPad - 1; i >= 0; i--) {
      html += '<button type="button" class="zclcal-day out" data-off="-1" data-d="'
        + (prevLast - i) + '" tabindex="-1">' + (prevLast - i) + '</button>';
    }
    for (var day = 1; day <= daysInMonth; day++) {
      var cur = new Date(view.getFullYear(), view.getMonth(), day);
      var cls = 'zclcal-day';
      if (sameDay(cur, today)) cls += ' today';
      if (sameDay(cur, s.selected)) cls += ' sel';
      var dis = (s.min && cur < startOfDay(s.min)) || (s.max && cur > startOfDay(s.max));
      html += '<button type="button" class="' + cls + '" data-day="' + day + '"'
        + (dis ? ' disabled' : '')
        + ' aria-label="' + cur.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) + '"'
        + (sameDay(cur, s.selected) ? ' aria-current="date"' : '')
        + '>' + day + '</button>';
    }
    // Trailing days. The grid is ALWAYS padded to six week-rows (42 cells) even
    // when a month only needs four or five — February 2026 needs just four. A
    // variable row count changes the panel height, and because the panel is
    // vertically centred that moves its top edge and the arrows with it, so
    // repeat-clicking > would make the button slide out from under your finger.
    var cells = startPad + daysInMonth;
    var tail = 42 - cells;
    for (var j = 1; j <= tail; j++) {
      html += '<button type="button" class="zclcal-day out" data-off="1" data-d="' + j + '" tabindex="-1">' + j + '</button>';
    }
    html += '</div>'
      + '<div class="zclcal-foot">'
      +   '<button type="button" class="zclcal-btn" data-today="1">Today</button>'
      +   '<button type="button" class="zclcal-btn plain" data-close="1">Close</button>'
      + '</div>';

    s.root.innerHTML = html;
  }

  function choose(d) {
    var s = state;
    if (!s) return;
    var picked = startOfDay(d);
    var cb = s.onSelect;
    close();
    if (cb) cb(picked);
  }

  function open(opts) {
    opts = opts || {};
    injectCSS();
    close();

    var sel = opts.value ? startOfDay(new Date(opts.value)) : startOfDay(new Date());
    var back = document.createElement('div');
    back.className = 'zclcal-back';
    var root = document.createElement('div');
    root.className = 'zclcal';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-label', 'Choose a date');
    back.appendChild(root);

    state = {
      back: back, root: root,
      view: new Date(sel.getFullYear(), sel.getMonth(), 1),
      selected: sel,
      min: opts.min ? new Date(opts.min) : null,
      max: opts.max ? new Date(opts.max) : null,
      onSelect: opts.onSelect,
      lastFocus: (document.activeElement && document.activeElement !== document.body)
        ? document.activeElement : (opts.anchor || null)
    };

    build();

    // ── interaction ──
    root.addEventListener('click', function (ev) {
      var b = ev.target.closest ? ev.target.closest('button') : null;
      if (!b) return;
      if (b.dataset.nav) {
        state.view = addMonths(state.view, +b.dataset.nav);
        build();
        var t = root.querySelector('#zclcal-title');
        if (t) t.setAttribute('aria-live', 'polite');
        return;
      }
      if (b.dataset.close) { close(); return; }
      if (b.dataset.today) { choose(new Date()); return; }
      if (b.dataset.off) {          // a greyed day from an adjacent month
        var v = addMonths(state.view, +b.dataset.off);
        choose(new Date(v.getFullYear(), v.getMonth(), +b.dataset.d));
        return;
      }
      if (b.dataset.day) {
        choose(new Date(state.view.getFullYear(), state.view.getMonth(), +b.dataset.day));
      }
    });

    // Tapping the dimmed surround dismisses, but only outside the panel.
    back.addEventListener('click', function (ev) { if (ev.target === back) close(); });

    state.onKey = function (ev) {
      if (!state) return;
      if (ev.key === 'Escape') { ev.preventDefault(); close(); return; }
      var step = ev.key === 'ArrowLeft' ? -1 : ev.key === 'ArrowRight' ? 1
               : ev.key === 'ArrowUp' ? -7 : ev.key === 'ArrowDown' ? 7 : 0;
      if (step) {
        ev.preventDefault();
        var next = clamp(new Date(state.selected.getTime() + step * 86400000), state.min, state.max);
        state.selected = startOfDay(next);
        state.view = new Date(next.getFullYear(), next.getMonth(), 1);
        build();
        var cell = root.querySelector('.zclcal-day.sel');
        if (cell) cell.focus();
        return;
      }
      if (ev.key === 'Enter') { ev.preventDefault(); choose(state.selected); }
    };
    document.addEventListener('keydown', state.onKey, true);

    document.body.appendChild(back);
    var selCell = root.querySelector('.zclcal-day.sel') || root.querySelector('.zclcal-day:not(.out)');
    if (selCell && selCell.focus) { try { selCell.focus(); } catch (e) {} }
    return { close: close };
  }

  // Turn any element into a date trigger whose label tracks the selection.
  function attach(trigger, opts) {
    if (!trigger) return;
    opts = opts || {};
    var fmt = opts.format || defaultFormat;
    var current = opts.value ? startOfDay(new Date(opts.value)) : startOfDay(new Date());

    function paint() { trigger.textContent = fmt(current); }
    trigger._zclSet = function (d) { current = startOfDay(new Date(d)); paint(); };
    trigger._zclGet = function () { return new Date(current); };
    paint();

    trigger.addEventListener('click', function () {
      open({
        anchor: trigger,
        value: current,
        min: opts.min,
        max: opts.max,
        onSelect: function (d) {
          current = d;
          paint();
          if (opts.onSelect) opts.onSelect(d);
        }
      });
    });
    return trigger;
  }

  global.ZCLCalendar = { open: open, close: close, attach: attach };
})(typeof window !== 'undefined' ? window : this);
