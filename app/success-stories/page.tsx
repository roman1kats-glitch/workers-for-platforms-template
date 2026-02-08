import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SuccessHero } from "@/components/success-stories/success-hero"
import { SuccessGrid } from "@/components/success-stories/success-grid"
import { SuccessTestimonials } from "@/components/success-stories/success-testimonials"
import { SuccessCTA } from "@/components/success-stories/success-cta"

export const metadata: Metadata = {
  title: "Success Stories | Cardone Growth",
  description:
    "Real results from real SaaS and high-tech companies. See how Cardone Growth drives measurable pipeline and revenue growth for our clients.",
}

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <SuccessHero />
      <SuccessGrid />
      <SuccessTestimonials />
      <SuccessCTA />
      <Footer />
    </main>
  )
}
