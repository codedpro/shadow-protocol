import { Button } from "@/components/ui/button"
import { Monitor, Terminal, Database } from "lucide-react"

export function GameDownload() {
  return (
    <section className="py-20 bg-background" id="download">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block border border-primary/30 bg-background/50 px-4 py-1 mb-4">
            <span className="text-primary text-sm font-mono">04 // DOWNLOAD</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cyber-font text-primary">ACCESS THE SYSTEM</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto font-mono">
            Download Shadow Protocol and begin your infiltration mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <PlatformCard
            icon={<Terminal className="h-12 w-12" />}
            platform="WINDOWS"
            requirements="Windows 10/11, 16GB RAM, 100GB Storage"
          />
          <PlatformCard
            icon={<Database className="h-12 w-12" />}
            platform="LINUX"
            requirements="Ubuntu 20.04+, 16GB RAM, 100GB Storage"
          />
          <PlatformCard
            icon={<Monitor className="h-12 w-12" />}
            platform="CONSOLE"
            requirements="PlayStation 5, Xbox Series X/S"
          />
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            DOWNLOAD NOW
          </Button>
          <p className="mt-4 text-sm text-foreground/50 font-mono">VERSION 1.0.0 | LAST UPDATED: 04.20.2025</p>
        </div>
      </div>
    </section>
  )
}

function PlatformCard({ icon, platform, requirements }) {
  return (
    <div className="bg-background/50 border border-primary/30 p-6 text-center backdrop-blur-sm">
      <div className="flex justify-center mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-2 cyber-font text-primary">{platform}</h3>
      <p className="text-sm text-foreground/70 mb-4 font-mono">{requirements}</p>
      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
        DOWNLOAD
      </Button>
    </div>
  )
}
