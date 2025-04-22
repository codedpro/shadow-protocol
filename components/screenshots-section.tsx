export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-20">
      <div className="container mx-auto px-4">
        <div className="terminal-box mb-8">
          <div className="terminal-header">
            <div className="terminal-title">VISUAL_DATABASE.DAT</div>
            <div className="terminal-controls">CLASSIFIED</div>
          </div>
          <div className="section-title">VISUAL DATABASE</div>
          <div className="section-subtitle">Access classified screenshots and footage from the Shadow Protocol.</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="screenshot-card">
              <div className="relative">
                <img
                  src={`/placeholder.svg?height=720&width=1280&text=SCREENSHOT_${index}`}
                  alt={`Screenshot ${index}`}
                  className="screenshot-image"
                />
                <div className="absolute top-0 left-0 bg-[#00e5ff80] text-xs text-black px-2 py-1">CLASSIFIED</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
