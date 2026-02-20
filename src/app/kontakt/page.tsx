import Image from 'next/image'
import { Phone, MapPin, Clock, Facebook, Navigation, ExternalLink } from 'lucide-react'
import Footer from '@/components/Footer'
import { restaurant, hours } from '@/lib/data'

export default function Kontakt() {
  return (
    <>
      <div className="bg-[#0a0f0b]">

        {/* Hero — exterior photo so people recognise the building */}
        <div className="relative h-72 sm:h-80 overflow-hidden">
          <Image
            src="/images/exterior.jpg"
            alt="Bjælkestuen — Bredgade 52, Nørre Nebel"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0b]/30 via-[#0a0f0b]/40 to-[#0a0f0b]" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center w-full px-4">
            <p className="text-forest-300 text-sm uppercase tracking-[0.2em] mb-1 font-semibold">Bjælkestuen</p>
            <h1 className="font-playfair text-4xl sm:text-5xl text-white">Find os</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl py-12">

          {/* Contact grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">

            {/* Phone */}
            <a
              href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="flex items-center gap-4 bg-stone-900 hover:bg-stone-800 transition rounded-xl p-6 border border-stone-800 group"
            >
              <div className="w-12 h-12 rounded-full bg-forest-600/10 flex items-center justify-center group-hover:bg-forest-600/20 transition shrink-0">
                <Phone size={20} className="text-forest-400" />
              </div>
              <div>
                <p className="text-stone-400 text-xs mb-1 uppercase tracking-wide">Telefon</p>
                <p className="text-white font-bold text-lg">{restaurant.phone}</p>
                <p className="text-forest-400 text-sm">Ring og book bord →</p>
              </div>
            </a>

            {/* Address — opens Google Maps in new tab */}
            <a
              href={restaurant.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-stone-900 hover:bg-stone-800 transition rounded-xl p-6 border border-stone-800 group"
            >
              <div className="w-12 h-12 rounded-full bg-forest-600/10 flex items-center justify-center group-hover:bg-forest-600/20 transition shrink-0">
                <MapPin size={20} className="text-forest-400" />
              </div>
              <div>
                <p className="text-stone-400 text-xs mb-1 uppercase tracking-wide">Adresse</p>
                <p className="text-white font-bold">{restaurant.address}</p>
                <p className="text-forest-400 text-sm flex items-center gap-1 mt-1">
                  <Navigation size={12} /> Åbn i Google Maps →
                </p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href={restaurant.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-stone-900 hover:bg-stone-800 transition rounded-xl p-6 border border-stone-800 group"
            >
              <div className="w-12 h-12 rounded-full bg-forest-600/10 flex items-center justify-center group-hover:bg-forest-600/20 transition shrink-0">
                <Facebook size={20} className="text-forest-400" />
              </div>
              <div>
                <p className="text-stone-400 text-xs mb-1 uppercase tracking-wide">Facebook</p>
                <p className="text-white font-bold">Bjælkestuen</p>
                <p className="text-forest-400 text-sm flex items-center gap-1 mt-1">
                  <ExternalLink size={12} /> Besøg vores side →
                </p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-start gap-4 bg-stone-900 rounded-xl p-6 border border-stone-800">
              <div className="w-12 h-12 rounded-full bg-forest-600/10 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-forest-400" />
              </div>
              <div className="w-full">
                <p className="text-stone-400 text-xs mb-3 uppercase tracking-wide">Åbningstider</p>
                <div className="space-y-1.5">
                  {hours.map(({ day, open, close, closed }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-stone-400">{day}</span>
                      <span className={closed ? 'text-red-400' : 'text-stone-200 font-medium'}>
                        {closed ? 'Lukket' : `${open}–${close}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map — embedded + big open in Maps button */}
          <div className="rounded-2xl overflow-hidden border border-stone-800 mb-4">
            <iframe
              src={restaurant.mapUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bjælkestuen på Google Maps"
            />
          </div>
          <a
            href={restaurant.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-stone-900 hover:bg-stone-800 border border-stone-800 text-forest-300 hover:text-forest-200 font-medium py-3.5 rounded-xl transition text-[15px]"
          >
            <Navigation size={16} />
            Åbn i Google Maps — få rutevejledning
            <ExternalLink size={13} className="text-stone-500" />
          </a>

        </div>
      </div>
      <Footer />
    </>
  )
}
