'use client'
import React, { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-white py-20 md:py-32 overflow-hidden border-t border-gray-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid replicating the requested layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Overlapping Images & Floating Upwork Pill */}
          <div
            className={`lg:col-span-6 flex flex-col items-center transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Overlapping Images container */}
            <div className="relative w-full max-w-[480px]">
              
              {/* Large Image Card */}
              <div className="w-[82%] aspect-[4/3.4] rounded-[36px] overflow-hidden border border-gray-200/50 shadow-lg relative bg-gray-50">
                <img
                  src="/images/alex.jpeg"
                  alt="Alex Thompson Portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small Overlapping Card - Upwork Success Badge */}
              <div className="absolute -bottom-6 right-0 w-[52%] aspect-[1.2] rounded-[24px] bg-white border border-gray-250 shadow-2xl p-5 flex flex-col justify-between z-20 transform hover:scale-105 transition-transform duration-300">
                {/* Top: Upwork logo & Job Success */}
                <div className="flex justify-between items-start">
                  <span className="w-8 h-8 rounded-full bg-[#14a800] flex items-center justify-center text-white text-[12px] font-black tracking-tighter leading-none pb-[2px] pr-[0.5px] select-none">
                    up
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    freelancer
                  </span>
                </div>
                
                {/* Middle: Rating and Title */}
                <div className="my-2">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-sm font-black text-gray-900">5.0</span>
                    <div className="flex text-amber-500 text-[10px]">★★★★★</div>
                  </div>
                  <p className="text-xs font-bold text-gray-800 leading-tight">
                    Top Rated Developer
                  </p>
                </div>

                {/* Bottom: Stat indicator */}
                <div className="pt-2 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-[9px] font-semibold text-gray-400 uppercase">
                    Job Success
                  </span>
                  <span className="text-xs font-black text-[#14a800] bg-[#14a800]/10 px-2 py-0.5 rounded-full">
                    100%
                  </span>
                </div>
              </div>

            </div>

            {/* Centered Floating Upwork Pill */}
            <div className="mt-14">
              <a
                href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-white border border-gray-200 shadow-xl hover:shadow-2xl rounded-full transform hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                {/* Clean white-on-green Upwork logo emblem */}
                <span className="w-6 h-6 rounded-full bg-[#14a800] flex items-center justify-center text-white text-[10px] font-black tracking-tighter leading-none pb-[2px] pr-[1px] select-none">
                  up
                </span>
                <span className="text-sm font-semibold text-gray-800 tracking-wide font-sans">
                  Book a Call on Upwork
                </span>
              </a>
            </div>

          </div>

          {/* Right Column: About Content */}
          <div
            className={`lg:col-span-6 text-left transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              About Me
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              A senior full-stack developer building complete, premium digital products.
            </h3>
            
            <div className="space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed font-light">
              <p>
                I'm a full-stack engineer with over 5 years of experience building complete end-to-end web applications. I handle everything from designing premium, custom-coded layouts to architecting secure backends, robust database structures, and high-performance frontend interfaces.
              </p>
              <p>
                My background allows me to bridge the gap between creative visual layout and scalable software engineering. I specialize in Next.js, React, Node.js, and Supabase, building tailored systems that increase user trust and drive business conversions.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors duration-200 shadow-md hover:shadow-lg w-auto cursor-pointer"
              >
                Read More
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
