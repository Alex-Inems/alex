"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProjectPage() {
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
            {
              phase: "Week 1: Research & Planning",
              desc: "Analyzed the events industry, identified user pain points around discovery and ticketing, and scoped the product roadmap to ensure scalable architecture.",
            },
            {
              phase: "Week 1: Design & Prototyping",
              desc: "Produced wireframes and high-fidelity prototypes with a focus on discoverability, frictionless checkout, and organizer dashboards.",
            },
            {
              phase: "Week 2: Development & Integration",
              desc: "Built the frontend in Next.js, integrated booking APIs, payment gateways, and real-time updates for event capacity and ticketing.",
            },
            {
              phase: "Week 2: Launch & Optimization",
              desc: "Deployed to production, monitored analytics, optimized performance, and rolled out feedback-driven enhancements for both users and organizers.",
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
              <li>⚡ Delivering an enterprise-grade event platform in just 2 weeks.</li>
              <li>⚡ Balancing sleek, modern UI/UX with scalability for thousands of concurrent users.</li>
              <li>⚡ Implementing real-time ticketing updates and personalized recommendations without compromising speed.</li>
              <li>⚡ Ensuring seamless integration of payment gateways, booking APIs, and organizer dashboards.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Solutions</h2>
            <ul className="space-y-4 text-gray-300">
              <li>✅ Designed a modular Next.js architecture with server-side rendering and static generation for optimal performance.</li>
              <li>✅ Integrated Stripe and PayPal for secure, reliable, and fast transactions.</li>
              <li>✅ Leveraged framer-motion to build engaging interactions and micro-animations for immersive user experience.</li>
              <li>✅ Built a robust backend integration for real-time event updates, ensuring accurate ticket availability.</li>
              <li>✅ Delivered iterative builds rapidly, combining agile development with production-level polish.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            url: "/images/eve.jpg",
            desc: "Concerts and live shows discoverable at a glance.",
          },
          {
            url: "/images/eve2.jpg",
            desc: "Event dashboards for organizers to manage ticket sales.",
          },
          {
            url: "/images/eve3.jpg",
            desc: "Seamless booking and ticketing on mobile devices.",
          },
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

      {/* Reviews Section */}
      <section className="relative py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Upwork Reviews</h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/bikereview.png"
            alt="Upwork Reviews"
            width={320}
            height={240}
            className="mx-auto w-64 md:w-80 object-contain rounded-xl shadow-lg"
          />
          <p className="text-gray-400 mt-4 text-lg">
            Verified client feedback on Upwork highlighting expertise in event platform development.
          </p>
        </motion.div>
      </section>
    </main>
  )
}
