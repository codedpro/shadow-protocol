"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { TerminalInput } from "./terminal-input"
import { useAuth } from "@/lib/auth-context"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({})
  const [statusMessage, setStatusMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { login } = useAuth()
  const router = useRouter()

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {}

    if (!email) {
      newErrors.email = "EMAIL REQUIRED"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "INVALID EMAIL FORMAT"
    }

    if (!password) {
      newErrors.password = "PASSWORD REQUIRED"
    } else if (password.length < 6) {
      newErrors.password = "PASSWORD TOO SHORT"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    setStatusMessage("AUTHENTICATING...")

    try {
      const result = await login(email, password)

      if (result.success) {
        setStatusMessage(result.message)
        setTimeout(() => {
          router.push("/dashboard")
        }, 1000)
      } else {
        setStatusMessage(result.message)
        setErrors({ general: "AUTHENTICATION FAILED" })
      }
    } catch (error) {
      setStatusMessage("SYSTEM ERROR: AUTHENTICATION FAILED")
      setErrors({ general: "SYSTEM ERROR" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="terminal-box max-w-md w-full mx-auto">
      <div className="terminal-header">
        <div className="terminal-title">SYSTEM_LOGIN.EXE</div>
        <div className="terminal-controls">{isLoading ? "PROCESSING" : "READY"}</div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {errors.general && (
          <div className="border border-[#ff5370] bg-[#ff537020] p-3 mb-4 text-[#ff5370] text-sm">{errors.general}</div>
        )}

        <TerminalInput
          id="email"
          label="EMAIL"
          type="email"
          value={email}
          onChange={setEmail}
          required
          error={errors.email}
        />

        <TerminalInput
          id="password"
          label="PASSWORD"
          type="password"
          value={password}
          onChange={setPassword}
          required
          error={errors.password}
        />

        <div className="flex justify-between items-center text-sm text-[#00e5ffb3]">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="border-[#00e5ff50] bg-transparent" />
            <span>REMEMBER TERMINAL</span>
          </label>
          <Link href="/forgot-password" className="text-[#00e5ff] hover:underline">
            RESET ACCESS
          </Link>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="button button-primary w-full py-2 mt-6 flex justify-center items-center"
        >
          {isLoading ? (
            <span className="flex items-center">
              <span className="mr-2">AUTHENTICATING</span>
              <span className="blink">_</span>
            </span>
          ) : (
            "AUTHENTICATE"
          )}
        </button>

        {statusMessage && <div className="text-center text-sm mt-4 text-[#00e5ff]">{statusMessage}</div>}

        <div className="text-center text-sm mt-4 text-[#00e5ffb3]">
          NO ACCESS?{" "}
          <Link href="/signup" className="text-[#00e5ff] hover:underline">
            REGISTER NEW AGENT
          </Link>
        </div>
      </form>
    </div>
  )
}
