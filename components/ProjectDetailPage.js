'use client'
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import ProjectNavbar from '@/components/ProjectNavbar';

// ── Icon renderer — string key → inline SVG ───────────────────────────────────
const ICONS = {
  code: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  database: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M21 19c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14M21 5v14" />
    </svg>
  ),
  settings: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  mail: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  qr: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12v.01M4 4h4v4H4zm12 0h4v4h-4zM4 16h4v4H4z" />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  search: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  layout: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  payment: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  bolt: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  book: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  brain: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

// ── Intersection-observer animation hook ─────────────────────────────────────
const useReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
};

// ── Reusable primitives ───────────────────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#14a800] mb-3">
    {children}
  </span>
);

const SectionHeading = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
    {children}
  </h2>
);

const Tag = ({ children }) => (
  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full border border-gray-200">
    {children}
  </span>
);

const ProblemPoint = ({ children }) => (
  <li className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
    <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
      <svg className="w-2.5 h-2.5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </span>
    <span>{children}</span>
  </li>
);

const SolutionFeature = ({ title, description, icon }) => (
  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 text-gray-700">
      {ICONS[icon] ?? ICONS.bolt}
    </div>
    <div>
      <h4 className="text-sm font-bold text-gray-900 mb-1">{title}</h4>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

const MetricCard = ({ value, label }) => (
  <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
    <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-xs text-gray-500 font-medium leading-snug">{label}</div>
  </div>
);

const ImpactPoint = ({ children }) => (
  <li className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
    <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-[#14a800]/10 flex items-center justify-center">
      <svg className="w-2.5 h-2.5 text-[#14a800]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span>{children}</span>
  </li>
);

const RelatedCard = ({ project }) => (
  <Link
    href={project.detailPage}
    className="group relative aspect-[16/10] rounded-[20px] overflow-hidden border border-gray-200/50 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 block"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <p className="text-white text-sm font-bold">{project.title}</p>
    </div>
  </Link>
);

const ProjectFooter = () => (
  <footer className="bg-white border-t border-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-9 h-9 flex-shrink-0">
          <img src="/images/alex.jpeg" alt="Alex Thompson" className="w-full h-full rounded-full object-cover border border-gray-150 shadow-sm" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#14a800] border-2 border-white rounded-full" />
        </div>
        <span className="text-lg font-bold text-gray-900">Alex Thompson</span>
      </Link>
      <a
        href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-7 py-3.5 bg-white border border-gray-200 shadow-lg hover:shadow-xl rounded-full transform hover:scale-[1.03] transition-all duration-300"
      >
        <span className="w-6 h-6 rounded-full bg-[#14a800] flex items-center justify-center text-white text-[10px] font-black tracking-tighter leading-none pb-[2px] pr-[1px] select-none">up</span>
        <span className="text-sm font-semibold text-gray-800 tracking-wide">Book a Call on Upwork</span>
      </a>
      <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Alex Thompson</p>
    </div>
  </footer>
);

// ── Main exported component ───────────────────────────────────────────────────
const ProjectDetailPage = ({ project, allProjects }) => {
  const [heroRef, heroVisible]       = useReveal();
  const [challengeRef, challengeVisible] = useReveal();
  const [solutionRef, solutionVisible]   = useReveal();
  const [impactRef, impactVisible]       = useReveal();
  const [relatedRef, relatedVisible]     = useReveal();

  const related = allProjects.filter(p => p.id !== project.id).slice(0, 3);
  const halfLen = Math.ceil(project.impact.points.length / 2);

  return (
    <div className="bg-white min-h-screen">
      <ProjectNavbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-0 bg-white">
        <div
          ref={heroRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Meta strip */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14a800]">
              {project.overview.type}
            </span>
            <span className="text-gray-300">·</span>
            <span className="text-xs text-gray-500 font-medium">{project.overview.duration}</span>
            <span className="text-gray-300">·</span>
            <span className="text-xs text-gray-500 font-medium">{project.overview.role}</span>
            <span className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 bg-[#14a800]/10 text-[#14a800] rounded-full text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14a800] animate-pulse" />
              {project.overview.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-4">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 font-light mb-8 max-w-2xl">
            {project.tagline}
          </p>

          {/* Tags + CTA row */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            {project.hasLiveSite !== false && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-black transition-colors duration-200 shadow-lg"
              >
                <span>View Live Site</span>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            )}
          </div>

          {/* Hero image */}
          <div className="w-full rounded-[24px] overflow-hidden border border-gray-100 shadow-2xl aspect-[16/9]">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ── Overview strip ────────────────────────────────────────────────── */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Project Type', value: project.overview.type },
              { label: 'Timeline',     value: project.overview.duration },
              { label: 'My Role',      value: project.overview.role },
              { label: 'Status',       value: project.overview.status },
            ].map(item => (
              <div key={item.label} className="text-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                <p className="text-base font-bold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Challenge ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div
          ref={challengeRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            challengeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>The Challenge</SectionLabel>
              <SectionHeading>{project.challenge.heading}</SectionHeading>
              <p className="text-gray-500 text-base leading-relaxed font-light mb-8">
                {project.challenge.summary}
              </p>
              <ul className="space-y-4">
                {project.challenge.points.map((point, i) => (
                  <ProblemPoint key={i}>{point}</ProblemPoint>
                ))}
              </ul>
            </div>

            {project.images[0] && (
              <div className="rounded-[20px] overflow-hidden border border-gray-100 shadow-lg aspect-[4/3]">
                <img
                  src={project.images[0]}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── The Solution ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50/50 border-b border-gray-100">
        <div
          ref={solutionRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            solutionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-left max-w-2xl mb-14">
            <SectionLabel>The Solution</SectionLabel>
            <SectionHeading>{project.solution.heading}</SectionHeading>
            <p className="text-gray-500 text-base leading-relaxed font-light">
              {project.solution.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {project.solution.features.map((feature, i) => (
              <SolutionFeature
                key={i}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>

          {project.images[1] && (
            <div className="w-full rounded-[24px] overflow-hidden border border-gray-100 shadow-xl aspect-[16/8]">
              <img
                src={project.images[1]}
                alt={`${project.title} detail`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}
        </div>
      </section>

      {/* ── The Impact ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div
          ref={impactRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            impactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-left max-w-2xl mb-14">
            <SectionLabel>The Results</SectionLabel>
            <SectionHeading>{project.impact.heading}</SectionHeading>
          </div>

          {project.impact.metrics?.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
              {project.impact.metrics.map((m, i) => (
                <MetricCard key={i} value={m.value} label={m.label} />
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-3xl">
            <ul className="space-y-4">
              {project.impact.points.slice(0, halfLen).map((p, i) => (
                <ImpactPoint key={i}>{p}</ImpactPoint>
              ))}
            </ul>
            <ul className="space-y-4">
              {project.impact.points.slice(halfLen).map((p, i) => (
                <ImpactPoint key={i}>{p}</ImpactPoint>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Related Projects ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div
          ref={relatedRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            relatedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-end justify-between mb-12">
            <div>
              <SectionLabel>Portfolio</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">More Projects</h2>
            </div>
            <Link
              href="/#projects"
              className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors duration-200 flex items-center gap-1.5 group"
            >
              <span>View All</span>
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map(p => (
              <RelatedCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <ProjectFooter />
    </div>
  );
};

export default ProjectDetailPage;
