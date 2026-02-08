"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HomeShowcase() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden aspect-[21/9] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
        >
          <Image
            src="/home-hero-dashboard.jpg"
            alt="Cardone Growth marketing analytics dashboard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <p className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-2">
              Data-Driven Growth
            </p>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
              Real-time insights powering every campaign.
            </h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden aspect-[16/10] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] group"
          >
            <Image
              src="/home-team-working.jpg"
              alt="Cardone Growth team analyzing campaign performance"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-2">
                Our Team
              </p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Dedicated specialists for every channel.
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden aspect-[16/10] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] group"
          >
            <Image
              src="/about-cyprus-office.jpg"
              alt="Cardone Growth headquarters in Limassol, Cyprus"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-2">
                Limassol, Cyprus
              </p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Strategically located at the crossroads of Europe.
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
