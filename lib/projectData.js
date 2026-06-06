// Pure data — no JSX here so this file is safe to import from Server Components.
// Icons are referenced by string key; the client component maps them to SVGs.

export const ALL_PROJECTS = [
  {
    id: 1,
    title: 'Oreo Luxury Showcase',
    description:
      'Built a complete Luxury car dealership platform with a fully functional admin interface. Admin can edit page content, manage inventory, add pages and control site settings without touching code.',
    tags: ['Next.js', 'React', 'Firebase', 'Tailwind CSS'],
    image: '/images/oreo (2).png',
    link: 'https://oreo.ink',
    detailPage: '/oreo',
    tagline:
      'A fully content-managed luxury car dealership platform built for zero developer dependency.',
    heroImage: '/images/oreo (2).png',
    images: ['/images/oreo (3).png', '/images/oreo (4).png'],
    overview: {
      type: 'Luxury Automotive',
      duration: '3 Weeks',
      role: 'Full-Stack Developer',
      status: 'Live',
    },
    challenge: {
      heading: 'No Online Presence, Full Developer Dependency',
      summary:
        'The dealership had zero digital footprint — customers had no way to browse inventory, and every content update required going through a developer. That was too slow and too expensive for a fast-moving business.',
      points: [
        'No website or digital inventory showcase for prospective buyers',
        'Client had no technical background — needed editorial control without writing code',
        'Design had to match the premium, luxury positioning of the brand',
        'Previous static attempts resulted in an outdated, unmanageable site',
      ],
    },
    solution: {
      heading: 'Custom CMS-Powered Dealership Platform',
      summary:
        'I built a polished Next.js frontend backed by a Firebase CMS, with a fully custom admin panel that gives the owner complete control over every part of the site — no code, no developers, no blockers.',
      features: [
        {
          title: 'Firebase-Backed CMS',
          description:
            'All page content, hero text, banners, and about sections are editable through a custom admin dashboard in real time.',
          icon: 'database',
        },
        {
          title: 'Inventory Management',
          description:
            'Admin can add, edit, and remove vehicle listings with photos, specs, price, and availability status — all from a clean UI.',
          icon: 'settings',
        },
        {
          title: 'Page Builder',
          description:
            'Admin can create new pages and control site-wide settings like contact info, social links, and navigation — without touching code.',
          icon: 'layout',
        },
        {
          title: 'Premium Frontend',
          description:
            'Smooth scroll animations, responsive design across all devices, and a luxury dark aesthetic that matches the brand identity.',
          icon: 'star',
        },
      ],
    },
    impact: {
      heading: 'Full Editorial Independence & a Live Luxury Brand',
      metrics: [
        { value: '100%', label: 'Content managed without code' },
        { value: '0', label: 'Developer calls needed post-launch' },
        { value: '3wks', label: 'From brief to live site' },
        { value: '∞', label: 'Inventory listings manageable' },
      ],
      points: [
        'Live at oreo.ink — fully operational from day one',
        'Owner manages all content and inventory independently',
        'Professional luxury aesthetic elevates the brand online',
        'Firebase real-time updates mean instant content changes site-wide',
        'Admin dashboard secured with auth guards and role-based access',
        'Zero ongoing developer dependency for day-to-day operations',
      ],
    },
  },

  {
    id: 2,
    title: 'Xtraspare Ecommerce',
    description:
      'Rebuilt and upgraded a live spare parts store from an incomplete codebase. Built a high-performance custom admin dashboard where the owner can manage products, track orders, and edit pricing globally.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
    image: '/images/xtraspare (1).png',
    link: 'https://xtraspare.com/',
    detailPage: '/xtraspare',
    tagline:
      'Rescued a broken ecommerce store and rebuilt it with a powerful, owner-operated admin system.',
    heroImage: '/images/xtraspare (1).png',
    images: ['/images/xtraspare (2).png', '/images/xtraspare (3).png'],
    overview: {
      type: 'Ecommerce / Automotive Parts',
      duration: '4 Weeks',
      role: 'Full-Stack Developer',
      status: 'Live',
    },
    challenge: {
      heading: 'A Broken Store Bleeding Revenue Every Day',
      summary:
        'The client inherited a half-built codebase from a previous developer who disappeared. The store was offline, customers were contacting them on WhatsApp, and the owner had no way to manage products or orders without direct database access.',
      points: [
        'Incomplete, broken codebase — checkout flow, product pages, and admin were all non-functional',
        'Live store was down, costing real revenue and customer trust every day',
        'No admin tooling — all changes required raw database access',
        'No order tracking or fulfilment management system',
      ],
    },
    solution: {
      heading: 'Full Rebuild with a Powerful Admin Engine',
      summary:
        'I audited the incomplete codebase, salvaged usable logic, and rebuilt the broken parts from scratch — then added a full-featured admin dashboard that makes the business truly self-sufficient.',
      features: [
        {
          title: 'Complete Store Rebuild',
          description:
            'Rebuilt product listings, category browsing, cart, checkout and order confirmation from the broken codebase up.',
          icon: 'code',
        },
        {
          title: 'Custom Admin Dashboard',
          description:
            'Proprietary admin panel for product management, stock levels, pricing editor, and order status updates — all in one place.',
          icon: 'settings',
        },
        {
          title: 'Global Pricing Editor',
          description:
            'Owner can update individual or bulk product prices in seconds — no database, no developer needed.',
          icon: 'bolt',
        },
        {
          title: 'Security Hardening',
          description:
            'Auth guards on all admin routes, input sanitisation, environment-secured MongoDB credentials, and XSS protections throughout.',
          icon: 'shield',
        },
      ],
    },
    impact: {
      heading: 'Store Back Live, Owner Fully Independent',
      metrics: [
        { value: '4wks', label: 'Rebuilt from broken to live' },
        { value: '100%', label: 'Admin-operated, no dev needed' },
        { value: '£0', label: 'Ongoing developer costs' },
        { value: '↑', label: 'Revenue recovered post-launch' },
      ],
      points: [
        'xtraspare.com relaunched and taking live orders',
        'Owner manages product catalogue and orders entirely solo',
        'Global pricing editor saves hours of manual work per week',
        'Order tracking gives customers visibility and reduces support queries',
        'Security audit passed — no exposed credentials or admin bypasses',
        'MongoDB + Node.js backend handles concurrent product/order loads reliably',
      ],
    },
  },

  {
    id: 3,
    title: 'Blogging Platform (Blogme)',
    description:
      'Built a complete multi-user SaaS blogging platform from scratch. Features real-time article publishing, individual user dashboards, organic SEO optimization, and social media cross-sharing.',
    tags: ['Next.js', 'Express', 'D3.js', 'Firebase'],
    image: '/images/blogme (2).png',
    link: 'https://www.blogme.live',
    detailPage: '/blogme',
    tagline:
      'A fully-owned multi-user SaaS blogging platform built from scratch with SEO and social reach at its core.',
    heroImage: '/images/blogme (2).png',
    images: ['/images/blogme (3).png', '/images/blogme (4).png'],
    overview: {
      type: 'SaaS / Content Platform',
      duration: '6 Weeks',
      role: 'Full-Stack Developer',
      status: 'Live',
    },
    challenge: {
      heading: 'No Existing Platform Gave Full Ownership',
      summary:
        "The client needed a blogging SaaS they fully owned — not a wrapper around Medium or Ghost. They needed individual user dashboards, real-time publishing, SEO control, and the ability to cross-post to social platforms from a single click.",
      points: [
        'Existing platforms (Medium, Substack, Ghost) lacked the required customisation and SEO ownership',
        'Multi-user architecture needed — each writer gets their own dashboard and content space',
        'SEO had to be baked into the content model, not bolted on',
        'Writers needed one-click cross-sharing to reach social audiences without extra tools',
      ],
    },
    solution: {
      heading: 'Built the Whole Product from Scratch',
      summary:
        'I designed and built the full SaaS stack — auth, user dashboards, article editor with draft/published states, SEO architecture, analytics, and social cross-sharing — as a single cohesive product.',
      features: [
        {
          title: 'Multi-User Auth & Dashboards',
          description:
            'Each user gets their own content space, article library, and publishing controls — all isolated and secure.',
          icon: 'users',
        },
        {
          title: 'Real-Time Publishing',
          description:
            'Articles move from draft to live in real time via Firebase — no page refreshes, no delays, no cache issues.',
          icon: 'bolt',
        },
        {
          title: 'SEO-First Architecture',
          description:
            'Auto-generated meta tags, OG images, canonical URLs, and JSON-LD structured data for every article — built into the content model.',
          icon: 'search',
        },
        {
          title: 'Social Cross-Sharing',
          description:
            'One-click sharing to major platforms from the dashboard — designed to maximise organic distribution without extra tools.',
          icon: 'mail',
        },
        {
          title: 'D3.js Analytics',
          description:
            'Author analytics dashboard showing views, read time, and engagement trends — rendered in beautiful D3 charts.',
          icon: 'chart',
        },
        {
          title: 'Firebase Storage',
          description:
            'Images and media stored via Firebase Storage with CDN delivery — fast loads globally, no bandwidth limits.',
          icon: 'database',
        },
      ],
    },
    impact: {
      heading: 'A Live Multi-User Platform Built for Growth',
      metrics: [
        { value: '∞', label: 'Registered users supported' },
        { value: '100%', label: 'SEO-ready from article one' },
        { value: '6wks', label: 'Idea to live SaaS' },
        { value: '1-click', label: 'Social cross-posting' },
      ],
      points: [
        'Live at blogme.live — users can sign up and publish immediately',
        'Every article is SEO-optimised with no manual configuration',
        'Real-time Firebase publishing means changes are instant',
        'Social sharing drives organic distribution without third-party tools',
        'D3 analytics give writers clarity on what content performs best',
        'Fully isolated user data with Firebase security rules',
      ],
    },
  },

  {
    id: 4,
    title: 'Events Ticketing Platform',
    description:
      'Architected a complete ticketing management platform. Ticket buyers automatically receive a secure unique QR code verification ticket via email after payment, which organizers scan to verify entry.',
    tags: ['React', 'Supabase', 'Paystack', 'Tailwind'],
    image: '/images/eventie (2).png',
    link: 'https://www.eventie.live',
    detailPage: '/eventie',
    tagline:
      'End-to-end event ticketing with cryptographically unique QR codes and real-time door scanning.',
    heroImage: '/images/eventie (2).png',
    images: ['/images/eventie (3).png', '/images/eventie (4).png'],
    overview: {
      type: 'SaaS / Events & Ticketing',
      duration: '5 Weeks',
      role: 'Full-Stack Architect',
      status: 'Live',
    },
    challenge: {
      heading: 'No Reliable Owned Ticketing System',
      summary:
        "Event organisers were stuck paying large commission fees to third-party platforms, had no control over the customer experience, and had no reliable fraud-proof verification system for physical event entry.",
      points: [
        'Third-party platforms (Eventbrite, etc.) charge per-ticket fees that erode margins',
        'No owned solution for West African payment rails (Paystack)',
        'Paper tickets and screenshot fraud were rampant at the door',
        'Organisers had no real-time dashboard to track entry or attendance',
      ],
    },
    solution: {
      heading: 'A Complete Ticketing Engine with QR Verification',
      summary:
        'I architected the entire ticketing workflow — from payment to QR generation to door scanning — as a single owned platform, cutting out commission fees and eliminating fraud.',
      features: [
        {
          title: 'Paystack Payment Integration',
          description:
            'Secure payment processing via Paystack — designed for West African cards and mobile money, with webhook confirmation.',
          icon: 'payment',
        },
        {
          title: 'Cryptographic QR Generation',
          description:
            'Each ticket gets a unique signed QR code generated post-payment — cryptographically tied to the purchase, impossible to duplicate.',
          icon: 'qr',
        },
        {
          title: 'Automated Email Delivery',
          description:
            'QR code ticket is emailed automatically within seconds of payment confirmation — no manual steps required.',
          icon: 'mail',
        },
        {
          title: 'Organiser Scanning Dashboard',
          description:
            'Real-time dashboard for scanning QR codes at the door — instant valid/invalid feedback, live attendee count.',
          icon: 'chart',
        },
        {
          title: 'Supabase Real-Time Backend',
          description:
            'Supabase powers live updates — as tickets are scanned, organisers see attendee counts update instantly across all devices.',
          icon: 'database',
        },
        {
          title: 'Fraud Prevention',
          description:
            'Each QR can only be scanned once — re-use attempts are flagged immediately. Screenshot fraud is eliminated by design.',
          icon: 'shield',
        },
      ],
    },
    impact: {
      heading: 'End-to-End Ticketing Used at Real Events',
      metrics: [
        { value: '0%', label: 'Commission fees (vs. 3rd party)' },
        { value: '100%', label: 'Fraud-proof QR verification' },
        { value: '<5s', label: 'Ticket delivery after payment' },
        { value: '∞', label: 'Events supported simultaneously' },
      ],
      points: [
        'Live at eventie.live — used for real-world events',
        'Paystack integration handles live payments reliably',
        'QR tickets delivered automatically within seconds of purchase',
        'Organisers scan from any device — no dedicated hardware needed',
        'Supabase real-time keeps door counts accurate across multiple scanners',
        'Zero fraud incidents — QR uniqueness enforced at the database level',
      ],
    },
  },

  {
    id: 5,
    title: 'Amazon Marketing Agency',
    description:
      'Designed and engineered an elite performance advertising metrics dashboard for an Amazon marketing agency. Features elegant charts, real-time campaign performance trackers, and luxury dark-mode layouts.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/ama_landing_page.png',
    link: 'https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share',
    detailPage: '/ama',
    tagline:
      'A premium performance analytics dashboard that turns Amazon ad data into polished, client-ready reporting.',
    heroImage: '/images/ama_landing_page.png',
    images: ['/images/ama2.jpg', '/images/amazon.png'],
    overview: {
      type: 'Analytics Dashboard',
      duration: '2 Weeks',
      role: 'Frontend Engineer & UI Designer',
      status: 'Delivered',
    },
    challenge: {
      heading: 'Raw Data, No Story — Clients Were Unimpressed',
      summary:
        'The agency was managing Amazon PPC campaigns for multiple clients but presenting raw spreadsheet exports as "reports." Clients found them difficult to read, questioned campaign value, and retention was suffering.',
      points: [
        'Campaign data scattered across spreadsheets — no unified view of performance',
        'Clients received raw exports instead of polished, visual reports',
        'No real-time KPI tracking — performance was only visible after manual exports',
        "The agency's premium positioning wasn't reflected in their deliverables",
      ],
    },
    solution: {
      heading: 'A Luxury Dark-Mode Analytics Dashboard',
      summary:
        'I designed and built a premium analytics dashboard the agency can present directly to clients — elegant visualisations, real-time trackers, and a luxury dark UI that communicates professionalism and data mastery.',
      features: [
        {
          title: 'Spend vs. Revenue Charts',
          description:
            'D3-powered line and bar charts showing ad spend against revenue over time — with clear trend annotations and colour-coded performance zones.',
          icon: 'chart',
        },
        {
          title: 'ACOS & ROAS Trackers',
          description:
            'Real-time KPI cards showing key metrics (ACOS, ROAS, CTR, Impressions) with sparklines and period-over-period deltas.',
          icon: 'bolt',
        },
        {
          title: 'Keyword Ranking Grid',
          description:
            'Sortable, searchable keyword performance table with bid recommendations and position trend indicators.',
          icon: 'search',
        },
        {
          title: 'Framer Motion Animations',
          description:
            'Smooth chart entrance animations and data transition effects that make the dashboard feel alive and premium, not static.',
          icon: 'star',
        },
        {
          title: 'Luxury Dark Mode UI',
          description:
            'Bespoke dark theme with curated colour palette — presentation-ready for client calls, boardroom screens, and PDF exports.',
          icon: 'layout',
        },
        {
          title: 'Multi-Campaign View',
          description:
            'Agency can switch between client accounts and see all campaign performance in a single consolidated dashboard.',
          icon: 'settings',
        },
      ],
    },
    impact: {
      heading: "Data That Sells the Agency's Value",
      metrics: [
        { value: '↑', label: 'Client retention post-delivery' },
        { value: '1', label: 'Unified view of all campaigns' },
        { value: '2wks', label: 'From brief to delivered' },
        { value: '0', label: 'Spreadsheets shared with clients' },
      ],
      points: [
        'Agency now presents polished dashboards instead of raw data exports',
        'Clients clearly see ROI — improving trust, retention, and upsell potential',
        'Real-time KPI cards reduce the time spent preparing for client calls',
        'Multi-campaign view saves the agency hours of manual consolidation',
        "Luxury UI reinforces the agency's premium market positioning",
        'Framer Motion animations create a memorable, WOW-factor first impression',
      ],
    },
  },

  {
    id: 6,
    title: 'Sturdee Education Platform',
    description:
      'Built a premium education platform with structured course catalogs, learning paths, and instructor profiles. Features include program browsing, alumni network showcasing, and a clean editorial design with animated interactions.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Lucide Icons'],
    image: '/images/sturdee.png',
    link: 'https://sturdee.online',
    detailPage: '/sturdee',
    tagline:
      'A premium education platform designed to inspire serious learners and justify high-ticket course pricing.',
    heroImage: '/images/sturdee.png',
    images: ['/images/sturdee.png', '/images/sturdee.png'],
    overview: {
      type: 'EdTech / SaaS Platform',
      duration: '4 Weeks',
      role: 'Full-Stack Developer & UI Designer',
      status: 'Live',
    },
    challenge: {
      heading: 'Cheap Templates Were Killing the Brand',
      summary:
        "The client was offering premium-priced courses but using a generic template that looked like every other online course site. Prospective students weren't converting because the platform didn't communicate quality, structure, or credibility.",
      points: [
        'Generic template design undermined the premium pricing and brand positioning',
        'No clear content hierarchy — courses, programs, and instructors were all muddled together',
        "Instructor profiles and alumni credibility weren't showcased effectively",
        'Mobile experience was broken on the previous build, costing mobile conversions',
      ],
    },
    solution: {
      heading: 'Editorial-Grade Platform Built from Scratch',
      summary:
        'I built a fully custom Next.js platform with an editorial design approach — every section crafted to guide prospective students through a deliberate journey from discovery to enrolment.',
      features: [
        {
          title: 'Animated Hero Experience',
          description:
            'Hero section with floating course topic pills (Graphic Design, UI/UX, Animation, Prototyping) that establish breadth and quality at a glance.',
          icon: 'star',
        },
        {
          title: 'Structured Course Catalog',
          description:
            'Course cards with instructor attribution, star ratings, duration, student counts, and pricing — designed to drive enrolment clicks.',
          icon: 'book',
        },
        {
          title: 'Learning Path Architecture',
          description:
            'Multi-month structured programs (Business Mastery, Leadership Excellence, Innovation & Strategy) showing clear progression from foundational to advanced.',
          icon: 'bolt',
        },
        {
          title: 'World-Class Faculty Section',
          description:
            'Instructor profile cards with university affiliations (Harvard, MIT Sloan, Stanford GSB) that build instant credibility with prospective students.',
          icon: 'users',
        },
        {
          title: 'Alumni Network Showcase',
          description:
            'Section highlighting graduate placements at Google, McKinsey, Goldman Sachs, and the UN — social proof that commands premium pricing.',
          icon: 'chart',
        },
        {
          title: 'Fully Responsive',
          description:
            'Pixel-perfect on all screen sizes — desktop, tablet, and mobile — with smooth transitions and micro-animations throughout.',
          icon: 'layout',
        },
      ],
    },
    impact: {
      heading: 'A Platform That Justifies Premium Pricing',
      metrics: [
        { value: '↑', label: 'Conversion rate vs. old template' },
        { value: '100%', label: 'Mobile-responsive across all pages' },
        { value: '4wks', label: 'Design to live platform' },
        { value: '∞', label: 'Courses & programs scalable' },
      ],
      points: [
        'Live at sturdee.online with a first impression that matches premium pricing',
        'Clear course and program hierarchy guides students naturally to enrolment',
        'Faculty section with top-tier university affiliations drives instant credibility',
        'Alumni network at world-class companies provides powerful social proof',
        'Animated hero creates a memorable, high-quality first impression',
        'Mobile experience is flawless — no conversions lost to broken layouts',
      ],
    },
  },
];
