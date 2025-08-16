import React from 'react';

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
            <style>{`
        .grid-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>

            <div className="grid-lines"></div>

            <div className="section-container relative z-10">
                <div className="text-center">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6">
                        Hi, I'm <span className="text-red-900">Alex Thompson</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-black">
                        Full-Stack Developer & Digital Innovator
                    </p>
                    <p className="text-lg mb-12 max-w-2xl mx-auto text-black">
                        I create beautiful, functional web applications that solve real-world problems.
                        Let's build something amazing together.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-100 font-semibold rounded-lg transition"
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
