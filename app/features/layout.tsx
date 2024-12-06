import { FeaturesNav } from "@/components/features/features-nav"

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="container py-8">
        <FeaturesNav />
      </div>
      {children}
    </div>
  )
}