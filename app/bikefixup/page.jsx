'use client'

import { motion } from 'framer-motion'

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img

          src="https://alexthonpson.live/images/bikewall.jpg"
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
            BikeFixUp.com
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-2xl text-gray-300"
          >
            Two Wheeler Services Made Smart.
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
            Bikefixup is a full-service preventive maintenance and motorcycle repair platform designed to make bike servicing simple and convenient. Many motorcycle owners struggle to find a trusted service station, waste time at workshops, or need reliable pick-up and drop-off options. Bikefixup solves these problems by allowing users to schedule their bike service seamlessly, whether they prefer visiting the workshop or arranging for their bike to be picked up. This approach gives owners the freedom to relax with their families or continue working while their motorcycle is serviced. With high-quality, guaranteed services at fair prices, Bikefixup ensures a hassle-free, trustworthy, and time-saving experience for every rider.
            www.bikefixup.com
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Project Timeline</h2>
        <div className="relative border-l border-gray-700 pl-10 space-y-16">
          {[
            {
              phase: 'Week 1: Research & Planning',
              desc: 'As the assigned Next.js expert, I analyzed the client’s requirements, conducted competitor research, and defined the full project scope to ensure a seamless development process.',
            },
            {
              phase: 'Week 1: Design & Prototyping',
              desc: 'Created wireframes, high-fidelity UI/UX designs, and interactive prototypes aligned with Bikefixup’s branding and user experience goals.',
            },
            {
              phase: 'Week 2: Development & Integration',
              desc: 'Implemented the frontend with Next.js, integrated backend services, set up pick-up/drop-off scheduling features, and conducted thorough testing for reliability and performance.',
            },
            {
              phase: 'Week 2: Launch & Optimization',
              desc: 'Deployed the platform, monitored initial usage, optimized performance, and ensured a smooth post-launch experience for users.',
            },
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
              <li>⚡ Delivering a fully functional, production-ready platform in just 2 weeks — because average timelines are for amateurs.</li>
              <li>⚡ Marrying premium, polished UI/UX with peak performance across devices without a single lag or jank.</li>
              <li>⚡ Implementing complex interactive features like dynamic pick-up/drop-off scheduling and animated transitions while keeping the app 100% accessible.</li>
              <li>⚡ Ensuring seamless integration between Next.js frontend, backend APIs, and real-time updates — all without a single broken build.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Solutions</h2>
            <ul className="space-y-4 text-gray-300">
              <li>✅ Took full ownership of the project architecture, leveraging Next.js capabilities like server-side rendering, static generation, and incremental static regeneration to deliver an ultra-fast experience.</li>
              <li>✅ Applied advanced performance optimizations: lazy-loaded assets, implemented efficient image handling, and minimized bundle sizes — all without sacrificing design integrity.</li>
              <li>✅ Crafted custom animations and micro-interactions with framer-motion while adhering to accessibility standards, proving speed and style can coexist.</li>
              <li>✅ Coordinated seamless API integration, error handling, and real-time updates so the platform works flawlessly under heavy usage.</li>
              <li>✅ Executed rapid, expert-level iterations across design, development, and deployment cycles — because a real Next.js pro doesn’t waste a second.</li>
            </ul>
          </div>

        </motion.div>
      </section>

      {/* Gallery Section */}
      {/* Gallery Section */}
      {/* Gallery Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            url: 'https://alexthonpson.live/images/biker1.jpg',
            desc: 'performing preventive maintenance on a modern motorcycle.',
          },
          {
            url: 'https://alexthonpson.live/images/biker.jpg',
            desc: 'Bike components being carefully inspected.',
          },
          {
            url: 'https://alexthonpson.live/images/biker2.jpg',
            desc: 'Motorcycle ready for pick-up and drop-off service, illustrating convenience.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <img
              src={item.url}
              alt={item.desc}
              className="w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <p className="text-white font-semibold">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>



      {/* Reviews Section */}
      {/* Upwork Review Section */}
      <section className="relative py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Upwork Reviews</h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://alexthonpson.live/images/bikereview.png" // Replace with actual Upwork review image URL
            alt="Upwork Reviews"
            className="mx-auto w-64 md:w-80 object-contain rounded-xl shadow-lg"
          />
          <p className="text-gray-400 mt-4 text-lg">
            Verified client feedback on Upwork highlighting professionalism and project excellence.
          </p>
        </motion.div>
      </section>



    </main>
  )
}
