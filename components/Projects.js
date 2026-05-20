'use client'
import React, { useState, useEffect, useRef } from 'react';

const ProjectsSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: 'Oreo Luxury Showcase',
      description: "Built a complete Luxury car dealership platform with a fully functional admin interface. Admin can edit page content, manage inventory, add pages and control site settings without touching code. Clean responsive frontend with professional premium UI.",
      tags: ['Next.js', 'React', 'Firebase', 'Tailwind CSS'],
      image: '/images/oreo (2).png',
      link: 'https://oreo.ink',
      detailPage: '/oreo'
    },
    {
      id: 2,
      title: 'Xtraspare Ecommerce',
      description: "Rebuilt and upgraded a live spare parts store from an incomplete codebase. Built a high-performance custom admin dashboard where the owner can manage products, track orders, and edit pricing globally without touching any code.",
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
      image: '/images/xtraspare (1).png',
      link: 'https://xtraspare.com/',
      detailPage: '/xtraspare'
    },
    {
      id: 3,
      title: 'Blogging Platform (Blogme)',
      description: "Built a complete multi-user SaaS blogging platform from scratch. Features real-time article publishing, individual user dashboards, organic SEO optimization, and social media cross-sharing to maximize reach.",
      tags: ['Next.js', 'Express', 'D3.js', 'Firebase'],
      image: '/images/blogme (2).png',
      link: 'https://www.blogme.live',
      detailPage: '/blogme'
    },
    {
      id: 4,
      title: 'Events Ticketing Platform',
      description: "Architected a complete ticketing management platform. Ticket buyers automatically receive a secure unique QR code verification ticket via email after payment, which organizers scan to verify entry via their dashboard.",
      tags: ['React', 'Supabase', 'Paystack', 'Tailwind'],
      image: '/images/eventie (2).png',
      link: 'https://www.eventie.live',
      detailPage: '/eventie'
    },
    {
      id: 5,
      title: 'Amazon Marketing Agency',
      description: "Designed and engineered an elite performance advertising metrics dashboard for an Amazon marketing agency. Features elegant charts, real-time campaign performance trackers, and luxury dark-mode layouts.",
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: '/images/ama_landing_page.png',
      link: 'https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share',
      detailPage: '/ama'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, entry.target.dataset.cardId]));
            }, index * 150);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-white py-20 md:py-32 overflow-hidden border-t border-gray-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Left-Aligned Header Section without Background color pill */}
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
            Our Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light">
            Take a look at our most recent projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const cardId = `card-${project.id}`;
            const isVisible = visibleCards.has(cardId);

            return (
              <div
                key={project.id}
                ref={el => cardRefs.current[index] = el}
                data-card-id={cardId}
                className={`group relative aspect-[16/10] w-full rounded-[24px] overflow-hidden border border-gray-200/50 shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1.5 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle bottom gradient shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-300" />
                
                {/* Interactive Details Overlay - Slides up on Hover */}
                <div className="absolute inset-0 bg-black/95 backdrop-blur-md opacity-0 group-hover:opacity-100 flex flex-col justify-between p-6 sm:p-8 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div>
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-[11px] sm:text-xs px-2.5 py-1 rounded bg-white/10 text-white border border-white/15 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 bg-white text-black rounded-lg text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-colors duration-200"
                    >
                      <span>View Live</span>
                      <svg className="w-3.5 h-3.5 ml-1.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>


                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Section */}
        <div className="text-center mt-20">
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
    </section>
  );
};

export default ProjectsSection;