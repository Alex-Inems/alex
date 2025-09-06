"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProjectPage() {
  const features = [
    { title: "Personalized Recommendations", desc: "Tailored event suggestions based on user preferences." },
    { title: "Real-time Ticketing", desc: "Instant updates on ticket availability for smooth booking." },
    { title: "Organizer Dashboard", desc: "Powerful tools for creating, promoting, and tracking events." },
    { title: "Mobile-first Design", desc: "Optimized experience for all devices and screen sizes." },
  ]

  const metrics = [
    { label: "Events Listed", value: "500+" },
    { label: "Users", value: "10k+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Organizers", value: "200+" },
  ]

  const testimonials = [
    {
      name: "Jane Doe",
      role: "Event Organizer",
      quote: "Eventie transformed the way we manage our events. Booking and ticketing are seamless!",
      avatar: "/images/testimonial1.jpg",
    },
    {
      name: "John Smith",
      role: "Music Enthusiast",
      quote: "I discovered so many concerts thanks to Eventie. The app is fast, intuitive, and beautiful.",
      avatar: "/images/testimonial2.jpg",
    },
  ]

  const techStack = ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Stripe API", "MongoDB", "Node.js"]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/eventie.jpg"
          alt="Project Hero"
          fill
          priority
          className="absolute inset-0 object-cover opacity-70"
        />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold tracking-tight"
          >
            Eventie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-2xl text-gray-300"
          >
            Your gateway to unforgettable events
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
            Eventie is a next-generation event discovery and management platform. 
            From concerts and conferences to local meetups and festivals, users can 
            seamlessly explore, book, and manage events in one place. Organizers 
            gain powerful tools to create, promote, and sell tickets, while 
            attendees enjoy a smooth, mobile-first booking experience.  
            By integrating real-time updates, personalized recommendations, and 
            secure payment flows, Eventie redefines how people connect through live events.
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Project Timeline</h2>
        <div className="relative border-l border-gray-700 pl-10 space-y-16">
          {[
            { phase: "Week 1: Research & Planning", desc: "Analyzed the events industry, identified user pain points, and scoped a scalable roadmap." },
            { phase: "Week 1: Design & Prototyping", desc: "Wireframes and high-fidelity prototypes focused on discoverability, checkout, and dashboards." },
            { phase: "Week 2: Development & Integration", desc: "Built frontend with Next.js, integrated booking APIs, payments, and real-time ticketing updates." },
            { phase: "Week 2: Launch & Optimization", desc: "Deployed to production, monitored analytics, and rolled out feedback-driven improvements." },
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

      {/* Challenges & Solutions */}
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
              <li>⚡ Delivering an enterprise-grade event platform in just 2 weeks.</li>
              <li>⚡ Balancing sleek, modern UI/UX with scalability for thousands of concurrent users.</li>
              <li>⚡ Implementing real-time ticketing updates and personalized recommendations without compromising speed.</li>
              <li>⚡ Ensuring seamless integration of payment gateways, booking APIs, and organizer dashboards.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Solutions</h2>
            <ul className="space-y-4 text-gray-300">
              <li>✅ Modular Next.js architecture with SSR and static generation for speed and SEO.</li>
              <li>✅ Stripe & PayPal integration for fast, secure payments.</li>
              <li>✅ Framer Motion-powered micro-interactions for engaging UX.</li>
              <li>✅ Robust backend for real-time event updates and ticket tracking.</li>
              <li>✅ Agile, iterative builds delivering production-ready polish rapidly.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 p-8 rounded-2xl border border-gray-800 shadow-lg backdrop-blur-lg"
            >
              <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Impact & Metrics</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl md:text-5xl font-bold text-yellow-400">{m.value}</p>
              <p className="text-gray-300 mt-2">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/70 border border-gray-800 rounded-2xl p-12 shadow-2xl backdrop-blur-lg"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tech Stack & Tools</h2>
          <p className="text-gray-300 mb-6">Eventie was built using cutting-edge tools and frameworks:</p>
          <div className="flex flex-wrap gap-4">
            {techStack.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          { url: "/images/eve.jpg", desc: "Concerts and live shows discoverable at a glance." },
          { url: "/images/eve2.jpg", desc: "Event dashboards for organizers to manage ticket sales." },
          { url: "/images/eve3.jpg", desc: "Seamless booking and ticketing on mobile devices." },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-lg group aspect-[4/3]"
          >
            <Image
              src={item.url}
              alt={item.desc}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <p className="text-white font-semibold">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Video / Demo Section */}
      <section className="relative py-32 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Demo / Walkthrough</h2>
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Eventie Demo"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Client Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 p-8 rounded-2xl border border-gray-800 shadow-lg backdrop-blur-lg"
            >
              <Image
                src={t.avatar}
                alt={t.name}
                width={80}
                height={80}
                className="mx-auto rounded-full mb-4"
              />
              <p className="text-gray-300 italic">"{t.quote}"</p>
              <p className="mt-4 font-semibold">{t.name}</p>
              <p className="text-gray-400 text-sm">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Interested in a similar project?</h2>
        <p className="text-gray-400 mb-8">Let's collaborate and build something extraordinary together.</p>
        <a
          href="https://alexthompson.vercel.app"
          className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 transition"
        >
          View Portfolio
        </a>
      </section>

    </main>
  )
}
