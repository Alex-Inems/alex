'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function XtraspareProjectPage() {
    const features = [
        { title: 'Spare Parts by Brand', desc: 'Customers can browse an extensive inventory of motorcycle spare parts filtered by bike brand — from Bajaj and Hero to KTM, Royal Enfield, Honda, and 20+ others.' },
        { title: 'Full E-Commerce Flow', desc: 'End-to-end shopping experience: product listings, detailed product pages, cart management, secure checkout, and order tracking.' },
        { title: 'Fast & Reliable Delivery', desc: 'Integrated 3-day dispatch policy with 24/7 support, free delivery, and a transparent returns & exchanges process.' },
        { title: 'Responsive Mobile-First UI', desc: 'Optimised for all screen sizes — a seamless experience whether browsing on desktop, tablet, or mobile.' },
    ]

    const metrics = [
        { label: 'Bike Brands Covered', value: '20+' },
        { label: 'Products Listed', value: '500+' },
        { label: 'Orders Dispatched', value: '1k+' },
        { label: 'Customer Reviews', value: '4.8★' },
    ]

    const techStack = [
        { name: 'Next.js', desc: 'SSR & SSG for fast page loads and SEO-optimised product pages.' },
        { name: 'Node.js', desc: 'RESTful backend API handling product data, orders, and user management.' },
        { name: 'MongoDB', desc: 'Flexible document store for product catalog, categories, and orders.' },
        { name: 'Tailwind CSS', desc: 'Utility-first styling for a consistent and responsive UI.' },
    ]

    const timeline = [
        { phase: 'Week 1: Discovery & Planning', desc: 'Gathered client requirements, analyzed competitor platforms, and defined the full product scope and information architecture.' },
        { phase: 'Week 1–2: Design & Prototyping', desc: 'Created wireframes and high-fidelity mockups for product listings, brand pages, cart, and checkout flows.' },
        { phase: 'Week 2–3: Development', desc: 'Built frontend components and backend APIs. Implemented product catalog, brand filtering, cart, and checkout with payment integration.' },
        { phase: 'Week 4: QA & Launch', desc: 'Thorough cross-device testing, performance optimisation, SEO setup, and production deployment.' },
    ]

    const challenges = [
        'Managing a large, multi-brand product catalog with consistent data structure and fast query performance.',
        'Implementing complex filtering (by brand, category, compatibility) while keeping the UI intuitive.',
        'Integrating secure payment processing with a reliable order management workflow.',
        'Achieving strong SEO for hundreds of product and category pages.',
    ]

    const solutions = [
        'Designed a flexible MongoDB schema with indexed fields for brand, category, and product attributes enabling fast queries.',
        'Built dynamic filter components with URL-based state management for shareable, bookmarkable search results.',
        'Integrated a secure payment gateway with server-side validation and robust error handling.',
        'Leveraged Next.js SSG and ISR to pre-render product pages at build time, achieving near-instant loads and strong Lighthouse scores.',
        'Implemented structured data (JSON-LD) and optimised meta tags for every product and category page.',
    ]

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/bikewall.jpg"
                    alt="Xtraspare Project Hero"
                    fill
                    priority
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                <div className="relative z-10 text-center max-w-3xl px-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-4"
                    >
                        Project Case Study
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold tracking-tight"
                    >
                        Xtraspare
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-6 text-lg md:text-2xl text-gray-300"
                    >
                        Premium Motorcycle Spare Parts — Delivered Fast.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-8 flex flex-wrap justify-center gap-3"
                    >
                        {['Nextjs', 'Node.js', 'MongoDB', 'Tailwind CSS'].map(tag => (
                            <span key={tag} className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-md text-sm font-medium backdrop-blur-sm">
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="relative py-32 px-6 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/70 border border-gray-800 rounded-2xl p-12 shadow-2xl backdrop-blur-lg"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Project Overview</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        XtraSpare is a full-stack e-commerce platform built for motorcycle owners across India, offering premium spare parts for 20+ major bike brands at competitive prices. The platform solves a real problem — finding genuine, affordable spare parts quickly without visiting multiple shops or dealing with unreliable suppliers.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg mt-4">
                        I was responsible for building both the frontend interface and the backend system — from product catalog architecture and brand filtering to cart, checkout, order management, and delivery tracking. The result is a fast, reliable, and beautifully designed shopping experience that thousands of riders trust.
                    </p>
                    <a
                        href="https://xtraspare.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-all duration-200"
                    >
                        Visit xtraspare.com
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </section>

            {/* Metrics */}
            <section className="relative py-24 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-16">Impact & Metrics</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8"
                        >
                            <p className="text-4xl md:text-5xl font-bold text-blue-400">{m.value}</p>
                            <p className="text-gray-400 mt-2 text-sm">{m.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Key Features */}
            <section className="relative py-24 px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-gray-900/70 p-8 rounded-2xl border border-gray-800 shadow-lg backdrop-blur-lg"
                        >
                            <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tech Stack */}
            <section className="relative py-24 px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Tech Stack</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {techStack.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 bg-gray-900/60 border border-gray-800 rounded-xl p-6"
                        >
                            <span className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-md text-xs font-bold uppercase tracking-wide whitespace-nowrap">
                                {t.name}
                            </span>
                            <p className="text-gray-300 text-sm leading-relaxed">{t.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className="relative py-24 px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Project Timeline</h2>
                <div className="relative border-l border-gray-700 pl-10 space-y-16">
                    {timeline.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -left-5 top-1 w-3 h-3 bg-blue-400 rounded-full" />
                            <h3 className="text-xl font-semibold">{step.phase}</h3>
                            <p className="text-gray-400 mt-2 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Challenges & Solutions */}
            <section className="relative py-24 px-6 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12"
                >
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Challenges</h2>
                        <ul className="space-y-4 text-gray-300">
                            {challenges.map((c, i) => (
                                <li key={i}>⚡ {c}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Solutions</h2>
                        <ul className="space-y-4 text-gray-300">
                            {solutions.map((s, i) => (
                                <li key={i}>✅ {s}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </section>

            {/* CTA */}
            <section className="relative py-32 px-6 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl p-12 shadow-xl"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Together</h2>
                    <p className="text-lg mb-8 text-blue-100">
                        Have an idea for a world-class platform? I'd love to collaborate and bring it to life.
                    </p>
                    <a
                        href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition"
                    >
                        Hire me on Upwork →
                    </a>
                </motion.div>
            </section>

        </main>
    )
}
