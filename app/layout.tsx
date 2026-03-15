import type { Metadata } from 'next'
import { bebasNeue, montserrat } from '@/lib/fonts'
import ScrollAnimator from '@/components/ui/ScrollAnimator'
import './globals.css'

export const metadata: Metadata = {
  title: "Tallowing — Beef Tallow Wings | Glenview, IL",
  description:
    "100% beef tallow fried wings, tenders & biscuit sandwiches. No seed oils. No shortcuts. Opening late March 2026 in Glenview, IL.",
  openGraph: {
    title: "Tallowing",
    description: "Fried in beef. Built different. Opening late March 2026 — Glenview, IL.",
    url: 'https://tallowings.com',
    siteName: "Tallowing",
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <body>
        <ScrollAnimator />
        {children}
      </body>
    </html>
  )
}
