'use client'
import React, { useState, useEffect, useRef } from 'react';

const ExperiencesSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [activeCard, setActiveCard] = useState(null);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const timelineRef = useRef(null);

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Xtraspare.com',
      period: '2024 - Present',
      description: 'Lead development of enterprise web applications using React, Node.js, and cloud technologies. Managed a team of 4 developers and improved application performance by 40%.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
      accent: 'from-red-500 to-red-600',
      bgGradient: 'bg-red-950 ',
      icon: '🚀',
      status: 'current'
    },
    {
      title: 'Senior Front-end Developer',
      company: 'BikeFixUp.com',
      period: '2024 - Present',
      description: 'Lead development of enterprise web applications using React, Node.js, and cloud technologies. Managed a team of 4 developers and improved application performance by 40%.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
      accent: 'from-red-500 to-red-600',
      bgGradient: 'bg-red-950 ',
      icon: '🚀',
      status: 'recent'
    },
    {
      title: 'Senior Nextjs Developer',
      company: 'Dehoni Technologies',
      period: '2024 - 2025',
      description: 'Built and maintained company websites and web applications. Gained experience in full-stack Nextjs development and agile methodologies.',
      technologies: ['Nextjs', 'TailwindCss', 'Nodejs', 'APIs', 'MySQL'],
      accent: 'from-gray-600 to-gray-700',
      bgGradient: 'from-gray-50 to-gray-100',
      icon: '💻',
      status: 'recent'
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Builders',
      period: '2022 - 2023',
      description: 'Developed responsive web applications for various clients. Collaborated with designers and backend developers to deliver high-quality user experiences.',
      technologies: ['React', 'TypeScript', 'Supabase', 'SASS', 'REST APIs'],
      accent: 'from-red-600 to-gray-700',
      bgGradient: 'from-red-50 to-gray-50',
      icon: '🎨',
      status: 'completed'
    },
    {
      title: 'Frontend Developer',
      company: 'RootHub',
      period: '2021 - 2022',
      description: 'Developed responsive web applications for various clients. Collaborated with designers and backend developers to deliver high-quality user experiences.',
      technologies: ['React', 'JavaScript', 'Tailwind', 'SASS', 'REST APIs'],
      accent: 'from-red-600 to-gray-700',
      bgGradient: 'from-red-50 to-gray-50',
      icon: '🎨',
      status: 'completed'
    },
    

  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.cardIndex);
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, cardIndex]));
              
              // Animate timeline progress
              setTimeout(() => {
                setTimelineProgress(((cardIndex + 1) / experiences.length) * 100);
              }, 300);
            }, cardIndex * 300);
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

  return (
    <section 
      ref={sectionRef}
      id="experiences" 
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 md:py-32 overflow-hidden"
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-32 w-80 h-80 bg-gradient-to-br from-red-100/20 to-gray-100/20 rounded-full animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-gray-100/15 to-red-100/15 rounded-full" style={{ animation: 'bounce 12s infinite' }}></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="experienceGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="currentColor" opacity="0.3"/>
                <path d="M 60 30 L 30 30 30 60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#experienceGrid)" />
          </svg>
        </div>

        {/* Floating code-themed elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-red-400 opacity-30 animate-ping" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)', animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-gray-400 opacity-40 animate-pulse" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 60%, 80% 100%, 20% 100%, 0% 60%)' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="overflow-hidden mb-8">
            <h2 className="text-6xl md:text-7xl font-bold transform transition-all duration-1000 translate-y-0 opacity-100">
              <span className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-800 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
          </div>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 transform transition-all duration-800 delay-200 translate-y-0 opacity-100">
            Here's a summary of my professional journey and the technologies I've mastered along the way.
            Each role has shaped me into a more versatile and impactful developer.
          </p>

          {/* Experience stats */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center transform transition-all duration-1000 delay-400 translate-y-0 opacity-100">
              <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-gray-700 bg-clip-text text-transparent">5+</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center transform transition-all duration-1000 delay-500 translate-y-0 opacity-100">
              <div className="text-4xl font-bold bg-gradient-to-r from-gray-700 to-red-600 bg-clip-text text-transparent">15+</div>
              <div className="text-sm text-gray-600 font-medium">Technologies</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center transform transition-all duration-1000 delay-600 translate-y-0 opacity-100">
              <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-gray-800 bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
            </div>
          </div>

          {/* Decorative separator */}
          <div className="flex justify-center">
            <div className="w-48 h-1 bg-gradient-to-r from-red-500 via-gray-600 to-red-500 rounded-full transform transition-all duration-1200 delay-700 scale-x-100 opacity-100"></div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 rounded-full overflow-hidden hidden md:block">
            <div 
              ref={timelineRef}
              className="w-full bg-gradient-to-b from-red-500 via-gray-600 to-red-600 rounded-full transition-all duration-2000 ease-out"
              style={{ height: `${timelineProgress}%` }}
            ></div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const isVisible = visibleCards.has(index);
              const isActive = activeCard === index;
              const slideDirection = index % 2 === 0 ? '-translate-x-16' : 'translate-x-16';

              return (
                <div
                  key={index}
                  ref={el => cardRefs.current[index] = el}
                  data-card-index={index}
                  className={`group relative transform transition-all duration-1000 ease-out ${
                    isVisible 
                      ? 'translate-x-0 translate-y-0 opacity-100' 
                      : `${slideDirection} translate-y-8 opacity-0`
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  
                  {/* Timeline dot for desktop */}
                  <div className="absolute left-6 top-8 w-6 h-6 hidden md:flex items-center justify-center z-20">
                    <div className={`w-4 h-4 rounded-full border-4 border-white shadow-lg bg-gradient-to-r ${experience.accent} transform transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'} ${isActive ? 'scale-125' : ''}`}>
                      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className={`absolute -top-2 left-20 md:left-16 px-2 py-1 rounded-full text-xs font-medium transform transition-all duration-500 ${
                    experience.status === 'current' ? 'bg-red-100 text-red-800' :
                    experience.status === 'recent' ? 'bg-gray-100 text-gray-800' :
                    'bg-gray-100 text-white'
                  } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200 + 300}ms` }}>
                    {experience.status === 'current' ? '🔴 Current' : 
                     experience.status === 'recent' ? '⚫ Recent' : '⚪ Completed'}
                  </div>

                  {/* Main card */}
                  <div className="md:ml-16 relative">
                    {/* Animated background glow */}
                    <div className={`absolute -inset-2 bg-gradient-to-br ${experience.accent} rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl`}></div>
                    
                    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02] group-hover:-translate-y-1 overflow-hidden">
                      
                      {/* Dynamic gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${experience.bgGradient} opacity-0 group-hover:opacity-40 transition-all duration-500`}></div>
                      
                      <div className="relative z-10 p-8">
                        
                        {/* Header section */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                          <div className="flex items-start space-x-4 flex-1">
                            {/* Icon */}
                            <div className="flex-shrink-0">
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${experience.accent} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                                {experience.icon}
                              </div>
                            </div>
                            
                            <div className="flex-1">
                              <h3 className={`text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:${experience.accent} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 mb-2`}>
                                {experience.title}
                              </h3>
                              <p className="text-xl font-semibold text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                                {experience.company}
                              </p>
                            </div>
                          </div>
                          
                          {/* Period badge */}
                          <div className={`mt-4 md:mt-0 inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${experience.accent} text-white shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300`}>
                            {experience.period}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                          {experience.description}
                        </p>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Technologies Used</h4>
                          <div className="flex flex-wrap gap-3">
                            {experience.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-3 py-1 bg-gradient-to-r ${experience.accent} bg-opacity-10 text-white rounded-lg text-xs font-medium border border-gray-200 hover:border-transparent hover:bg-gradient-to-r hover:${experience.accent} hover:text-white transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                                style={{ 
                                  transitionDelay: `${techIndex * 50}ms` 
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom accent line */}
                        <div className="mt-6 pt-4">
                          <div className={`w-0 h-1 bg-gradient-to-r ${experience.accent} rounded-full group-hover:w-full transition-all duration-700 delay-200`}></div>
                        </div>
                      </div>

                      {/* Corner decorative elements */}
                      <div className={`absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-transparent border-l-transparent group-hover:border-t-red-50 group-hover:border-l-transparent transition-all duration-300 rounded-tr-2xl`}></div>
                    </div>
                  </div>

                  {/* Floating connection line for mobile */}
                  <div className={`md:hidden absolute left-0 top-1/2 w-8 h-0.5 bg-gradient-to-r ${experience.accent} transform -translate-y-1/2 transition-all duration-500 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
                </div>
              );
            })}
          </div>

          {/* Timeline completion indicator */}
          <div className="absolute left-6 bottom-0 w-6 h-6 hidden md:flex items-center justify-center z-20">
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-gray-600 transform transition-all duration-1000 delay-1000 ${timelineProgress > 80 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-gray-600 animate-ping opacity-75"></div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 via-gray-700 to-red-600 text-white rounded-full font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 cursor-pointer group">
            <span>Ready to add your project to my journey?</span>
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;