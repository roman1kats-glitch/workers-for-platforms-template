"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "David Rosen",
    role: "CEO, CloudSync AI",
    image: "/testimonial-1.jpg",
    quote:
      "Cardone Growth transformed our pipeline. Within 6 months, our MQLs increased by 340% and our cost per acquisition dropped by half. They truly understand SaaS metrics and what moves the needle.",
  },
  {
    name: "Sarah Lindberg",
    role: "VP Marketing, MediTrack Pro",
    image: "/testimonial-2.jpg",
    quote:
      "Working with the Cardone team felt like having an in-house growth department. Their SEO strategy alone drove a 5x increase in organic demo requests. They became an extension of our team.",
  },
  {
    name: "Nikos Papadopoulos",
    role: "CTO, LaunchPad HQ",
    image: "/testimonial-3.jpg",
    quote:
      "As a technical founder, I was skeptical of marketing agencies. Cardone Growth changed my mind completely. They speak our language, understand developer audiences, and deliver real, measurable results.",
  },
]

export function SuccessTestimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            What our clients say
          </h2>
          <div className="h-1 w-[100px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-3xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-blue-400/30 mb-4" />
                  <p className="text-white/70 leading-relaxed text-lg md:text-xl mb-6">
                    {`"${testimonial.quote}"`}
                  </p>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-white/50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
