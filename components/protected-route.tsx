"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="grid-bg min-h-screen flex items-center justify-center">
        <div className="terminal-box max-w-md w-full mx-auto p-8 text-center">
          <div className="text-[#00e5ff] mb-4">VERIFYING CREDENTIALS</div>
          <div className="w-full h-1 bg-[#00e5ff20] mb-4">
            <div className="h-full bg-[#00e5ff] animate-pulse"></div>
          </div>
          <div className="text-[#00e5ffb3] text-sm">PLEASE WAIT...</div>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <>{children}</>
}
