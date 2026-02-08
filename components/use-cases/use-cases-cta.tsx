"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function UseCasesCTA() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Don{"'"}t see your <br />
            <span className="text-gradient">exact challenge?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Every SaaS company is different. Let{"'"}s discuss your unique
            growth challenges and build a custom strategy together.
          </p>
          <button className="group px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
            <span className="flex items-center gap-2">
              Book a Free Consultation{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
    </section>
  )
}
