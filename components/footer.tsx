import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[#00e5ff30] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="protocol-title text-xl">SHADOW PROTOCOL</span>
            </Link>
            <p className="text-[#00e5ffb3] text-sm">
              A cybersecurity simulation set in a dystopian future where information is the ultimate currency and
              digital warfare is the new battleground.
            </p>
          </div>

          <div>
            <h3 className="text-[#00e5ff] font-bold mb-4">NAVIGATION</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="nav-link">
                  &gt; FEATURES
                </Link>
              </li>
              <li>
                <Link href="#screenshots" className="nav-link">
                  &gt; SCREENSHOTS
                </Link>
              </li>
              <li>
                <Link href="#about" className="nav-link">
                  &gt; ABOUT
                </Link>
              </li>
              <li>
                <Link href="#download" className="nav-link">
                  &gt; DOWNLOAD
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#00e5ff] font-bold mb-4">COMMUNITY</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="nav-link">
                  &gt; DISCORD
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link">
                  &gt; FORUMS
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link">
                  &gt; TWITTER
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link">
                  &gt; GITHUB
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#00e5ff] font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="nav-link">
                  &gt; FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link">
                  &gt; CONTACT
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link">
                  &gt; BUG REPORTS
                </Link>
              </li>
              <li>
                <Link href="#" className="nav-link">
                  &gt; PRIVACY POLICY
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00e5ff30] mt-12 pt-8 text-center text-sm text-[#00e5ff80]">
          <p>&copy; 2025 SHADOW PROTOCOL. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 text-xs">SECURITY LEVEL: CLASSIFIED</p>
        </div>
      </div>
    </footer>
  )
}
