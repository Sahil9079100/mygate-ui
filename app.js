/* ============================================================
   MyGate — frontend app
   Renders five screens from DATA and wires up navigation.
   Every visible control responds: sheets, drawers, live
   filtering, cart, likes, comments, compose, search.
   ============================================================ */

const ICONS = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>',
  building: '<path d="M4 21h16"/><path d="M6 21V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v16"/><path d="M9 8h2M13 8h2M9 12h2M13 12h2M10 21v-3h4v3"/>',
  people: '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 5a3 3 0 0 1 0 6"/><path d="M17.5 15a4.5 4.5 0 0 1 3 5"/>',
  tag: '<path d="M3 4h7l10 10-7 7L3 11V4Z"/><circle cx="7.5" cy="8.5" r="1.5"/>',
  store: '<path d="M4 4h16l1 5a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0Z"/><path d="M5 12v8h14v-8"/><path d="M9 20v-5h6v5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 6-2 7-2 7h16s-2-1-2-7"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  chev: '<path d="m6 9 6 6 6-6"/>',
  chevR: '<path d="m9 6 6 6-6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  back: '<path d="M15 18l-6-6 6-6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  more: '<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>',
  wallet: '<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10h18"/><circle cx="16.5" cy="14.5" r="1.2"/>',
  headset: '<path d="M4 13a8 8 0 0 1 16 0"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M20 19a3 3 0 0 1-3 2h-2"/>',
  courts: '<path d="M7 4l4 3-4 3-4-3Z"/><path d="M8.2 9.4 5 19"/><path d="M5.8 9.4c-1 2.5-2.3 3.4-1.5 5.4.5 1.3 2 1.6 2.9 1.4"/>',
  idcard: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="11" r="2"/><path d="M5.5 16a3 3 0 0 1 6 0"/><path d="M14 9h5M14 13h5M14 17h4"/>',
  shield: '<path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6Z"/><path d="m9 12 2 2 4-4"/>',
  wrench: '<path d="M14 7a3 3 0 0 1 4-3l-2.5 2.5L17 8l2.5-2.5a3 3 0 0 1-3 4L8 18a2.1 2.1 0 0 1-3-3l8.5-8Z"/>',
  tank: '<path d="M6 10h12v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/><path d="M9 14h6"/>',
  lamp: '<path d="M8 4h8l-1 6H9Z"/><path d="M12 10v7"/><path d="M9 17h6M10 20h4"/>',
  sofa: '<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M4 11a2 2 0 0 0-2 2v3h20v-3a2 2 0 0 0-2-2"/><path d="M3 16v3M21 16v3"/>',
  bed: '<path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 15h18"/><circle cx="7" cy="11" r="1.6"/>',
  food: '<path d="M6 4v6M3 4v6M4.5 4v16"/> <path d="M17 4c-2 2-2 9 0 11v5"/><path d="M17 4c2 2 2 9 0 11"/>',
  tv: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M8 3l4 3 4-3"/>',
  car: '<path d="M4 17 5 10h14l1 7"/><rect x="3" y="17" width="18" height="3" rx="1"/><circle cx="7.5" cy="14" r="1.2"/><circle cx="16.5" cy="14" r="1.2"/>',
  bike: '<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17 9 9h6l3 8"/><path d="M9 9H7.5M13 6h3"/>',
  desk: '<path d="M3 7h18M11 7v10h2V7"/><path d="M6 10v4M18 10v4"/>',
  block: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  paint: '<path d="M12 3s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10Z"/><circle cx="12" cy="13" r="2.2"/>',
  person: '<circle cx="12" cy="8" r="3.2"/><path d="M5 20a7 7 0 0 1 14 0"/>',
  carpool: '<rect x="3" y="7" width="18" height="9" rx="2"/><circle cx="8" cy="11.5" r="1"/><circle cx="16" cy="11.5" r="1"/><path d="M8 16v3M16 16v3"/>',
  meter: '<path d="M12 21a9 9 0 1 1 9-9"/><path d="m12 12 3-3"/><path d="M18 21a3 3 0 1 0 0-6"/>',
  notice: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/><path d="M19 3v18"/>',
  yoga: '<circle cx="12" cy="5" r="2"/><path d="M5 10c2 1.5 4 2.5 7 2.5s5-1 7-2.5"/><path d="M12 12.5V17"/><path d="M7 21l5-4 5 4"/>',
  cricket: '<circle cx="12" cy="12" r="8"/><path d="M4 12c2-3 6-3 8 0s6 3 8 0"/><circle cx="12" cy="8" r="1.2"/>',
  leaf: '<path d="M5 19C5 9 12 4 20 4c0 8-4 15-15 15Z"/><path d="M5 19c3-6 8-9 12-11"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>',
  tech: '<circle cx="12" cy="8" r="3"/><path d="M6 20a6 6 0 0 1 12 0"/><path d="M12 11l-1 3 2 1-1 2"/>',
  lock: '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v2"/>',
  demo: '<rect x="3" y="5" width="18" height="13" rx="2"/><path d="m10 9 5 3-5 3Z"/>',
  truck: '<path d="M3 6h11v10H3z"/><path d="M14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17.5" cy="18" r="1.8"/>',
  heart: '<path d="M12 20s-7-4.3-9-8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 3.7-9 8-9 8Z"/>',
  comment: '<path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5Z"/>',
  share: '<circle cx="6" cy="12" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6"/>',
  pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  send: '<path d="m4 12 16-7-6 16-3-6Z"/>',
  star: '<path d="m12 3 2.6 5.6 6.4.7-4.6 4.1 1.3 6-5.7-3.4L5.3 19.4l1.3-6L2 9.3l6.4-.7Z"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  trash: '<path d="M4 7h16"/><path d="M9 7V5h6v2"/><path d="M6 7l1 13h10l1-13"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>'
};

function icon(name, cls = "") {
  const body = ICONS[name] || ICONS.more;
  return `<svg class="${cls}" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">${body}</svg>`;
}

/* placeholder media block (no fake stock photos) */
function media(img, cls) {
  return `<div class="${cls} media-ph" style="background:${img.bg}">${icon(img.ico)}</div>`;
}

/* live UI state (resets on reload — fine for a prototype) */
const state = {
  homeSeg: "rent",
  homeQuery: "",
  qaExpanded: false,
  commExpanded: false,
  marketCat: null
};

const S = DATA.society;

/* ============================================================
   HEADERS
   ============================================================ */
function headerSociety() {
  const nb = S.notifCount
    ? `<button class="icon-btn" data-act="bell" aria-label="Notifications">${icon("bell")}<span class="badge-dot">${S.notifCount}</span></button>`
    : `<button class="icon-btn" data-act="bell" aria-label="Notifications">${icon("bell")}</button>`;
  return `
  <header class="header">
    <div class="header-top">
      <button class="menu-btn" data-act="menu" aria-label="Menu">${icon("menu")}</button>
      <div class="society">
        <button class="society-name" data-act="society-switch">${S.name} ${icon("chev", "chev")}</button>
        <span class="society-sub">${S.sub}</span>
      </div>
      <button class="icon-btn" data-act="search" data-tab="home" aria-label="Search">${icon("search")}</button>
      ${nb}
      <button class="avatar" data-act="profile" aria-label="Profile">${S.user}</button>
    </div>
  </header>`;
}

function headerTitle(title, sub, tab) {
  return `
  <header class="header">
    <div class="header-top">
      <button class="menu-btn" data-act="menu" aria-label="Menu">${icon("menu")}</button>
      <div class="society">
        <span class="society-name" style="font-size:19px;cursor:default;">${title}</span>
        ${sub ? `<span class="society-sub">${sub}</span>` : ""}
      </div>
      <div class="flex gap8">
        <button class="icon-btn" data-act="search" data-tab="${tab}" aria-label="Search">${icon("search")}</button>
        <button class="icon-btn" data-act="grid-menu" aria-label="Options">${icon("grid")}</button>
      </div>
    </div>
  </header>`;
}

/* ============================================================
   SCREEN: HOME
   ============================================================ */
function renderHome() {
  const others = DATA.quickActions.filter(a => a.label !== "See all" && !a.hidden);
  const seeAll = DATA.quickActions.find(a => a.label === "See all");
  const visibleQa = state.qaExpanded ? others : [...others.slice(0, 7), seeAll];
  const qa = visibleQa.map(a => `
    <button class="qa" data-act="qa" data-i="${DATA.quickActions.indexOf(a)}">
      <span class="qa-ic-wrap">
        <span class="qa-ic">${icon(a.ico)}</span>
        ${a.tag ? `<span class="tag">${a.tag}</span>` : ""}
      </span>
      <span class="qa-label">${a.label}</span>
    </button>`).join("");

  const pulse = `
    <div class="pulse">
      <div class="pulse-head">
        <span class="t">Society pulse</span>
        <button class="see-all" data-act="pulse-live">Live ${icon("sparkle")}</button>
      </div>
      <div class="pulse-grid">
        ${DATA.pulse.map(p => `
          <div class="pulse-item">
            <div class="p-k">${p.k.toLocaleString("en-IN")}<small>${p.unit}</small></div>
            <div class="p-l">${p.l}</div>
          </div>`).join("")}
      </div>
    </div>`;

  const posts = DATA.posts.map((p, i) => {
    const pfRole = p.role === "admin" ? "pf-admin" : p.role === "notice" ? "pf-notice" : "pf-resident";
    const badge = p.badge === "Admin" ? `<span class="pill pill-admin">Admin</span>` : (p.badge === "Ad" ? `<span class="pill pill-ad">Ad</span>` : "");
    const mediaBlock = p.media ? `<div class="post-media">${media(p.media, "media-ph")}</div>` : "";
    const clamp = (!p.expanded && p.body.length > 140) ? "clamp" : "";
    return `
    <article class="post" id="post-${i}" data-act="open-post" data-i="${i}">
      <div class="post-head">
        <div class="pf ${pfRole}">${p.author[0]}</div>
        <div class="post-id">
          <div class="a">${p.author} ${badge}</div>
          <div class="b">${p.time}</div>
        </div>
        <button class="post-more" data-act="postmenu" data-i="${i}" aria-label="More">${icon("more")}</button>
      </div>
      <div class="post-body">
        <p class="title">${p.title}</p>
        <p class="txt ${clamp}">${p.body}${clamp ? `<span class="link" data-act="expand" data-i="${i}"> Read more</span>` : ""}</p>
        ${!clamp && p.body.length > 140 ? `<span class="link" data-act="collapse" data-i="${i}">Show less</span>` : ""}
      </div>
      ${mediaBlock}
      <div class="post-foot">
        <button class="react ${p.liked ? "liked" : ""}" data-act="like" data-i="${i}">${icon("heart")} <span>${p.likes}</span></button>
        <button class="react" data-act="comments" data-i="${i}">${icon("comment")} <span>${p.comments}</span></button>
        <button class="react" style="margin-left:auto" data-act="share" data-i="${i}">${icon("share")}</button>
      </div>
    </article>`;
  }).join("");

  const compose = `
    <div class="composebar" data-act="compose">
      <div class="avatar" style="width:38px;height:38px;font-size:14px;">${S.user}</div>
      <span class="ph">Share something with your society…</span>
      <span class="send">${icon("edit")} Post</span>
    </div>`;

  return `
  <section class="screen" id="screen-home">
    ${headerSociety()}
    <div class="scroll">
      <div class="section-head">
        <div>
          <h2>Quick Actions</h2>
          <p class="sub mt0">Do more in one tap</p>
        </div>
        <button class="see-all" data-act="customise">Customise ${icon("chevR")}</button>
      </div>
      <div class="qa-grid">${qa}</div>
      ${pulse}
      <div class="section-head" style="padding-top:24px;">
        <div>
          <h2>Community Posts</h2>
          <p class="sub mt0">Updates from your society</p>
        </div>
      </div>
      ${compose}
      ${posts}
      <div style="height:12px"></div>
    </div>
  </section>`;
}

/* ============================================================
   SCREEN: HOMES
   ============================================================ */
function filteredHomes() {
  const q = state.homeQuery.trim().toLowerCase();
  return DATA.homes.listings.filter(l =>
    l.kind === state.homeSeg &&
    (!q || (l.name + " " + l.loc + " " + l.spec).toLowerCase().includes(q))
  );
}

function renderHomes() {
  const listings = filteredHomes();
  const cards = listings.length ? listings.map((l, i) => `
    <button class="prop" id="home-${DATA.homes.listings.indexOf(l)}" data-act="home" data-i="${DATA.homes.listings.indexOf(l)}">
      <div class="prop-img">
        ${media(l.img, "media-ph")}
        <span class="chip">${icon("pin")} Verified</span>
      </div>
      <div class="prop-b">
        <div class="n">${l.name}</div>
        <div class="loc">${l.loc}</div>
        <div class="spec">${l.spec}</div>
        <div class="price">${l.price}<small>${l.per}</small></div>
      </div>
    </button>`).join("")
    : `<div class="wrap"><div class="empty">No ${state.homeSeg} listings match “${state.homeQuery}”. Try clearing the search.</div></div>`;

  return `
  <section class="screen" id="screen-homes">
    ${headerTitle("Homes", "Rent or buy within your society", "homes")}
    <div class="scroll">
      <div class="section-head" style="padding-bottom:6px;">
        <div>
          <h2>Find a home</h2>
          <p class="sub mt0">Verified residents, no brokers</p>
        </div>
      </div>
      <div class="search-card">
        <div class="seg" id="homeSeg">
          <button class="${state.homeSeg === "rent" ? "on" : ""}" data-act="seg" data-seg="rent">Rent</button>
          <button class="${state.homeSeg === "buy" ? "on" : ""}" data-act="seg" data-seg="buy">Buy</button>
        </div>
        <button class="locrow" data-act="city" style="width:100%;background:none;">${icon("pin")} Finding in <span class="city">${DATA.homes.city}</span> ${icon("chev","chev")}</button>
        <div class="searchfield">
          ${icon("search")}
          <input type="text" id="homeSearch" placeholder="${DATA.homes.placeholder}" aria-label="Search homes" value="${state.homeQuery}" />
          ${state.homeQuery
            ? `<button class="icon-btn" style="width:28px;height:28px" data-act="clear-home-search" aria-label="Clear">${icon("x")}</button>`
            : `<span class="send" style="color:var(--accent)">${icon("sparkle")}</span>`}
        </div>
      </div>

      <div class="section-head">
        <div>
          <h2>From nearby societies</h2>
          <p class="sub mt0">${listings.length} ${state.homeSeg} listing${listings.length === 1 ? "" : "s"} this week</p>
        </div>
        <button class="see-all" data-act="see-all-homes">See all ${icon("chevR")}</button>
      </div>
      <div class="hscroll" id="homeList">${cards}</div>

      <div class="section-head">
        <div>
          <h2>List your place</h2>
          <p class="sub mt0">Reach verified buyers & tenants</p>
        </div>
      </div>
      <div class="wrap">
        <button class="btn btn-primary btn-full" data-act="post-property">${icon("plus")} Post Property</button>
      </div>

      <div class="section-head">
        <div>
          <h2>What residents say</h2>
          <p class="sub mt0">Rated 4.3 by your neighbours</p>
        </div>
      </div>
      <div class="hscroll">
        <div class="prop" style="flex-basis:300px;background:var(--surface);">
          <div class="prop-b" style="padding-top:16px;">
            <div class="flex">
              ${icon("star")}
            </div>
            <div class="n" style="margin-top:10px;">“MyGate has been a revelation in itself. Posting is a breeze with great user workflows.”</div>
            <div class="spec">Mandar G. · Owner, Eldeco Hill Side</div>
          </div>
        </div>
      </div>
      <div style="height:12px"></div>
    </div>
  </section>`;
}

/* ============================================================
   SCREEN: COMMUNITY
   ============================================================ */
function renderCommunity() {
  const visibleActions = state.commExpanded ? DATA.community.actions : DATA.community.actions.slice(0, 9);
  const actions = visibleActions.map(a => `
    <button class="caction" data-act="comm-act" data-i="${DATA.community.actions.indexOf(a)}">
      <span class="caction-ic">
        ${icon(a.ico)}
        ${a.tag ? `<span class="new">${a.tag}</span>` : ""}
        ${a.badge ? `<span class="badge-dot">${a.badge}</span>` : ""}
      </span>
      <span class="caction-l">${a.label}</span>
    </button>`).join("");

  const ann = DATA.community.announcements.map((a, i) => `
    <div class="announce" id="ann-${i}" data-act="ann" data-i="${i}">
      <div class="tag">${a.tag}</div>
      <div class="n">${a.name}</div>
      <div class="d">${a.date}</div>
    </div>`).join("");

  const classes = DATA.community.classes.map((c, i) => `
    <div class="class-card" id="class-${i}" data-act="class" data-i="${i}">
      <div class="class-img">${media(c.img, "media-ph")}</div>
      <div class="class-b">
        <div class="n">${c.name}</div>
        <div class="m">${c.meta}</div>
        <span class="host ${c.joined ? "joined" : ""}">${c.joined ? icon("check") + " Joined" : icon("plus") + " Join class"}</span>
      </div>
    </div>`).join("");

  return `
  <section class="screen" id="screen-community">
    ${headerSociety()}
    <div class="scroll">
      <div class="section-head" style="padding-bottom:4px;">
        <div>
          <h2>Community</h2>
          <p class="sub mt0">${S.name} · ${visibleActions.length} resident services</p>
        </div>
        <button class="see-all" data-act="rate">${icon("star")} 4.3</button>
      </div>

      <div class="pulse" style="margin-top:4px;">
        <div class="pulse-head"><span class="t">Your society</span><button class="see-all" data-act="society-details">Details ${icon("chevR")}</button></div>
        <div class="pulse-grid">
          <div class="pulse-item"><div class="p-k">1838<small>+47 new</small></div><div class="p-l">Residents</div></div>
          <div class="pulse-item"><div class="p-k">118<small>parked</small></div><div class="p-l">Vehicles</div></div>
          <div class="pulse-item"><div class="p-k">4<small>3 vaccinated</small></div><div class="p-l">Pets</div></div>
          <div class="pulse-item"><div class="p-k">22<small>9 on duty</small></div><div class="p-l">Staff</div></div>
        </div>
      </div>

      <div class="section-head">
        <div>
          <h2>Community Actions</h2>
          <p class="sub mt0">Everything your society offers</p>
        </div>
      </div>
      <div class="cactions">${actions}</div>

      <div class="section-head">
        <div>
          <h2>Announcements</h2>
          <p class="sub mt0">From the society office</p>
        </div>
        <button class="see-all" data-act="all-announcements">All ${icon("chevR")}</button>
      </div>
      <div class="wrap">
        ${ann}
      </div>

      <div class="section-head">
        <div>
          <h2>Classes in your society</h2>
          <p class="sub mt0">Learn together, host a session</p>
        </div>
      </div>
      <div class="hscroll">${classes}</div>
      <div style="height:12px"></div>
    </div>
  </section>`;
}

/* ============================================================
   SCREEN: MARKET
   ============================================================ */
function filteredListings() {
  return state.marketCat
    ? DATA.listings.filter(l => l.cat === state.marketCat)
    : DATA.listings;
}

function renderMarket() {
  const cats = DATA.categories.map((c, i) => `
    <button class="cat ${state.marketCat === c.label ? "on" : ""}" data-act="cat" data-i="${i}">
      <span class="cat-ic">${icon(c.ico)}</span>
      <span class="cat-l">${c.label}</span>
    </button>`).join("");

  const listings = filteredListings();
  const cards = listings.length ? listings.map(l => {
    const i = DATA.listings.indexOf(l);
    return `
    <button class="prod" id="prod-${i}" data-act="prod" data-i="${i}">
      <div class="prod-img">
        ${media(l.img, "media-ph")}
        <span class="price-tag">${l.price}</span>
      </div>
      <div class="prod-b">
        <div class="n">${l.name}</div>
        <div class="loc">${l.loc}</div>
      </div>
    </button>`;
  }).join("")
  : `<div class="wrap"><div class="empty">Nothing listed under ${state.marketCat} yet. Tap the category again to clear the filter.</div></div>`;

  const free = DATA.free.map((l, i) => `
    <button class="prod" id="free-${i}" data-act="free" data-i="${i}">
      <div class="prod-img">
        ${media(l.img, "media-ph")}
        <span class="free">FREE</span>
      </div>
      <div class="prod-b">
        <div class="n">${l.name}</div>
        <div class="loc">${l.loc}</div>
      </div>
    </button>`).join("");

  return `
  <section class="screen" id="screen-market">
    ${headerTitle("Buy & Sell", "Neighbours only · verified listings", "market")}
    <div class="scroll">
      <div class="section-head" style="padding-bottom:4px;">
        <div>
          <h2>Categories</h2>
          <p class="sub mt0">${state.marketCat ? "Filtered — tap again to clear" : "What are you looking for?"}</p>
        </div>
      </div>
      <div class="cat-grid">${cats}</div>

      <div class="section-head">
        <div>
          <h2>Recent listings</h2>
          <p class="sub mt0">${state.marketCat ? `${listings.length} in ${state.marketCat}` : `${listings.length} fresh this week`}</p>
        </div>
        <button class="see-all" data-act="see-all-listings">See all ${icon("chevR")}</button>
      </div>
      <div class="hscroll" id="marketList">${cards}</div>
      <div class="wrap" style="margin-top:8px;">
        <button class="btn btn-primary btn-full" data-act="new-listing">${icon("plus")} New Listing</button>
      </div>

      <div class="section-head">
        <div>
          <h2>Free listings</h2>
          <p class="sub mt0">Giveaways & free events in your area</p>
        </div>
      </div>
      <div class="hscroll">${free}</div>
      <div style="height:12px"></div>
    </div>
  </section>`;
}

/* ============================================================
   SCREEN: STORES
   ============================================================ */
function renderCartbar() {
  const n = DATA.cartCount(), t = DATA.inr(DATA.cartTotal());
  if (!n) return "";
  return `
  <button class="cartbar" data-act="cart-open">
    <span class="cb-ic">${icon("store")}</span>
    <div class="cb-t">
      <div class="a">${n} item${n === 1 ? "" : "s"} in cart</div>
      <div class="b">${t}</div>
    </div>
    <span class="cb-view">View</span>
  </button>`;
}

function renderStores() {
  const promise = DATA.stores.promise.map(p => `
    <div class="promise-item">
      ${icon(p.ico)}
      <div class="n">${p.name}</div>
      <div class="m">${p.meta}</div>
    </div>`).join("");

  const svcs = DATA.stores.services.map((s, i) => `
    <div class="svc" id="svc-${i}" data-act="svc" data-i="${i}">
      <div class="svc-img">${media(s.img, "media-ph")}</div>
      <div class="svc-b">
        <div class="n">${s.name}</div>
        <div class="m">${s.meta}</div>
        <span class="cta">${s.cta} ${icon("chevR")}</span>
      </div>
    </div>`).join("");

  return `
  <section class="screen" id="screen-stores">
    ${headerTitle("Stores", "Services you can rely on", "stores")}
    <div class="scroll">
      <div class="section-head" style="padding-bottom:5px;">
        <div>
          <h2>Mygate Promise</h2>
          <p class="sub mt0">Verified residents, no brokers</p>
        </div>
      </div>
      <div class="promise">
        <div class="brandrow">
          <span class="mark">MG</span>
          <div><div class="nm">mygate</div><div class="pr">Promise</div></div>
        </div>
        <div class="rule"></div>
        <div class="promise-grid">${promise}</div>
      </div>

      <div class="section-head">
        <div>
          <h2>Popular services</h2>
          <p class="sub mt0">Sorted by demand</p>
        </div>
      </div>
      <div class="hscroll">${svcs}</div>

      <div class="section-head">
        <div>
          <h2>Help & support</h2>
          <p class="sub mt0">We reply within the hour</p>
        </div>
      </div>
      <div class="wrap">
        <button class="btn btn-ghost btn-full" data-act="contact">${icon("headset")} Write / call for any support</button>
      </div>

      ${renderCartbar()}
      <div style="height:12px"></div>
    </div>
  </section>`;
}

/* ============================================================
   NAV
   ============================================================ */
const NAV = [
  { key: "home", label: "Home", ico: "home", badge: 0 },
  { key: "homes", label: "Homes", ico: "building", badge: 0 },
  { key: "community", label: "Community", ico: "people", badge: 3 },
  { key: "market", label: "Buy & Sell", ico: "tag", badge: 0 },
  { key: "stores", label: "Stores", ico: "store", badge: 0 }
];

function renderNav(active) {
  return `<nav class="nav" role="tablist">
    ${NAV.map(n => `
      <button class="nav-item ${n.key === active ? "on" : ""}" data-tab="${n.key}" role="tab" aria-selected="${n.key===active}">
        ${icon(n.ico)}
        ${n.badge ? `<span class="nbadge">${n.badge}</span>` : ""}
        <span class="n">${n.label}</span>
      </button>`).join("")}
  </nav>`;
}

/* ============================================================
   MOUNT & NAVIGATION
   ============================================================ */
const app = document.getElementById("app");

function mount() {
  app.innerHTML = `
    ${renderHome()}
    ${renderHomes()}
    ${renderCommunity()}
    ${renderMarket()}
    ${renderStores()}
    <div id="navslot"></div>
  `;
  /* overlay nodes live inside #app — put them back after the re-render */
  [backdrop, sheet, drawerBackdrop, drawer, toast].forEach(n => app.appendChild(n));
  const hash = location.hash || "#home";
  const initial = hash.split("?")[0].replace("#", "");
  switchTab(initial);
  window.addEventListener("hashchange", () => switchTab((location.hash || "").split("?")[0].replace("#", "")));
}

/* re-render one screen in place, preserving its scroll position */
function refreshScreen(key) {
  const el = document.getElementById("screen-" + key);
  if (!el) return;
  const renderers = { home: renderHome, homes: renderHomes, community: renderCommunity, market: renderMarket, stores: renderStores };
  const sc = el.querySelector(".scroll");
  const scrollTop = sc ? sc.scrollTop : 0;
  const wasOn = el.classList.contains("on");
  el.outerHTML = renderers[key]();
  const next = document.getElementById("screen-" + key);
  if (wasOn) next.classList.add("on");
  const nsc = next.querySelector(".scroll");
  if (nsc) nsc.scrollTop = scrollTop;
}

function switchTab(key) {
  if (!document.getElementById("screen-" + key)) key = "home";
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("on"));
  const target = document.getElementById("screen-" + key);
  if (target) target.classList.add("on");
  const nav = renderNav(key);
  document.getElementById("navslot").innerHTML = nav;
  target.querySelector(".scroll")?.scrollTo(0, 0);
  history.replaceState(null, "", "#" + key);
}

/* ============================================================
   SHEET, DRAWER, TOAST
   ============================================================ */
const sheet = document.getElementById("sheet");
const sheetBody = document.getElementById("sheetBody");
const backdrop = document.getElementById("sheetBackdrop");
const drawer = document.getElementById("drawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const toast = document.getElementById("toast");

function openSheet(html) {
  closeDrawer();
  sheetBody.innerHTML = html;
  sheet.hidden = false;
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeSheet() {
  sheet.hidden = true;
  backdrop.hidden = true;
  document.body.style.overflow = "";
}
function openDrawer(html) {
  closeSheet();
  drawer.innerHTML = html;
  drawer.hidden = false;
  drawerBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeDrawer() {
  drawer.hidden = true;
  drawerBackdrop.hidden = true;
  if (sheet.hidden) document.body.style.overflow = "";
}
backdrop.addEventListener("click", closeSheet);
drawerBackdrop.addEventListener("click", closeDrawer);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeSheet(); closeDrawer(); }
});

function showToast(msg) {
  toast.textContent = msg;
  toast.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => (toast.hidden = true), 2200);
}

/* flash-highlight a card (used after search jumps) */
function flash(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ block: "center", behavior: "smooth" });
  el.classList.add("flash");
  setTimeout(() => el.classList.remove("flash"), 1400);
}

/* ============================================================
   SHEET BUILDERS
   ============================================================ */
function sheetHead(title, sub) {
  return `
    <div class="section-head" style="padding:4px 0 8px;">
      <div>
        <h2 style="font-size:20px;">${title}</h2>
        <p class="sub mt0">${sub}</p>
      </div>
      <button class="icon-btn" data-act="close-sheet" aria-label="Close">${icon("x")}</button>
    </div>`;
}

/* ---- compose a new post (adds to the feed for real) ---- */
function composeSheet() {
  openSheet(`
    ${sheetHead("New post", `Share with ${S.name}`)}
    <label class="form-label">What role is this?</label>
    <div class="chips-row" id="postRole">
      <button class="chip-opt on" data-act="chip">Advertisement</button>
      <button class="chip-opt" data-act="chip">Notice</button>
      <button class="chip-opt" data-act="chip">Event</button>
    </div>
    <label class="form-label">Title</label>
    <input class="form-input" id="postTitle" placeholder="Give it a clear title" />
    <label class="form-label">Details</label>
    <textarea class="form-textarea" id="postBody" placeholder="Describe the post for your neighbours…"></textarea>
    <button class="btn btn-primary btn-full" data-act="publish-post" style="margin-top:18px;">${icon("send")} Publish post</button>
  `);
}

/* ---- like / comments / share ---- */
function commentsSheet(i) {
  const p = DATA.posts[i];
  const rows = p.commentsList.map(c => `
    <div class="comment-row">
      <div class="pf pf-resident" style="width:34px;height:34px;font-size:13px;border-radius:11px;">${c.a[0]}</div>
      <div><div class="ca">${c.a}</div><div class="ct">${c.t}</div></div>
    </div>`).join("");
  openSheet(`
    ${sheetHead(`Comments · ${p.comments}`, p.title)}
    <div class="comment-list">${rows || `<p class="muted" style="font-size:14px;">No comments yet — be the first.</p>`}</div>
    <div class="searchfield" style="margin-top:14px;">
      <input type="text" id="commentInput" placeholder="Write a comment…" aria-label="Comment" />
      <button class="icon-btn" style="width:32px;height:32px" data-act="add-comment" data-i="${i}" aria-label="Send">${icon("send")}</button>
    </div>
  `);
  const inp = document.getElementById("commentInput");
  inp.focus();
  inp.addEventListener("keydown", e => { if (e.key === "Enter") addComment(i); });
}
function addComment(i) {
  const inp = document.getElementById("commentInput");
  const t = inp.value.trim();
  if (!t) return;
  DATA.posts[i].commentsList.push({ a: "You", t });
  DATA.posts[i].comments++;
  commentsSheet(i);
  refreshScreen("home");
}

/* ---- generic feature sheet (quick actions etc.) ---- */
function featureSheet(what) {
  openSheet(`
    ${sheetHead(what, "Frontend-only sample · no backend")}
    <p class="muted" style="font-size:14px;line-height:1.6;margin:0 0 8px;">
      This is where the <strong>${what}</strong> flow lives. Since this is a UI-only
      prototype it renders its own screen with dummy data — wire the real action here later.
    </p>
    <div class="pulse" style="margin:12px 0;">
      <div class="pulse-grid">
        <div class="pulse-item"><div class="p-k">12<small>today</small></div><div class="p-l">Requests</div></div>
        <div class="pulse-item"><div class="p-k">3<small>open</small></div><div class="p-l">Pending</div></div>
      </div>
    </div>
    <button class="btn btn-primary btn-full" data-act="sample-confirm" data-label="${what}">${icon("check")} Confirm</button>
  `);
}

/* ---- Payments (rich flow) ---- */
function paymentsSheet() {
  openSheet(`
    ${sheetHead("Society Charges", "October maintenance · Flat C1-18")}
    <div class="due-card">
      <div class="dc-l">Due on 28 Oct</div>
      <div class="dc-a">₹3,490</div>
      <div class="dc-r">₹0 overdue · all previous bills paid</div>
    </div>
    <div class="bill-row"><span>Maintenance</span><b>₹2,400</b></div>
    <div class="bill-row"><span>Sinking fund</span><b>₹600</b></div>
    <div class="bill-row"><span>Parking</span><b>₹340</b></div>
    <div class="bill-row"><span>Event fund</span><b>₹150</b></div>
    <button class="btn btn-primary btn-full" data-act="pay-now" style="margin-top:16px;">${icon("wallet")} Pay ₹3,490</button>
  `);
}

/* ---- Helpdesk (form flow) ---- */
function helpdeskSheet() {
  openSheet(`
    ${sheetHead("Helpdesk", "Raise a ticket with the society office")}
    <label class="form-label">Category</label>
    <div class="chips-row" id="ticketCat">
      <button class="chip-opt on" data-act="chip">Plumbing</button>
      <button class="chip-opt" data-act="chip">Electrical</button>
      <button class="chip-opt" data-act="chip">Housekeeping</button>
      <button class="chip-opt" data-act="chip">Other</button>
    </div>
    <label class="form-label">Describe the issue</label>
    <textarea class="form-textarea" id="ticketBody" placeholder="e.g. Kitchen tap is leaking since morning…"></textarea>
    <button class="btn btn-primary btn-full" data-act="raise-ticket" style="margin-top:16px;">${icon("send")} Raise ticket</button>
  `);
}

/* ---- Amenities (booking flow) ---- */
function amenitiesSheet() {
  openSheet(`
    ${sheetHead("Amenities", "Book a slot · Flat C1-18")}
    <label class="form-label">Facility</label>
    <div class="chips-row" id="amenFac">
      <button class="chip-opt on" data-act="chip">Tennis Court</button>
      <button class="chip-opt" data-act="chip">Clubhouse</button>
      <button class="chip-opt" data-act="chip">Swimming Pool</button>
    </div>
    <label class="form-label">Slot · today</label>
    <div class="chips-row" id="amenSlot">
      <button class="chip-opt" data-act="chip">6–7 PM</button>
      <button class="chip-opt on" data-act="chip">7–8 PM</button>
      <button class="chip-opt" data-act="chip">8–9 PM</button>
    </div>
    <button class="btn btn-primary btn-full" data-act="book-amenity" style="margin-top:16px;">${icon("check")} Book slot</button>
  `);
}

/* ---- notifications ---- */
function notifSheet() {
  const rows = DATA.notifications.map(n => `
    <div class="notif-row">
      <span class="notif-ic">${icon(n.ico)}</span>
      <div><div class="a">${n.t}</div><div class="d">${n.d}</div></div>
    </div>`).join("");
  openSheet(`
    ${sheetHead("Notifications", DATA.notifications.length + " recent updates")}
    ${rows}
    ${S.notifCount ? `<button class="btn btn-soft btn-full" data-act="notifs-read" style="margin-top:14px;">${icon("check")} Mark all as read</button>` : `<p class="muted" style="font-size:13.5px;margin:14px 0 0;">All caught up — nothing unread.</p>`}
  `);
}

/* ---- profile ---- */
function profileSheet() {
  openSheet(`
    ${sheetHead("Profile", "Signed in as resident")}
    <div class="profile-card">
      <div class="avatar" style="width:52px;height:52px;font-size:20px;">${S.user}</div>
      <div>
        <div class="a">${S.profileName}</div>
        <div class="b">Owner · ${S.sub}</div>
      </div>
    </div>
    <div class="sheet-list">
      <button class="sheet-row" data-act="row" data-label="My Flats">${icon("building")} My Flats ${icon("chevR","chev-r")}</button>
      <button class="sheet-row" data-act="row" data-label="Family members">${icon("people")} Family members ${icon("chevR","chev-r")}</button>
      <button class="sheet-row" data-act="row" data-label="My vehicles">${icon("car")} My vehicles ${icon("chevR","chev-r")}</button>
      <button class="sheet-row" data-act="row" data-label="Settings">${icon("settings")} Settings ${icon("chevR","chev-r")}</button>
      <button class="sheet-row danger" data-act="row" data-label="Logged out">${icon("logout")} Log out</button>
    </div>
  `);
}

/* ---- society switcher ---- */
function societySheet() {
  const rows = DATA.societies.map((s, i) => `
    <button class="sheet-row ${s.name === S.name ? "on" : ""}" data-act="society-pick" data-i="${i}">
      ${icon("building")} <div style="text-align:left;flex:1;"><div class="a">${s.name}</div><div class="d">${s.sub}</div></div>
      ${s.name === S.name ? icon("check") : ""}
    </button>`).join("");
  openSheet(`${sheetHead("Switch society", "Your communities")}${rows}`);
}

/* ---- search (per-tab live results) ---- */
function searchSheet(tab) {
  const titles = { home: "Search posts", homes: "Search homes", community: "Search community", market: "Search listings", stores: "Search services" };
  const phs = { home: "Try “water”, “carpenter”, “Diwali”…", homes: "Try “2 BHK”…", community: "Try “yoga”, “meter”…", market: "Try “sofa”, “bike”…", stores: "Try “lock”, “shifting”…" };
  openSheet(`
    ${sheetHead(titles[tab] || "Search", "Live results, frontend only")}
    <div class="searchfield">
      ${icon("search")}
      <input type="text" id="sheetSearch" placeholder="${phs[tab]}" aria-label="Search" />
    </div>
    <div class="sheet-list" id="sheetSearchResults" style="margin-top:12px;"></div>
  `);
  const inp = document.getElementById("sheetSearch");
  inp.focus();
  inp.addEventListener("input", () => renderSearchResults(tab, inp.value));
  renderSearchResults(tab, "");
}

function renderSearchResults(tab, q) {
  const out = document.getElementById("sheetSearchResults");
  if (!out) return;
  q = q.trim().toLowerCase();
  const all = searchSources(tab).filter(r => !q || (r.t + " " + r.s).toLowerCase().includes(q));
  out.innerHTML = all.length
    ? all.map(r => `<button class="sheet-row" data-act="search-jump" data-tab="${r.tab}" data-id="${r.id}">${r.ico ? icon(r.ico) : icon("search")} <div style="text-align:left;flex:1;"><div class="a">${r.t}</div><div class="d">${r.s}</div></div> ${icon("chevR","chev-r")}</button>`).join("")
    : `<p class="muted" style="font-size:14px;padding:6px 2px;">No results for “${q}”.</p>`;
}

function searchSources(tab) {
  switch (tab) {
    case "homes":     return DATA.homes.listings.map((l, i) => ({ t: l.name, s: `${l.spec} · ${l.price}${l.per}`, id: `home-${i}`, tab: "homes", ico: "building" }));
    case "community": return [
        ...DATA.community.announcements.map((a, i) => ({ t: a.name, s: `${a.tag} · ${a.date}`, id: `ann-${i}`, tab: "community", ico: "notice" })),
        ...DATA.community.classes.map((c, i) => ({ t: c.name, s: c.meta, id: `class-${i}`, tab: "community", ico: "yoga" }))
      ];
    case "market":    return DATA.listings.map((l, i) => ({ t: l.name, s: `${l.cat} · ${l.price} · ${l.loc}`, id: `prod-${i}`, tab: "market", ico: "tag" }));
    case "stores":    return DATA.stores.services.map((s, i) => ({ t: s.name, s: s.meta, id: `svc-${i}`, tab: "stores", ico: "store" }));
    default:          return DATA.posts.map((p, i) => ({ t: p.title, s: `${p.author} · ${p.time}`, id: `post-${i}`, tab: "home", ico: "comment" }));
  }
}

/* ---- menu drawer ---- */
function menuDrawer() {
  const links = [
    { l: "Payments", ico: "wallet" }, { l: "Helpdesk", ico: "headset" }, { l: "Amenities", ico: "courts" },
    { l: "Notice Board", ico: "notice" }, { l: "Society Charges", ico: "wallet" },
    { l: "Documents", ico: "idcard" }, { l: "Emergency Contacts", ico: "shield" }
  ];
  openDrawer(`
    <div class="drawer-head">
      <div class="avatar" style="width:46px;height:46px;font-size:18px;">${S.user}</div>
      <div>
        <div class="a">${S.profileName}</div>
        <div class="b">${S.name}</div>
      </div>
      <button class="icon-btn" data-act="close-drawer" aria-label="Close">${icon("x")}</button>
    </div>
    <div class="drawer-list">
      ${links.map(l => `<button class="drawer-row" data-act="drawer-link" data-label="${l.l}">${icon(l.ico)} ${l.l} ${icon("chevR","chev-r")}</button>`).join("")}
    </div>
    <div class="drawer-foot">
      <span class="muted" style="font-size:12px;">${S.plan}</span>
      <button class="drawer-row" data-act="drawer-link" data-label="Logged out">${icon("logout")} Log out</button>
    </div>
  `);
}

/* ---- home listing detail ---- */
function homeDetailSheet(i) {
  const l = DATA.homes.listings[i];
  openSheet(`
    <div class="sheet-hero" style="background:${l.img.bg}">${icon(l.img.ico)}</div>
    ${sheetHead(l.name, l.loc)}
    <div class="spec-grid">
      <div class="spec-cell"><b>${l.spec.split("·")[0].trim()}</b><span>Area</span></div>
      <div class="spec-cell"><b>${l.spec.includes("Fully") ? "Full" : l.spec.includes("Semi") ? "Semi" : "New"}</b><span>Status</span></div>
      <div class="spec-cell"><b>${l.price}<small>${l.per}</small></b><span>${l.kind === "rent" ? "Rent" : "Price"}</span></div>
    </div>
    <p class="muted" style="font-size:14px;line-height:1.6;">
      Verified owner listing inside ${S.name}. No brokers — messages go directly to the resident.
    </p>
    <div class="btn-row">
      <button class="btn btn-ghost" data-act="row" data-label="Owner contacted">${icon("headset")} Contact owner</button>
      <button class="btn btn-primary" data-act="row" data-label="Visit requested — owner will confirm">${icon("calendar")} Request visit</button>
    </div>
  `);
}

/* ---- market listing detail ---- */
function prodDetailSheet(i, freeMode) {
  const l = freeMode ? { name: DATA.free[i].name, loc: DATA.free[i].loc, price: "Free", img: DATA.free[i].img, seller: "Neighbour giveaway" }
                     : DATA.listings[i];
  openSheet(`
    <div class="sheet-hero" style="background:${l.img.bg}">${icon(l.img.ico)}</div>
    ${sheetHead(l.name, l.loc)}
    <div class="price-line">${l.price}${freeMode ? "" : `<small> · ${l.cat}</small>`}</div>
    <div class="seller-row">
      <div class="pf pf-resident" style="width:38px;height:38px;border-radius:12px;">${(l.seller || "N")[0]}</div>
      <div><div class="a">${l.seller || "Society giveaway"}</div><div class="d">Verified resident · replies in ~1 hr</div></div>
    </div>
    <div class="btn-row">
      <button class="btn btn-ghost" data-act="row" data-label="Message sent to seller">${icon("comment")} Message</button>
      ${freeMode
        ? `<button class="btn btn-primary" data-act="claim-free" data-i="${i}">${icon("heart")} Claim for free</button>`
        : `<button class="btn btn-primary" data-act="cart-add" data-i="${i}">${icon("store")} Add to cart</button>`}
    </div>
  `);
}

/* ---- service detail ---- */
function svcDetailSheet(i) {
  const s = DATA.stores.services[i];
  const priceLine = s.price === 0 ? "Free demo" : DATA.inr(s.price);
  openSheet(`
    <div class="sheet-hero" style="background:${s.img.bg}">${icon(s.img.ico)}</div>
    ${sheetHead(s.name, s.meta)}
    <div class="price-line">${priceLine}</div>
    <div class="promise" style="margin:4px 0 0;">
      <div class="promise-grid">
        <div class="promise-item">${icon("check")}<div class="n" style="margin:8px 0 2px;">Verified pro</div><div class="m">Background-checked technician</div></div>
        <div class="promise-item">${icon("clock")}<div class="n" style="margin:8px 0 2px;">On-time</div><div class="m">60-minute response window</div></div>
      </div>
    </div>
    <div class="btn-row">
      ${s.price === 0
        ? `<button class="btn btn-primary" data-act="book-demo" data-i="${i}" style="width:100%;">${icon("calendar")} Book demo</button>`
        : `<button class="btn btn-primary" data-act="cart-add-svc" data-i="${i}" style="width:100%;">${icon("store")} Add to cart · ${priceLine}</button>`}
    </div>
  `);
}

/* ---- cart ---- */
function cartSheet() {
  const lines = DATA.stores.cart.lines;
  const rows = lines.map((l, i) => `
    <div class="cart-row">
      <span class="cart-ic" style="background:${l.img.bg}">${icon(l.img.ico)}</span>
      <div class="cart-info"><div class="a">${l.name}</div><div class="b">${DATA.inr(l.price)}</div></div>
      <div class="qty">
        <button class="qty-btn" data-act="cart-dec" data-i="${i}" aria-label="Decrease">−</button>
        <span>${l.qty}</span>
        <button class="qty-btn" data-act="cart-inc" data-i="${i}" aria-label="Increase">+</button>
      </div>
      <button class="icon-btn" style="width:30px;height:30px" data-act="cart-rm" data-i="${i}" aria-label="Remove">${icon("trash")}</button>
    </div>`).join("");
  openSheet(`
    ${sheetHead("Your cart", `${DATA.cartCount()} item${DATA.cartCount()===1?"":"s"} · services only`)}
    <div class="cart-list">${rows || `<p class="muted" style="font-size:14px;">Your cart is empty. Add a service from Popular services.</p>`}</div>
    ${lines.length ? `
      <div class="bill-row" style="margin-top:14px;"><span>Subtotal</span><b>${DATA.inr(DATA.cartTotal())}</b></div>
      <div class="bill-row"><span>Service fee</span><b>Included</b></div>
      <button class="btn btn-primary btn-full" data-act="cart-checkout" style="margin-top:14px;">${icon("check")} Checkout · ${DATA.inr(DATA.cartTotal())}</button>` : ""}
  `);
}

/* ---- post property (adds to Homes for real) ---- */
function postPropertySheet() {
  openSheet(`
    ${sheetHead("Post Property", "Visible to verified neighbours only")}
    <div class="seg" id="propKind" style="margin:0 0 4px;">
      <button class="on" data-act="chip">Rent</button>
      <button data-act="chip">Buy</button>
    </div>
    <label class="form-label">Title</label>
    <input class="form-input" id="propTitle" placeholder="e.g. 2 BHK, Eldeco Hill Side" />
    <label class="form-label">Price</label>
    <input class="form-input" id="propPrice" placeholder="e.g. ₹12,000" />
    <label class="form-label">Details</label>
    <input class="form-input" id="propSpec" placeholder="e.g. 950 sqft · Fully Furnished" />
    <button class="btn btn-primary btn-full" data-act="publish-property" style="margin-top:18px;">${icon("send")} Publish listing</button>
  `);
}

/* ---- new market listing (adds to Buy & Sell for real) ---- */
function newListingSheet() {
  openSheet(`
    ${sheetHead("New Listing", "Sell to verified neighbours")}
    <label class="form-label">What are you selling?</label>
    <input class="form-input" id="listTitle" placeholder="e.g. Study Table" />
    <label class="form-label">Price</label>
    <input class="form-input" id="listPrice" placeholder="e.g. ₹4,500" />
    <label class="form-label">Category</label>
    <div class="chips-row" id="listCat">
      ${DATA.categories.map((c, i) => `<button class="chip-opt ${i === 0 ? "on" : ""}" data-act="chip" data-cat="${c.label}">${c.label}</button>`).join("")}
    </div>
    <button class="btn btn-primary btn-full" data-act="publish-listing" style="margin-top:18px;">${icon("send")} Publish listing</button>
  `);
}

/* ---- customise quick actions ---- */
function customiseSheet() {
  const rows = DATA.quickActions.filter(a => a.label !== "See all").map((a, i) => `
    <button class="sheet-row" data-act="qa-toggle" data-i="${DATA.quickActions.indexOf(a)}">
      ${icon(a.ico)} ${a.label}
      <span class="switch ${a.hidden ? "" : "on"}"></span>
    </button>`).join("");
  openSheet(`
    ${sheetHead("Customise", "Choose up to 8 quick actions")}
    <div class="sheet-list">${rows}</div>
    <button class="btn btn-primary btn-full" data-act="close-sheet" style="margin-top:14px;">${icon("check")} Done</button>
  `);
}

/* ---- announcements & classes ---- */
function annSheet(i) {
  const a = DATA.community.announcements[i];
  openSheet(`
    ${sheetHead(a.name, `${a.tag} · ${a.date}`)}
    <p class="muted" style="font-size:14.5px;line-height:1.65;margin:0 0 6px;">${a.body}</p>
    <button class="btn btn-soft btn-full" data-act="row" data-label="Reminder set">${icon("bell")} Remind me</button>
  `);
}

function classSheet(i) {
  const c = DATA.community.classes[i];
  openSheet(`
    <div class="sheet-hero" style="background:${c.img.bg}">${icon(c.img.ico)}</div>
    ${sheetHead(c.name, c.meta)}
    <p class="muted" style="font-size:14px;line-height:1.6;">
      Hosted by residents of ${S.name}. Sessions happen at the community hall — just show up, no fees.
    </p>
    <button class="btn ${c.joined ? "btn-ghost" : "btn-primary"} btn-full" data-act="join-class" data-i="${i}">
      ${c.joined ? icon("check") + " Joined — tap to leave" : icon("plus") + " Join class"}
    </button>
  `);
}

/* ============================================================
   CLICK DISPATCH
   ============================================================ */
document.addEventListener("click", (e) => {
  const navItem = e.target.closest(".nav-item");
  if (navItem) return switchTab(navItem.dataset.tab);

  const el = e.target.closest("[data-act]");
  if (!el) return;
  const act = el.dataset.act;
  const i = el.dataset.i !== undefined ? +el.dataset.i : undefined;

  switch (act) {
    /* --- chrome --- */
    case "tab":          return switchTab(el.dataset.tab);
    case "close-sheet":  return closeSheet();
    case "close-drawer": return closeDrawer();
    case "menu":         return menuDrawer();
    case "bell":         return notifSheet();
    case "profile":      return profileSheet();
    case "search":       return searchSheet(el.dataset.tab);
    case "grid-menu":    return showToast("Layout options");
    case "society-switch": return societySheet();
    case "society-pick": {
      const s = DATA.societies[i];
      S.name = s.name; S.sub = s.sub; S.user = s.name[0];
      closeSheet(); refreshScreen("home"); refreshScreen("community");
      return showToast("Switched to " + s.name);
    }

    /* --- quick actions --- */
    case "qa": {
      const a = DATA.quickActions[i];
      if (a.label === "See all") { state.qaExpanded = !state.qaExpanded; return refreshScreen("home"); }
      if (a.label === "Payments")   return paymentsSheet();
      if (a.label === "Helpdesk")   return helpdeskSheet();
      if (a.label === "Amenities")  return amenitiesSheet();
      return featureSheet(a.label);
    }
    case "customise":   return customiseSheet();
    case "qa-toggle": {
      const a = DATA.quickActions[i];
      if (a && a.label !== "See all") a.hidden = !a.hidden;
      return customiseSheet();
    }

    /* --- posts --- */
    case "open-post": {
      const p = DATA.posts[i];
      openSheet(`
        ${sheetHead(p.title, `${p.author} · ${p.time}`)}
        <p style="font-size:15px;line-height:1.65;color:var(--ink-2);margin:0 0 14px;">${p.body}</p>
        ${p.media ? `<div class="post-media" style="margin:0 0 14px;">${media(p.media, "media-ph")}</div>` : ""}
        <div class="post-foot" style="margin-top:4px;">
          <button class="react ${p.liked ? "liked" : ""}" data-act="like" data-i="${i}">${icon("heart")} <span>${p.likes}</span></button>
          <button class="react" data-act="comments" data-i="${i}">${icon("comment")} <span>${p.comments}</span></button>
          <button class="react" style="margin-left:auto" data-act="share" data-i="${i}">${icon("share")}</button>
        </div>
      `);
      return;
    }
    case "expand": {
      DATA.posts[i].expanded = true;
      return refreshScreen("home");
    }
    case "collapse": {
      DATA.posts[i].expanded = false;
      return refreshScreen("home");
    }
    case "like": {
      const p = DATA.posts[i];
      p.liked = !p.liked;
      p.likes += p.liked ? 1 : -1;
      el.classList.toggle("liked", p.liked);
      el.querySelector("span").textContent = p.likes;
      refreshScreen("home");
      return;
    }
    case "comments": return commentsSheet(i);
    case "add-comment": return addComment(i);
    case "share":   return showToast("Link copied — share with your neighbours");
    case "postmenu": {
      openSheet(`
        ${sheetHead("Post options", DATA.posts[i].title)}
        <div class="sheet-list">
          <button class="sheet-row" data-act="row" data-label="Post saved">${icon("star")} Save post</button>
          <button class="sheet-row" data-act="row" data-label="Link copied">${icon("share")} Copy link</button>
          <button class="sheet-row" data-act="row" data-label="${DATA.posts[i].author} muted">${icon("bell")} Mute author</button>
          <button class="sheet-row danger" data-act="row" data-label="Report submitted">${icon("notice")} Report post</button>
        </div>`);
      return;
    }
    case "compose":  return composeSheet();
    case "publish-post": {
      const t = document.getElementById("postTitle");
      const b = document.getElementById("postBody");
      if (!t.value.trim()) { t.focus(); return showToast("Add a title first"); }
      DATA.posts.unshift({
        author: "You", role: "resident",
        time: "Just now", title: t.value.trim(),
        body: b.value.trim() || "—", link: false,
        media: null, likes: 0, liked: false, comments: 0, commentsList: []
      });
      closeSheet(); refreshScreen("home");
      return showToast("Posted to your society ✓");
    }
    case "chip": {
      const row = el.closest(".chips-row, .seg");
      if (!row) return;
      row.querySelectorAll(".chip-opt, [data-act='chip']").forEach(c => c.classList.remove("on"));
      el.classList.add("on");
      return;
    }

    /* --- pulse / society --- */
    case "pulse-live":       return showToast("Pulse updates live · dummy data");
    case "society-details":  return featureSheet("Society details");
    case "rate":             return showToast("Thanks! Rating dialog would open here");

    /* --- homes --- */
    case "seg": {
      state.homeSeg = el.dataset.seg;
      return refreshScreen("homes");
    }
    case "clear-home-search": {
      state.homeQuery = "";
      return refreshScreen("homes");
    }
    case "home":        return homeDetailSheet(i);
    case "city":        return showToast("Location picker — Bengaluru (sample)");
    case "see-all-homes": return featureSheet("All homes");
    case "post-property": return postPropertySheet();
    case "publish-property": {
      const t = document.getElementById("propTitle");
      const pr = document.getElementById("propPrice");
      const sp = document.getElementById("propSpec");
      if (!t.value.trim()) { t.focus(); return showToast("Add a title first"); }
      const kind = document.querySelector("#propKind .on")?.textContent.toLowerCase() || "rent";
      DATA.homes.listings.unshift({
        kind, name: t.value.trim(), loc: "Eldeco Hill Side",
        spec: sp.value.trim() || "Contact for details",
        price: pr.value.trim() || "₹—", per: kind === "rent" ? "/m" : "",
        img: { bg: "#E4ECEA", ico: "building" }
      });
      closeSheet(); refreshScreen("homes");
      return showToast("Listing published ✓");
    }

    /* --- community --- */
    case "comm-act": {
      const a = DATA.community.actions[i];
      if (a.label === "View More") { state.commExpanded = true; return refreshScreen("community"); }
      if (a.label === "Helpdesk")        return helpdeskSheet();
      if (a.label === "Amenities")       return amenitiesSheet();
      if (a.label === "Society Charges") return paymentsSheet();
      return featureSheet(a.label);
    }
    case "ann":             return annSheet(i);
    case "all-announcements": return featureSheet("All announcements");
    case "class":           return classSheet(i);
    case "join-class": {
      const c = DATA.community.classes[i];
      c.joined = !c.joined;
      classSheet(i); refreshScreen("community");
      return showToast(c.joined ? "Joined " + c.name + " ✓" : "Left " + c.name);
    }

    /* --- market --- */
    case "cat": {
      const label = DATA.categories[i].label;
      state.marketCat = state.marketCat === label ? null : label;
      return refreshScreen("market");
    }
    case "prod":  return prodDetailSheet(i, false);
    case "free":  return prodDetailSheet(i, true);
    case "claim-free": {
      closeSheet();
      return showToast(DATA.free[i].name + " claimed — check your messages");
    }
    case "see-all-listings": return featureSheet("All listings");
    case "new-listing": return newListingSheet();
    case "publish-listing": {
      const t = document.getElementById("listTitle");
      const pr = document.getElementById("listPrice");
      if (!t.value.trim()) { t.focus(); return showToast("Add a name first"); }
      const cat = document.querySelector("#listCat .on")?.dataset.cat || "Others";
      const num = parseInt(pr.value.replace(/[^\d]/g, ""), 10) || 0;
      DATA.listings.unshift({
        name: t.value.trim(), loc: "Eldeco Hill Side",
        price: num ? DATA.inr(num) : "₹—", num, cat,
        seller: "You · " + S.sub.split("·")[0].trim(),
        img: { bg: "#E7E1D7", ico: "more" }
      });
      closeSheet(); refreshScreen("market");
      return showToast("Listing published ✓");
    }

    /* --- stores & cart --- */
    case "svc":          return svcDetailSheet(i);
    case "book-demo": {
      closeSheet();
      return showToast("Live demo booked — Sat, 11 AM");
    }
    case "cart-add": {
      const l = DATA.listings[i];
      DATA.stores.cart.lines.push({ name: l.name, price: l.num, qty: 1, img: l.img });
      closeSheet(); refreshScreen("stores");
      return showToast(l.name + " added to cart");
    }
    case "cart-add-svc": {
      const s = DATA.stores.services[i];
      DATA.stores.cart.lines.push({ name: s.name, price: s.price, qty: 1, img: s.img });
      closeSheet(); refreshScreen("stores");
      return showToast(s.name + " added to cart");
    }
    case "cart-open":    return cartSheet();
    case "cart-inc": {
      DATA.stores.cart.lines[i].qty++;
      cartSheet(); refreshScreen("stores");
      return;
    }
    case "cart-dec": {
      const l = DATA.stores.cart.lines[i];
      l.qty = Math.max(1, l.qty - 1);
      cartSheet(); refreshScreen("stores");
      return;
    }
    case "cart-rm": {
      DATA.stores.cart.lines.splice(i, 1);
      cartSheet(); refreshScreen("stores");
      return;
    }
    case "cart-checkout": {
      closeSheet();
      DATA.stores.cart.lines = [];
      refreshScreen("stores");
      return showToast("Order placed ✓ — technician assigned");
    }
    case "contact": return helpdeskSheet();
    case "notifs-read": {
      S.notifCount = 0;
      refreshScreen("home");
      refreshScreen("community");
      return notifSheet();
    }

    /* --- payments / tickets / amenities flows --- */
    case "pay-now": {
      el.disabled = true;
      el.textContent = "Processing…";
      setTimeout(() => {
        closeSheet();
        showToast("Payment of ₹3,490 successful ✓");
      }, 900);
      return;
    }
    case "raise-ticket": {
      const b = document.getElementById("ticketBody");
      closeSheet();
      return showToast(b.value.trim() ? "Ticket #1042 raised ✓" : "Ticket #1042 raised ✓");
    }
    case "book-amenity": {
      const f = document.querySelector("#amenFac .on")?.textContent;
      const s = document.querySelector("#amenSlot .on")?.textContent;
      closeSheet();
      return showToast(`${f} booked · today ${s}`);
    }

    /* --- search jump --- */
    case "search-jump": {
      closeSheet();
      switchTab(el.dataset.tab);
      setTimeout(() => flash(el.dataset.id), 60);
      return;
    }

    /* --- misc rows --- */
    case "row": {
      closeSheet();
      return showToast(el.dataset.label || "Done");
    }
    case "drawer-link": {
      closeDrawer();
      if (el.dataset.label === "Payments")  return paymentsSheet();
      if (el.dataset.label === "Helpdesk")  return helpdeskSheet();
      if (el.dataset.label === "Amenities") return amenitiesSheet();
      return showToast(el.dataset.label || "Done");
    }
    case "sample-confirm": {
      closeSheet();
      return showToast((el.dataset.label || "Action") + " — sample action complete");
    }
  }
});

/* delegated inputs */
document.addEventListener("input", (e) => {
  if (e.target.id === "homeSearch") {
    state.homeQuery = e.target.value;
    const list = document.getElementById("homeList");
    if (list) {
      const tmp = document.createElement("div");
      tmp.innerHTML = renderHomes();
      list.innerHTML = tmp.querySelector("#homeList").innerHTML;
      const sub = document.querySelectorAll("#screen-homes .section-head .sub")[1];
      const count = filteredHomes().length;
      if (sub)
        sub.textContent = `${count} ${state.homeSeg} listing${count === 1 ? "" : "s"} this week`;
    }
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.id === "homeSearch") e.target.blur();
});

mount();
