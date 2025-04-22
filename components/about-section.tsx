export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="terminal-box mb-8">
          <div className="terminal-header">
            <div className="terminal-title">MISSION_BRIEFING.DAT</div>
            <div className="terminal-controls">DECRYPTING...</div>
          </div>
          <div className="section-title">MISSION BRIEFING</div>
          <div className="section-subtitle">Essential information about the Shadow Protocol initiative.</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-4 text-[#00e5ffb3]">
              <p>
                Shadow Protocol is a cutting-edge cybersecurity simulation set in a dystopian future where information
                is the ultimate currency and hackers are the new elite.
              </p>
              <p>
                As an operative of the clandestine organization known as COLD, you'll infiltrate corporate networks,
                decrypt classified data, and expose the corruption that plagues the system.
              </p>
              <p>
                With an advanced neural interface and state-of-the-art hacking tools at your disposal, you'll navigate a
                complex web of digital security systems while evading detection.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="border border-[#00e5ff30] p-4">
                <div className="text-3xl font-bold text-[#00e5ff]">100+</div>
                <div className="text-sm text-[#00e5ffb3]">MISSIONS</div>
              </div>
              <div className="border border-[#00e5ff30] p-4">
                <div className="text-3xl font-bold text-[#00e5ff]">50+</div>
                <div className="text-sm text-[#00e5ffb3]">HACKING TOOLS</div>
              </div>
              <div className="border border-[#00e5ff30] p-4">
                <div className="text-3xl font-bold text-[#00e5ff]">5</div>
                <div className="text-sm text-[#00e5ffb3]">MEGACORPS</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="border border-[#00e5ff30] p-1">
              <img
                src="/placeholder.svg?height=800&width=600&text=AGENT_PROFILE"
                alt="Game Character"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 border border-[#00e5ff] bg-[#051525] p-4">
              <div className="text-2xl font-bold text-[#00e5ff]">4.9/5</div>
              <div className="text-sm text-[#00e5ffb3]">USER RATING</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
