'use client'
import React, { useState, useEffect, useRef } from 'react';

const ClientListSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const clients = [
    {
      name: 'BikeFixup',
      logo: '/images/bike.png',
      project: 'E-commerce Platform',
      description: 'Built a comprehensive e-commerce platform with real-time inventory management and secure, robust payment processing modules.'
    },
    {
      name: 'Creative Builders',
      logo: '/images/creative.png',
      project: 'Portfolio Website',
      description: 'Designed and developed a modern portfolio website showcasing creative design systems with premium, fluid animations.'
    },
    {
      name: 'Amazon PPC',
      logo: '/images/amazon.png',
      project: 'Financial Dashboard',
      description: 'Created an elite analytical financial dashboard with optimized real-time data visualization and detailed campaign reporting.'
    },
    {
      name: 'HealthTech Innovations',
      logo: '/images/newwr.png',
      project: 'Patient Management System',
      description: 'Developed a secure patient management database and portal featuring fluid scheduling modules and secure digital records.'
    },
    {
      name: 'Dehoni Technologies',
      logo: '/images/dehoni.png',
      project: 'Learning Management System',
      description: 'Architected and engineered scalable educational systems while mentoring junior developers to ship high-performance code.'
    },
    {
      name: 'Xtaspare',
      logo: '/images/xtra.png',
      project: 'Inventory Management',
      description: 'Implemented a high-performance inventory management system with real-time sync, analytics dashboards, and barcode scans.'
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
            }, cardIndex * 100);
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

  return (
    <section
      ref={sectionRef}
      id="clients"
      className="relative bg-white py-20 md:py-32 overflow-hidden border-t border-gray-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
            Client Portfolio
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light">
            I've had the privilege of working with amazing clients across various industries, delivering custom solutions that drive their business forward and exceed expectations.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => {
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                data-card-index={index}
                className={`group bg-white rounded-[24px] sm:rounded-[32px] border border-gray-150 p-8 flex flex-col justify-between shadow-md hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div>
                  {/* Brand Logo Container */}
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-gray-200/50 bg-gray-50 flex items-center justify-center mb-6">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = '/api/placeholder/64/64';
                      }}
                    />
                  </div>

                  {/* Client Info */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {client.name}
                  </h3>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {client.project}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {client.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Quote Testimonial & Upwork CTA */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <blockquote className="text-xl sm:text-2xl font-light text-gray-700 italic mb-10 leading-relaxed">
            "Working with talented developers who understand both technology and business needs makes all the difference in project success."
          </blockquote>

          <div className="flex justify-center">
            <a
              href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              <span className="w-6 h-6 rounded-full bg-[#14a800] flex items-center justify-center text-white text-[10px] font-black tracking-tighter leading-none pb-[2px] pr-[1px] select-none">
                up
              </span>
              <span>Book a Call on Upwork</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientListSection;