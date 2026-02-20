import type { Metadata } from 'next'
import { Phone, Users, UtensilsCrossed, Music, CheckCircle } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import Slideshow from '@/components/Slideshow'
import { restaurant } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Selskaber & Fester',
  description: 'Hold festen hos Bjælkestuen — selskabslokale til op til 60 gæster. Perfekt til fødselsdage, jubilæer og firmafester i Nørre Nebel.',
  alternates: { canonical: 'https://bjaelkestuen-demo.pages.dev/selskaber' },
  openGraph: { url: 'https://bjaelkestuen-demo.pages.dev/selskaber' },
}

export default function Selskaber() {
  return (
    <>
      <div className="bg-[#0a0f0b]">
        <div className="container mx-auto px-4 max-w-5xl py-14">

          {/* Header */}
          <Reveal direction="up" distance={12}>
            <div className="text-center mb-12">
              <p className="text-forest-500 text-xs uppercase tracking-[0.2em] mb-2 font-semibold">Bjælkestuen</p>
              <h1 className="font-playfair text-4xl sm:text-5xl text-white mb-4">Fester & Selskaber</h1>
              <p className="text-stone-400 max-w-xl mx-auto text-lg leading-relaxed">
                Vi har et hyggeligt selskabslokale med plads til op til 60 gæster. Vi holder gerne festen for dig.
              </p>
            </div>
          </Reveal>

          {/* Slideshow + occasions side by side on desktop */}
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">

            <Reveal direction="left" distance={20} duration={700}>
              <Slideshow />
            </Reveal>

            <Reveal direction="right" distance={20} duration={700} delay={100}>
              <div>
                <p className="text-forest-400 text-xs uppercase tracking-[0.18em] mb-4 font-semibold">Vi holder fest til</p>
                <div className="grid grid-cols-1 gap-2.5">
                  {[
                    'Fødselsdagsfest',
                    'Jubilæum',
                    'Firmafest',
                    'Familiesammenkomst',
                    'Konfirmation',
                    'Sølvbryllup & guldbryllup',
                    'Studenterfest',
                    'Foreningsarrangementer',
                  ].map((occasion, i) => (
                    <div
                      key={occasion}
                      className="flex items-center gap-3 bg-stone-900/80 rounded-xl px-5 py-3.5 border border-stone-800"
                      style={{
                        transitionDelay: `${i * 40}ms`,
                      }}
                    >
                      <CheckCircle size={15} className="text-forest-500 shrink-0" />
                      <span className="text-stone-200 font-medium">{occasion}</span>
                    </div>
                  ))}
                </div>

                {/* Capacity badge */}
                <div className="mt-5 flex items-center gap-4 bg-forest-900/30 border border-forest-800/30 rounded-xl p-4">
                  <div className="w-12 h-12 rounded-full bg-forest-600/20 flex items-center justify-center shrink-0">
                    <Users size={22} className="text-forest-400" />
                  </div>
                  <div>
                    <p className="text-forest-300 font-bold text-2xl leading-none">Op til 60 gæster</p>
                    <p className="text-stone-400 text-sm mt-1">Hyggelig og intim atmosfære</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* What we offer */}
          <Reveal direction="up" distance={12}>
            <div className="bg-stone-900/60 rounded-2xl border border-stone-800 p-8 mb-10">
              <h2 className="font-playfair text-2xl text-white mb-6 text-center">Hvad vi tilbyder</h2>
              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  { icon: UtensilsCrossed, title: 'Mad til alle', desc: 'Vi sammensætter menuen efter jeres ønsker og budget' },
                  { icon: Users, title: 'Op til 60 gæster', desc: 'Hyggeligt og intimt selskabslokale i hjertet af Nørre Nebel' },
                  { icon: Music, title: 'Jeres fest', desc: 'Vi sørger for rammerne — I sørger for stemningen' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-forest-600/10 flex items-center justify-center mx-auto mb-3">
                      <Icon size={20} className="text-forest-500" />
                    </div>
                    <p className="text-white font-semibold mb-1">{title}</p>
                    <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal direction="up" distance={10}>
            <div className="text-center">
              <p className="text-stone-300 text-lg mb-6 leading-relaxed max-w-xl mx-auto">
                Ring til os og hør nærmere om priser og ledige datoer. Vi hjælper gerne med at planlægge jeres arrangement.
              </p>
              <a
                href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
                className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-white text-lg font-semibold px-8 py-4 rounded-xl transition"
              >
                <Phone size={20} />
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
