"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { PreferencesForm } from "@/components/email-preferences/preferences-form"
import { PreferencesStats } from "@/components/email-preferences/preferences-stats"
import { PauseSubscription } from "@/components/email-preferences/pause-subscription"

export default function EmailPreferencesPage() {
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
              Email
              <span className="text-primary"> Preferences</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Customize your communication preferences to receive the content that matters most to you
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <Card className="p-6">
            <PreferencesForm />
          </Card>
          <div className="space-y-8">
            <PreferencesStats />
            <PauseSubscription />
          </div>
        </div>
      </section>
    </>
  )
}