"use client"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/Zyck-Logo.png" alt="Zyck UK" className="h-20" />
            </div>
          
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-purple-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-purple-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-purple-500 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-purple-500 transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Zyck UK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
