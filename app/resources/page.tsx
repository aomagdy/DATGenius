"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlogGrid } from "@/components/resources/blog-grid"
import { FeaturedArticle } from "@/components/resources/featured-article"
import { ResourcesFilter } from "@/components/resources/resources-filter"
import { ResourcesSearch } from "@/components/resources/resources-search"

export default function ResourcesPage() {
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
              Resources for Your
              <span className="text-primary"> DAT Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert guides, study tips, and success stories to help you prepare for the DAT
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex-1">
            <ResourcesSearch />
          </div>
          <ResourcesFilter />
        </div>

        <FeaturedArticle />

        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-heading font-bold">Latest Articles</h2>
            <Button variant="outline">View All</Button>
          </div>
          <BlogGrid />
        </div>
      </section>
    </>
  )
}