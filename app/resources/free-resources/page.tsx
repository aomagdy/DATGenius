"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Video, Book, Calculator } from "lucide-react"
import { ResourceCard } from "@/components/resources/free-resources/resource-card"
import { ResourceCategories } from "@/components/resources/free-resources/resource-categories"

const resources = [
  {
    title: "DAT Study Schedule Template",
    description: "A customizable 12-week study plan to help you stay organized and on track.",
    type: "PDF",
    category: "Study Planning",
    icon: FileText,
    downloadUrl: "/resources/downloads/dat-study-schedule.pdf",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    title: "Biology Quick Review Guide",
    description: "Comprehensive review of key biology concepts with practice questions.",
    type: "PDF",
    category: "Biology",
    icon: Book,
    downloadUrl: "/resources/downloads/biology-review.pdf",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    title: "PAT Practice Exercises",
    description: "Collection of perceptual ability exercises with detailed solutions.",
    type: "PDF",
    category: "PAT",
    icon: Calculator,
    downloadUrl: "/resources/downloads/pat-exercises.pdf",
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    title: "Chemistry Formula Sheet",
    description: "Essential formulas and equations for general and organic chemistry.",
    type: "PDF",
    category: "Chemistry",
    icon: FileText,
    downloadUrl: "/resources/downloads/chemistry-formulas.pdf",
    image: "https://images.unsplash.com/photo-1532634993-15f421e42ec0?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    title: "DAT Tips & Strategies",
    description: "Expert advice on test-taking strategies and time management.",
    type: "Video",
    category: "Test Strategy",
    icon: Video,
    downloadUrl: "/resources/downloads/dat-strategies.mp4",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    title: "Reading Comprehension Guide",
    description: "Techniques for improving speed and accuracy in the RC section.",
    type: "PDF",
    category: "Reading",
    icon: Book,
    downloadUrl: "/resources/downloads/reading-guide.pdf",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800&h=400"
  }
]

export default function FreeResourcesPage() {
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
              Free DAT
              <span className="text-primary"> Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Download study materials, practice exercises, and guides to help you prepare for the DAT
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <ResourceCategories />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>

        <Card className="mt-16 p-8 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Need More Resources?
          </h2>
          <p className="text-muted-foreground mb-6">
            Sign up for a free account to access our complete library of study materials
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Create Free Account
          </Button>
        </Card>
      </section>
    </>
  )
}