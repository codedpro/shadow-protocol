export function DownloadSection() {
  return (
    <section id="download" className="py-20">
      <div className="container mx-auto px-4">
        <div className="terminal-box mb-8">
          <div className="terminal-header">
            <div className="terminal-title">SYSTEM_ACCESS.DAT</div>
            <div className="terminal-controls">READY</div>
          </div>
          <div className="section-title">ACCESS THE SYSTEM</div>
          <div className="section-subtitle">Download Shadow Protocol and begin your infiltration mission.</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="feature-card text-center">
            <div className="text-[#00e5ff] text-4xl mb-4">&#9002;</div>
            <div className="feature-title">WINDOWS</div>
            <div className="feature-description mb-4">Windows 10/11, 16GB RAM, 100GB Storage</div>
            <button className="button w-full">DOWNLOAD</button>
          </div>
          <div className="feature-card text-center">
            <div className="text-[#00e5ff] text-4xl mb-4">&#9000;</div>
            <div className="feature-title">LINUX</div>
            <div className="feature-description mb-4">Ubuntu 20.04+, 16GB RAM, 100GB Storage</div>
            <button className="button w-full">DOWNLOAD</button>
          </div>
          <div className="feature-card text-center">
            <div className="text-[#00e5ff] text-4xl mb-4">&#9635;</div>
            <div className="feature-title">CONSOLE</div>
            <div className="feature-description mb-4">PlayStation 5, Xbox Series X/S</div>
            <button className="button w-full">DOWNLOAD</button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="button button-primary text-lg px-8 py-3">DOWNLOAD NOW</button>
          <p className="mt-4 text-sm text-[#00e5ff80]">VERSION 1.0.0 | LAST UPDATED: 04.20.2025</p>
        </div>
      </div>
    </section>
  )
}
