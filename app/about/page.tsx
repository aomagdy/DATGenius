"use client"

import { Card } from "@/components/ui/card"
import { Timeline } from "@/components/about/timeline"
import { TeamGrid } from "@/components/about/team-grid"
import { MissionVision } from "@/components/about/mission-vision"
import { CareersSection } from "@/components/about/careers-section"
import { RecognitionSection } from "@/components/about/recognition-section"

export default function AboutPage() {
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
              Our Journey to Transform
              <span className="text-primary"> DAT Preparation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded by dental professionals and education experts, DATGenius 
              combines cutting-edge technology with proven learning methods to help 
              students achieve their dreams.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <Timeline />
        <MissionVision />
        <TeamGrid />
        <RecognitionSection />
        <CareersSection />
      </section>
    </>
  )
}