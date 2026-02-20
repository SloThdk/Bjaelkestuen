import { Phone } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { menu, restaurant } from '@/lib/data'

export default function Menu() {
  return (
    <>
      <div className="bg-[#0a0f0b] py-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Page header */}
          <Reveal direction="up" distance={16} duration={700}>
            <div className="text-center mb-20">
              <p className="text-forest-500 text-xs uppercase tracking-[0.25em] mb-3 font-semibold">Bjælkestuen</p>
              <h1 className="font-playfair text-5xl sm:text-6xl text-white mb-5">Vores Menukort</h1>
              <div className="w-12 h-px bg-forest-700 mx-auto mb-5" />
              <p className="text-stone-400 max-w-sm mx-auto leading-relaxed">
                Klassisk dansk mad lavet med kvalitet og kærlighed. Ring til os for dagens udvalg.
              </p>
            </div>
          </Reveal>

          {/* Categories */}
          <div className="space-y-16">
            {menu.map(({ category, items }, catIdx) => (
              <div key={category}>

                {/* Category header */}
                <Reveal direction="up" distance={10} duration={600}>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-forest-800/60 to-forest-800/60" />
                    <h2 className="font-playfair text-3xl sm:text-4xl text-forest-400 whitespace-nowrap px-1">
                      {category}
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-forest-800/60 to-forest-800/60" />
                  </div>
                </Reveal>

                {/* 2-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {items.map(({ name, description, price }, itemIdx) => {
                    const isLeft   = itemIdx % 2 === 0
                    const isStar   = name.includes('★')
                    const cleanName = name.replace(' ★', '')

                    return (
                      <Reveal
                        key={name}
                        direction={isLeft ? 'left' : 'right'}
                        distance={24}
                        delay={itemIdx * 45}
                        duration={480}
                      >
                        <div
                          className={[
                            'group relative flex items-start justify-between gap-4',
                            'rounded-2xl px-5 py-4 border transition-all duration-300',
                            'hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/50',
                            isStar
                              ? 'bg-forest-950/70 border-forest-700/60 hover:border-forest-500/70 hover:bg-forest-950/90'
                              : 'bg-stone-900/70 border-stone-800/50 hover:border-forest-900/60 hover:bg-stone-900',
                          ].join(' ')}
                        >
                          {/* Green left accent bar */}
                          <div
                            className={[
                              'absolute left-0 top-4 bottom-4 w-0.5 rounded-full transition-all duration-300',
                              isStar
                                ? 'bg-forest-600 opacity-80 group-hover:opacity-100'
                                : 'bg-forest-900/0 group-hover:bg-forest-800/60',
                            ].join(' ')}
                          />

                          <div className="min-w-0 flex-1 pl-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <p className={`font-semibold leading-snug ${isStar ? 'text-forest-200' : 'text-white'}`}>
                                {cleanName}
                              </p>
                              {isStar && (
                                <span className="text-[10px] text-forest-500 font-semibold uppercase tracking-[0.15em] border border-forest-800/60 px-1.5 py-0.5 rounded-md">
                                  Anbefalet
                                </span>
                              )}
                            </div>
                            {description && (
                              <p className="text-stone-500 text-sm mt-1 leading-relaxed">{description}</p>
                            )}
                          </div>

                          {price && (
                            <span className="text-[#d4aa6c] font-bold text-base shrink-0 tabular-nums pt-0.5">
                              {price}
                            </span>
                          )}
                        </div>
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <Reveal direction="up" distance={12} duration={600}>
            <div className="mt-20 rounded-2xl border border-forest-800/30 bg-forest-950/30 p-8 text-center">
              <p className="text-white text-lg font-playfair mb-1">Spørgsmål til menuen?</p>
              <p className="text-stone-500 text-sm mb-6">Ring til os — vi hjælper gerne og tager imod takeaway-bestillinger.</p>
              <a
                href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-white font-semibold px-8 py-4 rounded-xl transition text-base"
              >
                <Phone size={17} />
                Ring til os — {restaurant.phone}
              </a>
            </div>
          </Reveal>

        </div>
      </div>
      <Footer />
    </>
  )
}
