import { Phone } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { menu, restaurant } from '@/lib/data'

export default function Menu() {
  return (
    <>
      <div className="bg-[#0a0f0b] py-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-forest-500 text-sm uppercase tracking-widest mb-2 font-semibold">Bjælkestuen</p>
            <h1 className="font-playfair text-4xl sm:text-5xl text-white mb-4">Vores Menukort</h1>
            <p className="text-stone-400 max-w-md mx-auto">
              Klassisk dansk mad lavet med kvalitet og kærlighed. Priserne kan variere — ring til os for dagens udvalg.
            </p>
          </div>

          <div className="space-y-10">
            {menu.map(({ category, items }, catIdx) => (
              <Reveal key={category} direction="up" distance={10} delay={catIdx * 40} duration={550}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px flex-1 bg-forest-900/30" />
                    <h2 className="font-playfair text-2xl text-forest-400">{category}</h2>
                    <div className="h-px flex-1 bg-forest-900/30" />
                  </div>
                  <div className="space-y-3">
                    {items.map(({ name, description, price }, itemIdx) => (
                      <Reveal key={name} direction="up" distance={6} delay={catIdx * 40 + itemIdx * 30} duration={450}>
                        <div className="flex items-start justify-between gap-3 bg-stone-900 rounded-xl px-5 py-4 border border-stone-800 hover:border-forest-900/40 transition">
                          <div className="min-w-0 flex-1">
                            <p className="text-white font-semibold leading-snug">{name}</p>
                            {description && <p className="text-stone-400 text-sm mt-0.5 leading-relaxed">{description}</p>}
                          </div>
                          {price && (
                            <span className="text-gold-400 font-bold text-[15px] shrink-0 tabular-nums pt-0.5">
                              {price} kr
                            </span>
                          )}
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 bg-forest-800/10 border border-forest-800/30 rounded-2xl p-6 text-center">
            <p className="text-stone-300 mb-2">Har du spørgsmål til menuen eller vil du bestille takeaway?</p>
            <a
              href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-500 text-white font-semibold px-6 py-3 rounded-xl transition mt-2"
            >
              <Phone size={16} />
              Ring til os — {restaurant.phone}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
