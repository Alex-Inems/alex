'use client'
import React, { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  const textLines = [
    "I dont just write code, I solve business problems with technology.",
    "For over 5 years I have been the person founders and teams call when they need to turn a messy idea into a scalable product.",
    "I operate across the full stack: React and modern front-end, powerful APIs, optimized databases, and cloud systems built to last.",
    "I dont build features for the sake of it, I eliminate bottlenecks, cut wasted time, and create solutions that drive revenue.",
    "I have rescued failing projects, rebuilt products from scratch, and delivered results that competitors cant match.",
    "That is the 10x difference: I make complexity disappear and leave clients with systems that just work."
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative bg-white py-16 md:py-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 -left-32 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 transition-all duration-[2000ms] ease-out ${isVisible ? 'translate-x-0 scale-100' : '-translate-x-32 scale-75'}`}></div>
        <div className={`absolute bottom-20 -right-32 w-80 h-80 bg-gradient-to-l from-pink-100 to-orange-100 rounded-full opacity-20 transition-all duration-[2500ms] ease-out delay-300 ${isVisible ? 'translate-x-0 scale-100' : 'translate-x-32 scale-75'}`}></div>
        
        {/* Floating particles */}
        <div className={`absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full transition-all duration-[3000ms] ease-out delay-1000 ${isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-full h-full bg-blue-400 rounded-full animate-pulse"></div>
        </div>
        <div className={`absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400 rounded-full transition-all duration-[3500ms] ease-out delay-1200 ${isVisible ? 'opacity-40 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="w-full h-full bg-purple-400 rounded-full animate-ping"></div>
        </div>
        <div className={`absolute top-1/2 left-1/6 w-1 h-1 bg-pink-500 rounded-full transition-all duration-[4000ms] ease-out delay-1400 ${isVisible ? 'opacity-50 translate-y-0' : 'opacity-0 translate-y-12'}`}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content - Slide in from left */}
          <div className="relative">
            {/* Animated side accent */}
            <div className={`absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform origin-top transition-all duration-1000 delay-500 ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}></div>
            
            {/* Title with dramatic entrance */}
            <div className="relative mb-8 overflow-hidden">
              <h2 className={`text-5xl md:text-6xl font-bold text-gray-900 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
                <span className="inline-block">About</span>
                <span className={`inline-block ml-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transform transition-all duration-1200 ease-out delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                  Me
                </span>
              </h2>
              
              {/* Expanding underline */}
              <div className="relative mt-4">
                <div className={`absolute left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform transition-all duration-1500 ease-out delay-700 ${isVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}></div>
                <div className={`absolute left-0 h-1 bg-white rounded-full transform transition-all duration-2000 ease-out delay-900 ${isVisible ? 'w-32 opacity-0' : 'w-0 opacity-100'}`}></div>
              </div>
            </div>

            {/* Staggered text animation from left */}
            <div className="mb-10 space-y-5">
              {textLines.map((line, index) => (
                <div key={index} className="overflow-hidden">
                  <p 
                    className={`text-lg text-gray-700 leading-relaxed transform transition-all duration-800 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
                    style={{ 
                      transitionDelay: `${800 + index * 150}ms`,
                    }}
                  >
                    {line}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons with slide and bounce */}
            <div className={`flex flex-wrap gap-6 mb-8 transform transition-all duration-1000 ease-out delay-[1800ms] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
              <a
                href="#contact"
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                <span className="relative z-10 flex items-center">
                  Get In Touch
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
              
              <a
                href="#"
                className="group relative px-10 py-5 border-2 border-gray-300 text-gray-800 rounded-xl font-semibold overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-xl hover:border-gray-900"
              >
                <div className="absolute inset-0 bg-gray-900 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center">
                  Download CV
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Geometric Illustration - Dramatic slide in from right */}
          <div className="hidden md:flex justify-center items-center">
            <div 
              className={`relative w-full h-96 rounded-3xl shadow-2xl overflow-hidden cursor-pointer group transform transition-all duration-1200 ease-out delay-300 ${isVisible ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-16 opacity-0 rotate-3'}`}
              onMouseMove={handleMouseMove}
            >
              {/* Layered gradient backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 transition-all duration-1000"></div>
              <div 
                className="absolute inset-0 bg-gradient-to-tl from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-1000"
                style={{
                  transform: `translate(${mousePosition.x * 8 - 4}px, ${mousePosition.y * 8 - 4}px) scale(1.1)`
                }}
              ></div>
              
              {/* Advanced geometric patterns */}
              <div className="absolute inset-0 opacity-40">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="hexGrid" width="40" height="35" patternUnits="userSpaceOnUse">
                      <path d="M20 0 L30 17.5 L20 35 L10 17.5 Z" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                    </pattern>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hexGrid)" />
                  
                  {/* Dynamic triangular formations */}
                  <polygon 
                    points="0,0 400,0 200,400" 
                    fill="white" 
                    opacity="0.1"
                    filter="url(#glow)"
                    className="group-hover:opacity-25 transition-all duration-700"
                    style={{
                      transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px) rotate(${mousePosition.x * 5}deg)`
                    }}
                  />
                  <polygon 
                    points="400,0 400,400 0,200" 
                    fill="white" 
                    opacity="0.08"
                    filter="url(#glow)"
                    className="group-hover:opacity-20 transition-all duration-900"
                    style={{
                      transform: `translate(${-mousePosition.x * 10}px, ${mousePosition.y * 10}px) rotate(${-mousePosition.y * 3}deg)`
                    }}
                  />
                  <polygon 
                    points="0,400 200,0 400,400" 
                    fill="white" 
                    opacity="0.12"
                    filter="url(#glow)"
                    className="group-hover:opacity-25 transition-all duration-800"
                    style={{
                      transform: `translate(${mousePosition.x * 8}px, ${-mousePosition.y * 8}px) rotate(${mousePosition.x * 2}deg)`
                    }}
                  />
                </svg>
              </div>

              {/* Floating 3D geometric shapes */}
              <div className="absolute top-12 left-12">
                <div className={`w-6 h-6 bg-white bg-opacity-50 rounded-full transform transition-all duration-2000 delay-1000 ${isVisible ? 'scale-100 rotate-0 translate-y-0' : 'scale-0 rotate-180 translate-y-8'}`} 
                     style={{ boxShadow: '0 0 20px rgba(255,255,255,0.5)' }}></div>
              </div>
              <div className="absolute bottom-16 right-16">
                <div className={`w-8 h-8 bg-white bg-opacity-40 transform rotate-45 transition-all duration-2200 delay-1200 ${isVisible ? 'scale-100 rotate-45' : 'scale-0 rotate-90'}`}
                     style={{ boxShadow: '0 0 25px rgba(255,255,255,0.4)' }}></div>
              </div>
              <div className="absolute top-1/2 right-12 transform -translate-y-1/2">
                <div className={`w-4 h-12 bg-white bg-opacity-35 transform transition-all duration-2400 delay-1400 ${isVisible ? 'scale-100 rotate-12 translate-x-0' : 'scale-0 rotate-45 translate-x-4'}`}
                     style={{ clipPath: 'polygon(0 0, 100% 20%, 80% 100%, 0% 80%)', boxShadow: '0 0 15px rgba(255,255,255,0.3)' }}></div>
              </div>
              <div className="absolute top-1/4 left-1/3">
                <div className={`w-3 h-3 bg-white bg-opacity-60 transform transition-all duration-2600 delay-1600 ${isVisible ? 'scale-100 translate-y-0' : 'scale-0 translate-y-4'}`}
                     style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', boxShadow: '0 0 18px rgba(255,255,255,0.6)' }}></div>
              </div>

              {/* Enhanced interactive glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 200px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)`
                }}
              ></div>

              {/* Animated border system */}
              <div className="absolute inset-0 rounded-3xl border border-white border-opacity-30 group-hover:border-opacity-60 transition-all duration-500"></div>
              
              {/* Rotating rainbow border */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-40 transition-all duration-700 blur-sm animate-spin" style={{ animationDuration: '10s' }}></div>
              </div>

              {/* Pulsing inner glow */}
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;