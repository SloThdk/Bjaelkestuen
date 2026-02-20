import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'
import JsonLd from '@/components/JsonLd'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lato' })

const BASE_URL = 'https://bjaelkestuen-demo.pages.dev'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Bjælkestuen — Restaurant i Nørre Nebel',
    template: '%s | Bjælkestuen',
  },
  description: 'Hyggelig restaurant i hjertet af Nørre Nebel. Bøffer, burgere, wienerschnitzel og meget mere. Takeaway og selskabslokale til 60 gæster.',
  keywords: ['restaurant Nørre Nebel', 'Bjælkestuen', 'takeaway Nørre Nebel', 'selskabslokale Nørre Nebel', 'restaurant Bredgade', 'mad Nørre Nebel'],
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: BASE_URL,
    siteName: 'Bjælkestuen',
    title: 'Bjælkestuen — Restaurant i Nørre Nebel',
    description: 'Hyggelig restaurant i hjertet af Nørre Nebel. Bøffer, burgere, wienerschnitzel og meget mere. Takeaway og selskabslokale til 60 gæster.',
    images: [{ url: '/images/interior-1.jpg', width: 1200, height: 630, alt: 'Bjælkestuen restaurant indre — Nørre Nebel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bjælkestuen — Restaurant i Nørre Nebel',
    description: 'Hyggelig restaurant i hjertet af Nørre Nebel. Bøffer, burgere, wienerschnitzel og meget mere.',
    images: ['/images/interior-1.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" data-scroll-behavior="smooth">
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-stone-950 text-stone-100 antialiased`}>
        <JsonLd />
        <Navigation />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
