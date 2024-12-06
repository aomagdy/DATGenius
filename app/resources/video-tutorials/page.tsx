"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock } from "lucide-react"

const tutorials = [
  {
    title: "Biology Series: Cell Structure and Function",
    description: "Comprehensive overview of cellular biology with 3D visualizations.",
    duration: "45 minutes",
    level: "Beginner",
    category: "Biology",
    thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    title: "General Chemistry: Chemical Bonding",
    description: "Learn about different types of chemical bonds and molecular geometry.",
    duration: "60 minutes",
    level: "Intermediate",
    category: "Chemistry",
    thumbnail: "https://images.unsplash.com/photo-1532634993-15f421e42ec0?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    title: "PAT Strategies: Angle Ranking",
    description: "Master techniques for solving angle ranking problems quickly and accurately.",
    duration: "30 minutes",
    level: "Advanced",
    category: "PAT",
    thumbnail: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    title: "Reading Comprehension Techniques",
    description: "Improve your speed and accuracy in the Reading Comprehension section.",
    duration: "40 minutes",
    level: "Intermediate",
    category: "Reading",
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800&h=400"
  }
]

export default function VideoTutorialsPage() {
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
              Video
              <span className="text-primary"> Tutorials</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Learn complex DAT concepts through engaging video lessons and interactive content
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
                <Button
                  size="icon"
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-primary/90 hover:bg-primary"
                >
                  <Play className="h-8 w-8" />
                </Button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge>{tutorial.category}</Badge>
                  <Badge variant="secondary">{tutorial.level}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto">
                    <Clock className="h-4 w-4" />
                    {tutorial.duration}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">
                  {tutorial.title}
                </h3>
                <p className="text-muted-foreground">
                  {tutorial.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-16 p-8 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Access All Video Tutorials
          </h2>
          <p className="text-muted-foreground mb-6">
            Get unlimited access to our complete library of video lessons and interactive content
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Learning
          </Button>
        </Card>
      </section>
    </>
  )
}