import Link from "next/link"
import { SignupForm } from "@/components/signup-form"

export default function SignupPage() {
  return (
    <div className="grid-bg min-h-screen flex flex-col">
      <header className="py-6">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="protocol-title text-xl">SHADOW PROTOCOL</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <SignupForm />
      </main>

      <footer className="py-4 text-center text-[#00e5ffb3] text-sm">
        <div className="container mx-auto px-4">&copy; 2025 SHADOW PROTOCOL. ALL RIGHTS RESERVED.</div>
      </footer>
    </div>
  )
}
