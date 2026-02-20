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

  useEffect(() => { setIsOpen(false) }, [pathname])
  useEffect(() => {
    const onScroll = () => { if (isOpen) setIsOpen(false) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur border-b border-amber-900/30">
      {/* Top bar */}
      <div className="bg-amber-800/20 border-b border-amber-900/20 py-1.5 text-center text-xs text-amber-300/80 tracking-wide">
        📞 Ring og book bord: <a href={`tel:${restaurant.phone.replace(/\s/g,'')}`} className="font-semibold hover:text-amber-200 transition">{restaurant.phone}</a>
        <span className="mx-3 text-amber-700">·</span>
        Bredgade 52, Nørre Nebel
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-playfair text-2xl font-bold text-amber-400 leading-tight group-hover:text-amber-300 transition">
                Bjælkestuen
              </span>
              <span className="text-xs text-stone-400 tracking-widest uppercase">Nørre Nebel</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 rounded text-sm font-medium uppercase tracking-wide transition ${
                  pathname === link.href
                    ? 'text-amber-400 bg-amber-900/20'
                    : 'text-stone-300 hover:text-amber-400 hover:bg-stone-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="hidden sm:flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
            >
              <Phone size={15} />
              Ring nu
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-stone-300 hover:text-amber-400 transition"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-[88px] left-0 right-0 z-50 bg-stone-900 border-b border-stone-700 shadow-2xl">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-3 py-3.5 text-stone-200 hover:text-amber-400 hover:bg-stone-800 rounded-lg transition font-medium border-b border-stone-800 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-4 py-3 rounded-lg transition"
            >
              <Phone size={16} />
              Ring og book bord — {restaurant.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
