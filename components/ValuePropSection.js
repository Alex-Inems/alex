'use client'
import React, { useState, useEffect, useRef } from 'react';

const ValuePropSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pitfalls = [
    {
      title: 'Drowning in Competition',
      description: "You are competing with thousands of copycat template websites launched daily, making your business blend in. You are losing potential clients because your site looks just like everyone else instead of standing out.",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      )
    },
    {
      title: 'Poor Conversions',
      description: "You might be getting visitors, but you aren't seeing them turn into paying clients. You are wasting traffic and marketing budget because your website lacks high-converting UX triggers to get people to contact you.",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Poor Design',
      description: "Your website is slow, outdated, or hard to navigate, causing prospects to lose trust in you within 50 milliseconds. You are driving high-value leads straight to your competitors because your design doesn't reflect your actual expertise.",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="value-prop"
      className="relative bg-white py-20 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className={`inline-block px-4 py-1.5 bg-gray-100 text-black text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-full mb-4 shadow-sm select-none transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Why you should work with me
          </span>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-2 mb-6 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Is this your business right now?
          </h2>

          <div className={`flex justify-center mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="h-[2px] w-16 bg-black rounded-full"></div>
          </div>

          <p className={`text-base sm:text-lg text-gray-700 leading-relaxed font-light transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            My websites make visitors choose you over your competitors. <br className="hidden sm:inline" />
            My websites build relationships and connections with your customers.
          </p>
        </div>

        {/* 3 Business Pitfalls Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pitfalls.map((pitfall, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-2 flex flex-col justify-between transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + i * 200}ms` }}
            >
              <div>
                {/* Minimalist Black/Gray Icon Box */}
                <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {pitfall.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-black transition-colors duration-300">
                  {pitfall.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-600 text-sm leading-relaxed font-light group-hover:text-gray-900 transition-colors duration-300">
                  {pitfall.description}
                </p>
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

export default ValuePropSection;
