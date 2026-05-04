export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          AI-Powered Cash Flow
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Which Invoices<br />
          <span className="text-[#58a6ff]">Will Pay Late</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Our ML model analyzes your Stripe invoice history to flag slow-paying clients before the due date — so you can act early and protect your cash flow.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Predicting — $29/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">Cancel anytime. No credit card surprises.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          <div>
            <p className="text-2xl font-bold text-white">87%</p>
            <p className="text-xs text-[#8b949e] mt-1">Prediction accuracy</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">14 days</p>
            <p className="text-xs text-[#8b949e] mt-1">Average early warning</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">$4,200</p>
            <p className="text-xs text-[#8b949e] mt-1">Avg cash flow saved/mo</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Connect unlimited Stripe accounts',
              'ML payment delay predictions',
              'Early-warning email alerts',
              'Cash flow dashboard',
              'Client risk scoring',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the prediction work?',
              a: 'We analyze your historical Stripe invoice data — payment timing, client behavior, invoice size, and seasonality — to train a model that scores each new invoice for late-payment risk.',
            },
            {
              q: 'Is my Stripe data secure?',
              a: 'Yes. We use read-only Stripe API access and never store raw invoice data. Only anonymized patterns are retained to improve predictions.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Absolutely. Cancel from your dashboard with one click. No lock-in, no cancellation fees.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} InvoicePredict. All rights reserved.
      </footer>
    </main>
  )
}
