'use client'
import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Tilbage til toppen"
      className={`fixed bottom-6 right-5 z-50 w-10 h-10 rounded-full bg-forest-800 hover:bg-forest-700 border border-forest-700/60 text-forest-300 hover:text-forest-200 flex items-center justify-center shadow-lg shadow-black/40 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp size={18} strokeWidth={2.5} />
    </button>
  )
}
