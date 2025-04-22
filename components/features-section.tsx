export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="terminal-box mb-8">
          <div className="terminal-header">
            <div className="terminal-title">SYSTEM_FEATURES.DAT</div>
            <div className="terminal-controls">ENCRYPTED</div>
          </div>
          <div className="section-title">SYSTEM CAPABILITIES</div>
          <div className="section-subtitle">
            Discover the advanced features that make Shadow Protocol a cutting-edge experience.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="feature-card">
            <div className="feature-title">NEURAL INTERFACE</div>
            <div className="feature-description">
              Experience immersive gameplay with our advanced neural connection system that adapts to your play style.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-title">QUANTUM ENCRYPTION</div>
            <div className="feature-description">
              Secure your data with military-grade encryption protocols that protect your digital footprint.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-title">ACHIEVEMENT SYSTEM</div>
            <div className="feature-description">
              Track your progress and unlock exclusive rewards as you advance through the system.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-title">COMMAND CONSOLE</div>
            <div className="feature-description">
              Access advanced features through the integrated command-line interface for maximum control.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
