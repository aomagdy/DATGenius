"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Zap, BarChart2, ArrowRight } from "lucide-react"
import { FlashcardDemo } from "@/components/features/smart-flashcards/flashcard-demo"
import { FlashcardStats } from "@/components/features/smart-flashcards/flashcard-stats"
import { FlashcardCategories } from "@/components/features/smart-flashcards/flashcard-categories"

export default function SmartFlashcardsPage() {
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
              Master Concepts with
              <span className="text-primary"> Smart Flashcards</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Enhance your learning with AI-powered flashcards that adapt to your knowledge level and help you retain information effectively
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <Card className="p-6">
            <Brain className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">Spaced Repetition</h3>
            <p className="text-muted-foreground">
              Review cards at optimal intervals based on your performance and memory patterns
            </p>
          </Card>
          
          <Card className="p-6">
            <Zap className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">Active Recall</h3>
            <p className="text-muted-foreground">
              Strengthen memory through active engagement and self-testing techniques
            </p>
          </Card>
          
          <Card className="p-6">
            <BarChart2 className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">Progress Tracking</h3>
            <p className="text-muted-foreground">
              Monitor your mastery of topics with detailed performance analytics
            </p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <FlashcardDemo />
          </div>
          <div className="space-y-8">
            <FlashcardStats />
            <FlashcardCategories />
          </div>
        </div>

        <div className="my-24 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Try our smart flashcards and experience the difference
          </p>
          <Button 
            size="lg" 
            onClick={() => setShowDemo(true)}
            className="bg-primary hover:bg-primary/90"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  )
}