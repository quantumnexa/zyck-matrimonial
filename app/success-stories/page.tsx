import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Success Stories</h1>
          <p className="text-gray-700 mb-10">Real experiences from members who found their match.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <p className="text-gray-700">“We connected over shared values and goals. Grateful for Zyck UK.”</p>
              <div className="mt-3 text-sm text-gray-500">Ayesha & Hamza</div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <p className="text-gray-700">“Respectful conversations and clear intentions led us together.”</p>
              <div className="mt-3 text-sm text-gray-500">Fatima & Ali</div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <p className="text-gray-700">“A thoughtful platform focused on faith and compatibility.”</p>
              <div className="mt-3 text-sm text-gray-500">Zara & Usman</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
