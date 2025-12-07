import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Events</h1>
          <p className="text-gray-700 mb-10">Discover upcoming community events and meetups.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">London Meetup</h3>
              <p className="text-gray-700">Join local members for a networking session.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Online Q&A</h3>
              <p className="text-gray-700">Live session on meaningful matches and safety.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Community Workshop</h3>
              <p className="text-gray-700">Build strong profiles and value-based connections.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
