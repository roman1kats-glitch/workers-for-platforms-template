"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GlassCard } from "@/components/ui/glass-card"

const stats = [
  { value: "50+", label: "SaaS Clients" },
  { value: "3x", label: "Avg. Pipeline Growth" },
  { value: "12M+", label: "Leads Generated" },
  { value: "8+", label: "Years of Experience" },
]

export function AboutStory() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32"
        >
          {stats.map((stat) => (
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

        {/* Story section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              Built by marketers
              <br />
              <span className="text-white/50">who understand tech.</span>
            </h2>
            <div className="space-y-6 text-white/60 leading-relaxed text-lg">
              <p>
                Cardone Growth was founded in Limassol, Cyprus with a single
                mission: to bridge the gap between brilliant technology products
                and the audiences that need them.
              </p>
              <p>
                Too many SaaS companies build incredible products but struggle
                to reach the right customers. We saw this firsthand working with
                high-tech startups across Europe and the Middle East, and decided
                to build an agency that truly speaks the language of technology.
              </p>
              <p>
                Today, our team combines deep expertise in performance
                marketing, search engine optimization, and conversion
                optimization to deliver measurable, scalable growth for B2B SaaS
                and enterprise technology companies.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/about-strategy-session.jpg"
                  alt="Marketing strategy whiteboard session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/about-cyprus-office.jpg"
                  alt="Limassol Cyprus skyline and Mediterranean coast"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
