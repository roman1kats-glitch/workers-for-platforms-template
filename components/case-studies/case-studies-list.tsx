"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GlassCard } from "@/components/ui/glass-card"
import { ArrowUpRight, TrendingUp, Target, DollarSign, Users, BarChart3, Shield, Zap, Globe, Layers } from "lucide-react"

const caseStudies = [
  {
    slug: "novapay",
    company: "NovaPay",
    industry: "FinTech SaaS",
    tagline: "From startup chaos to $12M ARR in 18 months",
    image: "/case-study-novapay.jpg",
    logo: null,
    overview:
      "NovaPay is a B2B payment processing platform for e-commerce businesses. Despite a best-in-class product with 99.99% uptime and sub-second processing, they were invisible online. Their growth was entirely referral-driven with no repeatable acquisition engine.",
    challenge:
      "NovaPay's marketing consisted of a basic website and occasional LinkedIn posts. They had zero organic traffic, their Google Ads account was burning $25K/month with a $600+ CAC, and their sales team was cold-calling exclusively. Competitors were outspending them 10:1 on brand awareness.",
    approach: [
      "Conducted a full competitive audit and identified 340+ high-intent keywords competitors were ranking for but NovaPay wasn't targeting",
      "Rebuilt their Google Ads from scratch with FinTech-specific copy, landing pages, and conversion tracking aligned to actual revenue (not just form fills)",
      "Launched a multi-touch LinkedIn ABM campaign targeting CFOs and VP Finance at e-commerce companies doing $10M-$500M in revenue",
      "Created a technical content engine: 4 blog posts/month, 2 case studies/quarter, and a monthly industry benchmark report",
      "Implemented HubSpot with lead scoring tied to buying intent signals from their product usage data",
    ],
    results: [
      { icon: DollarSign, metric: "ARR Growth", value: "$800K to $12M", description: "in 18 months of partnership" },
      { icon: Target, metric: "CAC Reduction", value: "-68%", description: "from $600 to $192 average" },
      { icon: TrendingUp, metric: "Organic Traffic", value: "+1,200%", description: "from 3K to 39K monthly visitors" },
      { icon: Users, metric: "SQL Volume", value: "+480%", description: "qualified demos per month" },
    ],
    testimonial: {
      quote: "Cardone didn't just improve our marketing -- they built the entire growth engine that took us from seed stage to Series A. The ROI has been extraordinary.",
      name: "David Chen",
      role: "CEO & Co-Founder, NovaPay",
    },
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
  },
  {
    slug: "spectra-health",
    company: "Spectra Health",
    industry: "HealthTech Platform",
    tagline: "Dominating organic search in a regulated industry",
    image: "/case-study-spectra.jpg",
    logo: null,
    overview:
      "Spectra Health provides a HIPAA-compliant telehealth platform for mid-size hospital networks. Their product was gaining traction through word-of-mouth, but they were losing deals to competitors who had stronger online presence and more credible content.",
    challenge:
      "Healthcare marketing is uniquely difficult: strict compliance requirements, long sales cycles (6-12 months), and a buying committee of 5-8 stakeholders. Spectra had no SEO strategy, no content library for different buyer personas, and was relying on trade show leads that converted at under 2%.",
    approach: [
      "Developed a HIPAA-compliant content strategy with medical review processes, targeting decision-makers at every stage of the buying journey",
      "Built 45+ pages of SEO-optimized content targeting high-intent queries like 'telehealth platform for hospitals', 'HIPAA-compliant video consultation software'",
      "Created persona-specific nurture sequences: CTO track (technical), CMO track (clinical outcomes), CFO track (ROI/cost reduction)",
      "Launched a LinkedIn Thought Leadership program positioning Spectra's CEO as a telehealth industry authority",
      "Implemented a webinar program featuring existing customers sharing their telehealth ROI stories",
    ],
    results: [
      { icon: Globe, metric: "Organic Rankings", value: "42 Keywords", description: "in top-3 positions for target terms" },
      { icon: BarChart3, metric: "Pipeline Value", value: "+$8.4M", description: "attributed to content marketing" },
      { icon: TrendingUp, metric: "Demo Requests", value: "7x", description: "increase in inbound demos" },
      { icon: Users, metric: "Sales Cycle", value: "-35%", description: "reduction in average time to close" },
    ],
    testimonial: {
      quote: "In healthcare, trust is everything. Cardone helped us build the kind of online authority that gets us invited to the table with hospital CIOs. That never happened before.",
      name: "Dr. Sarah Martinez",
      role: "Chief Medical Officer, Spectra Health",
    },
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
  },
  {
    slug: "orbit-crm",
    company: "Orbit CRM",
    industry: "Sales Technology",
    tagline: "Breaking into enterprise with ABM-driven pipeline",
    image: "/case-study-orbit.jpg",
    logo: null,
    overview:
      "Orbit CRM had found product-market fit in the SMB segment with 2,000+ customers. But their $29/month ARPU wasn't sustainable, and they needed to move upmarket to enterprise accounts with $2K-$10K/month contracts to reach profitability.",
    challenge:
      "Enterprise sales require a fundamentally different marketing approach. Orbit's brand was associated with 'simple CRM for small teams', their website spoke to individual contributors, and they had zero content addressing enterprise concerns like security, integrations, and admin controls.",
    approach: [
      "Led a complete brand repositioning: new messaging framework, updated website, and enterprise-grade visual identity",
      "Built an ABM (Account-Based Marketing) program targeting 500 mid-market and enterprise accounts across 5 ICP segments",
      "Created a library of enterprise-focused content: ROI calculator, security whitepaper, migration guide, and competitive comparison pages",
      "Launched multi-channel outbound sequences combining LinkedIn, email, targeted display ads, and direct mail for top-tier accounts",
      "Developed a partner marketing program with Salesforce, HubSpot, and Slack integration ecosystems",
    ],
    results: [
      { icon: DollarSign, metric: "Enterprise ACV", value: "$4,800", description: "average contract value (up from $348)" },
      { icon: Target, metric: "Target Accounts", value: "67 of 500", description: "converted to active pipeline" },
      { icon: Layers, metric: "Deal Size", value: "+1,280%", description: "increase in average deal value" },
      { icon: TrendingUp, metric: "Pipeline", value: "$14.2M", description: "enterprise pipeline in 12 months" },
    ],
    testimonial: {
      quote: "We went from being seen as a 'small business tool' to winning deals against Salesforce. Cardone's ABM strategy fundamentally changed our trajectory.",
      name: "Marcus Thompson",
      role: "VP of Sales, Orbit CRM",
    },
    color: "from-orange-500/20 to-amber-500/20",
    accent: "text-orange-400",
    accentBg: "bg-orange-500/10",
    accentBorder: "border-orange-500/20",
  },
  {
    slug: "vaultix",
    company: "Vaultix",
    industry: "Cybersecurity SaaS",
    tagline: "Generating $22M pipeline in a zero-trust market",
    image: "/case-study-vaultix.jpg",
    logo: null,
    overview:
      "Vaultix provides endpoint detection and response (EDR) solutions for mid-market companies. In one of the most competitive SaaS categories, they needed to differentiate against CrowdStrike, SentinelOne, and others with 100x their marketing budget.",
    challenge:
      "Cybersecurity buyers are notoriously skeptical of marketing. Vaultix's content was too salesy, their ads were generic ('best cybersecurity solution'), and they were targeting the wrong personas. Their $45 CPL from Google Ads was producing leads that sales couldn't convert because they were mostly IT admins, not decision-makers.",
    approach: [
      "Shifted targeting from IT admins to CISOs and VP Security with enterprise buying authority",
      "Created a threat intelligence content program: weekly threat briefings, vulnerability analyses, and incident response guides that built genuine authority",
      "Redesigned paid campaigns around fear-based triggers: data breach cost calculators, compliance deadline reminders, and industry-specific risk assessments",
      "Launched a 'Security Leaders Circle' exclusive event series that became a pipeline generation machine",
      "Built automated nurture tracks that educated prospects over 90-day cycles matching enterprise security buying timelines",
    ],
    results: [
      { icon: Shield, metric: "Pipeline Generated", value: "$22M+", description: "in attributed pipeline within 12 months" },
      { icon: Users, metric: "CISO Engagement", value: "340+", description: "CISO-level contacts in pipeline" },
      { icon: DollarSign, metric: "Win Rate", value: "+42%", description: "improvement in proposal-to-close" },
      { icon: Zap, metric: "Cost Per SQL", value: "-58%", description: "reduction in qualified lead cost" },
    ],
    testimonial: {
      quote: "In cybersecurity, you're selling trust. Cardone understood that from day one. Their content strategy made us the go-to voice in our category.",
      name: "James Kowalski",
      role: "CISO & Co-Founder, Vaultix",
    },
    color: "from-red-500/20 to-rose-500/20",
    accent: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/20",
  },
  {
    slug: "flowstack",
    company: "FlowStack",
    industry: "Developer Tools",
    tagline: "Product-led growth meets demand generation",
    image: "/case-study-flowstack.jpg",
    logo: null,
    overview:
      "FlowStack is a CI/CD and infrastructure-as-code platform for engineering teams. They had strong product-led growth with 15,000 free-tier users, but only 2% were converting to paid plans, and they were struggling to get engineering managers and CTOs to champion enterprise purchases.",
    challenge:
      "Developer tools have a unique go-to-market challenge: the users (developers) love the product, but the buyers (engineering managers, VPs) don't see the ROI. FlowStack's marketing spoke only to developers and had no enterprise messaging. Their free-to-paid conversion was stuck at 2%, and enterprise deals were stalling at the procurement stage.",
    approach: [
      "Built a dual-track marketing strategy: developer community engagement (bottom-up) + enterprise decision-maker campaigns (top-down)",
      "Created an ROI-focused content suite for engineering leaders: TCO calculators, team productivity reports, and 'build vs. buy' analyses",
      "Launched in-product upgrade nudges tied to usage milestones and team-size triggers",
      "Developed a developer advocacy program with tech blog sponsorships, conference talks, and open-source contributions",
      "Implemented a PQL (Product Qualified Lead) scoring system that alerted sales when free teams showed enterprise buying signals",
    ],
    results: [
      { icon: TrendingUp, metric: "Free-to-Paid", value: "2% to 8.5%", description: "conversion rate improvement" },
      { icon: DollarSign, metric: "Enterprise ARR", value: "$0 to $3.2M", description: "in enterprise contracts within 9 months" },
      { icon: Users, metric: "PQL Volume", value: "+320%", description: "product-qualified leads per month" },
      { icon: Zap, metric: "Time to Value", value: "-45%", description: "faster activation for new teams" },
    ],
    testimonial: {
      quote: "Cardone cracked the code on our PLG-to-enterprise motion. We now have a predictable pipeline that our board loves and our sales team can actually close.",
      name: "Priya Sharma",
      role: "CTO, FlowStack",
    },
    color: "from-indigo-500/20 to-violet-500/20",
    accent: "text-indigo-400",
    accentBg: "bg-indigo-500/10",
    accentBorder: "border-indigo-500/20",
  },
]

export function CaseStudiesList() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.slug}
              id={study.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {/* Hero Banner */}
              <div className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden mb-12">
                <Image
                  src={study.image}
                  alt={`${study.company} - ${study.industry}`}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${study.color} opacity-30`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                {/* Case number label */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8">
                  <span className={`text-xs font-mono uppercase tracking-widest ${study.accent}`}>
                    {`Case Study 0${index + 1}`}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                  <span className={`inline-block text-xs font-medium uppercase tracking-wider mb-3 px-3 py-1 rounded-full ${study.accentBg} ${study.accent} ${study.accentBorder} border`}>
                    {study.industry}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white flex items-center gap-3 mb-3">
                    {study.company}
                    <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 text-white/30" />
                  </h2>
                  <p className="text-lg md:text-xl text-white/70 max-w-2xl">
                    {study.tagline}
                  </p>
                </div>
              </div>

              {/* Overview */}
              <div className="max-w-4xl mb-16">
                <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
                  Overview
                </h3>
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
                  {study.overview}
                </p>
              </div>

              {/* Challenge & Approach */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <GlassCard hoverEffect={false} className="p-8 md:p-10">
                  <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-6">
                    The Challenge
                  </h3>
                  <p className="text-white/70 leading-relaxed text-lg">
                    {study.challenge}
                  </p>
                </GlassCard>

                <GlassCard hoverEffect={false} className="p-8 md:p-10">
                  <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-6">
                    Our Approach
                  </h3>
                  <ul className="space-y-4">
                    {study.approach.map((step, i) => (
                      <li key={i} className="flex gap-3 text-white/70 leading-relaxed">
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full ${study.accentBg} ${study.accent} flex items-center justify-center text-xs font-bold mt-0.5`}>
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>

              {/* Results */}
              <div className="mb-16">
                <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-8">
                  The Results
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {study.results.map((result) => (
                    <GlassCard key={result.metric} hoverEffect={false} className="p-6 text-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${study.accentBg} mb-4`}>
                        <result.icon className={`w-6 h-6 ${study.accent}`} />
                      </div>
                      <p className={`text-3xl md:text-4xl font-bold tracking-tight mb-1 ${study.accent}`}>
                        {result.value}
                      </p>
                      <p className="text-sm font-medium text-white mb-1">
                        {result.metric}
                      </p>
                      <p className="text-xs text-white/50">
                        {result.description}
                      </p>
                    </GlassCard>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <GlassCard hoverEffect={false} className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className={`flex-shrink-0 text-6xl font-serif ${study.accent} leading-none select-none`}>
                    {'"'}
                  </div>
                  <div>
                    <blockquote className="text-xl md:text-2xl text-white/80 leading-relaxed mb-6 font-light">
                      {study.testimonial.quote}
                    </blockquote>
                    <div>
                      <p className="font-semibold text-white">{study.testimonial.name}</p>
                      <p className="text-sm text-white/50">{study.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Divider (except last) */}
              {index < caseStudies.length - 1 && (
                <div className="mt-32 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
