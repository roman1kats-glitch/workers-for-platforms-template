"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowRight, TrendingUp, Users, Search, Rocket } from "lucide-react"
import Link from "next/link"

const useCases = [
  {
    title: "SaaS Growth Acceleration",
    subtitle: "Scale MRR with precision marketing",
    description:
      "For SaaS companies looking to break through growth plateaus. We build full-funnel acquisition engines combining paid media, content marketing, and CRO to drive qualified trials and demos that convert to paying customers.",
    features: [
      "Full-funnel paid acquisition (Google, LinkedIn, Meta)",
      "Landing page optimization for trial/demo conversion",
      "Retargeting and nurture sequences",
      "MRR and LTV-focused campaign optimization",
    ],
    image: "/usecase-saas-growth.jpg",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "B2B Demand Generation",
    subtitle: "Fill your pipeline with qualified leads",
    description:
      "For high-tech companies selling to enterprises and mid-market. We design demand generation programs that build awareness, educate buyers, and generate high-intent leads through multi-channel campaigns and ABM strategies.",
    features: [
      "Account-based marketing (ABM) campaigns",
      "LinkedIn thought leadership and advertising",
      "Webinar and event marketing funnels",
      "Marketing automation and lead scoring",
    ],
    image: "/usecase-demand-gen.jpg",
    icon: <Users className="w-6 h-6" />,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-indigo-500/20",
  },
  {
    title: "SEO & Content Engine",
    subtitle: "Dominate organic search in your niche",
    description:
      "For companies that want to own their category in search. We build SEO-driven content machines that attract high-intent organic traffic, establish thought leadership, and create a compounding asset that reduces CAC over time.",
    features: [
      "Technical SEO audit and implementation",
      "Keyword strategy for buyer-intent terms",
      "Long-form content and pillar page creation",
      "Link building and digital PR for authority",
    ],
    image: "/usecase-seo-content.jpg",
    icon: <Search className="w-6 h-6" />,
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Product Launch & GTM",
    subtitle: "Go from zero to traction fast",
    description:
      "For startups and product teams launching new offerings. We create go-to-market strategies that generate buzz, capture early adopters, and establish market positioning from day one with coordinated multi-channel campaigns.",
    features: [
      "Market positioning and messaging framework",
      "Launch campaign planning and execution",
      "Product Hunt, beta waitlist, and community building",
      "Post-launch analytics and iteration",
    ],
    image: "/usecase-product-launch.jpg",
    icon: <Rocket className="w-6 h-6" />,
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-red-500/20",
  },
]

export function UseCasesList() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-24">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-0 overflow-hidden">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
                >
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center lg:[direction:ltr]">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6 ${useCase.color}`}
                    >
                      {useCase.icon}
                      <span className="text-xs font-medium uppercase tracking-wider">
                        {useCase.subtitle}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
                      {useCase.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-lg mb-8">
                      {useCase.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {useCase.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-white/70"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${useCase.color.replace("text-", "bg-")}`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors group w-fit"
                    >
                      Discuss this use case
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="relative min-h-[300px] lg:min-h-0 lg:[direction:ltr] overflow-hidden">
                    <Image
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-30`}
                    />
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
