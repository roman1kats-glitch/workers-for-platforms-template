import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutValues } from "@/components/about/about-values"
import { AboutTeam } from "@/components/about/about-team"
import { AboutCTA } from "@/components/about/about-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Cardone Growth",
  description:
    "Learn about Cardone Growth — a Cyprus-based digital marketing agency helping SaaS and high-tech companies scale with data-driven strategies.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
      <Footer />
    </main>
  )
}
