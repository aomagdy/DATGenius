"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/features/interactive-lessons/video-player"
import { InteractiveDemo } from "@/components/features/interactive-lessons/interactive-demo"
import { LessonsList } from "@/components/features/interactive-lessons/lessons-list"
import { Play, BookOpen, Users, ArrowRight } from "lucide-react"

export default function InteractiveLessonsPage() {
  const [selectedLesson, setSelectedLesson] = useState(0)

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
              Interactive
              <span className="text-primary"> Video Lessons</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Master complex DAT concepts through engaging video lessons with interactive 3D models and real-time practice
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <Card className="p-6">
            <Play className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">HD Video Content</h3>
            <p className="text-muted-foreground">
              Crystal-clear video lessons with expert instructors and detailed explanations
            </p>
          </Card>
          
          <Card className="p-6">
            <BookOpen className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">Interactive Elements</h3>
            <p className="text-muted-foreground">
              Engage with 3D models, quizzes, and practice problems throughout each lesson
            </p>
          </Card>
          
          <Card className="p-6">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-heading font-bold mb-2">Live Discussion</h3>
            <p className="text-muted-foreground">
              Participate in real-time discussions and get instant answers to your questions
            </p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <VideoPlayer lessonId={selectedLesson} />
          </div>
          <div>
            <LessonsList 
              selectedLesson={selectedLesson} 
              onSelectLesson={setSelectedLesson} 
            />
          </div>
        </div>

        <div className="my-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Try an Interactive Lesson
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience our unique approach to DAT preparation
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Demo Lesson
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <InteractiveDemo />
        </div>
      </section>
    </>
  )
}