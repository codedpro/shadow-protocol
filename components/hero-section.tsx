export function HeroSection() {
  return (
    <section className="min-h-screen pt-16 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="protocol-title text-4xl md:text-6xl mb-4 glitch">SHADOW PROTOCOL</h1>
        <p className="text-[#00e5ffb3] max-w-2xl mx-auto mb-8">
          A cybersecurity simulation set in a dystopian future where information is the ultimate currency and digital
          warfare is the new battleground.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="button button-primary">INITIALIZE SYSTEM</button>
          <button className="button">VIEW DOCUMENTATION</button>
        </div>
      </div>
    </section>
  )
}
