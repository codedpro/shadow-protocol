"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#00e5ff30]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="protocol-title text-xl">SHADOW PROTOCOL</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="nav-link">
              &gt; FEATURES
            </Link>
            <Link href="#screenshots" className="nav-link">
              &gt; SCREENSHOTS
            </Link>
            <Link href="#about" className="nav-link">
              &gt; ABOUT
            </Link>
            <Link href="#download" className="nav-link">
              &gt; DOWNLOAD
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <Link href="/dashboard" className="button">
                  DASHBOARD
                </Link>
                <button onClick={logout} className="button">
                  LOGOUT
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="button">
                  LOGIN
                </Link>
                <Link href="/signup" className="button button-primary">
                  SIGN UP
                </Link>
              </>
            )}
          </div>

          <button className="md:hidden text-[#00e5ff]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "X" : "≡"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-[#00e5ff30] bg-[#05152599] backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <Link href="#features" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                &gt; FEATURES
              </Link>
              <Link href="#screenshots" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                &gt; SCREENSHOTS
              </Link>
              <Link href="#about" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                &gt; ABOUT
              </Link>
              <Link href="#download" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>
                &gt; DOWNLOAD
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                {user ? (
                  <>
                    <Link href="/dashboard" className="button w-full" onClick={() => setIsMenuOpen(false)}>
                      DASHBOARD
                    </Link>
                    <button onClick={logout} className="button w-full">
                      LOGOUT
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="button w-full" onClick={() => setIsMenuOpen(false)}>
                      LOGIN
                    </Link>
                    <Link href="/signup" className="button button-primary w-full" onClick={() => setIsMenuOpen(false)}>
                      SIGN UP
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
