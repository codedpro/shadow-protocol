import { Shield, Zap, Trophy, Terminal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function GameFeatures() {
  return (
    <section className="py-20 grid-bg" id="features">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block border border-primary/30 bg-background/50 px-4 py-1 mb-4">
            <span className="text-primary text-sm font-mono">01 // FEATURES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cyber-font text-primary">SYSTEM CAPABILITIES</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto font-mono">
            Discover the advanced features that make Shadow Protocol a cutting-edge experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Zap className="h-10 w-10 text-primary" />}
            title="NEURAL INTERFACE"
            description="Experience immersive gameplay with our advanced neural connection system."
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-primary" />}
            title="QUANTUM ENCRYPTION"
            description="Secure your data with military-grade encryption protocols."
          />
          <FeatureCard
            icon={<Trophy className="h-10 w-10 text-primary" />}
            title="ACHIEVEMENT SYSTEM"
            description="Track your progress and unlock exclusive rewards as you advance."
          />
          <FeatureCard
            icon={<Terminal className="h-10 w-10 text-primary" />}
            title="COMMAND CONSOLE"
            description="Access advanced features through the integrated command-line interface."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-background/50 border-primary/30 text-foreground backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl cyber-font text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/70 font-mono">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
