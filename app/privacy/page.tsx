"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Shield, Lock, Users, Database, FileText, Settings, Bell, Scale } from "lucide-react"
import { TableOfContents } from "@/components/legal/table-of-contents"
import { PrintButton } from "@/components/legal/print-button"

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Shield,
    content: `This Privacy Policy explains how DATGenius ("we," "us," or "our") collects, uses, and protects your personal information when you use our website and services. We are committed to protecting your privacy and ensuring the security of your personal information.`
  },
  {
    id: "information-collection",
    title: "Information We Collect",
    icon: Database,
    subsections: [
      {
        id: "personal-information",
        title: "Personal Information",
        content: `We collect information that you provide directly to us, including:
        • Name and contact information
        • Account credentials
        • Payment information
        • Educational background
        • Study preferences and goals`
      },
      {
        id: "usage-information",
        title: "Usage Information",
        content: `We automatically collect information about your usage of our services, including:
        • Device information
        • Log data
        • Performance metrics
        • Study patterns and progress`
      }
    ]
  },
  {
    id: "information-use",
    title: "How We Use Your Information",
    icon: Settings,
    content: `We use your information to:
    • Provide and improve our services
    • Personalize your learning experience
    • Process payments and transactions
    • Send important notifications and updates
    • Analyze and enhance our platform's performance
    • Comply with legal obligations`
  },
  {
    id: "information-sharing",
    title: "Information Sharing",
    icon: Users,
    content: `We may share your information with:
    • Service providers and partners
    • Educational institutions (with your consent)
    • Legal authorities when required by law
    • Other users (only information you choose to share)`
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: Lock,
    content: `We implement appropriate technical and organizational measures to protect your personal information, including:
    • Encryption of sensitive data
    • Regular security assessments
    • Access controls and authentication
    • Secure data storage and transmission`
  },
  {
    id: "your-rights",
    title: "Your Rights",
    icon: Scale,
    content: `You have the right to:
    • Access your personal information
    • Correct inaccurate information
    • Request deletion of your information
    • Opt-out of marketing communications
    • Export your data
    • Withdraw consent`
  },
  {
    id: "notifications",
    title: "Updates to Privacy Policy",
    icon: Bell,
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by:
    • Posting the updated policy on our website
    • Sending you an email notification
    • Displaying a notice in your account dashboard`
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: FileText,
    content: `If you have any questions about this Privacy Policy, please contact us at:
    • Email: privacy@datgenius.com
    • Address: 123 Main Street, San Francisco, CA 94105
    • Phone: (555) 123-4567`
  }
]

export default function PrivacyPage() {
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
            <h1 className="text-4xl font-heading font-bold mb-2">Privacy Policy</h1>
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

                    {section.subsections?.map((subsection) => (
                      <div 
                        key={subsection.id}
                        id={subsection.id}
                        className="mb-8 scroll-mt-8"
                      >
                        <h3 className="text-xl font-heading font-bold mb-4">
                          {subsection.title}
                        </h3>
                        <div className="whitespace-pre-line">
                          {subsection.content}
                        </div>
                      </div>
                    ))}
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