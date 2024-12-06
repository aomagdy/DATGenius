"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Search } from "lucide-react"

const faqCategories = [
  {
    id: "general",
    label: "General",
    questions: [
      {
        q: "What is the DAT and why is it important?",
        a: "The DAT (Dental Admission Test) is a standardized test required for admission to dental schools in the United States. It evaluates your academic ability, scientific understanding, and perceptual ability."
      },
      {
        q: "How long should I study for the DAT?",
        a: "Most students study for 3-4 months, dedicating 20-30 hours per week. However, the optimal study duration varies based on your background and preparation level."
      },
      {
        q: "What score do I need to get into dental school?",
        a: "While requirements vary by school, most competitive programs look for Academic Average scores of 20 or higher. However, admissions decisions consider multiple factors beyond DAT scores."
      }
    ]
  },
  {
    id: "preparation",
    label: "Test Preparation",
    questions: [
      {
        q: "What subjects are covered on the DAT?",
        a: "The DAT covers Survey of Natural Sciences (Biology, General Chemistry, and Organic Chemistry), Perceptual Ability, Reading Comprehension, and Quantitative Reasoning."
      },
      {
        q: "How is the DAT scored?",
        a: "Scores range from 1-30, with 17 being the national average. The test uses scale scores, which are converted from raw scores based on question difficulty."
      },
      {
        q: "Can I retake the DAT if I'm not satisfied with my score?",
        a: "Yes, you can retake the DAT, but you must wait 90 days between attempts and can only take it a maximum of three times."
      }
    ]
  },
  {
    id: "strategy",
    label: "Study Strategy",
    questions: [
      {
        q: "What's the best way to study for the PAT section?",
        a: "Practice regularly with PAT-specific materials, focusing on spatial visualization, hole punching, and angle ranking. Use 3D visualization tools and practice timing yourself."
      },
      {
        q: "How should I organize my study schedule?",
        a: "Create a structured schedule that covers all subjects, allocating more time to challenging areas. Include regular practice tests and review sessions."
      },
      {
        q: "What resources are recommended for DAT prep?",
        a: "Use a combination of review books, practice questions, full-length practice tests, and video tutorials. Our platform provides comprehensive materials for all sections."
      }
    ]
  },
  {
    id: "technical",
    label: "Test Day",
    questions: [
      {
        q: "What should I bring to the test center?",
        a: "Bring valid government-issued photo ID, test center appointment confirmation, and basic personal items. No study materials, electronics, or notes are allowed."
      },
      {
        q: "How long is the DAT?",
        a: "The total test time is approximately 5 hours, including optional breaks. Each section has specific time limits."
      },
      {
        q: "What happens if I need to reschedule my test?",
        a: "You can reschedule your DAT appointment up to 24 hours before your test time. Fees may apply depending on how far in advance you reschedule."
      }
    ]
  }
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("general")

  const filteredQuestions = faqCategories.find(cat => cat.id === activeTab)?.questions.filter(
    item => 
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
              Frequently Asked
              <span className="text-primary"> Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about DAT preparation and test-taking strategies
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <Card className="p-6">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Accordion type="single" collapsible className="w-full">
                  {filteredQuestions?.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </section>
    </>
  )
}