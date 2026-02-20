export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Bjælkestuen',
    description: 'Hyggelig restaurant i hjertet af Nørre Nebel. Bøffer, burgere, wienerschnitzel og meget mere. Takeaway og selskabslokale til 60 gæster.',
    url: 'https://bjaelkestuen-demo.pages.dev',
    telephone: '+4575288772',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bredgade 52',
      addressLocality: 'Nørre Nebel',
      postalCode: '6830',
      addressCountry: 'DK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 55.7873,
      longitude: 8.2938,
    },
    servesCuisine: ['Dansk', 'Burgere', 'Grillretter', 'Takeaway'],
    priceRange: '$$',
    currenciesAccepted: 'DKK',
    paymentAccepted: 'Cash, Credit Card',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday',    opens: '11:30', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '11:30', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday',  opens: '11:30', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday',    opens: '11:30', closes: '21:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday',  opens: '11:30', closes: '21:30' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday',    opens: '12:00', closes: '21:00' },
    ],
    image: 'https://bjaelkestuen-demo.pages.dev/images/interior-1.jpg',
    sameAs: ['https://www.facebook.com/profile.php?id=100087998032298'],
    hasMap: 'https://www.google.dk/maps/place/Bredgade+52,+6830+Nørre+Nebel',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
