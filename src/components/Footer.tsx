import Link from 'next/link'
import { Phone, MapPin, Clock, Facebook, ExternalLink } from 'lucide-react'
import { restaurant, hours } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-[#0e130f] border-t border-forest-900/30 pt-14 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="font-playfair text-3xl text-forest-300 mb-3">Bjælkestuen</h3>
            <p className="text-stone-400 text-[15px] leading-relaxed mb-5">
              Hyggelig restaurant i hjertet af Nørre Nebel. Stedet man mødes igen og igen.
            </p>
            <a
              href={restaurant.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-400 hover:text-forest-300 transition text-[14px]"
            >
              <Facebook size={16} /> Facebook
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-forest-400 font-semibold uppercase tracking-[0.15em] text-xs mb-5">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
                  className="flex items-center gap-3 text-stone-300 hover:text-forest-300 transition text-[15px]"
                >
                  <Phone size={15} className="text-forest-500 shrink-0" />
                  {restaurant.phone}
                </a>
              </li>
              <li>
                <a
                  href={restaurant.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-stone-300 hover:text-forest-300 transition text-[15px]"
                >
                  <MapPin size={15} className="text-forest-500 shrink-0 mt-0.5" />
                  {restaurant.address}
                </a>
              </li>
              <li>
                <a
                  href={restaurant.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-forest-400 hover:text-forest-300 underline underline-offset-2 decoration-forest-700 hover:decoration-forest-400 transition text-[14px]"
                >
                  Se kort og rutevejledning
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-forest-400 font-semibold uppercase tracking-[0.15em] text-xs mb-5">Åbningstider</h4>
            <ul className="space-y-2">
              {hours.map(({ day, open, close, closed }) => (
                <li key={day} className="flex justify-between text-[14px]">
                  <span className="text-stone-400">{day}</span>
                  <span className={closed ? 'text-red-400/80' : 'text-stone-200 font-medium'}>
                    {closed ? 'Lukket' : `${open}–${close}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-950 pt-6 text-center text-stone-600 text-[13px]">
          © {new Date().getFullYear()} Bjælkestuen, Nørre Nebel
        </div>
      </div>
    </footer>
  )
}
