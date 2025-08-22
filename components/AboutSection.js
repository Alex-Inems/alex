import React from 'react';
import { FaTwitter, FaLinkedin, FaTelegram } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
            I dont just write code, I solve business problems with technology. For over 5 years I have been the person founders and teams call when they need to turn a messy idea into a scalable product. I operate across the full stack: React and modern front-end, powerful APIs, optimized databases, and cloud systems built to last. I dont build features for the sake of it, I eliminate bottlenecks, cut wasted time, and create solutions that drive revenue. I have rescued failing projects, rebuilt products from scratch, and delivered results that competitors cant match. That is the 10x difference: I make complexity disappear and leave clients with systems that just work.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Get In Touch
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            {/* <div className="flex gap-4">
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 transition text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://t.me/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition text-2xl"
              >
                <FaTelegram />
              </a>
            </div> */}
          </div>

          {/* Geometric Illustration / Abstract Background */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-full h-80 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 animate-pulse opacity-70"></div>
              <div className="absolute inset-0 opacity-20">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="0,0 200,0 100,200" fill="white" opacity="0.1" />
                  <polygon points="200,0 200,200 0,100" fill="white" opacity="0.1" />
                  <polygon points="0,200 100,0 200,200" fill="white" opacity="0.1" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
