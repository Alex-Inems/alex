"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 px-6 py-28 flex justify-center">
      <div className="max-w-6xl w-full space-y-56">
        
        {/* HERO */}
        <section className="relative text-center space-y-12">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-extrabold tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Project Name
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A cinematic showcase of design, code, and storytelling.
          </motion.p>

          {/* Floating Card for Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative mt-24 rounded-[2.5rem] overflow-hidden shadow-[0_0_120px_-20px_rgba(168,85,247,0.4)]"
          >
            <img
              src="https://via.placeholder.com/1600x900"
              alt="Project Hero"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </motion.div>
        </section>

        {/* OVERVIEW */}
        <section className="relative">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full"></div>
          <div className="pl-12 space-y-8">
            <h2 className="text-6xl font-bold tracking-tight">Overview</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 max-w-4xl">
              This project was crafted as a{" "}
              <span className="font-semibold">premium case study</span> —
              blending cinematic visuals, whitespace, and modern engineering.
              Every element was built to{" "}
              <span className="italic">feel timeless and luxurious</span>,
              while solving a real-world challenge for users.
            </p>
          </div>
        </section>

        {/* SPLIT: Goals + Features */}
        <section className="grid md:grid-cols-2 gap-24">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold">Goals</h2>
            <ul className="space-y-6 text-xl text-gray-700">
              {[
                "Craft a world-class digital experience",
                "Balance beauty with scalability",
                "Push design + code to luxury standards",
                "Deliver a story-driven interface",
              ].map((goal, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="border-l-4 border-violet-500 pl-5"
                >
                  {goal}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-bold">Features</h2>
            <ul className="space-y-6 text-xl text-gray-700">
              {[
                "Interactive visual storytelling",
                "Immersive gallery with hover motion",
                "Framer Motion micro-interactions",
                "Next.js + Tailwind + MongoDB stack",
              ].map((feat, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="border-l-4 border-pink-500 pl-5"
                >
                  {feat}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* GALLERY */}
        <section className="space-y-20">
          <h2 className="text-6xl font-bold text-center">Gallery</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {[1, 2, 3, 4].map((n) => (
              <motion.div
                key={n}
                whileHover={{ scale: 1.04, y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition"
              >
                <img
                  src={`https://via.placeholder.com/1200x800?text=Visual+${n}`}
                  alt={`Visual ${n}`}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RESULTS */}
        <section className="space-y-10 text-center">
          <h2 className="text-6xl font-bold">Impact</h2>
          <p className="text-2xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
            The launch{" "}
            <span className="font-semibold">elevated the brand</span>,
            delivered measurable{" "}
            <span className="font-semibold">user growth</span>, and positioned
            the product as a{" "}
            <span className="italic">premium flagship experience</span>. This
            project is not just work — it’s a{" "}
            <span className="font-semibold">statement piece</span>.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-xl font-semibold px-14 py-6 rounded-full shadow-[0_0_50px_-10px_rgba(236,72,153,0.6)] hover:scale-105 transition"
          >
            View Live Project <ArrowUpRight size={26} />
          </a>
        </section>
      </div>
    </main>
  );
}
