"use client"

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
              <svg className="w-32 h-32 text-gray-600" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="40" r="15" />
                <path d="M 30 65 Q 30 55 50 55 Q 70 55 70 65 L 65 85 Q 65 90 60 90 L 40 90 Q 35 90 35 85 Z" />
              </svg>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Where Muslims meet for Rishta</h2>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              We are the leading Muslim Rishta app with over 15 million single Muslims looking for meaningful
              relationships and marriage.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              We're not like the other dating apps. We made Zyck UK to help single Muslims find their perfect match with
              exceptional expectations. Here you're free to be authentic and look beyond the surface into someone's
              values, beliefs and aspirations.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                <p className="text-gray-700">Safe, secure, and respectful community</p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                <p className="text-gray-700">Find meaningful connections based on values</p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                <p className="text-gray-700">Join millions of Muslims finding their match</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
