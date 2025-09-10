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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const textLines = [
    "I don’t just write code — I build products that solve real business problems.",
    "For 5+ years, I’ve been the person founders call when they need to turn rough ideas into scalable products.",
    "As a Next.js developer, I specialize in clean UI, powerful APIs, and optimized databases — all working seamlessly together.",
    "I’ve helped teams rescue failing projects, rebuild from scratch, and ship systems that just work.",
    "That’s the difference I bring: clarity, speed, and results that move the business forward."
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative bg-white py-20 md:py-28 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 -left-32 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 transition-all duration-[2000ms] ease-out ${isVisible ? 'translate-x-0 scale-100' : '-translate-x-32 scale-75'}`}></div>
        <div className={`absolute bottom-20 -right-32 w-80 h-80 bg-gradient-to-l from-pink-100 to-orange-100 rounded-full opacity-20 transition-all duration-[2500ms] ease-out delay-300 ${isVisible ? 'translate-x-0 scale-100' : 'translate-x-32 scale-75'}`}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          
          {/* Left: Text */}
          <div>
            {/* Heading */}
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="mt-3 mb-8 h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

            {/* Short paragraphs */}
            <div className="space-y-4">
              {textLines.map((line, i) => (
                <p
                  key={i}
                  className={`text-base md:text-lg text-gray-700 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${400 + i * 120}ms` }}
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Buttons */}
            <div className={`mt-8 flex gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <a
                href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Get In Touch
              </a>
              <a
                href="#Projects"
                className="px-8 py-4 border-2 border-gray-300 text-gray-800 rounded-xl font-semibold hover:border-gray-900 hover:scale-105 transition"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right: YouTube video */}
          <div className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed//JF95wa5ss-0"
              title="About Me Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
