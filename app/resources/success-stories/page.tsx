"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SuccessStoryCard } from "@/components/resources/success-stories/success-story-card"
import { SuccessMetrics } from "@/components/resources/success-stories/success-metrics"
import { TestimonialCarousel } from "@/components/resources/success-stories/testimonial-carousel"

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/10 bg-[length:30px_30px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        </div>
        
        <div className="container relative">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl mb-6">
              Student Success
              <span className="text-primary"> Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real stories from students who transformed their DAT preparation journey with DATGenius
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <SuccessMetrics />

        <div className="my-24">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Featured Success Stories
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SuccessStoryCard
              name="Alex Chen"
              school="Harvard School of Dental Medicine"
              score="24 AA, 25 TS"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
              story="Starting with a practice test score of 17, I was worried about my chances. DATGenius's adaptive learning system helped me identify and strengthen my weak areas. The personalized study plan and constant feedback made all the difference."
              improvement="+7 points"
              studyDuration="3 months"
            />
            <SuccessStoryCard
              name="Maria Rodriguez"
              school="UCLA School of Dentistry"
              score="23 AA, 24 TS"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
              story="The 3D models and interactive content helped me master the PAT section. I improved my score from 18 to 23 in just two months. The practice tests were incredibly similar to the actual DAT."
              improvement="+5 points"
              studyDuration="2 months"
            />
            <SuccessStoryCard
              name="James Wilson"
              school="UPenn School of Dental Medicine"
              score="25 AA, 26 TS"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
              story="DATGenius's comprehensive content coverage and spaced repetition system helped me retain information effectively. The AI tutor was available 24/7 to answer my questions and clarify concepts."
              improvement="+6 points"
              studyDuration="4 months"
            />
          </div>
        </div>

        <TestimonialCarousel />
      </section>
    </>
  )
}