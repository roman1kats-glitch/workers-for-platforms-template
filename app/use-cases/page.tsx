import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UseCasesHero } from "@/components/use-cases/use-cases-hero"
import { UseCasesList } from "@/components/use-cases/use-cases-list"
import { UseCasesCTA } from "@/components/use-cases/use-cases-cta"

export const metadata: Metadata = {
  title: "Use Cases | Cardone Growth",
  description:
    "Discover how Cardone Growth helps SaaS and high-tech companies grow through tailored marketing solutions for every stage of the funnel.",
}

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <UseCasesHero />
      <UseCasesList />
      <UseCasesCTA />
      <Footer />
    </main>
  )
}
