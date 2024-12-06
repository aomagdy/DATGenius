"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText, Shield, Scale, CreditCard, AlertTriangle, HelpCircle, Bell, Mail } from "lucide-react"
import { TableOfContents } from "@/components/legal/table-of-contents"
import { PrintButton } from "@/components/legal/print-button"
import { DefinitionBox } from "@/components/legal/definition-box"

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: FileText,
    content: `These Terms of Service ("Terms") govern your access to and use of DATGenius's website and services. By using our services, you agree to be bound by these Terms. Please read them carefully.`
  },
  {
    id: "definitions",
    title: "Definitions",
    icon: HelpCircle,
    content: `Before proceeding, it's important to understand the following terms:`,
    definitions: [
      {
        term: "Services",
        definition: "The educational platform, content, and features provided by DATGenius"
      },
      {
        term: "User",
        definition: "Any individual who accesses or uses our Services"
      },
      {
        term: "Content",
        definition: "All materials, including text, images, videos, and interactive elements available through our Services"
      },
      {
        term: "Subscription",
        definition: "A paid plan that provides access to premium features and content"
      }
    ]
  },
  {
    id: "account-responsibilities",
    title: "Account Responsibilities",
    icon: Shield,
    content: `You are responsible for:
    • Maintaining the confidentiality of your account credentials
    • All activities that occur under your account
    • Providing accurate and complete information
    • Notifying us of any unauthorized access
    • Complying with all applicable laws and regulations`
  },
  {
    id: "subscription-terms",
    title: "Subscription Terms",
    icon: CreditCard,
    content: `Our subscription services are subject to the following terms:
    • Subscription fees are billed in advance
    • Automatic renewal unless cancelled
    • No refunds for partial months
    • Price changes with 30 days notice
    • Cancellation available at any time`
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    icon: Scale,
    content: `All content and materials available through our Services are protected by intellectual property rights:
    • Copyright protection of all content
    • Trademark protection of our brand assets
    • Prohibition of unauthorized use
    • User license limitations
    • Content sharing restrictions`
  },
  {
    id: "prohibited-conduct",
    title: "Prohibited Conduct",
    icon: AlertTriangle,
    content: `The following activities are strictly prohibited:
    • Sharing account credentials
    • Unauthorized content distribution
    • Attempting to breach security
    • Interfering with service operation
    • Violating other users' rights
    • Automated access or scraping`
  },
  {
    id: "updates",
    title: "Updates to Terms",
    icon: Bell,
    content: `We may update these Terms from time to time. Changes will be effective upon posting to our website. We will notify you of material changes through:
    • Email notifications
    • Website announcements
    • Account dashboard notices`
  },
  {
    id: "contact",
    title: "Contact Information",
    icon: Mail,
    content: `For questions about these Terms, please contact us at:
    • Email: legal@datgenius.com
    • Address: 123 Main Street, San Francisco, CA 94105
    • Phone: (555) 123-4567`
  }
]

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id)

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }))

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom > 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-heading font-bold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          <PrintButton />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
          <div className="lg:sticky lg:top-8 lg:h-[calc(100vh-8rem)]">
            <Card className="p-4">
              <ScrollArea className="h-full">
                <TableOfContents 
                  sections={sections} 
                  activeSection={activeSection}
                  onSectionClick={(id) => {
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                />
              </ScrollArea>
            </Card>
          </div>

          <Card className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <section 
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-8"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-heading font-bold">{section.title}</h2>
                    </div>

                    {section.content && (
                      <div className="mb-8 whitespace-pre-line">
                        {section.content}
                      </div>
                    )}

                    {section.definitions && (
                      <div className="grid gap-4 mb-8">
                        {section.definitions.map((def) => (
                          <DefinitionBox
                            key={def.term}
                            term={def.term}
                            definition={def.definition}
                          />
                        ))}
                      </div>
                    )}
                  </section>
                )
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}