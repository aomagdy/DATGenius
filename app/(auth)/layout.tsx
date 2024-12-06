"use client"

import { Card } from "@/components/ui/card"
import { Brain } from "lucide-react"
import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-muted/30 grid lg:grid-cols-2">
      <div className="hidden lg:block relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1587425988139-ea99195b4b8a?q=80&w=2070&auto=format&fit=crop"
          alt="Dental student studying"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="w-full max-w-lg">
            <div className="text-white space-y-6">
              <h1 className="text-4xl font-heading font-bold">
                Transform Your DAT Preparation Journey
              </h1>
              <p className="text-lg opacity-90">
                Join thousands of successful students who achieved their dream scores with DATGenius.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-8">
          <div className="mb-8">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <Brain className="h-6 w-6" />
              <span className="font-bold">DATGenius</span>
            </Link>
            {children}
          </div>
        </Card>
      </div>
    </div>
  )
}