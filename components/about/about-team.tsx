"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Ronald Cardone",
    role: "Founder & CEO",
    image: "/about-founder.jpg",
  },
  {
    name: "Elena Vasiliou",
    role: "Head of Performance",
    image: "/about-team-member-1.jpg",
  },
  {
    name: "Alex Petrov",
    role: "SEO & Content Lead",
    image: "/about-team-member-2.jpg",
  },
  {
    name: "Sophia Andreou",
    role: "Analytics Director",
    image: "/about-team-member-3.jpg",
  },
]

export function AboutTeam() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-4 block">
            Meet the Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            The people behind
            <br />
            <span className="text-white/50">your growth.</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            A tight-knit crew of marketing specialists, each bringing deep
            expertise in their discipline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-3xl overflow-hidden glass-hover">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name}, ${member.role} at Cardone Growth`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* LinkedIn overlay */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-white/60">{member.role}</p>
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
