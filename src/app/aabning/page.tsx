import { Clock, Phone, MapPin, Navigation } from 'lucide-react'
import Footer from '@/components/Footer'
import { hours, restaurant } from '@/lib/data'

export default function Aabning() {
  return (
    <>
      <div className="bg-[#0a0f0b] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-forest-500 text-sm uppercase tracking-widest mb-2 font-semibold">Bjælkestuen</p>
            <h1 className="font-playfair text-4xl sm:text-5xl text-white mb-4">Åbningstider</h1>
          </div>

          {/* Hours table */}
          <div className="bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-stone-800 flex items-center gap-2">
              <Clock size={18} className="text-forest-500" />
              <h2 className="text-white font-semibold">Ugentlige åbningstider</h2>
            </div>
            <div className="divide-y divide-stone-800">
              {hours.map(({ day, open, close, closed }) => (
                <div key={day} className="flex justify-between items-center px-6 py-4">
                  <span className="text-stone-300 font-medium">{day}</span>
                  <span className={closed ? 'text-red-400 font-medium' : 'text-forest-400 font-semibold'}>
                    {closed ? 'Lukket' : `${open} – ${close}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <a href={`tel:${restaurant.phone.replace(/\s/g,'')}`} className="flex items-center gap-4 bg-stone-900 hover:bg-stone-800 transition rounded-xl p-5 border border-stone-800 group">
              <div className="w-11 h-11 rounded-full bg-forest-600/10 flex items-center justify-center group-hover:bg-forest-600/20 transition shrink-0">
                <Phone size={18} className="text-forest-500" />
              </div>
              <div>
                <p className="text-stone-400 text-xs mb-0.5">Ring til os</p>
                <p className="text-white font-semibold">{restaurant.phone}</p>
              </div>
            </a>
            <a href={restaurant.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-stone-900 hover:bg-stone-800 transition rounded-xl p-5 border border-stone-800 group sm:col-span-2">
              <div className="w-11 h-11 rounded-full bg-forest-600/10 flex items-center justify-center group-hover:bg-forest-600/20 transition shrink-0">
                <Navigation size={18} className="text-forest-500" />
              </div>
              <div>
                <p className="text-stone-400 text-xs mb-0.5">Find os</p>
                <p className="text-white font-semibold">{restaurant.address}</p>
              </div>
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-stone-800">
            <iframe
              src={restaurant.mapUrl}
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bjælkestuen på Google Maps"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
