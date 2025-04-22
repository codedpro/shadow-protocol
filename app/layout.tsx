import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { AuthProvider } from "@/lib/auth-context"

export const metadata: Metadata = {
  title: "SHADOW PROTOCOL",
  description: "SECURITY LEVEL: CLASSIFIED",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="scanline"></div>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
