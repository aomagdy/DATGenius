"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, MessageSquare, LineChart, ArrowRight } from "lucide-react"
import { ChatDemo } from "@/components/features/ai-tutor/chat-demo"
import { TutorStats } from "@/components/features/ai-tutor/tutor-stats"
import { SubjectSelector } from "@/components/features/ai-tutor/subject-selector"

export default function AITutorPage() {
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
              Your Personal
              <span className="text-primary"> AI Tutor</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Get instant help, personalized explanations, and step-by-step guidance from our advanced AI tutoring system
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <Card className="p-6">
            <Brain className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">Smart Assistance</h3>
            <p className="text-muted-foreground">
              Get detailed explanations and step-by-step solutions tailored to your learning style
            </p>
          </Card>
          
          <Card className="p-6">
            <MessageSquare className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">24/7 Support</h3>
            <p className="text-muted-foreground">
              Access instant help whenever you need it, with no waiting or scheduling required
            </p>
          </Card>
          
          <Card className="p-6">
            <LineChart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">Learning Analytics</h3>
            <p className="text-muted-foreground">
              Track your progress and identify areas where you need additional support
            </p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <ChatDemo />
          </div>
          <div className="space-y-8">
            <TutorStats />
            <SubjectSelector />
          </div>
        </div>

        <div className="my-24 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Experience AI-Powered Learning
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start a conversation with your personal AI tutor today
          </p>
          <Button 
            size="lg" 
            onClick={() => setShowDemo(true)}
            className="bg-primary hover:bg-primary/90"
          >
            Try AI Tutor Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  )
}