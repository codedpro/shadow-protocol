import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function GameScreenshots() {
  return (
    <section className="py-20 bg-background" id="media">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block border border-primary/30 bg-background/50 px-4 py-1 mb-4">
            <span className="text-primary text-sm font-mono">02 // MEDIA</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cyber-font text-primary">VISUAL DATABASE</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto font-mono">
            Access classified screenshots and footage from the Shadow Protocol.
          </p>
        </div>

        <Tabs defaultValue="screenshots" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-background border border-primary/30">
              <TabsTrigger
                value="screenshots"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                SCREENSHOTS
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                VIDEOS
              </TabsTrigger>
              <TabsTrigger
                value="artwork"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                ARTWORK
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="screenshots" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScreenshotCard imageUrl="/placeholder.svg?height=720&width=1280" alt="Game Screenshot 1" />
              <ScreenshotCard imageUrl="/placeholder.svg?height=720&width=1280" alt="Game Screenshot 2" />
              <ScreenshotCard imageUrl="/placeholder.svg?height=720&width=1280" alt="Game Screenshot 3" />
              <ScreenshotCard imageUrl="/placeholder.svg?height=720&width=1280" alt="Game Screenshot 4" />
              <ScreenshotCard imageUrl="/placeholder.svg?height=720&width=1280" alt="Game Screenshot 5" />
              <ScreenshotCard imageUrl="/placeholder.svg?height=720&width=1280" alt="Game Screenshot 6" />
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <VideoCard videoUrl="/placeholder.svg?height=720&width=1280" title="GAMEPLAY FOOTAGE" />
              <VideoCard videoUrl="/placeholder.svg?height=720&width=1280" title="DEVELOPER BRIEFING" />
            </div>
          </TabsContent>

          <TabsContent value="artwork" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ScreenshotCard imageUrl="/placeholder.svg?height=1080&width=1080" alt="Game Artwork 1" />
              <ScreenshotCard imageUrl="/placeholder.svg?height=1080&width=1080" alt="Game Artwork 2" />
              <ScreenshotCard imageUrl="/placeholder.svg?height=1080&width=1080" alt="Game Artwork 3" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ScreenshotCard({ imageUrl, alt }) {
  return (
    <Card className="overflow-hidden bg-background/50 border-primary/30 backdrop-blur-sm">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={alt}
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-0 left-0 bg-primary/80 text-xs text-primary-foreground px-2 py-1 font-mono">
            CLASSIFIED
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function VideoCard({ videoUrl, title }) {
  return (
    <Card className="overflow-hidden bg-background/50 border-primary/30 backdrop-blur-sm">
      <CardContent className="p-0">
        <div className="relative pb-[56.25%]">
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <img src={videoUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="absolute top-0 left-0 bg-primary/80 text-xs text-primary-foreground px-2 py-1 font-mono">
              CLASSIFIED
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-mono text-primary">{title}</h3>
        </div>
      </CardContent>
    </Card>
  )
}
