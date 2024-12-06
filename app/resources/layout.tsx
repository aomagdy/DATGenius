import { ResourcesNav } from "@/components/resources/resources-nav"

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="container py-8">
        <ResourcesNav />
      </div>
      {children}
    </div>
  )
}