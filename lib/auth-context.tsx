"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  id: string
  username: string
  email: string
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>
  signup: (username: string, email: string, password: string) => Promise<{ success: boolean; message: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on load
    const checkSession = async () => {
      try {
        const storedUser = localStorage.getItem("shadow_protocol_user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Session check failed:", error)
      } finally {
        setLoading(false)
      }
    }

    checkSession()
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      // Simulate API call with delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, we'll accept any credentials
      // In a real app, you would validate against a backend
      const mockUser = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        username: email.split("@")[0],
        email,
      }

      setUser(mockUser)
      localStorage.setItem("shadow_protocol_user", JSON.stringify(mockUser))

      return { success: true, message: "ACCESS GRANTED" }
    } catch (error) {
      console.error("Login failed:", error)
      return { success: false, message: "AUTHENTICATION FAILED: INVALID CREDENTIALS" }
    } finally {
      setLoading(false)
    }
  }

  const signup = async (username: string, email: string, password: string) => {
    setLoading(true)
    try {
      // Simulate API call with delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // For demo purposes, we'll accept any credentials
      // In a real app, you would register with a backend
      const mockUser = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        username,
        email,
      }

      setUser(mockUser)
      localStorage.setItem("shadow_protocol_user", JSON.stringify(mockUser))

      return { success: true, message: "REGISTRATION COMPLETE: NEW AGENT CREATED" }
    } catch (error) {
      console.error("Signup failed:", error)
      return { success: false, message: "REGISTRATION FAILED: SYSTEM ERROR" }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("shadow_protocol_user")
  }

  return <AuthContext.Provider value={{ user, loading, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
