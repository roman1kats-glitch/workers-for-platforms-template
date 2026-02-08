"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function CaseStudiesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-end overflow-hidden pt-32 pb-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/case-study-results.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Liquid blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] bg-blue-600/15 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-600/10 rounded-full blur-[120px] animate-blob mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
            Case Studies
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-gradient max-w-5xl"
        >
          Deep dives into real growth.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-16"
        >
          Detailed breakdowns of how we helped SaaS and high-tech companies overcome
          their biggest marketing challenges and unlock scalable, profitable growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "5", label: "In-Depth Cases" },
            { value: "$40M+", label: "Pipeline Generated" },
            { value: "4.8x", label: "Avg. ROI" },
            { value: "100%", label: "Client Retention" },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-6 rounded-2xl glass">
              <p className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-white/50 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
