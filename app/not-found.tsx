"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, Home, Search, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/resources?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[length:30px_30px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

      <div className="container relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center">
        {/* Logo Animation */}
        <div className="relative mb-8 animate-bounce">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
          <Brain className="h-24 w-24 text-primary relative" />
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-heading font-bold mb-4">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Looks like this page has gone missing, just like a baby tooth!
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button 
            variant="default" 
            size="lg"
            className="gap-2"
            asChild
          >
            <Link href="/">
              <Home className="h-4 w-4" />
              Go Back Home
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="gap-2"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            Previous Page
          </Button>
        </div>

        {/* Search Box */}
        <div className="w-full max-w-md">
          <h2 className="text-lg font-medium mb-4">
            Try finding what you need:
          </h2>
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="search"
              placeholder="Search our resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="mt-12">
          <h2 className="text-lg font-medium mb-4">Popular Pages:</h2>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/features" className="text-primary hover:underline">Features</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/pricing" className="text-primary hover:underline">Pricing</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/resources" className="text-primary hover:underline">Resources</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/contact" className="text-primary hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}