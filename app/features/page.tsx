import { Card } from "@/components/ui/card"
import { Brain, LineChart, BarChart2, PieChart, Zap, Lock, Globe, Database } from "lucide-react"
import { Image } from "@/components/ui/image"
import { FeaturesNav } from "@/components/features/features-nav"

const features = [
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description: "Transform raw data into meaningful insights with our powerful analytics engine."
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Leverage AI-powered predictions and pattern recognition for better decision making."
  },
  {
    icon: BarChart2,
    title: "Real-time Monitoring",
    description: "Track key metrics in real-time with customizable dashboards and alerts."
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    description: "Create stunning visualizations that tell your data story effectively."
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Process large datasets quickly with our optimized infrastructure."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Keep your data secure with enterprise-grade security features."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Scale your analytics globally with our distributed infrastructure."
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Connect with multiple data sources and formats seamlessly."
  }
]

export default function FeaturesPage() {
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
              Innovative Features Tailored to Your{" "}
              <span className="text-primary">Success</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Discover how DATGenius's cutting-edge tools empower your learning journey with personalized study plans, interactive content, and comprehensive analytics.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <FeaturesNav />
      </section>

      <section className="container py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 transition-all hover:shadow-lg">
                <Icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </section>
    </>
  )
}