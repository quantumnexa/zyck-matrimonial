"use client"

import { Globe, Heart } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Phone Mockups */}
          <div className="flex justify-center relative">
            <div className="relative w-72">
              {/* Phone 1 */}
              <div className="absolute left-0 top-12 w-48 bg-gradient-to-br from-purple-700 to-purple-900 rounded-3xl p-2 shadow-2xl transform -rotate-6 z-10">
                <div className="bg-black rounded-3xl p-1 h-96">
                  <div className="bg-purple-700 rounded-3xl h-full flex flex-col items-center justify-center text-white p-4">
                    <p className="text-sm font-semibold mb-2">Profile</p>
                    <div className="w-20 h-20 bg-purple-800 rounded-full mb-3" />
                    <p className="font-bold text-center">Adnan 26</p>
                    <p className="text-xs text-center mt-1">Software Engineer</p>
                  </div>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="relative left-12 w-48 bg-purple-600 rounded-3xl p-2 shadow-2xl transform rotate-3">
                <div className="bg-black rounded-3xl p-1 h-96">
                  <div className="bg-purple-600 rounded-3xl h-full flex flex-col items-center justify-center text-white p-4">
                    <div className="flex gap-2 mb-4">
                      <Heart className="w-5 h-5 fill-white" />
                      <span className="text-xs font-bold">matched!</span>
                    </div>
                    <p className="text-sm font-bold text-center mb-4">You and Aaliyah matched!</p>
                    <div className="flex gap-2 mb-4">
                      <div className="w-12 h-12 bg-purple-700 rounded-full" />
                      <div className="w-12 h-12 bg-purple-700 rounded-full" />
                    </div>
                    <p className="font-bold text-center">Aaliyah 24</p>
                    <p className="text-xs text-center mt-2">Graphic Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">The app connecting Muslims worldwide</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-purple-600" />
                  <span className="text-sm text-gray-500">Global impact</span>
                </div>
                <p className="text-3xl font-bold text-purple-600">600,000</p>
                <p className="text-gray-700">Successes</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-purple-600 fill-purple-600" />
                  <span className="text-sm text-gray-500">Community</span>
                </div>
                <p className="text-3xl font-bold text-purple-600">15 million</p>
                <p className="text-gray-700">Muslims using Zyck UK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
