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
    "I'm a full-stack developer with over 5 years of experience building end-to-end web applications. I handle everything from designing intuitive user interfaces to architecting robust backend systems and managing databases—delivering complete, production-ready solutions.",
    "On the frontend, I specialize in Next.js, React, and TypeScript, creating responsive, performant user experiences. On the backend, I build scalable APIs with Node.js, design efficient database schemas, and implement secure authentication systems. This full-stack expertise allows me to see the entire picture and build cohesive solutions.",
    "What sets me apart is my ability to seamlessly work across the entire development stack. I don't just build features—I architect complete systems, optimize database queries, implement secure authentication, and ensure smooth integration between frontend and backend components.",
    "Whether it's building a new application from scratch, rescuing a struggling project, or enhancing existing systems, I bring full-stack expertise that ensures every layer of your application works together seamlessly and efficiently."
  ];

  const skills = [
    'Next.js', 'React', 'TypeScript', 'Node.js', 
    'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Firebase'
  ];

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative bg-gradient-to-b from-white to-gray-50 py-20 md:py-32 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 -left-32 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 transition-all duration-[2000ms] ease-out ${isVisible ? 'translate-x-0 scale-100' : '-translate-x-32 scale-75'}`}></div>
        <div className={`absolute bottom-20 -right-32 w-80 h-80 bg-gradient-to-l from-pink-100 to-orange-100 rounded-full opacity-20 transition-all duration-[2500ms] ease-out delay-300 ${isVisible ? 'translate-x-0 scale-100' : 'translate-x-32 scale-75'}`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Full-stack developer building complete web applications from frontend to backend
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Main Text */}
            <div className="space-y-6 mb-10">
              {textLines.map((line, i) => (
                <p
                  key={i}
                  className={`text-base md:text-lg text-gray-700 leading-relaxed transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Skills */}
            <div className={`mb-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-5">Full-Stack Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white text-blue-700 rounded-lg font-medium text-sm border border-blue-200 hover:bg-blue-50 hover:border-blue-400 hover:shadow-sm transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <a
                href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition text-center shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition text-center shadow-sm hover:shadow-md transform hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right: YouTube video */}
          <div className={`order-1 lg:order-2 relative w-full transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
              {/* Decorative border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              
              <iframe
                className="relative w-full h-full z-10"
                src="https://www.youtube.com/embed/mpHknM8chmA"
                title="About Me Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Play button overlay effect */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 z-20 pointer-events-none"></div>
            </div>
            
            {/* Video caption */}
            <p className="text-center text-sm text-gray-500 mt-4 italic">
              Learn more about my journey and approach to development
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">{stat.number}</div>
              <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
