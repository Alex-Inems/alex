'use client'
import React, { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const brandingDesigns = [
    { title: 'Bespoke Logomarks', tag: 'Identity', img: '/images/biker1.jpg' },
    { title: 'Type Systems', tag: 'Styleguide', img: '/images/blog3.jpg' },
    { title: 'Editorial Design', tag: 'Creative', img: '/images/blog1.jpg' },
    { title: 'Brand Guidelines', tag: 'Manual', img: '/images/partners.png' },
    { title: 'Interface Theme', tag: 'UI Kit', img: '/images/creative.png' },
  ];

  const doubledBranding = [...brandingDesigns, ...brandingDesigns];

  const showcase1 = [
    { img: '/images/oreo (2).png' },
    { img: '/images/xtraspare (1).png' },
    { img: '/images/blogme (2).png' },
    { img: '/images/eventie (2).png' },
    { img: '/images/ama_landing_page.png' }
  ];
  const doubledShowcase1 = [...showcase1, ...showcase1];

  const showcase2 = [
    { img: '/images/xtraspare (2).png' },
    { img: '/images/oreo (4).png' },
    { img: '/images/eventie (4).png' },
    { img: '/images/blogme (3).png' },
    { img: '/images/ama2.jpg' }
  ];
  const doubledShowcase2 = [...showcase2, ...showcase2];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-white py-20 md:py-32 overflow-hidden border-t border-gray-100"
    >
      <style>{`
        @keyframes branding-infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-150px * 5 - 1rem * 5)); }
        }
        @keyframes showcase-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-280px * 5 - 1.5rem * 5)); }
        }
        @keyframes showcase-scroll-right {
          0% { transform: translateX(calc(-280px * 5 - 1.5rem * 5)); }
          100% { transform: translateX(0); }
        }
        .branding-scroll-container {
          overflow: hidden;
          width: 100%;
          position: relative;
          mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
        }
        .branding-scroll-track {
          display: flex;
          width: max-content;
          gap: 1rem;
          animation: branding-infinite-scroll 20s linear infinite;
        }
        .branding-scroll-track:hover {
          animation-play-state: paused;
        }
        
        .showcase-scroll-container {
          overflow: hidden;
          width: 100%;
          position: relative;
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
        .showcase-scroll-track-left {
          display: flex;
          width: max-content;
          gap: 1.5rem;
          animation: showcase-scroll-left 35s linear infinite;
        }
        .showcase-scroll-track-right {
          display: flex;
          width: max-content;
          gap: 1.5rem;
          animation: showcase-scroll-right 35s linear infinite;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className={`inline-block px-4 py-1.5 bg-gray-100 text-black text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-full mb-4 shadow-sm select-none transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            My Services
          </span>
          
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mt-2 mb-6 leading-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Everything you need to scale your business <br className="hidden sm:inline" />
            with the full power of a dedicated senior developer.
          </h2>

          <div className={`flex justify-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="h-[2px] w-16 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Two Columns divided by a gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Branding Section */}
          <div
            className={`flex flex-col h-full justify-between transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">01 / STORE IDENTITY</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Store Branding</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-lg">
                Your Shopify store should feel unmistakably yours. I design bespoke visual identities, product photography layouts, and theme styling that capture attention and build trust from the first scroll.
              </p>
            </div>

            {/* Infinite scrolling branding carousel */}
            <div className="mt-4 w-full">
              <div className="branding-scroll-container">
                <div className="branding-scroll-track">
                  {doubledBranding.map((design, i) => (
                    <div
                      key={i}
                      className="w-[150px] h-[100px] flex-shrink-0 relative rounded-xl overflow-hidden shadow-md border border-gray-100 group cursor-pointer transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg"
                    >
                      <img
                        src={design.img}
                        alt={design.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />
                      
                      {/* Tag */}
                      <div className="absolute top-2 left-2">
                        <span className="px-1.5 py-0.5 bg-white/10 backdrop-blur-md border border-white/20 rounded text-[8px] font-semibold text-white tracking-wide uppercase">
                          {design.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left">
                        <h4 className="text-white text-[10px] font-semibold tracking-wide truncate group-hover:text-gray-200 transition-colors duration-300">
                          {design.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Digital Products Section */}
          <div
            className={`flex flex-col h-full justify-between transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">02 / SHOPIFY & FULL-STACK</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Shopify Stores</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-lg">
                I build custom Shopify storefronts engineered for conversion — theme development, collection architecture, checkout optimisation, and mobile-first product pages. When you outgrow a template, I architect full-stack apps on Next.js and React.
              </p>
            </div>

            {/* Premium large mockup card showcasing website i built */}
            <div className="w-full h-[140px] sm:h-[180px] lg:h-[220px] relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl mt-4">
              <img
                src="/images/yowaa.png"
                alt="Yowaa Shopify store showcase"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-300" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-[10px] font-semibold text-white tracking-wide uppercase">
                  SHOPIFY DEV
                </span>
              </div>
              
              <div className="absolute bottom-5 left-5 right-5 text-left">
                <h4 className="text-white text-base sm:text-lg font-bold tracking-tight mb-1 group-hover:text-gray-200 transition-colors duration-300">
                  Yowaa Footwear Store
                </h4>
                <p className="text-gray-300 text-xs font-light tracking-wide">
                  Custom DTC sneaker storefront with featured drops, collections &amp; pre-order flows.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* n8n Automation Section */}
        <div
          className={`mt-32 pt-20 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">03 / POST-LAUNCH AUTOMATION</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">Store Automations</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-lg">
              After your store goes live, I wire n8n workflows that connect Shopify to the rest of your stack — AI lead classifiers, order notifications, content generation, Google Sheets logging, and CRM pipelines that run without manual intervention.
            </p>
            <div className="flex flex-wrap gap-2">
              {['n8n', 'OpenAI / GPT', 'Webhooks', 'Google Sheets', 'Gmail', 'Shopify'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl">
              <img
                src="/images/n8n lead classifier.png"
                alt="n8n Leads Classifier"
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2 py-0.5 bg-white/10 backdrop-blur-md border border-white/20 rounded text-[9px] font-semibold text-white tracking-wide uppercase mb-2 inline-block">n8n + Shopify</span>
                <h4 className="text-white text-sm font-bold tracking-tight">Leads Classifier</h4>
                <p className="text-gray-300 text-[11px] font-light mt-1">AI triage with webhook, Sheets log & admin dashboard</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl">
              <img
                src="/images/linkedin post generator.png"
                alt="LinkedIn Post Generator"
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2 py-0.5 bg-white/10 backdrop-blur-md border border-white/20 rounded text-[9px] font-semibold text-white tracking-wide uppercase mb-2 inline-block">n8n + Shopify</span>
                <h4 className="text-white text-sm font-bold tracking-tight">LinkedIn Post Generator</h4>
                <p className="text-gray-300 text-[11px] font-light mt-1">Instant AI posts with Sheets history & email alerts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Web Design & Landing Pages Tilted Showcase */}
        <div
          className={`mt-32 pt-20 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center overflow-hidden transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 text-left pr-4">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Web Design & <br />Landing Pages
            </h3>
            <p className="text-lg text-gray-600 font-light mt-6 max-w-md leading-relaxed">
              I design Shopify themes and landing pages that look great, and sell great.
            </p>
          </div>

          {/* Right Column: Tilted Scrolling Showcase */}
          <div className="lg:col-span-7 relative w-full overflow-hidden py-10">
            {/* Tilted wrapper for high-end editorial display */}
            <div className="transform -rotate-[6deg] scale-[1.05] sm:scale-110 flex flex-col gap-6 relative -right-4 sm:-right-16 select-none pointer-events-none">
              
              {/* Row 1: Scrolling Left */}
              <div className="showcase-scroll-container">
                <div className="showcase-scroll-track-left">
                  {doubledShowcase1.map((item, i) => (
                    <div
                      key={i}
                      className="w-[280px] h-[175px] flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg border border-gray-200/80 bg-gray-50"
                    >
                      <img
                        src={item.img}
                        alt="Portfolio Mockup Showcase"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: Scrolling Right */}
              <div className="showcase-scroll-container">
                <div className="showcase-scroll-track-right">
                  {doubledShowcase2.map((item, i) => (
                    <div
                      key={i}
                      className="w-[280px] h-[175px] flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg border border-gray-200/80 bg-gray-50"
                    >
                      <img
                        src={item.img}
                        alt="Portfolio Mockup Showcase"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
