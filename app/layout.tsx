import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InvoicePredict — Know Which Invoices Will Pay Late',
  description: 'ML-powered invoice payment prediction for freelancers and agencies. Stop chasing late payments before they happen.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="74ca31cf-1ee0-4d37-b992-2fab45882791"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
