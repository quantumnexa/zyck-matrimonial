import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-10">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Create your profile</h3>
              <p className="text-gray-700">Add your details, values, and preferences to find the right match.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Discover matches</h3>
              <p className="text-gray-700">Browse meaningful profiles aligned with your goals and beliefs.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Connect safely</h3>
              <p className="text-gray-700">Start respectful conversations and move forward with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-10">What our users say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <p className="text-gray-700">“We met on Zyck UK and instantly felt aligned on values. Alhamdulillah!”</p>
              <div className="mt-4 text-sm text-gray-500">Ayesha & Hamza</div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <p className="text-gray-700">“The focus on faith and intentions made the experience completely different.”</p>
              <div className="mt-4 text-sm text-gray-500">Sara</div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <p className="text-gray-700">“I appreciated the respectful community and serious approach to marriage.”</p>
              <div className="mt-4 text-sm text-gray-500">Bilal</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-purple-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to start your journey?</h2>
          <p className="text-white/90 mb-8">Join millions of Muslims finding meaningful connections on Zyck UK.</p>
          <a href="#" className="inline-block bg-black/20 hover:bg-black/30 border border-white/30 rounded-lg px-6 py-3 font-semibold">Get the app</a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
