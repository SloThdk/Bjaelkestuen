import { Phone, MapPin, Clock, Facebook, Navigation } from 'lucide-react'
import Footer from '@/components/Footer'
import { restaurant, hours } from '@/lib/data'

export default function Kontakt() {
  return (
    <>
      <div className="bg-stone-950 py-16">
        <div className="container mx-auto px-4 max-w-4xl">

          <div className="text-center mb-12">
            <p className="text-amber-500 text-sm uppercase tracking-widest mb-2 font-semibold">Bjælkestuen</p>
            <h1 className="font-playfair text-4xl sm:text-5xl text-white mb-4">Find os</h1>
            <p className="text-stone-400">Vi glæder os til at se dig</p>
          </div>

          {/* Contact grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href={`tel:${restaurant.phone.replace(/\s/g,'')}`}
              className="flex items-center gap-4 bg-stone-900 hover:bg-stone-800 transition rounded-xl p-6 border border-stone-800 group"
            >
              <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center group-hover:bg-amber-600/20 transition shrink-0">
                <Phone size={20} className="text-amber-500" />
              </div>
              <div>
                <p className="text-stone-400 text-xs mb-1 uppercase tracking-wide">Telefon</p>
                <p className="text-white font-bold text-lg">{restaurant.phone}</p>
                <p className="text-stone-400 text-sm">Ring og book bord</p>
              </div>
            </a>

            <a
              href={restaurant.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-stone-900 hover:bg-stone-800 transition rounded-xl p-6 border border-stone-800 group"
            >
              <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center group-hover:bg-amber-600/20 transition shrink-0">
                <MapPin size={20} className="text-amber-500" />
              </div>
              <div>
                <p className="text-stone-400 text-xs mb-1 uppercase tracking-wide">Adresse</p>
                <p className="text-white font-bold">{restaurant.address}</p>
                <p className="text-stone-400 text-sm flex items-center gap-1 mt-1">
                  <Navigation size={12} /> Få rutevejledning
                </p>
              </div>
            </a>

            <a
              href={restaurant.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-stone-900 hover:bg-stone-800 transition rounded-xl p-6 border border-stone-800 group"
            >
              <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center group-hover:bg-amber-600/20 transition shrink-0">
                <Facebook size={20} className="text-amber-500" />
              </div>
              <div>
                <p className="text-stone-400 text-xs mb-1 uppercase tracking-wide">Facebook</p>
                <p className="text-white font-bold">Bjælkestuen</p>
                <p className="text-stone-400 text-sm">Følg os på Facebook</p>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-stone-900 rounded-xl p-6 border border-stone-800">
              <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-amber-500" />
              </div>
              <div className="w-full">
                <p className="text-stone-400 text-xs mb-2 uppercase tracking-wide">Åbningstider</p>
                <div className="space-y-1">
                  {hours.map(({ day, open, close, closed }) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-stone-400">{day}</span>
                      <span className={closed ? 'text-red-400' : 'text-amber-400 font-medium'}>
                        {closed ? 'Lukket' : `${open}–${close}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-stone-800">
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
        </div>
      </div>
      <Footer />
    </>
  )
}
