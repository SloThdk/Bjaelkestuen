'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { restaurant } from '@/lib/data'

const navLinks = [
  { label: 'Forside', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Åbningstider', href: '/aabning' },
  { label: 'Selskaber', href: '/selskaber' },
  { label: 'Find os', href: '/kontakt' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => { setIsOpen(false) }, [pathname])
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      if (isOpen) setIsOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isOpen])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#0e130f]/97 backdrop-blur shadow-lg shadow-black/30 border-b border-forest-900/40'
        : 'bg-[#0e130f]/90 backdrop-blur border-b border-forest-900/20'
    }`}>

      {/* Top bar */}
      <div className="border-b border-forest-900/30 py-1.5 text-center text-xs text-forest-300/70 tracking-wider">
        <a
          href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
          className="inline-flex items-center gap-1.5 hover:text-forest-200 transition"
        >
          <Phone size={11} strokeWidth={2} />
          {restaurant.phone}
        </a>
        <span className="mx-3 text-forest-800">·</span>
        Bredgade 52, Nørre Nebel
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-[74px]">

          {/* Logo — bigger, more presence */}
          <Link href="/" className="flex flex-col group">
            <span className="font-playfair text-[28px] font-bold text-forest-300 leading-tight group-hover:text-forest-200 transition tracking-tight">
              Bjælkestuen
            </span>
            <span className="text-[10px] text-forest-600 tracking-[0.22em] uppercase">Nørre Nebel</span>
          </Link>

          {/* Desktop Nav — slightly larger text */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 rounded-md text-[14px] font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-forest-300 bg-forest-900/30'
                    : 'text-stone-300 hover:text-forest-300 hover:bg-forest-950/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA — calls directly (quick action) */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="hidden sm:flex items-center gap-2 border border-forest-700/60 hover:border-forest-500 hover:bg-forest-900/40 text-forest-300 hover:text-forest-200 text-sm font-medium px-4 py-2 rounded-lg transition-all"
            >
              <Phone size={13} />
              Ring nu
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-stone-300 hover:text-forest-300 transition"
              aria-label="Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — flows directly below header, no fixed positioning calc */}
      {isOpen && (
        <div className="lg:hidden bg-[#0e130f] border-b border-forest-900/40 shadow-2xl">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-3 py-3.5 text-stone-200 hover:text-forest-300 hover:bg-forest-950/60 rounded-lg transition font-medium text-[15px] border-b border-stone-900 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 border border-forest-700/60 text-forest-300 font-medium px-4 py-3 rounded-lg transition hover:bg-forest-900/40 text-[15px]"
            >
              <Phone size={15} />
              Ring og book bord — {restaurant.phone}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
