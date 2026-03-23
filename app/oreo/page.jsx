'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProjectPage() {
    const features = [
        { title: 'Premium Car Showroom', desc: 'A stunning, high-performance storefront designed to showcase luxury vehicles with rich imagery and detailed specifications.' },
        { title: 'Full CRUD Admin Dashboard', desc: 'Secure backend interface empowering administrators to seamlessly Create, Read, Update, and Delete vehicle listings directly from the platform.' },
        { title: 'Real-time Lead Management', desc: 'Integrated inquiry tracking lets the team respond to test drive requests and customer messages instantly.' },
        { title: 'Dynamic Content Control', desc: 'Admins can update page texts, manage testimonials, and tweak settings without writing any code.' },
    ]

    const metrics = [
        { label: 'Vehicles Hosted', value: '100+' },
        { label: 'Admin Actions/Day', value: '500+' },
        { label: 'Load Time', value: '< 1.5s' },
        { label: 'Client Satisfaction', value: '100%' },
    ]

    const techStack = [
        { name: 'Next.js', desc: 'React framework delivering lightning-fast static generation and server-side rendering for optimal SEO.' },
        { name: 'Firebase', desc: 'Real-time NoSQL database providing robust authentication, secure data storage, and live synchronization.' },
        { name: 'Tailwind CSS', desc: 'Utility-first styling approach for building custom, highly responsive interfaces quickly.' },
        { name: 'Framer Motion', desc: 'Animation library used for crafting smooth, professional page transitions and interactive elements.' },
    ]

    const galleryPhotos = [
        { url: '/images/oreo (1).png', desc: 'Sleek dark-mode vehicle showcase experience.' },
        { url: '/images/oreo (2).png', desc: 'High-performance storefront homepage and branding.' },
        { url: '/images/oreo (3).png', desc: 'Detailed vehicle listings with intuitive filters.' },
        { url: '/images/oreo (4).png', desc: 'Comprehensive admin dashboard for inventory management.' },
        { url: '/images/oreo (5).png', desc: 'Content control UI for real-time site updates.' },
    ]

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/oreo (1).png"
                    alt="Oreo Project Hero"
                    fill
                    priority
                    className="object-cover opacity-40 hover:opacity-50 transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
                <div className="relative z-10 text-center max-w-3xl px-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-sm uppercase tracking-widest text-orange-400 font-semibold mb-4"
                    >
                        Project Case Study
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                    >
                        Oreo
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-6 text-lg md:text-2xl text-gray-300"
                    >
                        Next-Generation Car E-Commerce & Management Platform
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-8 flex flex-wrap justify-center gap-3"
                    >
                        {['Next.js', 'Firebase', 'Tailwind', 'Admin Panel'].map(tag => (
                            <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium backdrop-blur-md text-gray-300">
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
                    className="bg-gray-900/40 border border-gray-800/50 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl"
                >
                    <div className="md:flex gap-12 items-start">
                        <div className="flex-1">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Project Overview</h2>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                Oreo is a modern automotive ecosystem built to bridge the gap between premium car buyers and dealership managers. 
                                The public-facing site provides an immersive, elegant storefront tailored for exploring top-tier vehicles. 
                                Behind the scenes, a powerful administrative hub gives the dealership complete autonomy.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                With full CRUD (Create, Read, Update, Delete) capability integrated via Firebase, the admin dashboard makes editing vehicle specs, 
                                posting new arrivals, and handling prospective buyer inquiries effortless and immediate—with zero downtime or deployments required.
                            </p>
                            <a
                                href="https://oreo.ink"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-900/50"
                            >
                                Visit oreo.ink
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Key Features */}
            <section className="relative py-24 px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Core Capabilities</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-800/20 p-8 rounded-2xl border border-gray-700/50 hover:bg-gray-800/40 transition-colors duration-300"
                        >
                            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-white">{f.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Metrics */}
            <section className="relative py-24 px-6 max-w-6xl mx-auto text-center border-y border-gray-800/50 my-12 bg-gray-900/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                                {m.value}
                            </p>
                            <p className="text-gray-400 tracking-wide font-medium uppercase text-xs">{m.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tech Stack */}
            <section className="relative py-24 px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Under the Hood</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {techStack.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 bg-gray-900/40 border border-gray-800 rounded-2xl p-6"
                        >
                            <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                                {t.name}
                            </span>
                            <p className="text-gray-400 text-sm leading-relaxed pt-1">{t.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Gallery Section */}
            <section className="relative py-32 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Project Gallery</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">A closer look at the storefront interface and the administrative dashboard built to manage it.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryPhotos.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative overflow-hidden rounded-2xl shadow-xl group bg-gray-900 border border-gray-800 ${i === 3 || i === 4 ? 'lg:col-span-1' : ''}`}
                        >
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src={item.url}
                                    alt={item.desc}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-90 transition-opacity duration-500 flex items-end p-6">
                                    <p className="text-white font-medium drop-shadow-md">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="relative py-32 px-6 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 mix-blend-overlay"></div>
                    <div className="relative z-10 text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to upgrade your business?</h2>
                        <p className="text-lg md:text-xl mb-10 text-orange-50 max-w-2xl mx-auto">
                            Whether you need a custom e-commerce platform or a powerful backend solution, I can help build it from the ground up.
                        </p>
                        <a
                            href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-colors duration-300 shadow-xl"
                        >
                            Let's Work Together
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </section>

        </main>
    )
}
