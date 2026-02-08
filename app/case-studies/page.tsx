import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { CaseStudiesList } from "@/components/case-studies/case-studies-list"
import { CaseStudiesCTA } from "@/components/case-studies/case-studies-cta"

export const metadata: Metadata = {
  title: "Case Studies | Cardone Growth",
  description:
    "Detailed case studies showing how Cardone Growth helps SaaS and high-tech companies scale with data-driven marketing strategies, SEO, and demand generation.",
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <CaseStudiesHero />
      <CaseStudiesList />
      <CaseStudiesCTA />
      <Footer />
    </main>
  )
}
