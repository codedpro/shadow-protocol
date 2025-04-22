"use client"

import { useAuth } from "@/lib/auth-context"
import { ProtectedRoute } from "@/components/protected-route"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
  const { user, logout } = useAuth()

  return (
    <ProtectedRoute>
      <div className="grid-bg min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 container mx-auto px-4 py-20">
          <div className="terminal-box mb-8">
            <div className="terminal-header">
              <div className="terminal-title">AGENT_DASHBOARD.SYS</div>
              <div className="terminal-controls">ACTIVE</div>
            </div>

            <div className="p-4">
              <div className="text-[#00e5ff] text-xl mb-4">WELCOME, AGENT {user?.username.toUpperCase()}</div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-[#00e5ff30] p-4">
                  <div className="text-[#00e5ffb3] mb-2">AGENT STATUS</div>
                  <div className="text-[#00e5ff]">ACTIVE</div>
                </div>

                <div className="border border-[#00e5ff30] p-4">
                  <div className="text-[#00e5ffb3] mb-2">SECURITY CLEARANCE</div>
                  <div className="text-[#00e5ff]">LEVEL 1</div>
                </div>

                <div className="border border-[#00e5ff30] p-4">
                  <div className="text-[#00e5ffb3] mb-2">MISSIONS COMPLETED</div>
                  <div className="text-[#00e5ff]">0</div>
                </div>

                <div className="border border-[#00e5ff30] p-4">
                  <div className="text-[#00e5ffb3] mb-2">NEXT MISSION</div>
                  <div className="text-[#00e5ff]">PENDING ASSIGNMENT</div>
                </div>
              </div>

              <div className="terminal-box mb-8">
                <div className="terminal-header">
                  <div className="terminal-title">SYSTEM_MESSAGES.LOG</div>
                  <div className="terminal-controls">3 UNREAD</div>
                </div>

                <div className="p-4 space-y-4">
                  <div className="border-b border-[#00e5ff30] pb-2">
                    <div className="text-[#00e5ff] mb-1">WELCOME TO SHADOW PROTOCOL</div>
                    <div className="text-[#00e5ffb3] text-sm">
                      Your registration has been processed. Complete your agent profile to receive mission assignments.
                    </div>
                  </div>

                  <div className="border-b border-[#00e5ff30] pb-2">
                    <div className="text-[#00e5ff] mb-1">SYSTEM UPDATE</div>
                    <div className="text-[#00e5ffb3] text-sm">
                      New security protocols have been implemented. All agents must update their encryption keys.
                    </div>
                  </div>

                  <div className="border-b border-[#00e5ff30] pb-2">
                    <div className="text-[#00e5ff] mb-1">TRAINING REQUIRED</div>
                    <div className="text-[#00e5ffb3] text-sm">
                      Complete basic training modules to increase your security clearance level.
                    </div>
                  </div>
                </div>
              </div>

              <button onClick={logout} className="button">
                LOGOUT
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ProtectedRoute>
  )
}
