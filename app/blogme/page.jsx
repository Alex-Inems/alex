'use client'

import { motion } from 'framer-motion'

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img

          src="https://alexthonpson.live/images/blogwall.jpg"
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
            Blogme.africa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-2xl text-gray-300"
          >
            Connect, share your thoughts, and read amazing articles from writers around the globe
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
            BlogMe is a modern storytelling platform I built as the Next.js lead, delivering a fully responsive, high-performance blogging experience in just two weeks, designing an intuitive, mobile-friendly UI, implementing secure user authentication and role-based management, optimizing performance with server-side rendering and incremental static regeneration, and deploying a seamless platform that enabled writers and readers to engage efficiently while exceeding the client’s content engagement goals.

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
              desc: 'As the assigned Next.js expert, I thoroughly analyzed the client’s requirements, studied competitor platforms, and defined the full project scope to ensure a smooth and efficient development process.',
            },
            {
              phase: 'Week 1: Design & Prototyping',
              desc: 'I created wireframes, high-fidelity UI/UX designs, and interactive prototypes that aligned perfectly with BlogMe’s branding and user experience goals.',
            },
            {
              phase: 'Week 2: Development & Integration',
              desc: 'I implemented the frontend with Next.js, integrated backend services, built content management features, and conducted thorough testing to guarantee reliability, responsiveness, and optimal performance.',
            },
            {
              phase: 'Week 2: Launch & Optimization',
              desc: 'I deployed the platform, monitored initial user interactions, optimized performance metrics, and ensured a seamless post-launch experience for both writers and readers.',
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
              <li>⚡ Delivering a fully functional, production-ready blogging platform in just two weeks while maintaining flawless performance and responsiveness.</li>
              <li>⚡ Designing an intuitive and polished UI/UX that looks premium across all devices without compromising speed or usability.</li>
              <li>⚡ Implementing dynamic features such as real-time content updates, post previews, comments, and likes without any glitches or broken states.</li>
              <li>⚡ Ensuring seamless coordination between Next.js frontend, backend APIs, and database queries, all under tight deadlines and high expectations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Solutions</h2>
            <ul className="space-y-4 text-gray-300">
              <li>✅ Took full ownership of the platform architecture, leveraging Next.js features like server-side rendering, static generation, and incremental static regeneration to achieve lightning-fast load times.</li>
              <li>✅ Optimized performance with lazy-loading, efficient image handling, and minimized bundle sizes while keeping the design visually striking and consistent.</li>
              <li>✅ Built smooth interactive features and micro-interactions using framer-motion, fully compliant with accessibility standards, proving speed and style can coexist.</li>
              <li>✅ Integrated APIs and real-time updates flawlessly, with robust error handling and automated workflows ensuring reliability under heavy usage.</li>
              <li>✅ Executed rapid iterations across design, development, and deployment, hitting milestones with precision because a real Next.js expert wastes no time.</li>
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
            url: 'https://alexthonpson.live/images/blog1.jpg',
            desc: 'personalized strorytelling.',
          },
          {
            url: 'https://alexthonpson.live/images/blog2.jpg',
            desc: 'Follow who you love and network.',
          },
          {
            url: 'https://alexthonpson.live/images/blog3.jpg',
            desc: 'Ensuring convenience.',
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
