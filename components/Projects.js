'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const automationProjects = [
  {
    id: 7,
    title: 'n8n Leads Classifier',
    highlight: 'AI triage for every inbound message',
    description:
      'Next.js contact form wired to an n8n webhook. GPT classifies each message as a lead, opportunity, question, or spam, then logs to Google Sheets, sends Gmail alerts, and surfaces everything in an admin dashboard.',
    tags: ['n8n', 'Next.js', 'OpenAI', 'Google Sheets'],
    image: '/images/n8n lead classifier.png',
    detailPage: '/n8n-leads-classifier',
    metrics: ['4 categories', '<3s processing', 'Admin dashboard'],
  },
  {
    id: 8,
    title: 'LinkedIn Post Generator',
    highlight: 'Professional posts in under 5 seconds',
    description:
      'Next.js UI sends topic and tone to an n8n webhook. GPT writes a LinkedIn-ready post, logs it to Google Sheets, emails the admin, and returns the result instantly via responseNode, all in 3–5 seconds.',
    tags: ['n8n', 'Next.js', 'OpenAI', 'Gmail'],
    image: '/images/linkedin post generator.png',
    detailPage: '/linkedin-post-generator',
    metrics: ['3–5s execution', 'Sheets history', 'Instant response'],
  },
];

const shopifyProjects = [
  {
    id: 10,
    title: 'Oreo',
    description:
      'Custom Shopify DTC sneaker store with premium Yeezy, Nike & Adidas, featured drops, shop-by-style collections, authenticity guarantee, pre-order flows, and member email capture. Live storefront with cart, search, and account.',
    tags: ['Shopify', 'E-commerce', 'DTC', 'Liquid'],
    image: '/images/yowaa.png',
    link: 'https://www.oreo.ink',
    detailPage: '/oreo',
  },
  {
    id: 11,
    title: 'Yangaa',
    description:
      'Premium Shopify beauty marketplace with French pharmacy, K-beauty, luxury skincare & hair brands, mega-menu navigation, sale carousels, brand-of-the-month features, reviews, and newsletter capture.',
    tags: ['Shopify', 'E-commerce', 'Beauty', 'Liquid'],
    image: '/images/yanga.png',
    link: 'https://www.yangaa.store',
    detailPage: '/yangaa',
  },
  {
    id: 12,
    title: 'Aurum & Co. Jewelry',
    description:
      'Luxury Shopify fine jewelry store with flash sale countdown, GIA-certified pieces, category shop grid, concierge messaging, VIP email list, and insured checkout for rings, necklaces, watches & bridal.',
    tags: ['Shopify', 'E-commerce', 'Luxury', 'Liquid'],
    image: '/images/aurum.png',
    link: 'https://aurum-co-21.myshopify.com/',
    detailPage: '/aurum',
  },
  {
    id: 9,
    title: 'Inema Construction',
    description:
      'Custom Shopify corporate site for PT Inema Konstruksi with editorial dark-mode design, landmark portfolio, service showcase, project inquiry flows, and admin-managed content. Live at inema.site.',
    tags: ['Shopify', 'Corporate', 'Liquid', 'Booking'],
    image: '/images/inema.png',
    link: 'https://inema.site',
    detailPage: '/inema',
  },
  {
    id: 6,
    title: 'Sturdee Education Platform',
    description:
      'Premium Shopify EdTech storefront with courses, programs, and tutorials, session booking, student accounts, instructor profiles, and admin-managed enrolments. Live at sturdee.online.',
    tags: ['Shopify', 'EdTech', 'Liquid', 'Booking'],
    image: '/images/sturdee.png',
    link: 'https://sturdee.online',
    detailPage: '/sturdee',
  },
];

const fullStackProjects = [
  {
    id: 13,
    title: 'Inkamoto Tours',
    description:
      'Premium motorcycle tour site for Peru road trips, with tour packages, bike rental options, multilingual navigation (FR/EN/ES), FAQ, testimonials, team profiles, and lead capture. Live at inkamototours.com.',
    tags: ['Webflow', 'Travel', 'Multilingual', 'CMS'],
    image: '/images/inkamoto.png',
    link: 'https://www.inkamototours.com',
    detailPage: '/inkamoto',
  },
  {
    id: 3,
    title: 'Blogging Platform (Blogme)',
    description:
      'Multi-user SaaS blogging platform with real-time publishing, SEO architecture, D3 analytics, and one-click social cross-sharing.',
    tags: ['Next.js', 'Express', 'D3.js', 'Firebase'],
    image: '/images/blogme (2).png',
    link: 'https://www.blogme.live',
    detailPage: '/blogme',
  },
  {
    id: 4,
    title: 'Events Ticketing Platform',
    description:
      'End-to-end ticketing with Paystack payments, cryptographic QR codes, automated email delivery, and a real-time door-scanning dashboard.',
    tags: ['React', 'Supabase', 'Paystack', 'Tailwind'],
    image: '/images/eventie (2).png',
    link: 'https://www.eventie.live',
    detailPage: '/eventie',
  },
];

const AutomationCard = ({ project, priority = false }) => (
  <div className="group flex flex-col rounded-[28px] overflow-hidden border border-gray-200/80 bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
    <div className="relative bg-[#1a1a2e] aspect-[16/9] overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-contain p-3 sm:p-4 transition-transform duration-700 group-hover:scale-[1.02]"
        priority={priority}
      />
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className="px-2.5 py-1 bg-[#ff6d5a] text-white text-[10px] font-bold tracking-widest uppercase rounded-md shadow-sm">
          n8n
        </span>
        <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold tracking-wide uppercase rounded-md">
          Automation
        </span>
      </div>
    </div>

    <div className="flex flex-col flex-1 p-6 sm:p-8">
      <p className="text-[11px] font-semibold text-[#ff6d5a] uppercase tracking-widest mb-2">
        {project.highlight}
      </p>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mb-3 group-hover:text-black transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed font-light mb-5 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.metrics.map((m) => (
          <span
            key={m}
            className="px-2.5 py-1 bg-gray-50 text-gray-600 text-[11px] font-medium rounded-full border border-gray-100"
          >
            {m}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 border border-gray-200 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-5 border-t border-gray-100">
        <Link
          href={project.detailPage}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gray-900 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-colors duration-200"
        >
          Case Study
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

const WebCard = ({ project, priority = false }) => (
  <div className="group flex flex-col rounded-[24px] overflow-hidden border border-gray-200/60 bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
    <div className="relative aspect-[16/10] overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 600px"
        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <div className="flex flex-col flex-1 p-5 sm:p-6">
      <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
        {project.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed font-light mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 border border-gray-200 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2.5 pt-4 border-t border-gray-100">
        <Link
          href={project.detailPage}
          className="inline-flex items-center gap-1 px-4 py-2 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors"
        >
          Case Study
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3.5 py-2 text-gray-600 border border-gray-200 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors"
        >
          View Live
        </a>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative bg-white pt-28 pb-20 md:pt-32 md:pb-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-800 text-xs font-semibold tracking-wide uppercase rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
            My Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
            I'm a full-stack developer. Here are my latest web apps, SaaS platforms, Shopify stores, and n8n automations, from ticketing systems to AI-powered lead pipelines.
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Full-Stack Web Products</h3>
              <p className="text-sm text-gray-500 font-light">SaaS platforms, dashboards &amp; custom web apps</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {fullStackProjects.map((project, index) => (
              <WebCard key={project.id} project={project} priority={index < 2} />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Shopify Stores</h3>
              <p className="text-sm text-gray-500 font-light">E-commerce storefronts built to convert</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {shopifyProjects.map((project) => (
              <WebCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-[#ff6d5a] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Automations</h3>
              <p className="text-sm text-gray-500 font-light">n8n workflows that connect your apps and APIs</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {automationProjects.map((project) => (
              <AutomationCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <a
            href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 cursor-pointer"
          >
            <span className="w-6 h-6 rounded-full bg-[#14a800] flex items-center justify-center text-white text-[10px] font-black tracking-tighter leading-none pb-[2px] pr-[1px] select-none">
              up
            </span>
            <span>Book a Call on Upwork</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
