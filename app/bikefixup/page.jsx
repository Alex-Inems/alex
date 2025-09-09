'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProjectPage() {
  const features = [
    { title: "Convenient Scheduling", desc: "Users can book bike services and arrange pick-up/drop-off effortlessly." },
    { title: "Trusted Mechanics", desc: "All services are performed by certified, experienced professionals." },
    { title: "Real-Time Updates", desc: "Track your bike status live, get notifications, and receive completion alerts." },
    { title: "Premium UX", desc: "Mobile-first, intuitive design ensures users can schedule, pay, and review services easily." },
  ]

  const metrics = [
    { label: "Bikes Serviced", value: "500+" },
    { label: "Active Users", value: "2k+" },
    { label: "Pick-Ups Completed", value: "1k+" },
    { label: "Mechanics Onboarded", value: "50+" },
  ]

  const faqs = [
    { q: "How do I book a bike service?", a: "You can book easily through our mobile app or website by selecting your city, service type, and preferred time slot." },
    { q: "Do you provide pick-up and drop-off?", a: "Yes, we offer free bike pick-up and drop-off in most service areas, making it completely hassle-free." },
    { q: "Are your mechanics certified?", a: "Absolutely. All our mechanics are trained professionals with expertise in two-wheeler servicing and repair." },
    { q: "What warranty do you offer?", a: "Every service comes with a 7-day service warranty covering the work done on your bike." },
    { q: "What cities are you available in?", a: "We are present in major cities like Delhi, Mumbai, Bengaluru, Pune, Hyderabad, Chennai, and expanding rapidly." },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/bikewall.jpg"
          alt="Project Hero"
          fill
          priority
          className="object-cover opacity-70"
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
            Bikefixup is a full-service preventive maintenance and motorcycle repair platform designed to make bike servicing simple and convenient. Many motorcycle owners struggle to find a trusted service station, waste time at workshops, or need reliable pick-up and drop-off options. Bikefixup solves these problems by allowing users to schedule their bike service seamlessly, whether they prefer visiting the workshop or arranging for their bike to be picked up. This approach gives owners the freedom to relax with their families or continue working while their motorcycle is serviced. With high-quality, guaranteed services at fair prices, Bikefixup ensures a hassle-free, trustworthy, and time-saving experience for every rider. <br /> www.bikefixup.com
          </p>
        </motion.div>
      </section>

      {/* YouTube Video Section */}
      <section className="relative py-32 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Watch the Demo</h2>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Z9zrUe2EohI"
            title="BikeFixUp Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Project Timeline</h2>
        <div className="relative border-l border-gray-700 pl-10 space-y-16">
          {[
            { phase: 'Week 1: Research & Planning', desc: 'Analyzed client requirements, conducted competitor research, defined project scope.' },
            { phase: 'Week 1: Design & Prototyping', desc: 'Created wireframes, high-fidelity designs, and interactive prototypes aligned with branding.' },
            { phase: 'Week 2: Development & Integration', desc: 'Implemented frontend/backend, integrated pick-up/drop-off scheduling, and tested thoroughly.' },
            { phase: 'Week 2: Launch & Optimization', desc: 'Deployed platform, monitored usage, optimized performance, ensured smooth user experience.' },
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
              <li>⚡ Delivering a fully functional platform in just 2 weeks.</li>
              <li>⚡ Combining polished UI/UX with optimal performance across devices.</li>
              <li>⚡ Implementing interactive scheduling features and animations while maintaining accessibility.</li>
              <li>⚡ Seamless integration between frontend, backend, and real-time updates.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Solutions</h2>
            <ul className="space-y-4 text-gray-300">
              <li>✅ Full ownership of architecture using Next.js SSR, SSG, and ISR for ultra-fast experience.</li>
              <li>✅ Performance optimizations: lazy loading, efficient image handling, and minimized bundles.</li>
              <li>✅ Custom animations and micro-interactions via framer-motion with accessibility compliance.</li>
              <li>✅ API integration, error handling, and real-time updates for smooth usage under heavy load.</li>
              <li>✅ Rapid iterations across design, development, and deployment ensuring professional quality.</li>
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

      {/* Gallery Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          { url: '/images/biker1.jpg', desc: 'Preventive maintenance on a modern motorcycle.' },
          { url: '/images/biker.jpg', desc: 'Bike components inspected carefully.' },
          { url: '/images/biker2.jpg', desc: 'Pick-up and drop-off service illustrating convenience.' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <Image
              src={item.url}
              alt={item.desc}
              width={800}
              height={600}
              className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0  bg-gradient-to-t from-black/60 to-transparent opacity-100  transition-opacity duration-500 flex items-end p-6">
              <p className="text-white font-semibold">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Upwork Reviews Section */}
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
            width={400}
            height={300}
            className="mx-auto w-64 md:w-80 object-contain rounded-xl shadow-lg"
          />
          <p className="text-gray-400 mt-4 text-lg">
            Verified client feedback on Upwork highlighting professionalism and project excellence.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 p-6 rounded-2xl border border-gray-800 shadow-lg backdrop-blur-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{item.q}</h3>
              <p className="text-gray-300">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative py-32 px-6 max-w-4xl mx-auto text-center">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-2xl p-12 shadow-xl"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-6">Lets Build Something Together</h2>
    <p className="text-lg mb-8">
      Have an idea for a world-class platform? I will love to collaborate and bring it to life.
    </p>
    <a
      href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
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
