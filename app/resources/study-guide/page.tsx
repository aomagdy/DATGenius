"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function StudyGuidePage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-heading font-bold mb-8">DAT Study Guide</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-2xl font-heading font-bold mb-4">Getting Started</h2>
          <p className="text-muted-foreground mb-6">
            Learn how to create an effective study plan and prepare for the DAT.
          </p>
          <Button>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
        {/* Add more study guide content */}
      </div>
    </div>
  )
}