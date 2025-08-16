'use client'
import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Clients', href: '#clients' },
    { name: 'Experience', href: '#experiences' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            MyPortfolio
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            ))}

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 transition text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://t.me/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition text-xl"
              >
                <FaTelegram />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-4 pb-6 shadow-md">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="flex space-x-3 mt-2">
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 transition text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://t.me/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition text-xl"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
