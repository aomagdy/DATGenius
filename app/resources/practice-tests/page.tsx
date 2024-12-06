"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, FileText, ArrowRight } from "lucide-react"

const practiceTests = [
  {
    title: "Full-Length Practice Test 1",
    description: "Comprehensive practice test covering all DAT sections with detailed explanations.",
    duration: "5 hours",
    questions: 280,
    difficulty: "Medium"
  },
  {
    title: "Biology Practice Test",
    description: "Focused practice test for the Biology section with answer explanations.",
    duration: "1.5 hours",
    questions: 80,
    difficulty: "Hard"
  },
  {
    title: "Chemistry Practice Test",
    description: "Combined General and Organic Chemistry practice test.",
    duration: "2 hours",
    questions: 100,
    difficulty: "Medium"
  },
  {
    title: "PAT Practice Test",
    description: "Perceptual Ability Test practice with 3D visualizations.",
    duration: "1 hour",
    questions: 90,
    difficulty: "Easy"
  }
]

export default function PracticeTestsPage() {
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
              DAT Practice
              <span className="text-primary"> Tests</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Take full-length practice tests and section-specific assessments to gauge your readiness
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {practiceTests.map((test, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl">{test.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary">{test.difficulty}</Badge>
                    <span className="text-sm text-muted-foreground">•</span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {test.duration}
                    </div>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {test.questions} questions
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                {test.description}
              </p>
              <Button className="w-full">
                Start Test
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>

        <Card className="mt-16 p-8 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Want More Practice?
          </h2>
          <p className="text-muted-foreground mb-6">
            Sign up for full access to our complete library of practice tests and question banks
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </Card>
      </section>
    </>
  )
}