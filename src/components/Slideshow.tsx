'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { src: '/images/interior-2.jpg', alt: 'Fuldt hus og hyggelig stemning',    pos: 'center' },
  { src: '/images/event-2.jpg',    alt: 'Gæster fejrer hos Bjælkestuen',    pos: 'top' },
  { src: '/images/interior-3.jpg', alt: 'Det smukke interiør',              pos: 'center' },
  { src: '/images/event-1.jpg',    alt: 'Godt humør og gode oplevelser',    pos: 'top' },
  { src: '/images/interior-4.jpg', alt: 'Hyggeligt selskabslokale',         pos: 'center' },
  { src: '/images/interior-5.jpg', alt: 'Bjælkestuen — Nørre Nebel',       pos: 'center' },
]

export default function Slideshow() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 3000)
    return () => clearInterval(t)
  }, [paused, next])

  return (
    <div
      className="relative h-[340px] sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* All slides stacked — crossfade */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-400"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            style={{ objectPosition: slide.pos }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0b]/60 via-transparent to-transparent pointer-events-none" />

      {/* Prev / Next */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition"
        aria-label="Forrige billede"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition"
        aria-label="Næste billede"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Billede ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? 20 : 7,
              height: 7,
              borderRadius: 999,
              backgroundColor: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
