'use client'

import { motion } from 'framer-motion'

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
          alt="Project Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold tracking-tight"
          >
            Agency Portfolio Showcase
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-2xl text-gray-300"
          >
            Innovative design, strategic thinking, and stunning visual storytelling.
          </motion.p>
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
            This agency project showcases premium aesthetics with strong typography, cinematic imagery, and layered layouts that feel editorial. Designed to tell a story and impress clients, blending creativity with technical execution.
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Project Timeline</h2>
        <div className="relative border-l border-gray-700 pl-10 space-y-16">
          {[
            { phase: 'Research & Discovery', desc: 'User research, competitor analysis, and defining project scope.' },
            { phase: 'Design', desc: 'Wireframing, high-fidelity UI/UX design, and prototyping.' },
            { phase: 'Development', desc: 'Frontend and backend development, integrations, and testing.' },
            { phase: 'Launch & Review', desc: 'Deployment, user training, and post-launch optimization.' },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-5 top-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
              <h3 className="text-2xl font-semibold">{step.phase}</h3>
              <p className="text-gray-400 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Challenges Section */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Challenges</h2>
            <ul className="space-y-4 text-gray-300">
              <li>⚡ Tight deadlines requiring fast iterations.</li>
              <li>⚡ Balancing premium aesthetics with performance.</li>
              <li>⚡ Complex animations without compromising accessibility.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Solutions</h2>
            <ul className="space-y-4 text-gray-300">
              <li>✅ Agile sprints with clear milestones.</li>
              <li>✅ Optimized assets and lazy-loading for speed.</li>
              <li>✅ Accessible design patterns with smooth animations.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          'https://images.unsplash.com/photo-1551836022-4b3b65f5b1b7?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1531379410507-88e0f70d4375?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=800&q=80',
        ].map((url, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <img
              src={url}
              alt={`Gallery ${i + 1}`}
              className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <p className="text-white font-semibold">Gallery Image {i + 1}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Reviews Section */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Client Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a7?auto=format&fit=crop&w=200&q=80',
              name: 'Jane Doe',
              review: 'Outstanding collaboration and results. The project exceeded our expectations!'
            },
            {
              img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a7?auto=format&fit=crop&w=200&q=80',
              name: 'John Smith',
              review: 'Highly professional team delivering creative solutions on time.'
            },
            {
              img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a7?auto=format&fit=crop&w=200&q=80',
              name: 'Alice Johnson',
              review: 'The design and execution were flawless. We loved the attention to detail.'
            }
          ].map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 border border-gray-800 rounded-2xl p-8 text-center shadow-xl backdrop-blur-lg"
            >
              <img src={r.img} alt={r.name} className="w-20 h-20 mx-auto rounded-full mb-4" />
              <h3 className="font-semibold text-xl mb-2">{r.name}</h3>
              <p className="text-gray-300">{r.review}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  )
}
