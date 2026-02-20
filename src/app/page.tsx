import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Users, UtensilsCrossed, Star, ChevronRight } from 'lucide-react'
import Footer from '@/components/Footer'
import { restaurant, hours, menu } from '@/lib/data'

export default function Home() {
  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1
  const today = hours[todayIndex]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/interior-2.jpg"
          alt="Bjælkestuen — fuldt hus og hyggelig stemning"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/60 to-stone-950" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-600/30 rounded-full px-4 py-1.5 text-amber-300 text-sm mb-6">
            <Star size={14} fill="currentColor" />
            Hyggelig restaurant siden 1990'erne
          </div>
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Bjælkestuen
          </h1>
          <p className="text-xl sm:text-2xl text-amber-300 font-playfair italic mb-6">
            Stedet man mødes igen og igen
          </p>
          <p className="text-stone-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Hjemlig stemning, imødekommende personale og rigtig god mad. Midt i hjertet af Nørre Nebel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition shadow-lg shadow-amber-900/30"
            >
              <Phone size={20} />
              Ring og book bord
            </a>
            <Link
              href="/menu"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-lg font-semibold px-8 py-4 rounded-xl transition border border-white/20"
            >
              Se menukort
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* Status card */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-6 bg-stone-900/90 backdrop-blur border border-stone-700 rounded-2xl px-6 py-3 text-sm">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-amber-500" />
              <span className="text-stone-300">I dag:</span>
              <span className={today.closed ? 'text-red-400 font-medium' : 'text-amber-400 font-medium'}>
                {today.closed ? 'Lukket' : `${today.open}–${today.close}`}
              </span>
            </div>
            <div className="w-px h-4 bg-stone-700" />
            <a href={restaurant.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-300 hover:text-amber-400 transition">
              <MapPin size={14} className="text-amber-500" />
              Bredgade 52
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-stone-900 border-y border-amber-900/20 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: UtensilsCrossed, label: 'Takeaway', sub: 'Tag maden med hjem' },
              { icon: Users, label: 'Selskabslokale', sub: 'Op til 60 gæster' },
              { icon: Phone, label: 'Bordreservation', sub: 'Ring til os' },
              { icon: Star, label: 'Lokalkendt', sub: 'I årevis' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-2 py-2">
                <div className="w-10 h-10 rounded-full bg-amber-600/15 flex items-center justify-center">
                  <Icon size={18} className="text-amber-500" />
                </div>
                <p className="text-white font-semibold text-sm">{label}</p>
                <p className="text-stone-400 text-xs">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature dish */}
      <section className="py-20 bg-stone-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-500 text-sm uppercase tracking-widest mb-3 font-semibold">Vores signatur</p>
              <h2 className="font-playfair text-4xl sm:text-5xl text-white mb-6 leading-tight">
                Bacon/Cheese<br />Burgeren
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-6">
                Den er nærmest en legende i lokalområdet. Saftig, velsmagende og lavet med omhu — præcis som den skal være. Prøv den selv og forstå hvorfor folk bliver ved med at komme tilbage.
              </p>
              <p className="text-stone-400 leading-relaxed mb-8">
                Vores menu byder også på wienerschnitzel, grillstegt kylling, stjerneskud og saftige bøffer. Noget for enhver smag.
              </p>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition"
              >
                Se hele menukortet <ChevronRight size={18} />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 h-80">
              <Image
                src="/images/interior-1.jpg"
                alt="Bjælkestuen — hyggelige omgivelser"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance / party room */}
      <section className="py-20 bg-stone-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 h-80">
              <Image
                src="/images/exterior.jpg"
                alt="Bjælkestuen — Bredgade 52, Nørre Nebel"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-amber-500 text-sm uppercase tracking-widest mb-3 font-semibold">Fester og selskaber</p>
              <h2 className="font-playfair text-4xl sm:text-5xl text-white mb-6 leading-tight">
                Vi holder<br />festen for dig
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-6">
                Bjælkestuen har et hyggeligt selskabslokale med plads til op til <span className="text-amber-400 font-semibold">60 gæster</span>. Perfekt til fødselsdage, jubilæer, firmafester og alt derimellem.
              </p>
              <p className="text-stone-400 leading-relaxed mb-8">
                Vi sørger for maden og stemningen — du sørger for gæsterne. Ring til os og hør mere om mulighederne.
              </p>
              <a
                href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-xl transition"
              >
                <Phone size={16} />
                Spørg om selskab
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Review */}
      <section className="py-20 bg-stone-950">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} size={22} className="text-amber-400 fill-amber-400" />)}
          </div>
          <blockquote className="font-playfair text-2xl sm:text-3xl text-white italic leading-relaxed mb-6">
            "Virkelig godt spisested uanset man vil spise på stedet eller benytte sig af deres gode takeaway mulighed!"
          </blockquote>
          <p className="text-stone-400">— Arthur Dahl, gæst</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-800/10 border-y border-amber-900/20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-playfair text-4xl text-white mb-4">Klar til et godt måltid?</h2>
          <p className="text-stone-300 text-lg mb-8">Ring til os og book dit bord — eller kig forbi, vi byder altid på et smil.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-lg font-semibold px-8 py-4 rounded-xl transition"
            >
              <Phone size={20} />
              {restaurant.phone}
            </a>
            <Link
              href="/kontakt"
              className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-white text-lg font-semibold px-8 py-4 rounded-xl transition border border-stone-700"
            >
              <MapPin size={18} />
              Find os
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
