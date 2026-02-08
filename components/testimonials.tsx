"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GlassCard } from "@/components/ui/glass-card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "David Rosen",
    role: "CEO, CloudSync AI",
    image: "/testimonial-1.jpg",
    quote:
      "Cardone Growth transformed our pipeline. Within 6 months, our MQLs increased by 340% and our cost per acquisition dropped by half. They truly understand SaaS metrics.",
    stars: 5,
  },
  {
    name: "Sarah Lindberg",
    role: "VP Marketing, MediTrack Pro",
    image: "/testimonial-2.jpg",
    quote:
      "Working with the Cardone team felt like having an in-house growth department. Their SEO strategy alone drove a 5x increase in organic demo requests.",
    stars: 5,
  },
  {
    name: "Nikos Papadopoulos",
    role: "CTO, LaunchPad HQ",
    image: "/testimonial-3.jpg",
    quote:
      "As a technical founder, I was skeptical of agencies. Cardone Growth changed my mind. They speak our language and deliver real, measurable results.",
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Client Voices
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-lg"
          >
            Hear from the SaaS leaders who trusted us to scale their growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <GlassCard className="h-full flex flex-col">
                <Quote className="w-8 h-8 text-blue-400/40 mb-6" />
                <p className="text-white/70 leading-relaxed text-lg mb-8 flex-1">
                  {`"${testimonial.quote}"`}
                </p>
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-blue-400 text-blue-400"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-white/50">{testimonial.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
