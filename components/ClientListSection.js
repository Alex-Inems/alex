'use client'
import React, { useState, useEffect, useRef } from 'react';

const ClientListSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const clients = [
    {
      name: 'BikeFixup',
      logo: 'https://alexthonpson.live/images/bike.png',
      project: 'E-commerce Platform',
      description: 'Built a comprehensive e-commerce platform with real-time inventory management and payment processing.',
      accent: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      name: 'Creative Builders',
      logo: 'https://alexthonpson.live/images/creative.png',
      project: 'Portfolio Website',
      description: 'Designed and developed a modern portfolio website showcasing creative work with smooth animations.',
      accent: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50'
    },
    {
      name: 'Amazon PPC',
      logo: 'https://alexthonpson.live/images/amazon.png',
      project: 'Financial Dashboard',
      description: 'Created an interactive financial dashboard with data visualization and reporting capabilities.',
      accent: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50'
    },
    {
      name: 'HealthTech Innovations',
      logo: '/placeholder.svg',
      project: 'Patient Management System',
      description: 'Developed a secure patient management system with appointment scheduling and medical records.',
      accent: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      name: 'Dehoni Technologies',
      logo: 'https://alexthonpson.live/images/dehoni.png',
      project: 'Learning Management System',
      description: 'Used my skills as a fullstack developer in mentoring junior frontend developers and building scalable educational platforms.',
      accent: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-50'
    },
    {
      name: 'Xtaspare',
      logo: 'https://alexthonpson.live/images/',
      project: 'Inventory Management',
      description: 'Implemented a real-time inventory management system with barcode scanning and analytics.',
      accent: 'from-teal-500 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-50'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.cardIndex);
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, cardIndex]));
            }, cardIndex * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, cardIndex) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y, cardIndex });
  };

  return (
    <section
      ref={sectionRef}
      id="clients"
      className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32 overflow-hidden"
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating shapes */}
        <div className="absolute top-40 -left-20 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-gradient-to-tl from-pink-100/20 to-orange-100/20 rounded-full" style={{ animation: 'bounce 8s infinite' }}></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating micro-elements */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400 opacity-30 animate-pulse" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute top-2/3 left-1/5 w-1 h-4 bg-pink-400 opacity-25" style={{ clipPath: 'polygon(0 0, 100% 25%, 75% 100%, 0% 75%)', animation: 'bounce 4s infinite' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="overflow-hidden mb-6">
            <h2 className="text-5xl md:text-7xl font-bold transform transition-all duration-1000 translate-y-0 opacity-100">
              <span className="bg-gradient-to-r from-gray-900 via-red-900 to-purple-900 bg-clip-text text-transparent">
                Client Portfolio
              </span>
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto mb-8">
            <p className="text-xl text-gray-700 leading-relaxed transform transition-all duration-800 delay-200 translate-y-0 opacity-100">
              I've had the privilege of working with amazing clients across various industries,
              delivering custom solutions that drive their business forward and exceed expectations.
            </p>
          </div>

          {/* Animated stats counter */}
          <div className="flex justify-center items-center space-x-12 mb-8">
            <div className="text-center transform transition-all duration-1000 delay-400 translate-y-0 opacity-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">6+</div>
              <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center transform transition-all duration-1000 delay-500 translate-y-0 opacity-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">10+</div>
              <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center transform transition-all duration-1000 delay-600 translate-y-0 opacity-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>

          {/* Decorative line */}
          <div className="flex justify-center">
            <div className="w-40 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform transition-all duration-1200 delay-700 scale-x-100 opacity-100"></div>
          </div>
        </div>

        {/* Enhanced Client Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {clients.map((client, index) => {
            const isVisible = visibleCards.has(index);
            const isHovered = hoveredCard === index;
            const slideDirection = index % 3 === 0 ? '-translate-x-12' : index % 3 === 1 ? 'translate-y-12' : 'translate-x-12';

            return (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                data-card-index={index}
                className={`group relative transform transition-all duration-1000 ease-out ${isVisible
                    ? 'translate-x-0 translate-y-0 opacity-100'
                    : `${slideDirection} opacity-0`
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >

                {/* Animated background glow */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${client.accent} rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl`}></div>

                {/* Main card */}
                <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.03] group-hover:-translate-y-2 overflow-hidden h-full flex flex-col`}>

                  {/* Dynamic gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${client.bgGradient} opacity-0 group-hover:opacity-50 transition-all duration-500`}></div>

                  {/* Interactive mouse trail effect */}
                  {isHovered && mousePosition.cardIndex === index && (
                    <div
                      className="absolute inset-0 opacity-20 transition-all duration-300 pointer-events-none rounded-2xl"
                      style={{
                        background: `radial-gradient(circle 150px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`
                      }}
                    ></div>
                  )}

                  <div className="relative z-10 p-8 flex flex-col h-full">

                    {/* Header section with logo and info */}
                    <div className="flex items-center mb-6 group-hover:transform group-hover:scale-105 transition-transform duration-300">
                      <div className="relative">
                        {/* Logo container with animated border */}
                        <div className={`w-16 h-16 rounded-xl overflow-hidden mr-4 border-2 border-transparent group-hover:border-gradient-to-r group-hover:${client.accent} transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                          <img
                            src={client.logo || `/api/placeholder/64/64`}
                            alt={`${client.name} logo`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              e.target.src = '/api/placeholder/64/64';
                            }}
                          />
                        </div>

                        {/* Floating indicator */}
                        <div className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r ${client.accent} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping`}></div>
                      </div>

                      <div className="flex-1">
                        <h3 className={`text-xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:${client.accent} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 mb-1`}>
                          {client.name}
                        </h3>
                        <p className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          {client.project}
                        </p>
                      </div>

                      {/* Animated chevron */}
                      <div className="transform group-hover:rotate-45 transition-transform duration-300">
                        <svg className={`w-6 h-6 text-gray-400 group-hover:text-gradient-to-r group-hover:${client.accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Description with enhanced typography */}
                    <div className="flex-grow">
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        {client.description}
                      </p>
                    </div>

                    {/* Animated bottom accent */}
                    <div className="mt-6 pt-4">
                      <div className={`w-0 h-1 bg-gradient-to-r ${client.accent} rounded-full group-hover:w-full transition-all duration-700 delay-200`}></div>
                    </div>
                  </div>

                  {/* Corner decorative elements */}
                  <div className={`absolute top-0 right-0 w-0 h-0 border-t-[30px] border-l-[30px] border-t-transparent border-l-transparent group-hover:border-t-blue-100 group-hover:border-l-transparent transition-all duration-300 rounded-tr-2xl`}></div>
                  <div className={`absolute bottom-0 left-0 w-0 h-0 border-b-[25px] border-r-[25px] border-b-transparent border-r-transparent group-hover:border-b-purple-50 group-hover:border-r-transparent transition-all duration-300 rounded-bl-2xl`}></div>
                </div>

                {/* Floating particles around card */}
                <div className={`absolute -top-2 -right-2 w-2 h-2 bg-gradient-to-r ${client.accent} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 animate-pulse`}></div>
                <div className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r ${client.accent} opacity-0 group-hover:opacity-40 transition-all duration-700 animate-ping`} style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced testimonial section */}
        <div className="mt-24 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl font-light text-gray-700 italic mb-8 transform transition-all duration-1000 translate-y-0 opacity-100">
              "Working with talented developers who understand both technology and business needs
              makes all the difference in project success."
            </blockquote>

            {/* Call to action */}
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 cursor-pointer group">
              <span>Ready to join these success stories?</span>
              <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientListSection;