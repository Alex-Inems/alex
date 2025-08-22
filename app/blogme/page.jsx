"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-28 flex justify-center">
      <div className="max-w-6xl w-full space-y-40">
        {/* HERO */}
        <section className="relative text-center space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Project Name
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            A cinematic showcase of design, code, and storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-[0_0_60px_-20px_rgba(168,85,247,0.25)] mt-20"
          >
            <img
              src="https://via.placeholder.com/1600x800"
              alt="Project Hero"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </section>

        {/* OVERVIEW with side accent */}
        <section className="relative space-y-10">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full"></div>
          <div className="pl-8 space-y-6">
            <h2 className="text-5xl font-semibold">Overview</h2>
            <p className="text-xl leading-relaxed text-gray-700 max-w-4xl">
              This project was crafted as a <strong>premium case study</strong> —
              blending cinematic visuals, whitespace, and modern engineering.
              Every element was built to feel <strong>timeless and luxurious</strong>,
              while solving a real-world challenge for users.
            </p>
          </div>
        </section>

        {/* SPLIT: Goals + Features */}
        <section className="grid md:grid-cols-2 gap-20">
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold">Goals</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="border-l-4 border-violet-500 pl-4">Craft a world-class digital experience</li>
              <li className="border-l-4 border-violet-500 pl-4">Balance beauty with scalability</li>
              <li className="border-l-4 border-violet-500 pl-4">Push design + code to luxury standards</li>
              <li className="border-l-4 border-violet-500 pl-4">Deliver a story-driven interface</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-semibold">Features</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="border-l-4 border-pink-500 pl-4">Interactive visual storytelling</li>
              <li className="border-l-4 border-pink-500 pl-4">Immersive gallery with hover motion</li>
              <li className="border-l-4 border-pink-500 pl-4">Framer Motion micro-interactions</li>
              <li className="border-l-4 border-pink-500 pl-4">Next.js + Tailwind + MongoDB stack</li>
            </ul>
          </div>
        </section>

        {/* GALLERY full bleed */}
        <section className="space-y-16">
          <h2 className="text-5xl font-semibold text-center">Gallery</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((n) => (
              <motion.div
                key={n}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
              >
                <img
                  src={`https://via.placeholder.com/1200x750?text=Visual+${n}`}
                  alt={`Visual ${n}`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* RESULTS */}
        <section className="space-y-8 text-center">
          <h2 className="text-5xl font-semibold">Impact</h2>
          <p className="text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
            The launch elevated the brand, delivered measurable{" "}
            <strong>user growth</strong>, and positioned the product as a{" "}
            <strong>premium flagship experience</strong>. This project is not
            just work — it’s a <strong>statement piece</strong>.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-lg font-semibold px-12 py-5 rounded-full shadow-[0_0_30px_-10px_rgba(236,72,153,0.4)] hover:opacity-90 transition"
          >
            View Live Project <ArrowUpRight size={22} />
          </a>
        </section>
      </div>
    </main>
  );
}
