import Link from 'next/link'
import { Phone, MapPin, Clock, Facebook } from 'lucide-react'
import { restaurant, hours } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-[#0e130f] border-t border-forest-900/30 pt-12 pb-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl text-forest-300 mb-3">Bjælkestuen</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">
              Hyggelig restaurant i hjertet af Nørre Nebel. Stedet man mødes igen og igen.
            </p>
            <a
              href={restaurant.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-500 hover:text-forest-300 transition text-sm"
            >
              <Facebook size={15} /> Facebook
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-forest-500 font-semibold uppercase tracking-[0.15em] text-xs mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
                  className="flex items-center gap-2 text-stone-400 hover:text-forest-300 transition text-sm"
                >
                  <Phone size={13} className="text-forest-600 shrink-0" /> {restaurant.phone}
                </a>
              </li>
              <li>
                <a
                  href={restaurant.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-stone-400 hover:text-forest-300 transition text-sm"
                >
                  <MapPin size={13} className="text-forest-600 shrink-0 mt-0.5" /> {restaurant.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-forest-500 font-semibold uppercase tracking-[0.15em] text-xs mb-4">Åbningstider</h4>
            <ul className="space-y-1.5">
              {hours.map(({ day, open, close, closed }) => (
                <li key={day} className="flex justify-between text-sm">
                  <span className="text-stone-500">{day}</span>
                  <span className={closed ? 'text-red-500/80' : 'text-stone-300'}>
                    {closed ? 'Lukket' : `${open}–${close}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-950 pt-6 text-center text-stone-700 text-xs">
          © {new Date().getFullYear()} Bjælkestuen, Nørre Nebel
        </div>
      </div>
    </footer>
  )
}
