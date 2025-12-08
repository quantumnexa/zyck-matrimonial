"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 opacity-60 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/wedding-couple-hero-4.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <img src="/images/Zyck-Logo.png" alt="Zyck UK" className="h-20 mx-auto mb-6" />
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-8 shadow-xl max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Zyck UK</h1>
          <p className="text-lg md:text-xl text-white/90 mt-3">Muslim Rishta App</p>
          <div className="mt-8 flex justify-center">
            <Button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center gap-3 border border-white/30">
              <img src="/images/playstore.png" alt="Google Play" className="w-5 h-5" />
              <span className="font-medium">Get it on Play Store</span>
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  )
}
