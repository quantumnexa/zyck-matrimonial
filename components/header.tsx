"use client"

import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/images/zyck.png" alt="Zyck UK" className="h-10" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/events" className="text-gray-700 font-medium hover:text-purple-600 transition">
            Events
          </a>
          <a href="/blog" className="text-gray-700 font-medium hover:text-purple-600 transition">
            Blog
          </a>
          <a href="/success-stories" className="text-gray-700 font-medium hover:text-purple-600 transition">
            Success Stories
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">Sign Up</Button>
        </div>
      </div>
    </header>
  )
}
