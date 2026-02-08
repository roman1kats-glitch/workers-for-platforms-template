"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutCTA() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-20%] left-[10%] w-[50vw] h-[50vw] bg-blue-600/15 rounded-full blur-[140px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Want to work <br />
            <span className="text-gradient">with us?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you are launching a new product or scaling an existing SaaS,
            we would love to hear about your growth goals.
          </p>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            Get in Touch{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
