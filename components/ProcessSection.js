'use client'
import React, { useState, useEffect, useRef } from 'react';

const ProcessSection = () => {
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

  const steps = [
    {
      step: 'Step #1',
      title: 'Strategy Call',
      description: "I'll hop on a strategy call to discover what you need and what's stopping your brand from growing.",
      illustration: (
        <div className="relative w-full h-24 mt-8 flex items-center justify-between px-2">
          {/* Custom curved dotted line */}
          <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none">
            <path
              d="M 20 50 Q 80 15, 140 45 T 280 50"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
          
          {/* Cal.com circle */}
          <div className="z-10 w-12 h-12 rounded-full bg-[#EAEAEA] border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-800 shadow-sm transform hover:scale-105 transition-transform duration-300 select-none">
            Cal.com
          </div>
          
          {/* Zoom circle */}
          <div className="z-10 w-12 h-12 rounded-full bg-[#0082FF] flex items-center justify-center text-white shadow-md transform -translate-y-4 hover:scale-105 transition-transform duration-300">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Trello circle */}
          <div className="z-10 w-12 h-12 rounded-xl bg-[#0079BF] flex items-center justify-center text-white shadow-md transform translate-y-2 hover:scale-105 transition-transform duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm3 2a1 1 0 00-1 1v4a1 1 0 001 1h2a1 1 0 001-1V7a1 1 0 00-1-1H6zm6 0a1 1 0 00-1 1v7a1 1 0 001 1h2a1 1 0 001-1V7a1 1 0 00-1-1h-2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )
    },
    {
      step: 'Step #2',
      title: 'Building the Product',
      description: "I'll start designing and building the products. Products that sell and build a premium brand.",
      illustration: (
        <div className="relative w-full h-24 mt-8 flex items-center justify-between px-2">
          {/* Custom curved dotted line */}
          <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none">
            <path
              d="M 10 70 Q 70 65, 120 40 T 280 50"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
          
          <div className="flex gap-2.5 z-10">
            {/* Figma Icon */}
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-md transform translate-y-4 hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5" viewBox="0 0 12 18" fill="none">
                <path d="M3 4.5a1.5 1.5 0 1 1 3 0v4.5H3a1.5 1.5 0 1 1 0-3z" fill="#F24E1E"/>
                <path d="M3 13.5A1.5 1.5 0 0 1 3 12h3v1.5a1.5 1.5 0 0 1-3 0z" fill="#1ABCFE"/>
                <path d="M6 12a1.5 1.5 0 1 1 3 0v1.5a1.5 1.5 0 0 1-3 0V12z" fill="#0ACF83"/><path d="M6 4.5A1.5 1.5 0 0 1 9 4.5v4.5H6V4.5z" fill="#FF7262"/><path d="M3 9a1.5 1.5 0 1 1 3 0H3z" fill="#A259FF"/>
              </svg>
            </div>

            {/* Adobe Illustrator */}
            <div className="w-10 h-10 rounded-xl bg-[#261300] border border-[#FF9A00] flex items-center justify-center text-xs font-bold text-[#FF9A00] shadow-md transform translate-y-4 hover:scale-105 transition-transform duration-300 select-none">
              Ai
            </div>
          </div>

          {/* Shopify bag */}
          <div className="z-10 w-11 h-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-md transform -translate-y-2 hover:scale-105 transition-transform duration-300">
            <svg className="w-6 h-6 text-[#95BF47]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.5h-3v-1A2.5 2.5 0 0013.5 3h-3A2.5 2.5 0 008 5.5v1H5a1 1 0 00-1 1v13a1 1 0 001 1h14a1 1 0 001-1v-13a1 1 0 00-1-1zM9.5 5.5c0-.8.7-1.5 1.5-1.5h3c.8 0 1.5.7 1.5 1.5v1h-6v-1z M12 9a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </div>

          {/* Framer Icon */}
          <div className="z-10 w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white shadow-md transform hover:scale-105 transition-transform duration-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0h12v12h-12zM0 12h12v12l-12-12zM0 0h12v12h-12z" />
            </svg>
          </div>
        </div>
      )
    },
    {
      step: 'Step #3',
      title: 'Launch & Track',
      description: "I'll launch the product / designs and set up analytics and tracking to observe performance.",
      illustration: (
        <div className="relative w-full h-24 mt-8 flex items-center justify-between px-6">
          {/* Custom curved dotted line */}
          <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none">
            <path
              d="M 10 50 Q 80 65, 150 25 T 290 50"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
          
          {/* Paperplane / Telegram */}
          <div className="z-10 w-12 h-12 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-black transform -rotate-12 hover:scale-105 transition-transform duration-300">
            <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>

          {/* Google Analytics / Bar chart */}
          <div className="z-10 w-12 h-12 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center text-black hover:scale-105 transition-transform duration-300">
            <svg className="w-6 h-6 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
            </svg>
          </div>
        </div>
      )
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative bg-white py-20 md:py-32 overflow-hidden border-t border-gray-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className={`inline-block px-4 py-1.5 bg-gray-100 text-black text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-full mb-4 shadow-sm select-none transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            My process
          </span>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-2 mb-6 leading-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            How I get things done.
          </h2>

          <div className={`flex justify-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="h-[2px] w-16 bg-black rounded-full"></div>
          </div>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`group bg-white rounded-[32px] border border-gray-100 p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-2 flex flex-col justify-between min-h-[420px] transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + i * 200}ms` }}
            >
              <div>
                {/* Step indicator */}
                <div className="text-sm font-semibold text-gray-400 mb-2 tracking-wide">
                  {step.step}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-black transition-colors duration-300">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light mb-8 group-hover:text-gray-900 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {/* Bottom Brand Flow Illustration */}
              <div className="mt-auto w-full pt-4 border-t border-gray-50/50">
                {step.illustration}
              </div>
            </div>
          ))}
        </div>

        {/* Book a Call Button */}
        <div className={`flex justify-center mt-16 transition-all duration-1000 delay-[1000ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a
            href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto cursor-pointer"
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

export default ProcessSection;
