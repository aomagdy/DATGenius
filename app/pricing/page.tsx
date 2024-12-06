"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { PricingToggle } from "@/components/pricing/pricing-toggle"
import { PriceDisplay } from "@/components/pricing/price-display"
import { PlanComparison } from "@/components/pricing/plan-comparison"
import { PricingFAQ } from "@/components/pricing/pricing-faq"

const plans = [
  {
    name: "Basic",
    description: "Essential DAT prep tools for focused students",
    price: {
      monthly: 99,
      annual: 79
    },
    features: [
      "1,000+ practice questions",
      "Basic study planner",
      "Subject review materials",
      "Performance tracking",
      "Mobile app access",
      "Email support"
    ]
  },
  {
    name: "Standard",
    description: "Most popular choice for serious DAT candidates",
    price: {
      monthly: 149,
      annual: 119
    },
    popular: true,
    features: [
      "5,000+ practice questions",
      "AI-powered study planner",
      "Full video lessons library",
      "3D model visualizations",
      "Practice tests with analytics",
      "Live Q&A sessions",
      "Priority email & chat support",
      "Study group access"
    ]
  },
  {
    name: "Premium",
    description: "Comprehensive preparation with maximum support",
    price: {
      monthly: 199,
      annual: 159
    },
    features: [
      "10,000+ practice questions",
      "1-on-1 tutoring sessions",
      "Personalized study plan",
      "Unlimited practice tests",
      "Priority support access",
      "Score guarantee",
      "Private tutor matching",
      "Custom study materials",
      "Advanced analytics dashboard"
    ]
  }
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="container py-16">
      <div className="text-center">
        <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl mb-4">
          Simple, Transparent
          <span className="text-primary"> Pricing</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Choose the perfect plan for your DAT preparation journey
        </p>

        <PricingToggle 
          isAnnual={isAnnual} 
          onToggle={setIsAnnual} 
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {plans.map((plan) => (
          <Card 
            key={plan.name}
            className={`relative flex flex-col p-6 ${
              plan.popular ? "border-primary shadow-lg" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Most Popular
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-muted-foreground">{plan.description}</p>
              <PriceDisplay
                monthlyPrice={plan.price.monthly}
                annualPrice={plan.price.annual}
                isAnnual={isAnnual}
              />
            </div>

            <div className="space-y-4 flex-1 mb-6">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/signup">
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </Link>
          </Card>
        ))}
      </div>

      <PlanComparison />
      
      <PricingFAQ />

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-muted-foreground mb-8">
          Our support team is here to help you make the right choice.
        </p>
        <Link href="/contact">
          <Button variant="outline">Contact Support</Button>
        </Link>
      </div>
    </div>
  )
}