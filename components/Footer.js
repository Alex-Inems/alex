'use client'
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: 'Home', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Clients', href: '#clients' }
    ];

    const socials = [
        {
            name: 'Upwork',
            href: 'https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share',
            icon: (
                <span className="w-5 h-5 rounded-full bg-[#14a800] flex items-center justify-center text-white text-[8px] font-black tracking-tighter leading-none pb-[1px] pr-[0.5px] select-none">
                    up
                </span>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-600 group-hover:text-black">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            ),
        }
    ];

    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-white text-gray-500 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                    {/* Brand column */}
                    <div className="space-y-4">
                        <a
                            href="#projects"
                            onClick={(e) => handleSmoothScroll(e, '#projects')}
                            className="flex items-center gap-3 group w-fit"
                        >
                            <div className="relative w-10 h-10 flex-shrink-0">
                                <img
                                    src="/images/alex.jpeg"
                                    alt="Alex Thompson"
                                    className="w-full h-full rounded-full object-cover border border-gray-150 shadow-sm"
                                />
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#14a800] border-2 border-white rounded-full" />
                            </div>
                            <span className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-200">
                                Alex Thompson
                            </span>
                        </a>
                        <p className="text-sm leading-relaxed text-gray-500 max-w-xs font-light">
                            Shopify developer and full-stack engineer crafting stores, web apps, and automations that scale.
                        </p>
                        {/* Social icons */}
                        <div className="flex items-center gap-3 pt-2">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200 group"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation column */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                            Navigation
                        </h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className="text-sm text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-2 group font-medium"
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-black transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact / CTA column */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                            Let's Work Together
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed font-light">
                            Available for freelance projects and full-time opportunities.
                        </p>
                        <a
                            href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3.5 bg-white border border-gray-200 shadow-xl hover:shadow-2xl rounded-full transform hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                        >
                            <span className="w-6 h-6 rounded-full bg-[#14a800] flex items-center justify-center text-white text-[10px] font-black tracking-tighter leading-none pb-[2px] pr-[1px] select-none">
                                up
                            </span>
                            <span className="text-sm font-semibold text-gray-800 tracking-wide">
                                Book a Call on Upwork
                            </span>
                        </a>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-400 font-light">
                        © {currentYear} Alex Thompson. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-400 font-light">
                        Built with Next.js &amp; Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
