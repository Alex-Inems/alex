'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const ProjectNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Back link */}
          <Link
            href="/#projects"
            className="flex items-center gap-2 group text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-semibold uppercase tracking-wide">Back to Portfolio</span>
          </Link>

          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <img
                src="/images/alex.jpeg"
                alt="Alex Thompson"
                className="w-full h-full rounded-full object-cover border border-gray-150 shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#14a800] border-2 border-white rounded-full" />
            </div>
            <span className="text-lg font-bold text-gray-900 group-hover:text-black transition-colors duration-200">
              Alex Thompson
            </span>
          </Link>

          {/* CTA */}
          <a
            href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800 rounded-full text-xs font-semibold transition-all duration-200 shadow-sm hover:shadow"
          >
            <span className="w-4 h-4 rounded-full bg-[#14a800] flex items-center justify-center text-white text-[9px] font-black tracking-tighter leading-none pb-[2px] select-none">
              up
            </span>
            <span>Book a Call</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavbar;
