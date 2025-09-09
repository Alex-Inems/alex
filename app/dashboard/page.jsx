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

      {/* Project Scope Section */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/70 border border-gray-800 rounded-2xl p-12 shadow-2xl backdrop-blur-lg space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Project Scope</h2>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">
              Eventie is an all-in-one platform designed to simplify event discovery, registration, and hosting. 
              It addresses the challenges of finding, organizing, and trusting events in Africa, offering users 
              seamless tools to connect with experiences that matter.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Core Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Event Discovery with filters by city, category, and date</li>
              <li>Personalization with favorites and reminders</li>
              <li>One-click seamless registration</li>
              <li>Real-time schedule and venue updates</li>
              <li>Pan-African reach across multiple cities</li>
              <li>Community features for networking</li>
              <li>Verified hosts & secure payments</li>
              <li>Organizer dashboard with analytics</li>
              <li>Venue discovery & booking</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Problems Solved</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Hard-to-discover events scattered across platforms</li>
              <li>Overwhelming hosting logistics</li>
              <li>Lack of trust due to fake or unreliable events</li>
              <li>Limited community engagement</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>For Attendees: trusted listings & smooth registration</li>
              <li>For Organizers: simplified hosting & wider reach</li>
              <li>For Communities: stronger networks & shared experiences</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Scope of Work (MVP)</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Event search, filtering, and registration</li>
              <li>Ticketing & payment integration</li>
              <li>Organizer dashboard</li>
              <li>Notifications & reminders</li>
              <li>Basic community features</li>
              <li>Venue listing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Future Enhancements</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Advanced organizer analytics</li>
              <li>AI-driven event recommendations</li>
              <li>Event-based groups & chats</li>
              <li>Multi-currency & cross-border ticketing</li>
              <li>Travel & hospitality integrations</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Project Timeline</h2>
        <div className="relative border-l border-gray-700 pl-10 space-y-16">
          {[
            { phase: "Week 1: Research & Planning", desc: "Analyzed user pain points and scoped roadmap." },
            { phase: "Week 1: Design & Prototyping", desc: "Built wireframes and high-fidelity prototypes." },
            { phase: "Week 2: Development & Integration", desc: "Built frontend, integrated APIs, payments, and ticketing." },
            { phase: "Week 2: Launch & Optimization", desc: "Deployed, monitored analytics, and improved UX." },
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
      <section className="relative py-32 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Challenges</h2>
          <ul className="space-y-4 text-gray-300">
            <li>⚡ Delivering a full platform in 2 weeks</li>
            <li>⚡ Balancing modern UI/UX with scalability</li>
            <li>⚡ Real-time updates & personalization</li>
            <li>⚡ Payment and booking API integration</li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Solutions</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✅ Modular Next.js architecture with SSR</li>
            <li>✅ Stripe & PayPal for secure payments</li>
            <li>✅ Framer Motion micro-interactions</li>
            <li>✅ Real-time backend for ticketing</li>
            <li>✅ Agile sprints for production-ready results</li>
          </ul>
        </div>
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
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Ew5cxkDjIqI"
            title="Eventie Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
              <div className="flex flex-col items-center">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <p className="text-lg italic mb-4 text-gray-300">“{t.quote}”</p>
                <h4 className="text-xl font-semibold">{t.name}</h4>
                <p className="text-gray-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-2xl p-12 shadow-xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s Build Something Together</h2>
          <p className="text-lg mb-8">Have an idea for a world-class platform? I’d love to collaborate and bring it to life.</p>
          <a
            href="https://alexthompson.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black text-yellow-400 rounded-full font-semibold hover:bg-gray-900 transition"
          >
            View Portfolio →
          </a>
        </motion.div>
      </section>
    </main>
  )
}
