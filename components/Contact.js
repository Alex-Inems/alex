import React from 'react';
import { FaTwitter, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-700 mb-12">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:youremail@example.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FaEnvelope className="inline mr-2" /> Email Me
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <FaTwitter className="inline mr-2" /> Twitter
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            <FaLinkedin className="inline mr-2" /> LinkedIn
          </a>
          <a
            href="https://t.me/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
          >
            <FaTelegram className="inline mr-2" /> Telegram
          </a>
        </div>

        {/* Optional: Contact Form */}
        {/* <form className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 border rounded-lg" rows="5"></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default ContactSection;

