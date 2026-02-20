import { Phone, Users, UtensilsCrossed, Music, CheckCircle } from 'lucide-react'
import Footer from '@/components/Footer'
import { restaurant } from '@/lib/data'

export default function Selskaber() {
  return (
    <>
      <div className="bg-stone-950 py-16">
        <div className="container mx-auto px-4 max-w-4xl">

          <div className="text-center mb-14">
            <p className="text-amber-500 text-sm uppercase tracking-widest mb-2 font-semibold">Bjælkestuen</p>
            <h1 className="font-playfair text-4xl sm:text-5xl text-white mb-4">Fester & Selskaber</h1>
            <p className="text-stone-400 max-w-xl mx-auto text-lg">
              Vi har et hyggeligt selskabslokale med plads til op til 60 gæster. Vi holder gerne festen for dig.
            </p>
          </div>

          {/* Big capacity card */}
          <div className="bg-gradient-to-br from-amber-800/20 to-stone-900 border border-amber-800/30 rounded-2xl p-8 text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-amber-600/20 flex items-center justify-center mx-auto mb-4">
              <Users size={30} className="text-amber-400" />
            </div>
            <p className="font-playfair text-6xl font-bold text-amber-400 mb-2">60</p>
            <p className="text-white text-xl font-semibold">gæster i selskabslokalet</p>
            <p className="text-stone-400 mt-2">Perfekt til alle typer fester og sammenkomster</p>
          </div>

          {/* Occasions */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              'Fødselsdagsfest',
              'Jubilæum',
              'Firmafest',
              'Familiesammenkomst',
              'Konfirmation',
              'Sølvbryllup & guldbryllup',
              'Studenterfest',
              'Foreningsarrangementer',
            ].map((occasion) => (
              <div key={occasion} className="flex items-center gap-3 bg-stone-900 rounded-xl px-5 py-3.5 border border-stone-800">
                <CheckCircle size={16} className="text-amber-500 shrink-0" />
                <span className="text-stone-200">{occasion}</span>
              </div>
            ))}
          </div>

          {/* What we offer */}
          <div className="bg-stone-900 rounded-2xl border border-stone-800 p-8 mb-8">
            <h2 className="font-playfair text-2xl text-white mb-6">Hvad vi tilbyder</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: UtensilsCrossed, title: 'Mad til alle', desc: 'Vi sammensætter menuen efter jeres ønsker og budget' },
                { icon: Users, title: 'Op til 60 gæster', desc: 'Hyggelig og intim atmosfære i vores selskabslokale' },
                { icon: Music, title: 'Jeres fest', desc: 'Vi sørger for rammerne — I sørger for stemningen' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-amber-500" />
                  </div>
                  <p className="text-white font-semibold mb-1">{title}</p>
                  <p className="text-stone-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-stone-300 text-lg mb-6">
              Ring til os og hør nærmere om priser og ledige datoer. Vi hjælper gerne med at planlægge jeres arrangement.
            </p>
            <a
              href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition"
            >
              <Phone size={20} />
              Ring til os — {restaurant.phone}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
