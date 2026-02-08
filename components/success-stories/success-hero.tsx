"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

const highlights = [
  { value: "340%", label: "Avg. MQL Increase" },
  { value: "52%", label: "Lower CAC" },
  { value: "$18M+", label: "Revenue Attributed" },
]

export function SuccessHero() {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] bg-blue-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-600/15 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
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
            Success Stories
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-gradient max-w-4xl"
        >
          Results that speak for themselves.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-16"
        >
          Every engagement is measured by one thing: impact on your bottom line. Here are the stories behind the numbers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {highlights.map((stat) => (
            <GlassCard key={stat.label} className="text-center py-8">
              <p className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-white/50 uppercase tracking-wider">
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
