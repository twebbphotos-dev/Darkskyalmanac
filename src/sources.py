# Builds sources.html — the public list of references behind the app's facts and figures.
# Head, nav and base styles are borrowed from photography.html so the page matches the rest of the app.
import re, html
V='/home/claude/work/v2/'
ph=open(V+'photography.html',encoding='utf-8').read()
head=ph[:ph.index('<style>')]
head=head.replace('Astrophotography Tools · Dark Sky Almanac','Sources &amp; Methods · Dark Sky Almanac')
desc='Where the facts and figures in the Dark Sky Almanac come from, and how its live sky calculations are made and checked.'
head=re.sub(r'(<meta name="description" content=")[^"]*','\\1'+desc,head)
head=re.sub(r'(<meta property="og:description" content=")[^"]*','\\1'+desc,head)
head=head.replace('https://app.darkskyalmanac.com/photography','https://app.darkskyalmanac.com/sources')
style=ph[ph.index('<style>'):ph.index('</style>')]
# keep the shared rules, drop the tool-grid block
a=style.index('/* tool grid */'); b=style.index('/* Respect the OS')
style=style[:a]+'''/* sources */
.zcl-lede{background:radial-gradient(ellipse 90% 80% at 50% 0%,rgba(40,38,52,.5),transparent 70%),#0d0a18;
  border:1px solid rgba(203,168,90,.22);border-radius:11px;padding:16px 18px;margin:8px 0 4px;
  font-size:13.5px;line-height:1.6;color:#C9BD97}
.zcl-lede b{color:#F2E4BE;font-weight:600}
.zcl-lede p+p{margin-top:9px}
.zcl-secnote{font-size:12.5px;line-height:1.55;color:#9A8E6E;margin:-4px 0 12px}
.zcl-srclist{list-style:none;display:grid;gap:9px}
.zcl-src{background:#0d0a18;border:1px solid rgba(203,168,90,.16);border-radius:9px;padding:12px 14px}
.zcl-srcname{font-size:14px;font-weight:600;color:#F2E4BE;line-height:1.3}
.zcl-srcuse{font-size:12.5px;line-height:1.5;color:#A89D7E;margin-top:4px}
.zcl-srclinks{margin-top:7px;display:flex;flex-wrap:wrap;gap:4px 14px}
.zcl-srclinks a{font-size:11.5px;color:#CBA85A;text-decoration:none;border-bottom:1px solid rgba(203,168,90,.35);
  padding-bottom:1px;overflow-wrap:anywhere;word-break:break-word}
.zcl-srclinks a:hover{color:#E6CC85}
.zcl-foot{font-size:11.5px;line-height:1.55;color:#7A6E55;text-align:center;margin:26px auto 6px;max-width:520px}

'''+style[b:]
nav=ph[ph.index('<nav class="pwa-nav">'):ph.index('</nav>')+6].replace(' active','')
nav=nav.replace('class="pwa-navitem" href="settings"','class="pwa-navitem active" href="settings"')
stars=ph[ph.index('<script>(function(){var s='):]

def L(url,label=None):
    if label is None:
        label=re.sub(r'^https?://(www\.)?','',url).rstrip('/')
        if len(label)>46: label=label.split('/')[0]
    return '<a href="%s" target="_blank" rel="noopener">%s</a>'%(html.escape(url,quote=True),html.escape(label))
def S(name,use,*links):
    return ('<li class="zcl-src"><div class="zcl-srcname">%s</div><div class="zcl-srcuse">%s</div>'%(name,use)
            +('<div class="zcl-srclinks">%s</div>'%''.join(links) if links else '')+'</li>')

SECTIONS=[
('Live Sky Calculations','Sun, Moon and planet positions, rise and set times, twilight, phases and moon positions are calculated on your device, so they work offline and for any saved location.',[
 S('Astronomy Engine','Open-source astronomy library by Don Cross (MIT licence). Used for the Sun, Moon and planets: positions, rise and set, twilight, phases, oppositions, conjunctions and constellation boundaries.',L('https://github.com/cosinekitty/astronomy')),
 S('PyEphem','A second, independent ephemeris. Every event date and a sample of rise, set and twilight times were recomputed with it and compared.',L('https://rhodesmill.org/pyephem/')),
 S('Jean Meeus, <i>Astronomical Algorithms</i>, 2nd ed. (1998)','Theory behind Jupiter’s four large moons (after Lieske), Saturn’s rings and moons (after Dourneau), sidereal time and precession. Code ported from the open-source astronomia library with VSOP87 planetary series.',L('https://github.com/commenthol/astronomia')),
 S('JPL Solar System Dynamics','Approximate orbital elements of the planets, used for the solar-system views and the Sky Finder.',L('https://ssd.jpl.nasa.gov/planets/approx_pos.html')),
 S('Jupiter’s Great Red Spot','Current longitude and drift rate from Sky &amp; Telescope; the System II rotation formula from Project Pluto.',L('https://skyandtelescope.org/observing/interactive-sky-watching-tools/transit-times-of-jupiters-great-red-spot/','skyandtelescope.org'),L('https://projectpluto.com/grs_form.htm')),
 S('Twilight definitions','Civil, nautical and astronomical twilight as defined by the US National Weather Service; solar times spot-checked against the NOAA Solar Calculator.',L('https://www.weather.gov/fsd/twilight'),L('https://gml.noaa.gov/grad/solcalc/')),
]),
('Weather, Clouds &amp; Aurora','These are the only parts of the app that need a connection.',[
 S('Open-Meteo','Hourly cloud cover, temperature, wind and humidity. The cloud forecast blends three global models: ECMWF IFS, DWD ICON and NOAA GFS.',L('https://open-meteo.com/')),
 S('US National Weather Service','Point forecasts for locations in the United States.',L('https://www.weather.gov/documentation/services-web-api','weather.gov')),
 S('NOAA Space Weather Prediction Center','Planetary K-index forecast, used for the aurora outlook.',L('https://www.swpc.noaa.gov/products/planetary-k-index','swpc.noaa.gov')),
 S('BigDataCloud','Turns saved coordinates into a place name.',L('https://www.bigdatacloud.com/')),
]),
('Events &amp; Meteor Showers',None,[
 S('Event dates','Oppositions, conjunctions, elongations, eclipses, equinoxes and solstices were computed with Astronomy Engine and PyEphem for southern Utah, and are listed by the local evening or morning to look.'),
 S('International Meteor Organization','Meteor shower peak dates and zenithal hourly rates, from the IMO Meteor Shower Calendar.',L('https://www.imo.net/resources/calendar/')),
]),
('Planets &amp; Their Moons',None,[
 S('NASA Planetary Fact Sheets','Sizes, masses, day lengths, temperatures and orbital figures (NASA Space Science Data Coordinated Archive).',L('https://nssdc.gsfc.nasa.gov/planetary/factsheet/')),
 S('NASA Science: planet pages','Descriptive facts for each world and its moons.',L('https://science.nasa.gov/earth/facts/'),L('https://science.nasa.gov/venus/venus-facts/'),L('https://science.nasa.gov/mars/facts/'),L('https://science.nasa.gov/mars/moons/'),L('https://science.nasa.gov/uranus/facts/'),L('https://science.nasa.gov/solar-system/kuiper-belt/facts/','science.nasa.gov/…/kuiper-belt')),
 S('Royal Astronomical Society','The true colours of Uranus and Neptune (Irwin and colleagues, 2024).',L('https://ras.ac.uk/news-and-press/news/new-images-reveal-what-neptune-and-uranus-really-look','ras.ac.uk')),
 S('Gazetteer of Planetary Nomenclature','Official names, positions and sizes of surface features, from the International Astronomical Union and the US Geological Survey.',L('https://planetarynames.wr.usgs.gov/')),
 S('Mars opposition tables','Used to cross-check opposition dates, distances and apparent sizes.',L('https://nakedeyeplanets.com/mars-oppositions.htm')),
]),
('The Moon',None,[
 S('Gazetteer of Planetary Nomenclature','Coordinates and diameters of the seas, craters and mountain ranges on the Moon map.',L('https://planetarynames.wr.usgs.gov/')),
 S('NASA Lunar Reconnaissance Orbiter Camera','Feature descriptions and ages, including the dating of Tycho.',L('https://lroc.im-ldi.com/images/209','lroc.im-ldi.com')),
 S('Apollo Lunar Surface Journal','Landing sites, dates, crews and surface activities of the Apollo missions.',L('https://www.nasa.gov/history/alsj/')),
 S('Moon phases and standstills','Phase ages, new and full moon times and the 18.6-year standstill cycle are computed with Astronomy Engine and checked with PyEphem.'),
]),
('Deep Sky &amp; Constellations','Distances and ages of deep-sky objects are measurements that are refined over time, so the app gives rounded figures.',[
 S('OpenNGC','Positions, types and magnitudes of NGC and IC objects.',L('https://github.com/mattiaverga/OpenNGC')),
 S('HYG Star Database','Star positions, magnitudes and colours for the constellation and asterism charts.',L('https://github.com/astronexus/HYG-Database')),
 S('H.A. Rey constellation figures','The constellation line figures in Star ID and the Sky Finder, drawn so each looks like what it is named for, from <i>The Stars: A New Way to See Them</i> (1952). Line data from Stellarium’s modern_rey sky culture; star positions from Hipparcos.',L('https://github.com/Stellarium/stellarium/tree/master/skycultures/modern_rey','stellarium')),
 S('International Astronomical Union','The 88 official constellations and their boundaries, and the IAU Catalog of Star Names kept by its Working Group on Star Names.',L('https://en.wikipedia.org/wiki/IAU_designated_constellations'),L('https://ase.exopla.net/index.php/IAU-Catalog_of_Star_Names','IAU Catalog of Star Names'),L('https://en.wikipedia.org/wiki/IAU_Working_Group_on_Star_Names')),
 S('NASA Hubble Messier Catalog','Descriptions, distances and histories of the Messier objects.',L('https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/','science.nasa.gov/…/hubble-messier-catalog')),
 S('Ian Ridpath, <i>Star Tales</i>','Constellation history and mythology.',L('https://www.ianridpath.com/startales/')),
 S('Milky Way and Andromeda','The 2025 study finding that a future merger is far from certain (Sawala and colleagues, <i>Nature Astronomy</i>).',L('https://www.uwa.edu.au/news/article/2025/june/astronomers-thought-the-milky-way-was-doomed-to-crash-into-andromeda','uwa.edu.au'),L('https://earthsky.org/space/galactic-collision-milky-way-andromeda-50-percent-chance/','earthsky.org')),
 S('Wikipedia','Individual object and star articles, used as a guide to the published measurements they cite.',L('https://en.wikipedia.org/wiki/Messier_object'),L('https://en.wikipedia.org/wiki/Caldwell_catalogue'),L('https://en.wikipedia.org/wiki/New_General_Catalogue'),L('https://en.wikipedia.org/wiki/List_of_proper_names_of_stars')),
 S('BBC Sky at Night Magazine','Star-hop directions for Kemble’s Cascade.',L('https://www.skyatnightmagazine.com/news/kembles-cascade-2/','skyatnightmagazine.com')),
]),
('Spacecraft',None,[
 S('NASA Voyager mission','Voyager 1’s distance, speed, power and instrument status.',L('https://science.nasa.gov/mission/voyager/where-are-voyager-1-and-voyager-2-now/','science.nasa.gov/mission/voyager'),L('https://science.nasa.gov/mission/voyager/fact-sheet/','Voyager fact sheet')),
 S('EarthSky','The moment Voyager 1 reaches one light-day from Earth, in November 2026.',L('https://earthsky.org/space/voyager-1-1-light-day-from-earth-november-17-18-2026/','earthsky.org')),
 S('NASA mission pages','Perseverance, Ingenuity, Curiosity, Hubble, Webb, the Space Station, the Space Shuttle and Apollo.',L('https://science.nasa.gov/mission/mars-2020-perseverance/'),L('https://science.nasa.gov/mission/msl-curiosity/'),L('https://science.nasa.gov/mission/hubble/'),L('https://science.nasa.gov/mission/webb/')),
 S('Hubble Space Telescope media guide','Dimensions and workings of the telescope, including its aperture door.',L('https://lhea.gsfc.nasa.gov/archive/sm3b/art/pdf/media-guide/sec5.pdf','lhea.gsfc.nasa.gov')),
 S('3D models','NASA 3D Resources (NASA/JPL-Caltech and NASA Johnson Space Center). The Apollo Lunar Rover is a scan by Deutsches Museum Digital. Each model is credited on its own page.',L('https://github.com/nasa/NASA-3D-Resources')),
]),
('Dark-Sky Places','Bortle ratings on the maps are estimates drawn from light-pollution mapping and the parks’ own dark-sky reports, not on-site measurements, so each is shown as a range. Road, trail and season details change; check with the park before you go.',[
 S('DarkSky International','Certification status and year for each International Dark Sky Park.',L('https://darksky.org/places/zion-national-park-dark-sky-park/','Zion'),L('https://darksky.org/places/bryce-canyon-national-park-dark-sky-park/','Bryce Canyon'),L('https://darksky.org/places/capitol-reef-national-park-dark-sky-park/','Capitol Reef'),L('https://darksky.org/places/canyonlands-national-park-dark-sky-park/','Canyonlands'),L('https://darksky.org/places/arches-national-park-dark-sky-park/','Arches'),L('https://darksky.org/places/cedar-breaks-national-monument-dark-sky-park/','Cedar Breaks')),
 S('National Park Service','Recommended stargazing sites in Zion, certification announcements, and trail, road and overlook details.',L('https://www.nps.gov/thingstodo/stargazing-in-zion.htm','Stargazing in Zion'),L('https://www.nps.gov/zion/learn/news/zion-national-park-certified-as-an-international-dark-sky-park.htm','Zion certification'),L('https://www.nps.gov/care/learn/news/capitol-reef-national-park-receives-international-dark-sky-designation.htm','Capitol Reef designation')),
 S('Dark Sky Park applications','Sky-quality surveys submitted for Cedar Breaks and Canyonlands.',L('https://darksky.org/app/uploads/2017/03/CedarBreaks_IDSP_Application.pdf','Cedar Breaks (PDF)'),L('https://darksky.org/app/uploads/2015/08/Canyonlands_IDSP_application.pdf','Canyonlands (PDF)')),
 S('The New World Atlas of Artificial Night Sky Brightness','Falchi and colleagues, <i>Science Advances</i> (2016): the global map of sky brightness.',L('https://www.science.org/doi/10.1126/sciadv.1600377','science.org')),
 S('The Bortle Dark-Sky Scale','John E. Bortle, <i>Sky &amp; Telescope</i> (2001).',L('https://skyandtelescope.org/astronomy-resources/light-pollution-and-astronomy-the-bortle-dark-sky-scale/','skyandtelescope.org')),
]),
('Photography Tools',None,[
 S('The NPF rule','Frédéric Michaud’s formula for the longest exposure before stars trail (Société Astronomique du Havre).',L('https://sahavre.fr/wp/regle-npf-rule/')),
 S('NOAA magnetic field calculator','Magnetic declination, so the Sky Finder’s compass points to true north.',L('https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml','ngdc.noaa.gov')),
 S('Stacking and signal-to-noise','The square-root rule for combining exposures, as set out in the Astropy CCD data reduction guide.',L('https://www.astropy.org/ccd-reduction-and-photometry-guide/','astropy.org')),
 S('Star ID catalog','About 83,000 stars to magnitude 9 and the named deep-sky objects, from the HYG database v4.1 (Hipparcos, Yale Bright Star and Gliese catalogues), with proper motion carried forward to 2026.',L('https://github.com/astronexus/HYG-Database')),
 S('Star ID plate solving','The four-star geometric hashing method of Astrometry.net (Lang and colleagues, <i>The Astronomical Journal</i>, 2010), rebuilt to run on the phone with no connection.',L('https://doi.org/10.1088/0004-6256/139/5/1782','doi.org'),L('https://astrometry.net/')),
]),
]
body='''<svg class="zcl-stars"></svg>
<div class="zcl-page">
  <div class="zcl-titlebar">
    <div class="zcl-kicker">Dark Sky Almanac</div>
    <div class="zcl-maintitle">Sources &amp; Methods</div>
    <div class="zcl-titlerule"><span class="zcl-rline"></span>
      <svg class="zcl-rstar" viewBox="0 0 24 24"><path d="M12 2 L13.6 9.2 L21 12 L13.6 14.8 L12 22 L10.4 14.8 L3 12 L10.4 9.2 Z" fill="#CBA85A"/></svg>
      <span class="zcl-rline"></span></div>
    <div class="zcl-subtitle">Where the facts and figures in this app come from, and how its live numbers are worked out.</div>
  </div>
  <div class="zcl-lede">
    <p><b>Calculated, then checked.</b> Positions, rise and set times, phases and event dates are computed on your device and compared against a second, independent ephemeris.</p>
    <p><b>Facts with references.</b> Descriptions were checked against the sources below in October 2026. Astronomy keeps moving, so distances, ages and moon counts are rounded and will be revised as measurements improve.</p>
  </div>
'''
for title,note,items in SECTIONS:
    body+='  <div class="zcl-seclabel">%s</div>\n'%title
    if note: body+='  <div class="zcl-secnote">%s</div>\n'%note
    body+='  <ul class="zcl-srclist">\n    '+'\n    '.join(items)+'\n  </ul>\n'
body+='  <div class="zcl-foot">Links open in your browser and need a connection. Everything else on this page is saved for offline use.</div>\n</div>\n'
out=head+style+'</style></head>\n<body>\n'+nav+'\n'+body+stars
open(V+'sources.html','w',encoding='utf-8').write(out)
print('sources.html',len(out),'bytes;',sum(len(i) for _,_,i in SECTIONS),'entries;',out.count('target="_blank"'),'links')
