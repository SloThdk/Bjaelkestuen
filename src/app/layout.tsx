import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lato' })

export const metadata: Metadata = {
  title: 'Bjælkestuen — Restaurant i Nørre Nebel',
  description: 'Hyggelig restaurant i hjertet af Nørre Nebel. Bøffer, burgere, wienerschnitzel og meget mere. Takeaway og selskabslokale til 60 gæster.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" data-scroll-behavior="smooth">
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-stone-950 text-stone-100 antialiased`}>
        <Navigation />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
