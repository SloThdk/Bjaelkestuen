import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Users, UtensilsCrossed, Star, ChevronRight } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0b]/75 via-[#0a0f0b]/60 to-[#0a0f0b]" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="hero-badge inline-flex items-center gap-2 bg-[#2c1a08]/70 border border-[#9a7d50]/30 rounded-md px-4 py-1.5 text-[#d4b07a] text-sm mb-6">
            <Star size={12} fill="currentColor" />
            Hyggelig restaurant siden 1990&apos;erne
          </div>
          <h1 className="hero-title font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Bjælkestuen
          </h1>
          <p className="hero-sub text-xl sm:text-2xl text-forest-300 font-playfair italic mb-6">
            Stedet man mødes igen og igen
          </p>
          <p className="hero-body text-stone-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Hjemlig stemning, imødekommende personale og rigtig god mad. Midt i hjertet af Nørre Nebel.
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-600 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg shadow-forest-950/50 transition"
            >
              <Phone size={20} />
              {restaurant.phone}
            </a>
            <Link
              href="/menu"
              className="flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 text-white text-lg font-semibold px-8 py-4 rounded-xl transition border border-white/15"
            >
              Se menukort
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* Status card */}
        <div className="hero-status absolute bottom-6 left-0 right-0 z-10 flex justify-center px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 bg-[#0e130f]/90 backdrop-blur border border-forest-900/50 rounded-2xl px-5 py-3 text-sm max-w-full">
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Clock size={13} className="text-forest-500 shrink-0" />
              <span className="text-stone-400">I dag:</span>
              <span className={today.closed ? 'text-red-400 font-medium' : 'text-forest-400 font-medium'}>
                {today.closed ? 'Lukket' : `${today.open}–${today.close}`}
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-forest-900" />
            <a href={restaurant.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-stone-400 hover:text-forest-300 transition whitespace-nowrap">
              <MapPin size={13} className="text-forest-500 shrink-0" />
              Bredgade 52
            </a>
          </div>
        </div>
      </section>

      {/* Features strip — staggered */}
      <section className="bg-[#0e130f] border-y border-forest-900/30 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: UtensilsCrossed, label: 'Takeaway', sub: 'Tag maden med hjem' },
              { icon: Users, label: 'Selskabslokale', sub: 'Op til 60 gæster' },
              { icon: Phone, label: 'Bordreservation', sub: 'Ring til os' },
              { icon: Star, label: 'Lokalkendt', sub: 'I årevis' },
            ].map(({ icon: Icon, label, sub }, i) => (
              <Reveal key={label} delay={i * 100} direction="up" distance={12}>
                <div className="flex flex-col items-center gap-2 py-2">
                  <div className="w-10 h-10 rounded-full bg-forest-900/40 flex items-center justify-center">
                    <Icon size={18} className="text-forest-400" />
                  </div>
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-stone-500 text-xs">{sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature dish — left text, right image */}
      <section className="py-20 bg-[#0a0f0b]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="left" distance={20} duration={700}>
              <div>
                <p className="text-forest-500 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">Vores signatur</p>
                <h2 className="font-playfair text-4xl sm:text-5xl text-white mb-6 leading-tight">
                  Bacon/Cheese<br />Burgeren
                </h2>
                <p className="text-stone-300 text-lg leading-relaxed mb-6">
                  Den er nærmest en legende i lokalområdet. Saftig, velsmagende og lavet med omhu — præcis som den skal være. Prøv den selv og forstå hvorfor folk bliver ved med at komme tilbage.
                </p>
                <p className="text-stone-500 leading-relaxed mb-8">
                  Vores menu byder også på wienerschnitzel, grillstegt kylling, stjerneskud og saftige bøffer. Noget for enhver smag.
                </p>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 text-forest-400 hover:text-forest-300 font-semibold transition"
                >
                  Se hele menukortet <ChevronRight size={18} />
                </Link>
              </div>
            </Reveal>
            <Reveal direction="right" distance={20} duration={700} delay={100}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 h-80">
                <Image
                  src="/images/interior-1.jpg"
                  alt="Bjælkestuen — hyggelige omgivelser"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0b]/40 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Party room — right text, left image */}
      <section className="py-20 bg-[#0e130f]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="left" distance={20} duration={700}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 h-80">
                <Image
                  src="/images/exterior.jpg"
                  alt="Bjælkestuen — Bredgade 52, Nørre Nebel"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
            <Reveal direction="right" distance={20} duration={700} delay={100}>
              <div>
                <p className="text-forest-500 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">Fester og selskaber</p>
                <h2 className="font-playfair text-4xl sm:text-5xl text-white mb-6 leading-tight">
                  Vi holder<br />festen for dig
                </h2>
                <p className="text-stone-300 text-lg leading-relaxed mb-6">
                  Bjælkestuen har et hyggeligt selskabslokale med plads til op til <span className="text-forest-400 font-semibold">60 gæster</span>. Perfekt til fødselsdage, jubilæer, firmafester og alt derimellem.
                </p>
                <p className="text-stone-500 leading-relaxed mb-8">
                  Vi sørger for maden og stemningen — du sørger for gæsterne. Ring til os og hør mere om mulighederne.
                </p>
                <a
                  href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
                  className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-white font-semibold px-6 py-3 rounded-xl transition"
                >
                  <Phone size={16} />
                  Spørg om selskab
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Review */}
      <section className="py-20 bg-[#0a0f0b]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Reveal direction="up" distance={12} duration={700}>
            <div className="flex justify-center gap-1 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} className="text-forest-400 fill-forest-400" />)}
            </div>
            <blockquote className="font-playfair text-2xl sm:text-3xl text-white italic leading-relaxed mb-6">
              &ldquo;Virkelig godt spisested uanset man vil spise på stedet eller benytte sig af deres gode takeaway mulighed!&rdquo;
            </blockquote>
            <p className="text-stone-500">— Arthur Dahl, gæst</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest-950/60 border-y border-forest-900/20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <Reveal direction="up" distance={12}>
            <h2 className="font-playfair text-4xl text-white mb-4">Klar til et godt måltid?</h2>
            <p className="text-stone-400 text-lg mb-8">Ring til os og book dit bord — eller kig forbi, vi byder altid på et smil.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
                className="flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-600 text-white text-lg font-semibold px-8 py-4 rounded-xl transition"
              >
                <Phone size={20} />
                Ring og book bord
              </a>
              <Link
                href="/kontakt"
                className="flex items-center justify-center gap-2 bg-[#0e130f] hover:bg-forest-950 text-white text-lg font-semibold px-8 py-4 rounded-xl transition border border-forest-900/50"
              >
                <MapPin size={18} />
                Find os
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
