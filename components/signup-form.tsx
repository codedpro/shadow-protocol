"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { TerminalInput } from "./terminal-input"
import { useAuth } from "@/lib/auth-context"

export function SignupForm() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState<{
    username?: string
    email?: string
    password?: string
    confirmPassword?: string
    general?: string
  }>({})
  const [statusMessage, setStatusMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [registrationStep, setRegistrationStep] = useState(1)

  const { signup } = useAuth()
  const router = useRouter()

  const validateStep1 = () => {
    const newErrors: { username?: string; email?: string } = {}

    if (!username) {
      newErrors.username = "AGENT ID REQUIRED"
    } else if (username.length < 3) {
      newErrors.username = "AGENT ID TOO SHORT"
    }

    if (!email) {
      newErrors.email = "EMAIL REQUIRED"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "INVALID EMAIL FORMAT"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: { password?: string; confirmPassword?: string } = {}

    if (!password) {
      newErrors.password = "PASSWORD REQUIRED"
    } else if (password.length < 6) {
      newErrors.password = "PASSWORD TOO WEAK"
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "CONFIRM PASSWORD REQUIRED"
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "PASSWORDS DO NOT MATCH"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (validateStep1()) {
      setRegistrationStep(2)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (registrationStep === 1) {
      handleNextStep()
      return
    }

    if (!validateStep2()) return

    setIsLoading(true)
    setStatusMessage("INITIALIZING REGISTRATION...")

    try {
      const result = await signup(username, email, password)

      if (result.success) {
        setStatusMessage(result.message)
        setTimeout(() => {
          router.push("/dashboard")
        }, 1500)
      } else {
        setStatusMessage(result.message)
        setErrors({ general: "REGISTRATION FAILED" })
      }
    } catch (error) {
      setStatusMessage("SYSTEM ERROR: REGISTRATION FAILED")
      setErrors({ general: "SYSTEM ERROR" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="terminal-box max-w-md w-full mx-auto">
      <div className="terminal-header">
        <div className="terminal-title">AGENT_REGISTRATION.EXE</div>
        <div className="terminal-controls">{isLoading ? "PROCESSING" : "READY"}</div>
      </div>

      <div className="mb-6 flex justify-between text-sm text-[#00e5ffb3]">
        <div className={`${registrationStep === 1 ? "text-[#00e5ff]" : ""}`}>01 // IDENTITY</div>
        <div className={`${registrationStep === 2 ? "text-[#00e5ff]" : ""}`}>02 // SECURITY</div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {errors.general && (
          <div className="border border-[#ff5370] bg-[#ff537020] p-3 mb-4 text-[#ff5370] text-sm">{errors.general}</div>
        )}

        {registrationStep === 1 ? (
          <>
            <TerminalInput
              id="username"
              label="AGENT ID"
              value={username}
              onChange={setUsername}
              required
              error={errors.username}
            />

            <TerminalInput
              id="email"
              label="EMAIL"
              type="email"
              value={email}
              onChange={setEmail}
              required
              error={errors.email}
            />
          </>
        ) : (
          <>
            <TerminalInput
              id="password"
              label="PASSWORD"
              type="password"
              value={password}
              onChange={setPassword}
              required
              error={errors.password}
            />

            <TerminalInput
              id="confirmPassword"
              label="CONFIRM PASSWORD"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              required
              error={errors.confirmPassword}
            />

            <div className="text-xs text-[#00e5ffb3] mt-2">
              <div className="mb-1">PASSWORD REQUIREMENTS:</div>
              <ul className="list-disc pl-5 space-y-1">
                <li className={password.length >= 6 ? "text-[#00e5ff]" : ""}>MINIMUM 6 CHARACTERS</li>
                <li className={/[A-Z]/.test(password) ? "text-[#00e5ff]" : ""}>AT LEAST ONE UPPERCASE LETTER</li>
                <li className={/[0-9]/.test(password) ? "text-[#00e5ff]" : ""}>AT LEAST ONE NUMBER</li>
              </ul>
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="button button-primary w-full py-2 mt-6 flex justify-center items-center"
        >
          {isLoading ? (
            <span className="flex items-center">
              <span className="mr-2">PROCESSING</span>
              <span className="blink">_</span>
            </span>
          ) : registrationStep === 1 ? (
            "CONTINUE"
          ) : (
            "REGISTER AGENT"
          )}
        </button>

        {registrationStep === 2 && (
          <button type="button" onClick={() => setRegistrationStep(1)} className="button w-full py-2 mt-2">
            BACK
          </button>
        )}

        {statusMessage && <div className="text-center text-sm mt-4 text-[#00e5ff]">{statusMessage}</div>}

        <div className="text-center text-sm mt-4 text-[#00e5ffb3]">
          ALREADY REGISTERED?{" "}
          <Link href="/login" className="text-[#00e5ff] hover:underline">
            LOGIN
          </Link>
        </div>
      </form>
    </div>
  )
}
