"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AdaptiveDemo } from "@/components/features/adaptive-learning/adaptive-demo"
import { ProgressChart } from "@/components/features/adaptive-learning/progress-chart"
import { KnowledgeMap } from "@/components/features/adaptive-learning/knowledge-map"

export default function AdaptiveLearningPage() {
  const [showDemo, setShowDemo] = useState(false)

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
              Personalized Learning with
              <span className="text-primary"> AI Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Experience a revolutionary approach to DAT preparation with our adaptive learning system that evolves with your progress
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <KnowledgeMap />
        
        <div className="my-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Your Learning Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch your progress grow as you master each topic
            </p>
          </div>
          <ProgressChart />
        </div>

        <div className="my-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Try It Yourself
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience how our adaptive system adjusts to your responses
            </p>
            <Button 
              size="lg"
              onClick={() => setShowDemo(true)}
              className="bg-primary hover:bg-primary/90"
            >
              Start Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          {showDemo && <AdaptiveDemo />}
        </div>
      </section>
    </>
  )
}