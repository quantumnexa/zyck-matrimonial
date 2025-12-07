import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-6">Terms and Conditions</h1>
          <p className="text-gray-700 mb-6">Last updated: December 2025</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-black mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Zyck UK, you agree to be bound by these Terms and Conditions. If you do not agree,
                you may not use the service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black mb-2">2. Eligibility</h2>
              <p>
                You must be at least 18 years old to create an account and use the service. Using the service implies you
                meet all eligibility requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black mb-2">3. User Conduct</h2>
              <p>
                You agree not to misuse the platform, including harassment, hate speech, spam, or fraudulent activity.
                We may suspend accounts that violate these rules.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black mb-2">4. Privacy</h2>
              <p>
                Your use of the service is also governed by our Privacy Policy. We encourage you to review it to
                understand how your data is collected and processed.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black mb-2">5. Subscription and Payments</h2>
              <p>
                Some features may require a paid subscription. Fees are non-refundable except where required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black mb-2">6. Limitation of Liability</h2>
              <p>
                Zyck UK is provided on an "as is" basis. We are not liable for indirect, incidental, or consequential
                damages arising from your use of the service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black mb-2">7. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of the service after changes implies
                acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black mb-2">8. Contact</h2>
              <p>
                For questions regarding these Terms, please contact us through the app or official channels.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
