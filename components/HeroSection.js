'use client'
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <style>{`
        .grid-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: 0 0;
          animation: grid-move 10s linear infinite;
        }
        
        @keyframes grid-move {
          0% { 
            background-position: 0 0;
          }
          100% { 
            background-position: 50px 50px;
          }
        }

        .robot-wrapper {
          position: absolute;
          bottom: 10%;
          left: 0;
          width: 120px;
          height: 120px;
          animation: robot-move 12s linear infinite;
          z-index: 5;
        }

        @keyframes robot-move {
          0% { 
            left: -120px;
          }
          50% {
            left: calc(100% + 20px);
          }
          50.01% {
            transform: scaleX(-1);
          }
          100% { 
            left: -120px;
            transform: scaleX(1);
          }
        }

        .robot {
          animation: robot-bounce 0.6s ease-in-out infinite;
        }

        @keyframes robot-bounce {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-12px);
          }
        }

        .robot-eye {
          animation: robot-blink 3s ease-in-out infinite;
        }

        @keyframes robot-blink {
          0%, 90%, 100% { 
            opacity: 1; 
            r: 4;
          }
          95% { 
            opacity: 0.1; 
            r: 2;
          }
        }
      `}</style>

      <div className="grid-lines"></div>

      {/* Moving Robot */}
      <div className="robot-wrapper">
        <svg
          className="robot"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Robot Body */}
          <rect x="20" y="30" width="80" height="70" rx="8" fill="#3B82F6" opacity="0.9" />
          <rect x="25" y="35" width="70" height="60" rx="4" fill="#60A5FA" />

          {/* Robot Head */}
          <rect x="35" y="10" width="50" height="30" rx="6" fill="#3B82F6" opacity="0.9" />
          <rect x="40" y="15" width="40" height="20" rx="3" fill="#60A5FA" />

          {/* Eyes */}
          <circle className="robot-eye" cx="50" cy="25" r="4" fill="#1E40AF" />
          <circle className="robot-eye" cx="70" cy="25" r="4" fill="#1E40AF" />

          {/* Antenna */}
          <circle cx="60" cy="8" r="3" fill="#EF4444" />
          <line x1="60" y1="8" x2="60" y2="10" stroke="#3B82F6" strokeWidth="2" />

          {/* Arms */}
          <rect x="5" y="45" width="18" height="12" rx="3" fill="#3B82F6" opacity="0.9" />
          <rect x="97" y="45" width="18" height="12" rx="3" fill="#3B82F6" opacity="0.9" />

          {/* Legs */}
          <rect x="30" y="100" width="20" height="15" rx="4" fill="#3B82F6" opacity="0.9" />
          <rect x="70" y="100" width="20" height="15" rx="4" fill="#3B82F6" opacity="0.9" />

          {/* Chest Panel */}
          <rect x="45" y="50" width="30" height="25" rx="2" fill="#1E40AF" opacity="0.3" />
          <circle cx="55" cy="60" r="2" fill="#60A5FA" />
          <circle cx="65" cy="60" r="2" fill="#60A5FA" />
          <circle cx="60" cy="68" r="2" fill="#60A5FA" />
        </svg>
      </div>

      <div className="section-container relative z-20 w-full max-w-4xl">
        {/* Subtle backdrop for text readability */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] rounded-2xl -z-10"></div>
        <div className="text-center relative">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-red-900">Alex Thompson</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 text-black">
            Full-Stack Developer
          </p>
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full border border-blue-300">
            <span className="text-blue-700 font-semibold text-sm">✨ Interactive WebGL Experience</span>
            <span className="text-blue-600 text-xs">Move your cursor to interact</span>
          </div>
          <p className="text-base sm:text-lg mb-12 max-w-2xl mx-auto text-black">
            I build complete web applications from frontend to backend, creating scalable solutions that solve real-world problems.
            Let's build something amazing together.
          </p>

          {/* ✅ Responsive buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full px-2">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
            >
              View My Work
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-100 font-semibold rounded-lg transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
