import Link from 'next/link'
import { Phone, MapPin, Clock, Facebook } from 'lucide-react'
import { restaurant, hours } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-amber-900/20 pt-12 pb-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl text-amber-400 mb-3">Bjælkestuen</h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              Hyggelig restaurant i hjertet af Nørre Nebel. Stedet man mødes igen og igen.
            </p>
            <a
              href={restaurant.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-400 hover:text-amber-400 transition text-sm"
            >
              <Facebook size={16} /> Facebook
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-xs mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${restaurant.phone.replace(/\s/g,'')}`} className="flex items-center gap-2 text-stone-300 hover:text-amber-400 transition text-sm">
                  <Phone size={14} className="text-amber-600 shrink-0" /> {restaurant.phone}
                </a>
              </li>
              <li>
                <a href={restaurant.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-stone-300 hover:text-amber-400 transition text-sm">
                  <MapPin size={14} className="text-amber-600 shrink-0 mt-0.5" /> {restaurant.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-xs mb-4">Åbningstider</h4>
            <ul className="space-y-1">
              {hours.map(({ day, open, close, closed }) => (
                <li key={day} className="flex justify-between text-sm">
                  <span className="text-stone-400">{day}</span>
                  <span className={closed ? 'text-red-400' : 'text-stone-200'}>
                    {closed ? 'Lukket' : `${open}–${close}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 text-center text-stone-600 text-xs">
          © {new Date().getFullYear()} Bjælkestuen, Nørre Nebel
        </div>
      </div>
    </footer>
  )
}
