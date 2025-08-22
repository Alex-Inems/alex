'use client'
import React, { useState, useEffect, useRef } from 'react';

const ProjectsSection = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: 'Bike-repaire services Site',
      description:
        'The client needed a seamless auto-service booking platform, so I built a responsive app using React, TypeScript, and Tailwind that automated technician assignments and reduced manual coordination, helping the client onboard 40+ users in two weeks — double their initial goal.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image:
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      link: 'https://bikefixup.com/',
      detailPage: '/bikefixup',
      accent: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Blogging Platform',
      description:
        'The client wanted a story platform to engage writers and readers, so I built it with Next.js, TypeScript, and OpenAI\'s API for AI-powered storytelling, resulting in a 120% increase in user-generated content and outperforming their engagement target within the first month.',
      tags: ['Nextjs', 'Express', 'D3.js', 'Firebase'],
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.blogme.africa',
      detailPage: '/blogme',
      accent: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Amazon PPC management site',
      description:
        'The client needed a way to track Amazon ad performance and reduce wasted spend, so I built a real-time dashboard using React, Recharts, and the Amazon Advertising API — enabling users to securely connect their own PPC accounts, visualize campaign metrics, and make informed decisions, which led to an 18% drop in ACOS within two weeks, surpassing the client\'s expectations.',
      tags: ['React', 'Supabase', 'Tailwind CSS'],
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.eventie.africa',
      detailPage: '/dashboard',
      accent: 'from-pink-500 to-red-600'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, entry.target.dataset.cardId]));
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleFlip = (projectId, direction) => {
    const cardId = `card-${projectId}`;
    setFlippedCards((prev) => {
      const currentFlips = prev[cardId] || { horizontal: false, vertical: false };
      return {
        ...prev,
        [cardId]: {
          ...currentFlips,
          [direction]: !currentFlips[direction],
        },
      };
    });
  };

  return (
    <section ref={sectionRef} id="projects" className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-pink-100 to-orange-100 rounded-full opacity-15 animate-bounce" style={{ animationDuration: '6s' }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-30 animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-400 opacity-20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animation: 'bounce 3s infinite' }}></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-6 bg-pink-400 opacity-25 animate-pulse" style={{ clipPath: 'polygon(0 0, 100% 25%, 75% 100%, 0% 75%)' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Title Section */}
        <div className="text-center mb-20">
          <div className="overflow-hidden mb-6">
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-gray-900 via-red-900 to-purple-900 bg-clip-text transform transition-all duration-1000 translate-y-0 opacity-100">
              My Projects
            </h2>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed transform transition-all duration-800 delay-300 translate-y-0 opacity-100">
              Here are some of my recent projects. Each project is unique and solves specific problems with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Decorative underline */}
            <div className="flex justify-center mt-8">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform transition-all duration-1000 delay-500 scale-x-100 opacity-100"></div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const cardId = `card-${project.id}`;
            const isFlippedH = flippedCards[cardId]?.horizontal || false;
            const isFlippedV = flippedCards[cardId]?.vertical || false;
            const isVisible = visibleCards.has(cardId);
            const isHovered = hoveredCard === project.id;

            return (
              <div
                key={project.id}
                ref={el => cardRefs.current[index] = el}
                data-card-id={cardId}
                className={`group relative transform transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'translate-x-0 translate-y-0 opacity-100' 
                    : index % 2 === 0 
                      ? '-translate-x-12 translate-y-8 opacity-0'
                      : 'translate-x-12 translate-y-8 opacity-0'
                } ${isFlippedH ? 'scale-x-[-1]' : ''} ${isFlippedV ? 'scale-y-[-1]' : ''}`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                
                {/* Animated background glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.accent} rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-sm`}></div>
                
                {/* Main card */}
                <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02] group-hover:-translate-y-2">
                  
                  {/* Image section with advanced hover effects */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                    
                    {/* Floating action buttons */}
                    <div className={`absolute top-4 right-4 flex space-x-2 transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`} style={{ transitionDelay: `${index * 200 + 600}ms` }}>
                      <button
                        onClick={() => handleFlip(project.id, 'horizontal')}
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group/btn"
                        aria-label="Flip horizontally"
                      >
                        <svg className="w-4 h-4 text-gray-600 group-hover/btn:text-blue-600 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </button>

                      <button
                        onClick={() => handleFlip(project.id, 'vertical')}
                        className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group/btn"
                        aria-label="Flip vertically"
                      >
                        <svg className="w-4 h-4 text-gray-600 group-hover/btn:text-purple-600 transition-colors duration-200 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </button>
                    </div>

                    {/* Animated corner accent */}
                    <div className={`absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-blue-500 border-r-transparent opacity-0 group-hover:opacity-80 transition-all duration-500`}></div>
                  </div>

                  {/* Content section */}
                  <div className="p-8">
                    {/* Title with gradient effect */}
                    <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${project.accent} bg-clip-text text-transparent group-hover:from-gray-900 group-hover:to-gray-900 transition-all duration-500`}>
                      {project.title}
                    </h3>

                    {/* Description with staggered reveal */}
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4 group-hover:text-gray-800 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Animated tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`text-sm px-4 py-2 rounded-full bg-gradient-to-r ${project.accent} text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-90 group-hover:opacity-100`}
                          style={{
                            transitionDelay: `${tagIndex * 100}ms`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Enhanced action buttons */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        <span>View Live</span>
                        <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>

                      <a
                        href={project.detailPage}
                        className="group/details inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                      >
                        <span>Details</span>
                        <svg className="w-4 h-4 ml-2 transform group-hover/details:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Floating particles specific to each card */}
                <div className={`absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r ${project.accent} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 animate-pulse`}></div>
                <div className={`absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r ${project.accent} rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 animate-ping`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 cursor-pointer group">
            <span>Want to see more projects?</span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;