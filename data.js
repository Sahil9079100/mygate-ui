/* ============================================================
   MyGate — dummy data (frontend only)
   Every figure here is sample content to be replaced with real data.
   ============================================================ */

const DATA = {
  society: {
    name: "Eldeco Hill Side",
    sub: "Block C1 · C1-18 · Bengaluru",
    plan: "Free community plan",
    user: "R",
    profileName: "Riya Sharma",
    notifCount: 3
  },

  societies: [
    { name: "Eldeco Hill Side",    sub: "Block C1 · C1-18 · Bengaluru" },
    { name: "Prestige Shantiniketan", sub: "Tower 7 · 7-704 · Bengaluru" },
    { name: "Brigade Residency",   sub: "A Block · A-902 · Bengaluru" }
  ],

  /* ------- Home / Social ------- */
  quickActions: [
    { label: "Payments",   ico: "wallet" },
    { label: "Helpdesk",   ico: "headset" },
    { label: "Amenities",  ico: "courts" },
    { label: "Directory",  ico: "people" },
    { label: "Visitor Pass", ico: "idcard", tag: "New" },
    { label: "Security",   ico: "shield" },
    { label: "Maintenance", ico: "wrench" },
    { label: "See all",    ico: "more" },
    /* revealed by "See all" */
    { label: "Society Charges", ico: "notice" },
    { label: "Events",     ico: "calendar" },
    { label: "Documents",  ico: "idcard" },
    { label: "Lost & Found", ico: "search" }
  ],

  pulse: [
    { k: 1838, l: "Residents", unit: "+47 new" },
    { k: 3410, l: "Visitors",  unit: "today" },
    { k: 4,    l: "Pets",      unit: "vaccinated" },
    { k: 22,   l: "Staff",     unit: "on duty" }
  ],

  posts: [
    {
      author: "Society Office", role: "admin", badge: "Admin",
      time: "Society · 18 Oct", title: "Scheduled Water Tank Cleaning — D2 Block Towers",
      body: "Dear residents, our technical team will be carrying out flush-water tank cleaning on 19/10 between 10:00–14:00. Water supply to the affected towers will be paused for the window. Please store drinking water in advance and keep terrace taps closed during the cleaning window. The maintenance team will flush each tank twice before reconnecting supply.",
      link: true, media: { bg: "#DDEBE5", ico: "tank" }, likes: 42, liked: false, comments: 6,
      commentsList: [
        { a: "Priya S.", t: "Thanks for the heads-up! Will store water in advance." },
        { a: "Arvind K.", t: "Will C2 be affected too or only D2?" },
        { a: "Society Office", t: "Only D2 towers this round, sir." }
      ]
    },
    {
      author: "Notice", role: "notice", badge: "Ad", time: "MyPulse · 2 days ago",
      title: "Hotel-like shine for your bathroom.",
      body: "Bring back the shine with a thorough bathroom deep-cleaning service handled by trained professionals to your doorstep within 60 minutes.",
      link: true, media: null, likes: 18, liked: false, comments: 2,
      commentsList: [ { a: "Meera J.", t: "Booked one last week — great job." } ]
    },
    {
      author: "Rahul Mehta", role: "resident", badge: "Resident",
      time: "C-1806 · 3 hr ago", title: "Looking for a reliable carpenter",
      body: "Need someone to fix my study unit and install a couple of shelves. DM me if you have a contact from within the society.",
      link: false, media: null, likes: 8, liked: false, comments: 5,
      commentsList: [
        { a: "Deepa R.", t: "Try Murali — he did our whole kitchen. B-402 has his number." }
      ]
    },
    {
      author: "Society Office", role: "admin", badge: "Admin",
      time: "Society · 20 Oct", title: "Diwali decoration contest — entries close 27 Oct",
      body: "Entries are open for the block-level Diwali decoration contest. Register your flat or lobby before 27 Oct to take part and win prizes for the best lighting and rangoli. Judging happens on the evening of the 28th — keep your decorations up!",
      link: true, media: { bg: "#F2E3D8", ico: "lamp" }, likes: 56, liked: false, comments: 11,
      commentsList: [
        { a: "Sanjay P.", t: "Registered for A-block lobby!" },
        { a: "Kavya N.", t: "What's the prize? 👀" }
      ]
    }
  ],

  /* ------- Notifications ------- */
  notifications: [
    { t: "Visitor approved",  d: "Ramesh (Delivery) approved at Gate 2 · 2 min ago", ico: "idcard" },
    { t: "Maintenance due",   d: "October maintenance ₹3,490 due on 28 Oct",          ico: "wallet" },
    { t: "New announcement",  d: "Gas pipeline inspection — Tower B, 25 Oct",         ico: "notice" }
  ],

  /* ------- Homes ------- */
  homes: {
    segments: [ { key: "rent", label: "Rent" }, { key: "buy", label: "Buy" } ],
    city: "Bengaluru",
    placeholder: "2 BHK, semi-furnished, ~₹40,000 …",
    listings: [
      { kind: "rent", name: "2 BHK, Eldeco Hill Side", loc: "Janaksinghpura, Neemrana", spec: "950 sqft · Fully Furnished",  price: "₹12,000", per: "/m", img: { bg: "#E9E2D6", ico: "sofa" } },
      { kind: "rent", name: "1 BHK, Eldeco Hill Side", loc: "Janaksinghpura, Neemrana", spec: "500 sqft · Semi Furnished",  price: "₹5,500",  per: "/m", img: { bg: "#E2EAE5", ico: "bed" } },
      { kind: "rent", name: "3 BHK, BMG Antriksh",     loc: "Shabaj, Bengaluru",        spec: "1,450 sqft · Fully Furnished", price: "₹18,000", per: "/m", img: { bg: "#E6E1EE", ico: "sofa" } },
      { kind: "buy",  name: "3 BHK, Eldeco Hill Side", loc: "Janaksinghpura, Neemrana", spec: "1,450 sqft · New",             price: "₹1.2 Cr", per: "",   img: { bg: "#E4ECEA", ico: "building" } },
      { kind: "buy",  name: "2 BHK, Everest Square",   loc: "ULM Amangani",             spec: "1,020 sqft · Under construction", price: "₹86 L", per: "", img: { bg: "#EFE6DC", ico: "building" } }
    ]
  },

  /* ------- Buy & Sell ------- */
  categories: [
    { label: "Furniture",   ico: "sofa" },
    { label: "Food",        ico: "food" },
    { label: "Services",    ico: "wrench" },
    { label: "Home Decor",  ico: "lamp" },
    { label: "Electronics", ico: "tv" },
    { label: "Vehicles",    ico: "car" },
    { label: "Kids Items",  ico: "block" },
    { label: "Others",      ico: "more" }
  ],

  listings: [
    { name: "3-Seater Fabric Sofa",      loc: "BMG Antriksh, Shabaj", price: "₹18,000",    num: 18000,   cat: "Furniture",  seller: "Suresh K. · B-702",  img: { bg: "#E7E1D7", ico: "sofa" } },
    { name: "Queen Bed + Mattress",      loc: "ULM Amangani, Shabaj", price: "₹24,000",    num: 24000,   cat: "Furniture",  seller: "Anita D. · C-1104",  img: { bg: "#E2E8E4", ico: "bed" } },
    { name: "Royal Enfield Classic 350", loc: "BMG Antriksh, Shabaj", price: "₹1,10,000",  num: 110000,  cat: "Vehicles",   seller: "Vikram T. · A-305",  img: { bg: "#E8E2EC", ico: "bike" } },
    { name: "Study Table",               loc: "Eldeco Hill Side",     price: "₹4,500",     num: 4500,    cat: "Furniture",  seller: "Neha M. · C-905",    img: { bg: "#EDE7DB", ico: "desk" } },
    { name: "Diwali Decor Set",          loc: "ULM Amangani",         price: "₹1,500",     num: 1500,    cat: "Home Decor", seller: "Rohit S. · B-201",   img: { bg: "#F1E5DA", ico: "lamp" } },
    { name: "43\" Smart TV",             loc: "Eldeco Hill Side",     price: "₹21,000",    num: 21000,   cat: "Electronics", seller: "Farhan A. · D-508", img: { bg: "#DFE9EC", ico: "tv" } }
  ],

  free: [
    { name: "1 BHK Raw Flat Available",   loc: "Eldeco Hill Side",      img: { bg: "#E6EFE9", ico: "building" } },
    { name: "Diwali Decoration at Store", loc: "ULM Amangani, Shabaj",  img: { bg: "#E9E4F0", ico: "lamp" } },
    { name: "Grand Exhibition",           loc: "BMG Antriksh, Shabaj",  img: { bg: "#F0E4E0", ico: "store" } },
    { name: "Painting Workshop",          loc: "ULM Amangani, Shabaj",  img: { bg: "#DFE8EE", ico: "paint" } }
  ],

  /* ------- Community ------- */
  community: {
    actions: [
      { label: "Helpdesk",         ico: "headset" },
      { label: "Society Charges",  ico: "wallet" },
      { label: "Amenities",        ico: "courts" },
      { label: "Notice Board",     ico: "notice", badge: 7 },
      { label: "Daily Help",       ico: "person" },
      { label: "Carpool",          ico: "carpool", tag: "New" },
      { label: "Search Vehicle",   ico: "car" },
      { label: "Prepaid Meter",    ico: "meter" },
      { label: "View More",        ico: "more" },
      /* revealed by View More */
      { label: "Events",           ico: "calendar" },
      { label: "Documents",        ico: "idcard" },
      { label: "Emergencies",      ico: "shield" },
      { label: "Polls",            ico: "grid" },
      { label: "Pets Club",        ico: "heart" },
      { label: "Lost & Found",     ico: "search" }
    ],
    announcements: [
      { tag: "Maintenance", name: "Gas pipeline inspection — Tower B", date: "25 Oct · 10:00–13:00",
        body: "The gas company will inspect pipelines in Tower B on 25 Oct between 10:00 and 13:00. Please ensure someone is at home, or share access with the society office." },
      { tag: "Facility", name: "Amphitheatre booked for painting workshop", date: "Sun · 5–7 PM",
        body: "The amphitheatre is reserved this Sunday evening for a resident-led painting workshop. Walk-ins welcome; carry your own brushes if you have them." },
      { tag: "Billing", name: "New prepaid meter rollout for Block C", date: "Week of 27 Oct",
        body: "Prepaid electricity meters will be installed across Block C starting the week of 27 Oct. Each flat will get a 30-minute installation slot — pick yours from the office." }
    ],
    classes: [
      { name: "Morning Yoga", meta: "Mon · Wed · Fri, 6:30 AM", joined: false, img: { bg: "#DFEBE5", ico: "yoga" } },
      { name: "Kids Cricket Coaching", meta: "Sat · Sun, 8:00 AM", joined: false, img: { bg: "#E8E2EE", ico: "cricket" } },
      { name: "Urban Farming", meta: "Sat, 9:00 AM", joined: false, img: { bg: "#F0E7DB", ico: "leaf" } }
    ]
  },

  /* ------- Stores ------- */
  stores: {
    promise: [
      { ico: "clock", name: "On-time Delivery",   meta: "Service delivered as per the scheduled time" },
      { ico: "tech",  name: "Expert Technicians", meta: "Highly skilled professionals for every service" }
    ],
    services: [
      { name: "Mygate Smart Locks", meta: "Pro-grade smart locks, installed & configured", cta: "Explore",   price: 3990, img: { bg: "#E3EAE7", ico: "lock" } },
      { name: "Schedule Live Demo", meta: "See the locks at work in your own home",        cta: "Book",      price: 0,    img: { bg: "#EBE3EC", ico: "demo" } },
      { name: "House Shifting",     meta: "Zero-damage packers & movers, verified",        cta: "Get quote", price: 1499, img: { bg: "#EDE7DA", ico: "truck" } }
    ],
    cart: {
      lines: [ { name: "Bathroom Deep Cleaning", price: 3990, qty: 1, img: { bg: "#E3EAE7", ico: "wrench" } } ]
    }
  }
};

/* ------- live derived helpers ------- */
DATA.cartCount = () => DATA.stores.cart.lines.reduce((n, l) => n + l.qty, 0);
DATA.cartTotal = () => DATA.stores.cart.lines.reduce((n, l) => n + l.price * l.qty, 0);
DATA.inr = n => "₹" + n.toLocaleString("en-IN");
