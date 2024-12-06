"use client"

import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { SocialLinks } from "@/components/contact/social-links"
import { LiveChat } from "@/components/contact/live-chat"
import { Card } from "@/components/ui/card"

export default function ContactPage() {
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
              Get in
              <span className="text-primary"> Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our platform? We're here to help you succeed in your DAT journey.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="p-6">
            <ContactForm />
          </Card>
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </section>

      <LiveChat />
    </>
  )
}