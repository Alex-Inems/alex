// Pure data — no JSX here so this file is safe to import from Server Components.
// Icons are referenced by string key; the client component maps them to SVGs.

export const ALL_PROJECTS = [
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
      'Built a premium Shopify EdTech storefront at sturdee.online with course listings, session booking, student accounts, an integrated tutorial catalogue, and admin-managed enrolments in a premium editorial UI.',
    tags: ['Shopify', 'Liquid', 'EdTech', 'Booking'],
    image: '/images/sturdee.png',
    link: 'https://sturdee.online',
    detailPage: '/sturdee',
    tagline:
      'A premium education Shopify store with booking, tutorials, and admin-managed courses — live at sturdee.online.',
    heroImage: '/images/sturdee.png',
    images: ['/images/sturdee.png', '/images/sturdee.png'],
    overview: {
      type: 'Shopify / EdTech',
      duration: '4 Weeks',
      role: 'Shopify Developer',
      status: 'Live',
    },
    challenge: {
      heading: 'No Unified Platform for Learning, Booking, and Operations',
      summary:
        'The client needed more than a marketing site — they needed a live education product where students could sign up, browse tutorials and courses, book sessions with instructors, and enrol in structured programs, while staff managed everything from a single admin dashboard.',
      points: [
        'No authentication — students could not create accounts, log in, or track progress',
        'Tutorials, courses, and programs lived in separate tools with no unified experience',
        'Session booking was manual — no self-serve scheduling for students or instructors',
        'No admin dashboard to manage content, users, bookings, and enrolments without code',
      ],
    },
    solution: {
      heading: 'Shopify EdTech Storefront With Booking & Tutorials',
      summary:
        'I built sturdee.online end-to-end on Shopify — a public-facing tutorial and course store with Sign Up / Login, a Book flow for scheduling sessions, structured learning paths across Web Development, Programming, and Blockchain, and a secure admin dashboard for managing the entire platform.',
      features: [
        {
          title: 'Authentication System',
          description:
            'Full Sign Up and Login flows so students create accounts, access enrolled content, and return to their dashboard — secured with role-based access for students vs. admin users.',
          icon: 'shield',
        },
        {
          title: 'Admin Dashboard',
          description:
            'Custom admin panel to manage courses, tutorials, programs, instructors, student accounts, and platform content — no developer needed for day-to-day operations.',
          icon: 'settings',
        },
        {
          title: 'Session Booking System',
          description:
            'Integrated Book flow lets students schedule sessions with instructors directly from the site — replacing manual email coordination with a self-serve booking experience.',
          icon: 'bolt',
        },
        {
          title: 'Integrated Tutorial Site',
          description:
            'Dedicated Tutorials section alongside Courses and Programs — students browse bite-sized lessons and deep-dive tracks (Full-Stack Web, Python, TypeScript, System Design, Solidity, DeFi, Blockchain) in one cohesive product.',
          icon: 'book',
        },
        {
          title: 'Structured Learning Paths',
          description:
            'Multi-month curated journeys — Full-Stack Web Development (18 courses), Professional Programming (22 courses), Blockchain & Cryptocurrency (16 courses) — each with clear progression from fundamentals to mastery.',
          icon: 'layout',
        },
        {
          title: 'Premium Editorial Frontend',
          description:
            'Animated hero with floating topic pills, featured course cards with ratings and pricing, world-class faculty profiles, alumni network showcase, and fully responsive design across all devices.',
          icon: 'star',
        },
      ],
    },
    impact: {
      heading: 'One Platform for Learning, Booking, and Operations',
      metrics: [
        { value: '1', label: 'Unified tutorial + course site' },
        { value: '3', label: 'Structured learning paths' },
        { value: '100%', label: 'Admin-managed content' },
        { value: 'Live', label: 'At sturdee.online' },
      ],
      points: [
        'Live at sturdee.online — auth, booking, tutorials, and courses in one product',
        'Students sign up, log in, and book sessions without leaving the platform',
        'Admin dashboard gives staff full control over content, users, and bookings',
        'Tutorial site integrated alongside courses and programs — not a bolt-on',
        'Featured tracks in Web Dev, Python, and Blockchain with faculty attribution',
        'Premium editorial UI justifies high-ticket course pricing and drives enrolment',
      ],
    },
  },

  {
    id: 7,
    title: 'n8n Leads Classifier',
    description:
      'Built a full-stack AI lead qualification system with a Shopify contact form wired to an n8n webhook. Incoming messages are classified by GPT as leads, opportunities, questions, or spam — then logged to Google Sheets and routed via Gmail notifications. Includes an admin dashboard for reviewing classified leads.',
    tags: ['n8n', 'Shopify', 'OpenAI', 'Google Sheets', 'Gmail', 'Webhooks'],
    image: '/images/n8n lead classifier.png',
    link: 'https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share',
    hasLiveSite: false,
    detailPage: '/n8n-leads-classifier',
    tagline:
      'AI-powered lead classification pipeline — Shopify storefront, n8n orchestration, and a real-time admin dashboard.',
    heroImage: '/images/n8n lead classifier.png',
    images: ['/images/n8n lead classifier.png'],
    overview: {
      type: 'AI Automation / Lead Management',
      duration: '1 Week',
      role: 'n8n Automation Expert & Shopify Developer',
      status: 'Delivered',
    },
    challenge: {
      heading: 'Inbound Messages With No Triage or Routing',
      summary:
        'The client was receiving contact form submissions with no way to distinguish hot leads from spam, general questions, or partnership opportunities. Every message landed in one inbox, forcing manual review and slowing response times to high-value prospects.',
      points: [
        'No automated classification — every submission required manual reading and sorting',
        'Leads, spam, and general enquiries all mixed together in a single inbox',
        'No structured logging for CRM follow-up or analytics on lead quality',
        'No instant notifications when a high-priority lead came in',
      ],
    },
    solution: {
      heading: 'Shopify Frontend + n8n AI Classification Pipeline',
      summary:
        'I built a Shopify "AI Lead Qualifier" contact form that POSTs to an n8n webhook. The n8n workflow uses a GPT classifier node to categorise each submission, then branches to Google Sheets logging and Gmail notifications — with a linked admin dashboard for reviewing all classified leads.',
      features: [
        {
          title: 'Shopify Contact Form',
          description:
            'Clean dark-themed UI with name, email, subject, and message fields. Submits directly to the n8n webhook URL for instant processing.',
          icon: 'layout',
        },
        {
          title: 'GPT Lead Classifier',
          description:
            'n8n AI node analyses each message and classifies it as a lead, opportunity, question, or spam — with an AI-generated summary for quick review.',
          icon: 'brain',
        },
        {
          title: 'Google Sheets CRM Log',
          description:
            'Every submission is appended to a structured Google Sheet with columns for Timestamp, Name, Email, Subject, Message, Category, and AI Summary.',
          icon: 'database',
        },
        {
          title: 'Gmail Notifications',
          description:
            'Automated email alerts fire on classification — routing high-priority leads to the right inbox immediately without manual checking.',
          icon: 'mail',
        },
        {
          title: 'Admin Dashboard',
          description:
            'Linked dashboard view for reviewing all classified leads, filtering by category, and tracking inbound volume over time.',
          icon: 'chart',
        },
        {
          title: 'Webhook Architecture',
          description:
            'Shopify sends JSON payloads to the n8n webhook trigger — decoupling the storefront from the automation logic for easy scaling and maintenance.',
          icon: 'bolt',
        },
      ],
    },
    impact: {
      heading: 'Zero Manual Triage, Instant Lead Routing',
      metrics: [
        { value: '4', label: 'Classification categories' },
        { value: '<3s', label: 'End-to-end processing time' },
        { value: '100%', label: 'Submissions auto-logged' },
        { value: '0', label: 'Manual sorting required' },
      ],
      points: [
        'Every inbound message classified and logged automatically on submission',
        'High-priority leads trigger instant Gmail notifications',
        'Google Sheets provides a structured CRM-ready log with AI summaries',
        'Admin dashboard gives full visibility without touching the n8n editor',
        'Webhook architecture allows the frontend and workflow to scale independently',
        'Extensible to Slack alerts, CRM sync, and automated follow-up sequences',
      ],
    },
  },

  {
    id: 8,
    title: 'LinkedIn Post Generator',
    description:
      'Engineered an n8n automation that receives topic and tone from a Shopify UI via webhook, generates professional LinkedIn posts with GPT, logs every output to Google Sheets, emails the admin, and returns the post instantly to the storefront — all in under 5 seconds.',
    tags: ['n8n', 'Shopify', 'OpenAI', 'Gmail', 'Google Sheets', 'Webhooks'],
    image: '/images/linkedin post generator.png',
    link: 'https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share',
    hasLiveSite: false,
    detailPage: '/linkedin-post-generator',
    tagline:
      'One-click LinkedIn content generation — AI-powered posts delivered in seconds via n8n and Shopify.',
    heroImage: '/images/linkedin post generator.png',
    images: ['/images/linkedin post generator.png'],
    overview: {
      type: 'AI Automation / Content Generation',
      duration: '1 Week',
      role: 'n8n Automation Expert & Shopify Developer',
      status: 'Delivered',
    },
    challenge: {
      heading: 'Content Creation Eating Hours Every Week',
      summary:
        'The client needed to publish consistent, professional LinkedIn content but spent hours drafting each post manually. They wanted a system where they could enter a topic and tone, get a polished post back instantly, and keep a searchable history of everything generated.',
      points: [
        'Manual post writing took 30–60 minutes per piece with inconsistent quality',
        'No centralised log of generated content for reuse or analytics',
        'No way to get instant feedback in the UI while background tasks ran',
        'Needed professional LinkedIn tone without hiring a copywriter',
      ],
    },
    solution: {
      heading: 'n8n Content Pipeline with Instant UI Response',
      summary:
        'I built an n8n workflow triggered by a Shopify webhook. The flow receives a topic and tone, generates a LinkedIn-ready post via GPT, logs it to Google Sheets, emails the admin, and returns the post to the UI immediately using n8n\'s responseNode pattern — all in 3–5 seconds.',
      features: [
        {
          title: 'Shopify Webhook Input',
          description:
            'Frontend sends a POST with topic and tone (e.g. {"topic": "AI automation trends", "tone": "professional"}) to trigger the n8n pipeline.',
          icon: 'bolt',
        },
        {
          title: 'GPT Content Generation',
          description:
            'OpenAI node generates a polished LinkedIn post with a system prompt enforcing professional style, plain-text output, and platform-appropriate formatting.',
          icon: 'brain',
        },
        {
          title: 'Data Preparation Node',
          description:
            'Code node normalises webhook input and AI output into a single clean data object for downstream logging and email formatting.',
          icon: 'code',
        },
        {
          title: 'Google Sheets History Log',
          description:
            'Every generated post is appended to a Google Sheet with Topic, Tone, Output, and Timestamp columns for analytics and content reuse.',
          icon: 'database',
        },
        {
          title: 'Gmail Admin Notification',
          description:
            'Formatted HTML email sent to the admin with the full post content, topic, tone, and timestamp — running in parallel with the UI response.',
          icon: 'mail',
        },
        {
          title: 'Instant Webhook Response',
          description:
            'responseNode pattern returns the generated post to the Shopify UI immediately while Sheets logging and email delivery continue in the background.',
          icon: 'settings',
        },
      ],
    },
    impact: {
      heading: 'Professional Posts in Seconds, Not Hours',
      metrics: [
        { value: '3–5s', label: 'Total execution time' },
        { value: '100%', label: 'Posts auto-logged to Sheets' },
        { value: '0', label: 'Manual drafting needed' },
        { value: '∞', label: 'Topics supported' },
      ],
      points: [
        'LinkedIn-ready posts generated from a single topic + tone input',
        'UI receives the post instantly via webhook response — no polling required',
        'Google Sheets provides a searchable content history with timestamps',
        'Admin email notifications keep the team in the loop on every generation',
        'Explicit node references in expressions prevent data loss across the chain',
        'Architecture supports Slack publishing, scheduling, and multi-platform expansion',
      ],
    },
  },

  {
    id: 9,
    title: 'Inema Construction',
    description:
      'Built a custom Shopify corporate site for PT Inema Konstruksi with project inquiry flows, editorial dark-mode design, landmark portfolio, service capability showcase, and admin-managed content.',
    tags: ['Shopify', 'Liquid', 'Corporate', 'Booking'],
    image: '/images/inema.png',
    link: 'https://inema.site',
    detailPage: '/inema',
    tagline:
      'A world-class construction brand Shopify site with inquiry booking and admin controls — live at inema.site.',
    heroImage: '/images/inema.png',
    images: ['/images/inema.png', '/images/inema.png'],
    overview: {
      type: 'Shopify / Corporate',
      duration: '3 Weeks',
      role: 'Shopify Developer',
      status: 'Live',
    },
    challenge: {
      heading: 'A Local GC With No Digital Presence to Match Their Ambition',
      summary:
        'PT Inema Konstruksi delivers civil, structural, architectural, and MEP works across residential and commercial sectors in Jakarta — but had no website that communicated the scale, safety standards, and delivery rigour of a serious general contractor.',
      points: [
        'No online presence to win commercial tenders or international partnerships',
        'Needed to communicate six core disciplines — GC, design-build, structural, MEP, façade, and pre-construction',
        'Project inquiries and consultation bookings were handled manually with no digital pipeline',
        'No admin dashboard to manage inquiries, content, or team access without a developer',
      ],
    },
    solution: {
      heading: 'Editorial Construction Brand Site on Shopify',
      summary:
        'I designed and built inema.site end-to-end on Shopify — a premium dark-mode corporate experience with Sign Up / Login, a Get Quote booking flow, a secure admin dashboard for managing inquiries and site content, plus phased hero storytelling, landmark portfolio, and full service capability grid.',
      features: [
        {
          title: 'Authentication & Admin Dashboard',
          description:
            'Secure auth for staff and admin users, with a custom dashboard to manage project inquiries, portfolio content, team profiles, and site settings — no code required for daily operations.',
          icon: 'shield',
        },
        {
          title: 'Project Booking & Inquiry System',
          description:
            'Get Quote CTA and contact form capture project scope, location, and timeline — feeding directly into the admin dashboard for one-business-day response workflows.',
          icon: 'bolt',
        },
        {
          title: 'Phased Hero Narrative',
          description:
            'Auto-cycling hero with four construction phases — Foundation, Structure, Envelope, Delivery — each with bespoke headline copy, background imagery, and progress indicator (01/04).',
          icon: 'star',
        },
        {
          title: 'Landmark Project Portfolio',
          description:
            'Filterable showcase of global supertall completions (The Spiral, Mori JP Tower, Greenland Hangzhou) with architect, height, builder, and area metadata — positioning Inema against world-class delivery benchmarks.',
          icon: 'layout',
        },
        {
          title: 'Six Service Disciplines',
          description:
            'Full-spectrum capability grid covering General Contracting, Design-Build, Structural & Civil, MEP & Building Systems, Façade & Envelope, and Pre-Construction — aligned with AIA and DBIA standards.',
          icon: 'settings',
        },
        {
          title: 'Five-Phase Delivery Method',
          description:
            'Interactive process section documenting Discovery → Design Development → Pre-Construction → Construction → Closeout with deliverables listed at each gate.',
          icon: 'bolt',
        },
        {
          title: 'Safety & Industry Intelligence',
          description:
            'Data-driven safety metrics section (BLS/OSHA sourced) and an industry signals feed covering construction fatalities, BIM adoption, and global market size — building institutional credibility.',
          icon: 'chart',
        },
        {
          title: 'Team Profiles & HQ Contact',
          description:
            'Team section profiling operations, design studio, and field division; full Jakarta HQ contact details for PT Inema Konstruksi with email and phone.',
          icon: 'users',
        },
      ],
    },
    impact: {
      heading: 'A Live Brand That Competes on a Global Stage',
      metrics: [
        { value: '6', label: 'Service disciplines showcased' },
        { value: '5', label: 'Documented delivery phases' },
        { value: 'Live', label: 'At inema.site' },
        { value: '<24h', label: 'Inquiry response promise' },
      ],
      points: [
        'Live at inema.site — auth, booking, and admin dashboard fully operational',
        'Get Quote flow replaces manual inquiry handling with a structured digital pipeline',
        'Admin dashboard gives staff control over inquiries, content, and team profiles',
        'Phased hero communicates construction expertise before a single scroll',
        'Global landmark portfolio positions the brand against international GC standards',
        'Dark editorial aesthetic differentiates Inema from generic contractor templates',
      ],
    },
  },

  {
    id: 10,
    title: 'Oreo',
    description:
      'Built a custom Shopify DTC sneaker storefront for Oreo — premium authentic Yeezy, Nike & Adidas sourced direct with no retail markup. Features featured drops, shop-by-style collections, pre-order flows, authenticity guarantee, and member email capture.',
    tags: ['Shopify', 'Liquid', 'E-commerce', 'DTC'],
    image: '/images/yowaa.png',
    link: 'https://www.oreo.ink',
    detailPage: '/oreo',
    tagline:
      'Direct-to-consumer footwear — premium pairs, zero markup, verified authentic.',
    heroImage: '/images/yowaa.png',
    images: ['/images/yowaa.png', '/images/yowaa.png'],
    overview: {
      type: 'E-commerce / DTC Footwear',
      duration: '2 Weeks',
      role: 'Shopify Developer & Theme Designer',
      status: 'Live',
    },
    challenge: {
      heading: 'Sneaker Resellers Looked Like Everyone Else',
      summary:
        'Oreo needed a DTC storefront that communicated trust, authenticity, and better pricing than retail — without looking like a generic dropshipping template. Customers had to feel confident buying premium Yeezy, Nike, and Adidas pairs online.',
      points: [
        'No differentiated brand experience — looked like every other sneaker reseller',
        'Authenticity concerns blocked conversions on high-ticket footwear',
        'Collections (Slides, Lifestyle, Basketball) were not clearly navigable',
        'No system for pre-order drops or member-first access to new releases',
      ],
    },
    solution: {
      heading: 'Premium Shopify DTC Store Built for Trust & Conversion',
      summary:
        'I designed and built the Oreo Shopify theme end-to-end — a bold DTC experience with a "Direct to you. No markup." hero, featured pairs grid, shop-by-style collections, authenticity inspection section, pre-order drop support, and drops-list email capture.',
      features: [
        {
          title: 'DTC Hero & Brand Story',
          description:
            '"Direct to you. No markup." positioning with trust badges (100% Authentic, Free shipping $150+, 14-day returns) and a scroll-driven brand narrative.',
          icon: 'star',
        },
        {
          title: 'Featured Drops & Collections',
          description:
            'Just-dropped product grid with sale pricing, plus Shop by Style lanes for Slides, Lifestyle, and Basketball — each linking to curated collections.',
          icon: 'layout',
        },
        {
          title: 'Authenticity & Inspection',
          description:
            'Dedicated "Every pair checked before it ships" section — box condition, tags, and authenticity markers inspected on every order.',
          icon: 'shield',
        },
        {
          title: 'Pre-Order & Drops List',
          description:
            'Pre-order product support with checkout-date transparency, plus email capture for members-only early access to Yeezy, Nike, and limited releases.',
          icon: 'bolt',
        },
        {
          title: 'Shopify Native Commerce',
          description:
            'Full cart, account login, predictive search, FAQ, and contact pages — all wired through Shopify\'s native checkout and customer accounts.',
          icon: 'settings',
        },
        {
          title: 'Trust & Policy UX',
          description:
            'FAQ accordion covering authenticity, pre-orders, returns, and free shipping thresholds — reducing support tickets before purchase.',
          icon: 'book',
        },
      ],
    },
    impact: {
      heading: 'A DTC Store Built to Sell Premium Pairs',
      metrics: [
        { value: '100%', label: 'Authentic guarantee' },
        { value: '10K+', label: 'Pairs delivered (brand stat)' },
        { value: '4.9★', label: 'Customer rating' },
        { value: '48hr', label: 'Avg. ship time' },
      ],
      points: [
        'Live at oreo.ink — taking orders with Shopify checkout',
        'DTC positioning clearly differentiates from retail markup competitors',
        'Shop-by-style navigation drives discovery across Slides, Lifestyle, Basketball',
        'Authenticity section builds trust for high-ticket sneaker purchases',
        'Drops list captures emails for repeat release traffic',
        'Pre-order flow supports upcoming releases without manual coordination',
      ],
    },
  },

  {
    id: 11,
    title: 'Yangaa',
    description:
      'Built a premium Shopify beauty marketplace for Yangaa — French pharmacy, K-beauty, luxury skincare, hair, and makeup brands with mega-menu navigation, promotional carousels, brand-of-the-month features, customer reviews, and newsletter capture.',
    tags: ['Shopify', 'Liquid', 'E-commerce', 'Beauty'],
    image: '/images/yanga.png',
    link: 'https://www.yangaa.store',
    detailPage: '/yangaa',
    tagline:
      'A curated beauty marketplace — pharmacy to luxury, all in one premium Shopify experience.',
    heroImage: '/images/yanga.png',
    images: ['/images/yanga.png', '/images/yanga.png'],
    overview: {
      type: 'E-commerce / Beauty Marketplace',
      duration: '2 Weeks',
      role: 'Shopify Developer & Theme Designer',
      status: 'Live',
    },
    challenge: {
      heading: 'Too Many Brands, No Premium Shopping Experience',
      summary:
        'Yangaa stocks dozens of brands across French pharmacy, K-beauty, luxury, hair, and makeup — but needed a storefront that felt curated and premium, not like a cluttered catalog. Promotions, new arrivals, and brand storytelling had to coexist without overwhelming shoppers.',
      points: [
        '40+ brands across 6 categories with no clear navigation hierarchy',
        'Sale promotions and new arrivals competed for attention without structure',
        'No featured brand storytelling to drive hero product discovery',
        'Mobile shopping experience needed to match desktop editorial quality',
      ],
    },
    solution: {
      heading: 'Editorial Beauty Marketplace on Shopify',
      summary:
        'I built the Yangaa Shopify theme with a mega-menu organized by brand category (French Pharmacy, Luxury & Prestige, K-Beauty, Hair, Makeup, Body & Sun), promotional hero carousels, Brand of the Month spotlight, multiple product carousels (New & Trending, Best Deals, This Week Only), and a customer review slider.',
      features: [
        {
          title: 'Mega-Menu Brand Navigation',
          description:
            'Organized dropdown with 20+ brands across French Pharmacy (La Roche-Posay, Avène, Bioderma), K-Beauty (COSRX, Beauty of Joseon), Luxury (Caudalie, Lancôme), Hair, and Makeup.',
          icon: 'layout',
        },
        {
          title: 'Promotional Hero Carousels',
          description:
            'Rotating banners for Prime Deals (up to 50% off), New Arrivals, YANGAA Brand of the Month, and Summer Store promotions — each with dedicated CTAs.',
          icon: 'star',
        },
        {
          title: 'Product Carousel Sections',
          description:
            'New & Trending, Best Deals, and This Week Only carousels with sale badges, brand attribution, and compare-at pricing — driving discovery without page reloads.',
          icon: 'bolt',
        },
        {
          title: 'Curated Collection Picks',
          description:
            'Featuring right now grid — YANGAA Herbal Lotion, Summer Essentials, Radiant Skin Ritual, Pharmacy Favorites — each with editorial copy and shop links.',
          icon: 'book',
        },
        {
          title: 'Social Proof & Reviews',
          description:
            'Customer review carousel with 4.8/5 rating and 500+ reviews — building trust for genuine product sourcing claims.',
          icon: 'users',
        },
        {
          title: 'Newsletter & WhatsApp Community',
          description:
            'Email subscribe for beauty tips and exclusive offers, plus announcement bar promoting WhatsApp community for SPF tips and deals.',
          icon: 'mail',
        },
      ],
    },
    impact: {
      heading: 'A Beauty Destination, Not Just a Catalog',
      metrics: [
        { value: '40+', label: 'Brands organized' },
        { value: '4.8★', label: 'Customer rating' },
        { value: '$50+', label: 'Free shipping threshold' },
        { value: 'Live', label: 'Shopify storefront' },
      ],
      points: [
        'Live at yangaa.store — full Shopify checkout and accounts',
        'Mega-menu makes 40+ brands navigable in two clicks',
        'Brand of the Month drives hero product discovery and repeat visits',
        'Multiple sale carousels surface deals without cluttering the homepage',
        'Review slider and genuine product claims build purchase confidence',
        'Newsletter capture builds owned audience beyond paid traffic',
      ],
    },
  },

  {
    id: 12,
    title: 'Aurum & Co. Jewelry',
    description:
      'Built a luxury Shopify fine jewelry storefront for Aurum & Co. — flash sale countdown, GIA-certified pieces, category shop grid, concierge messaging, VIP email list, and insured checkout for rings, necklaces, watches, and bridal collections.',
    tags: ['Shopify', 'Liquid', 'E-commerce', 'Luxury'],
    image: '/images/aurum.png',
    link: 'https://aurum-co-21.myshopify.com/',
    detailPage: '/aurum',
    tagline:
      'Exclusive luxury jewelry — GIA-certified, insured shipping, uncompromising craft.',
    heroImage: '/images/aurum.png',
    images: ['/images/aurum.png', '/images/aurum.png'],
    overview: {
      type: 'E-commerce / Luxury Jewelry',
      duration: '2 Weeks',
      role: 'Shopify Developer & Theme Designer',
      status: 'Live',
    },
    challenge: {
      heading: 'Luxury Jewelry Needs More Than a Product Grid',
      summary:
        'Aurum & Co. sells high-ticket fine jewelry — engagement rings, diamond bracelets, heritage watches — where trust, certification, and white-glove service matter as much as the product photography. A generic Shopify theme would undermine the premium positioning.',
      points: [
        'High-ticket purchases require GIA certification and insured shipping trust signals',
        'Flash sales needed urgency without cheapening the luxury brand',
        'No concierge contact path for bespoke inquiries on expensive pieces',
        'Category navigation (Rings, Necklaces, Bridal, Watches) was not editorial enough',
      ],
    },
    solution: {
      heading: 'Luxury Shopify Experience With Concierge Touchpoints',
      summary:
        'I built the Aurum & Co. Shopify theme with a flash sale countdown timer, GIA-certified trust badges, Shop by Category grid, Today\'s Deals with limited-time pricing, Featured Fine Jewelry and New Arrivals sections, VIP email list, and an integrated concierge message form.',
      features: [
        {
          title: 'Flash Sale Countdown',
          description:
            'Live countdown timer on hero and deal sections — creating urgency for limited-time offers on diamond tennis bracelets, pearl earrings, and engagement rings.',
          icon: 'bolt',
        },
        {
          title: 'Luxury Trust Signals',
          description:
            'GIA Certified, Insured Shipping (free over $500), 30-Day Returns, and Secure Checkout badges — positioned prominently to reduce purchase anxiety.',
          icon: 'shield',
        },
        {
          title: 'Shop by Category Grid',
          description:
            'Editorial category cards for Rings, Necklaces, Bracelets, Earrings, Watches, Bridal, Men, and Gifts — each with dedicated collection pages.',
          icon: 'layout',
        },
        {
          title: 'Featured & New Arrivals',
          description:
            'Curated product grids with Aurum Atelier branding, star ratings, compare-at sale pricing, and "Insured shipping · Aurum Certified" labels on every card.',
          icon: 'star',
        },
        {
          title: 'Aurum Concierge Messaging',
          description:
            'Integrated contact form modal — name, email, phone, message — with 24-hour specialist reply promise for high-ticket bespoke inquiries.',
          icon: 'mail',
        },
        {
          title: 'VIP Email List',
          description:
            'Exclusive access signup for private sales, new collections, and VIP events — building a luxury CRM pipeline beyond one-time purchases.',
          icon: 'users',
        },
      ],
    },
    impact: {
      heading: 'Luxury Commerce With Trust Built In',
      metrics: [
        { value: 'GIA', label: 'Certified diamonds & gems' },
        { value: '$500+', label: 'Free insured shipping' },
        { value: '30-day', label: 'Hassle-free returns' },
        { value: 'Live', label: 'Shopify storefront' },
      ],
      points: [
        'Live at aurum-co-21.myshopify.com — Shopify checkout with Apple Pay & Shop Pay',
        'Flash sale countdown drives urgency without discount-store aesthetics',
        'GIA certification and insured shipping badges reduce high-ticket purchase friction',
        'Concierge messaging captures bespoke inquiries that carts alone would lose',
        'Category grid makes 8 jewelry types browsable with editorial presentation',
        'VIP list builds repeat luxury customer pipeline for private sales and drops',
      ],
    },
  },
];
