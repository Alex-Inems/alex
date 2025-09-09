"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProjectPage() {
  const features = [
    { title: "Personalized Storytelling", desc: "Readers and writers experience tailored content discovery and recommendations." },
    { title: "Follow & Network", desc: "Connect with favorite authors, comment, and engage with the community." },
    { title: "Mobile-First Design", desc: "Optimized reading and writing experience on all devices." },
    { title: "Real-Time Updates", desc: "Live notifications for comments, likes, and new posts." },
  ]

  const metrics = [
    { label: "Articles Published", value: "1k+" },
    { label: "Active Users", value: "5k+" },
    { label: "Comments", value: "12k+" },
    { label: "Writers Onboarded", value: "300+" },
  ]

  const testimonials = [
    {
      name: "Sam Collins",
      role: "Content Creator",
      quote: "BlogMe.africa allowed me to share my stories effortlessly and reach a wider audience faster than any other platform.",
      avatar: "/images/refer1.png",
    },
    {
      name: "Michael Lee",
      role: "Reader",
      quote: "I love how I can follow my favorite writers and get notifications when new posts are published. It keeps me engaged daily!",
      avatar: "/images/user2.jpg",
    },
  ]

  const techStack = ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB", "Vercel"]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/blogwall.jpg"
          alt="Project Hero"
          fill
          className="absolute inset-0 object-cover opacity-70"
          priority
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
              desc: 'Analyzed requirements, studied competitors, and defined full project scope for efficient development.',
            },
            {
              phase: 'Week 1: Design & Prototyping',
              desc: 'Created wireframes, high-fidelity designs, and interactive prototypes aligning with branding and UX goals.',
            },
            {
              phase: 'Week 2: Development & Integration',
              desc: 'Implemented frontend in Next.js, integrated backend services, content management features, and testing.',
            },
            {
              phase: 'Week 2: Launch & Optimization',
              desc: 'Deployed the platform, monitored user interactions, optimized performance, and ensured seamless post-launch experience.',
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
              <li>⚡ Delivering a fully functional, production-ready blogging platform in just two weeks.</li>
              <li>⚡ Designing an intuitive and polished UI/UX across devices without compromising speed.</li>
              <li>⚡ Implementing real-time content updates, comments, and likes seamlessly.</li>
              <li>⚡ Ensuring smooth coordination between frontend, backend APIs, and database under tight deadlines.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Solutions</h2>
            <ul className="space-y-4 text-gray-300">
              <li>✅ Full ownership of architecture leveraging Next.js SSR, SSG, and ISR for speed and SEO.</li>
              <li>✅ Optimized performance with lazy-loading, efficient image handling, and minimized bundle sizes.</li>
              <li>✅ Smooth interactive features with framer-motion, fully accessible and visually polished.</li>
              <li>✅ Integrated APIs and real-time updates with robust error handling and automated workflows.</li>
              <li>✅ Rapid iterations across design, development, and deployment for production-level quality.</li>
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
          <p className="text-gray-300 mb-6">BlogMe.africa was built using modern technologies:</p>
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
        {[{
          url: '/images/blog1.jpg', desc: 'Personalized storytelling.'
        },{
          url: '/images/blog2.jpg', desc: 'Follow favorite authors and network.'
        },{
          url: '/images/blog3.jpg', desc: 'Convenient reading and writing experience.'
        }].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i*0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <Image
              src={item.url}
              alt={item.desc}
              width={600}
              height={400}
              className="w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100  transition-opacity duration-500 flex items-end p-6">
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
            src="https://www.youtube.com/embed/DpKzSzGgcxQ"
            title="BlogMe Demo Video"
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
              transition={{ duration: 0.8, delay: i*0.2 }}
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

      {/* Upwork Reviews Section (kept) */}
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
            height={200}
            className="mx-auto w-64 md:w-80 object-contain rounded-xl shadow-lg"
          />
          <p className="text-gray-400 mt-4 text-lg">
            Verified client feedback on Upwork highlighting professionalism and project excellence.
          </p>
        </motion.div>
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
