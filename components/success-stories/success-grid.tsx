"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowUpRight } from "lucide-react"

const stories = [
  {
    company: "CloudSync AI",
    industry: "Cloud Infrastructure SaaS",
    image: "/success-cloudsync.jpg",
    challenge:
      "CloudSync AI had a strong product but was struggling to break past $2M ARR. Their paid campaigns were unprofitable with a $480 CAC, and organic traffic was minimal.",
    solution:
      "We rebuilt their entire acquisition funnel. A new Google Ads structure with SaaS-specific bidding, LinkedIn campaigns targeting DevOps leaders, and a technical SEO overhaul of their blog and documentation.",
    results: [
      { metric: "MQLs", value: "+340%", description: "in qualified leads within 6 months" },
      { metric: "CAC", value: "-52%", description: "reduction in customer acquisition cost" },
      { metric: "ARR", value: "$2M to $7.2M", description: "annual recurring revenue growth" },
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400",
  },
  {
    company: "MediTrack Pro",
    industry: "HealthTech SaaS",
    image: "/success-meditrack.jpg",
    challenge:
      "MediTrack had zero organic presence in a highly competitive HealthTech space. Their content strategy was non-existent and they were fully dependent on expensive paid channels.",
    solution:
      "We designed a comprehensive SEO and content strategy targeting high-intent keywords in the electronic health records space. Combined with a targeted LinkedIn ABM program reaching hospital IT decision-makers.",
    results: [
      { metric: "Organic Traffic", value: "5x", description: "increase in organic demo requests" },
      { metric: "Pipeline", value: "+$4.2M", description: "in attributed pipeline value" },
      { metric: "Domain Authority", value: "28 to 56", description: "DA growth in 12 months" },
    ],
    color: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400",
  },
  {
    company: "LaunchPad HQ",
    industry: "Developer Tools Platform",
    image: "/success-launchpad.jpg",
    challenge:
      "LaunchPad HQ was preparing to launch their CI/CD platform into an already crowded market. They needed to create category awareness and generate early adopter signups quickly.",
    solution:
      "We executed a full go-to-market campaign: Product Hunt launch, developer community seeding on Reddit and Hacker News, targeted ads to engineering managers, and a technical content series.",
    results: [
      { metric: "Launch Signups", value: "4,200+", description: "beta users in the first 30 days" },
      { metric: "Product Hunt", value: "#2", description: "Product of the Day ranking" },
      { metric: "MRR", value: "$0 to $85K", description: "in the first 90 days post-launch" },
    ],
    color: "from-orange-500/20 to-red-500/20",
    accent: "text-orange-400",
  },
  {
    company: "DataForge Analytics",
    industry: "Business Intelligence SaaS",
    image: "/success-dataforge.jpg",
    challenge:
      "DataForge was scaling from mid-market to enterprise. Their marketing was built for SMBs and they lacked the content, positioning, and ABM infrastructure to sell to Fortune 500 companies.",
    solution:
      "We repositioned their brand for enterprise, created a suite of executive-level content (white papers, ROI calculators, industry reports), and launched a multi-touch ABM campaign targeting Fortune 1000 companies.",
    results: [
      { metric: "Enterprise Deals", value: "12", description: "Fortune 500 contracts closed in year one" },
      { metric: "Deal Size", value: "+180%", description: "average contract value increase" },
      { metric: "Pipeline", value: "$22M+", description: "enterprise pipeline generated" },
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400",
  },
]

export function SuccessGrid() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-20">
          {stories.map((story, index) => (
            <motion.div
              key={story.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-0 overflow-hidden">
                {/* Hero image */}
                <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={`${story.company} - ${story.industry}`}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${story.color} opacity-40`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <span className={`text-xs font-medium uppercase tracking-wider mb-2 block ${story.accent}`}>
                      {story.industry}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-3">
                      {story.company}
                      <ArrowUpRight className="w-8 h-8 text-white/40" />
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div>
                      <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
                        The Challenge
                      </h4>
                      <p className="text-white/70 leading-relaxed text-lg">
                        {story.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
                        Our Approach
                      </h4>
                      <p className="text-white/70 leading-relaxed text-lg">
                        {story.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-6">
                      The Results
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {story.results.map((result) => (
                        <div
                          key={result.metric}
                          className="p-6 rounded-2xl bg-white/5 border border-white/10"
                        >
                          <p className={`text-3xl md:text-4xl font-bold tracking-tight mb-1 ${story.accent}`}>
                            {result.value}
                          </p>
                          <p className="text-sm font-medium text-white mb-1">
                            {result.metric}
                          </p>
                          <p className="text-xs text-white/50">
                            {result.description}
                          </p>
                        </div>
                      ))}
                    </div>
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
