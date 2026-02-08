"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Target, LineChart, Zap, Users } from "lucide-react"

const values = [
  {
    icon: <LineChart className="w-7 h-7 text-blue-400" />,
    title: "Data Over Opinions",
    description:
      "Every decision we make is backed by real data. We test, measure, and iterate to ensure your marketing budget delivers maximum ROI.",
  },
  {
    icon: <Target className="w-7 h-7 text-blue-400" />,
    title: "SaaS-Native Thinking",
    description:
      "We understand MRR, churn, CAC, and LTV. Our strategies are designed around the SaaS business model, not generic marketing playbooks.",
  },
  {
    icon: <Zap className="w-7 h-7 text-blue-400" />,
    title: "Speed to Impact",
    description:
      "We move fast. From onboarding to the first campaign launch, we compress timelines so you see results sooner, not later.",
  },
  {
    icon: <Users className="w-7 h-7 text-blue-400" />,
    title: "True Partnership",
    description:
      "We embed ourselves in your team. Weekly syncs, shared dashboards, and transparent reporting keep us aligned on your growth goals.",
  },
]

export function AboutValues() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] right-[-15%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-4 block">
            What We Stand For
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Our values drive
            <br />
            <span className="text-white/50">every campaign.</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            We built Cardone Growth on principles that put your growth first.
            These are the standards we hold ourselves to on every engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {value.title}
                    </h3>
                    <p className="text-white/55 leading-relaxed">
                      {value.description}
                    </p>
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
