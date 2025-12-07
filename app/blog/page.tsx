import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Blog</h1>
          <p className="text-gray-700 mb-10">Insights, stories, and guidance for meaningful relationships.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Values-first matchmaking</h3>
              <p className="text-gray-700">Why shared principles matter for long-term success.</p>
            </article>
            <article className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Safety online</h3>
              <p className="text-gray-700">Best practices for respectful and secure conversations.</p>
            </article>
            <article className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Community highlights</h3>
              <p className="text-gray-700">Stories from members building meaningful connections.</p>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
