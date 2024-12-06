import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/home/hero-section"
import { FeatureCarousel } from "@/components/home/feature-carousel"
import { HowItWorks } from "@/components/home/how-it-works"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PricingPreview } from "@/components/home/pricing-preview"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeatureCarousel />
      <HowItWorks />
      <TestimonialsSection />
      <PricingPreview />
      <CTASection />
    </main>
  )
}