'use client'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'AI Playground', href: '#ai-playground' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Clients', href: '#clients' },
  ];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 20);

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || 'home');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 flex-shrink-0">
              <img
                src="/images/alex.jpeg"
                alt="Alex Thompson"
                className="w-full h-full rounded-full object-cover border border-gray-150 shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#14a800] border-2 border-white rounded-full" />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-200">
              Alex Thompson
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1) ||
                (link.href === '#home' && activeSection === '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`relative font-semibold text-sm uppercase tracking-wide transition-all duration-300 group ${isActive
                      ? 'text-[#14a800]'
                      : 'text-gray-800 hover:text-[#14a800]'
                    }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#14a800] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  ></span>
                </a>
              );
            })}
            <a
              href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow"
            >
              <span className="w-4.5 h-4.5 rounded-full bg-[#14a800] flex items-center justify-center text-white text-[9px] font-black tracking-tighter leading-none pb-[2px] pr-[0.5px] select-none">
                up
              </span>
              <span>Book a Call on Upwork</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 border-t border-gray-200 shadow-md">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1) ||
                (link.href === '#home' && activeSection === '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`relative font-semibold text-sm uppercase tracking-wide py-2 transition-all duration-300 ${isActive
                      ? 'text-[#14a800]'
                      : 'text-gray-800 hover:text-[#14a800]'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-[#14a800]"></span>
                  )}
                </a>
              );
            })}
            <a
              href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-full text-sm font-semibold transition-all duration-200 mt-2 shadow-md"
            >
              <span className="w-4.5 h-4.5 rounded-full bg-[#14a800] flex items-center justify-center text-white text-[9px] font-black tracking-tighter leading-none pb-[2px] pr-[0.5px] select-none">
                up
              </span>
              <span>Book a Call on Upwork</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
