/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  VILLA CONFIG: the only file you need to edit to make the site yours.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  - Every text visitors read is translated field by field: { fr, en, it, de }.
 *    Keep one line per language. You only need the languages listed in
 *    `languages.active`: the build tells you which translation is missing.
 *  - Photos are file names from `src/assets/photos/` (e.g. 'pool.jpg').
 *  - Wrap a word in *stars* in a title to set it in italics.
 *  - The build checks this file and stops with a clear message if something
 *    is wrong (`npm run build` or `npm run dev`).
 *
 *  The content below is the demo: Villa Calanque is a fictional villa.
 *  Replace it with your property. Help: README.md and docs/help.md.
 */
import { defineVilla } from './src/config/define.ts';

export const villa = defineVilla({
  site: {
    // Public address of the site, without trailing slash.
    url: 'https://villa-calanque.example.com',
    // Demo only. Delete these lines for a real property.
    demoNotice: {
      en: 'Demo site of the Riviera Themes theme. Villa Calanque is fictional: its address, prices, reviews and registration number are made up. Royalty-free photos.',
      pt: 'Site de demonstração do tema Riviera Themes. A Villa Calanque é fictícia: o endereço, os preços, as avaliações e o número de registo são inventados. Fotografias livres de direitos.',
    },
  },

  languages: {
    // The language of the home page at "/".
    default: 'pt',
    active: ['pt', 'en'],
   
    // Flag of each language in the language menu. English shows the UK flag; for the US: { en: 'us' }.
    flags: {},
  },

  features: {
    calendar: false, // Pro edition only
    structuredData: false, // Pro edition only
  },

  // Set any section to false to hide it, e.g. faq: false.
  sections: {
    house: true,
    gallery: true,
    bedrooms: true,
    amenities: true,
    area: true,
    rates: true,
    reviews: true,
    availability: true,
    booking: true,
    faq: true,
    rules: true,
  },

  theme: {
    colors: {
      background: '#F1EDE6', // page background (cream)
      surface: '#FFFFFF', // cards, menu, booking bar
      text: '#1E1B18',
      accent: '#B85C38', // buttons and links (terracotta)
      heroAccent: '#F3C7A8', // italic word of the big title
    },
    fonts: {
      // Font files are loaded in src/styles/fonts.css (self-hosted, no Google Fonts request).
      heading: "'Cormorant Garamond', 'Times New Roman', serif",
      body: "'Inter', system-ui, sans-serif",
    },
  },

  property: {
    name: 'Villa Calanque',
    // Never change this id once the site is online (Google uses it to recognise the listing).
    id: 'villa-calanque-ramatuelle',
    type: 'Villa',
    tagline: {
      en: 'Villa with an infinity pool facing the sea, in Ramatuelle',
      pt: 'Villa com piscina infinita virada para o mar, em Ramatuelle',
    },
    address: {
      street: 'Chemin des Crêtes (adresse fictive)',
      postalCode: '83350',
      locality: 'Ramatuelle',
      region: 'Provence-Alpes-Côte d’Azur',
      country: 'FR',
    },
    // At least 5 decimals. Right-click the house in Google Maps or OpenStreetMap to copy them.
    // If a value ends with 0, write it as a string so the 0 is kept: '43.22130'.
    geo: { latitude: 43.22134, longitude: 6.63457 },
    timeZone: 'Europe/Paris',
    currency: 'EUR',
    capacity: {
      guests: 8,
      bedrooms: 4,
      bathrooms: 4,
      rooms: 7,
      areaM2: 240,
      beds: [
        { type: 'King', count: 2 },
        { type: 'Queen', count: 1 },
        { type: 'Single', count: 2 },
      ],
    },
    checkIn: '16:00',
    checkOut: '10:00',
    // France: tourist rental registration number (loi Le Meur). Shown in the footer.
    registrationNumber: '83101000123AB',
  },

  contact: {
    hostName: 'Claire et Marc',
    email: 'bonjour@villa-calanque.example.com',
    // Demo numbers from the range French regulator ARCEP keeps for fiction.
    phone: '+33 6 39 98 00 00',
    whatsapp: '33639980000',
    hostLanguages: ['fr-FR', 'en-GB', 'it-IT'],
    responseTime: {
      en: 'Reply within 24 hours',
      pt: 'Responderemos dentro de 24 horas',
    },
  },

  booking: {
    // 'web3forms' or 'formspree' to receive requests by email, 'none' for WhatsApp and email buttons only.
    provider: 'web3forms',
    // Web3Forms access key (free at web3forms.com) or Formspree form ID. Empty: WhatsApp and email buttons.
    key: '',
  },


  seo: {
    title: {
      en: 'Villa Calanque · Villa with pool in Ramatuelle, Gulf of Saint-Tropez',
      pt: 'Villa Calanque · Villa com piscina em Ramatuelle, Golfo de Saint-Tropez',
    },
    description: {
      en: 'Book direct a 4-bedroom villa with an infinity pool facing the sea in Ramatuelle, near Saint-Tropez. Sleeps 8, from €650 a night, no booking fees.',
      pt: 'Alugue diretamente uma villa de 4 quartos com piscina infinita voltada para o mar em Ramatuelle, perto de Saint-Tropez. Acomoda 8 pessoas, a partir de €650 por noite, sem taxas de reserva.',
    },
    shareImage: 'hero.png',
    // Google forbids marking up ratings copied from Airbnb or Booking.com: keep false unless
    // your reviews are collected on your own site (source: 'direct').
    reviewsInStructuredData: false,
  },

  hero: {
    image: 'hero.png',
    imageAlt: {
      en: 'The infinity pool facing the turquoise sea',
      pt: 'A piscina infinita voltada para o mar turquesa',
    },
    eyebrow: {
      en: 'Villa rental · Ramatuelle, Gulf of Saint-Tropez',
      pt: 'Aluguer de villa · Ramatuelle, Golfo de Saint-Tropez',
    },
    title: {
      en: 'A villa facing the sea,\nin *Ramatuelle*',
      pt: 'Uma villa voltada para o mar,\nem *Ramatuelle*',
    },
    highlight: {
      en: 'infinity pool',
      pt: 'piscina infinita',
    },
  },

  // Shown under the booking bar. Remove the block if you have no reviews yet.
  rating: { value: 4.96, count: 38, source: 'Airbnb' },

  house: {
    navLabel: { en: 'The house', pt: 'A casa' },
    title: {
      en: 'Pale stone, linen and *deep blue*',
      pt: 'Pedra clara, linho e *azul escuro*',
    },
    intro: {
      en: 'Set on the hills of Ramatuelle, among vineyards and umbrella pines, Villa Calanque looks out over the bay of Pampelonne. Wide glass doors open straight onto the terrace and the pool: here, life happens outdoors, from breakfast to the last glass, when the Camarat lighthouse starts to shine.',
      pt: 'Situada nas colinas de Ramatuelle, entre vinhedos e pinheiros, a Villa Calanque tem vista para a baía de Pampelonne. As amplas portas de vidro abrem diretamente para o terraço e a piscina: aqui, a vida acontece ao ar livre, desde o pequeno-almoço até ao último copo, quando o farol de Camarat começa a brilhar.',
    },
    images: ['living.jpg', 'terrace.jpg'],
    highlights: [
      {
        title: { 
          en: 'The infinity pool',
          pt: 'A piscina infinita'
        },
        text: {
          en: 'Twelve metres of water, heated from May to October, that seem to spill into the sea. Sun loungers, parasols and an outdoor shower.',
          pt: 'Doze metros de água, aquecida de maio a outubro, que parece derramar para o mar. Tábuas de sol, guarda-sóis e uma ducha ao ar livre.',
        },
      },
      {
        title: {
          en: 'The terrace and summer kitchen',
          pt: 'O terraço e a cozinha de verão'
        },
        text: {
          en: 'A table for ten under the pergola, a barbecue, a plancha and a summer kitchen for long dinners outdoors.',
          pt: 'Uma mesa para dez pessoas sob o pergolado, um churrasqueira, uma plancha e uma cozinha de verão para jantares longos ao ar livre.',
        },
      },
      {
        title: { 
          en: 'Four quiet suites',
          pt: 'Quatro suítes tranquilas'
        },
        text: {
          en: 'Every bedroom has its own shower room, air conditioning and washed-linen bedding. Two of them open straight onto the garden.',
          pt: 'Cada quarto tem seu próprio banheiro, ar condicionado e roupas de cama lavadas. Dois deles abrem diretamente para o jardim.',
        },
      },
      {
        title: {
          en: 'Beaches five minutes away',
          pt: 'Praias a cinco minutos de distância'
        },
        text: {
          en: 'Pampelonne, L’Escalet and the coastal path are a few minutes’ drive away, and so is the village of Ramatuelle.',
          pt: 'Pampelonne, L’Escalet e o caminho costeiro estão a alguns minutos de distância de carro, assim como a aldeia de Ramatuelle.'
        },
      },
    ],
    facts: [
      {
        value: { en: '240 m²', pt: '240 m²' },
        label: { en: 'of living space', pt: 'de espaço de convivência' },
      },
      {
        value: { en: '3,000 m²', pt: '3.000 m²' },
        label: { en: 'of garden', pt: 'de jardim' },
      },
      {
        value: { en: '12 × 5 m', pt: '12 × 5 m' },
        label: { en: 'heated pool', pt: 'piscina aquecida' },
      },
      {
        value: { en: '2 km', pt: '2 km' },
        label: { en: 'to the beach', pt: 'à praia' },
      },
    ],
  },

  // Google asks for at least 8 photos, including a bedroom, a bathroom and a common area.
  gallery: [
    {
      image: 'hero.png',
      category: 'pool',
      alt: {
        en: 'The infinity pool facing the turquoise sea',
        pt: 'A piscina infinita voltada para o mar turquesa'
      },
    },
    {
      image: 'living.jpg',
      category: 'common',
      alt: {
        en: 'The light-filled living room with wide windows onto the sea',
        pt: 'A sala de estar iluminada com grandes janelas que dão para o mar'
      },
    },
    {
      image: 'terrace.jpg',
      category: 'outdoor',
      alt: {
        en: 'The long table in the shade of the vine-covered pergola',
        pt: 'A longa mesa na sombra do pergolado coberto de videiras'
      },
    },
    {
      image: 'kitchen.jpg',
      category: 'kitchen',
      alt: {
        en: 'The open kitchen and its light-wood dining table',
        pt: 'A cozinha aberta e sua mesa de jantar de madeira clara'
      },
    },
    {
      image: 'bedroom-1.jpg',
      category: 'bedroom',
      alt: {
        en: 'The master suite in sand tones and white bedding',
        pt: 'A suíte principal em tons de areia e roupas de cama brancas'
      },
    },
    {
      image: 'pool.jpg',
      category: 'pool',
      alt: {
        en: 'The infinity pool, its wooden deck and the pines facing the open sea',
        pt: 'A piscina infinita, seu deque de madeira e os pinheiros voltados para o mar aberto'
      },
    },
    {
      image: 'bedroom-2.jpg',
      category: 'bedroom',
      alt: {
        en: 'A bright bedroom with a wooden bed and a cane headboard',
        pt: 'Um quarto iluminado com uma cama de madeira e uma cabeceira de vime'
      },
    },
    {
      image: 'bathroom.jpg',
      category: 'bathroom',
      alt: {
        en: 'The bathroom with a vintage clawfoot tub and arched French doors',
        pt: 'O banheiro com uma banheira de poleiro vintage e portas francesas arqueadas'
      },
    },
    {
      image: 'garden.jpg',
      category: 'outdoor',
      alt: {
        en: 'The estate’s olive trees facing the sea',
        pt: 'As oliveiras da propriedade voltadas para o mar'
      },
    },
    {
      image: 'bedroom-3.jpg',
      category: 'bedroom',
      alt: {
        en: 'White sheets in the morning light',
        pt: 'Lençóis brancos à luz da manhã'
      },
    },
    {
      image: 'exterior.jpg',
      category: 'outdoor',
      alt: {
        en: 'The villa’s white volumes and its pool on the lawn',
        pt: 'Os volumes brancos da villa e sua piscina no gramado'
      },
    },
    {
      image: 'detail.jpg',
      category: 'outdoor',
      alt: {
        en: 'A white amphora on the terrace, facing the sea',
        pt: 'Uma ânfora branca no terraço, voltada para o mar'
      },
    },
  ],

  bedrooms: {
    // Two photos shown next to the list of bedrooms.
    images: [
      {
        image: 'bedroom-1.jpg',
        alt: {
          en: 'The master suite in sand tones and white bedding',
          pt: 'A suíte principal em tons de areia e roupas de cama brancas'
        },
      },
      {
        image: 'bedroom-2.jpg',
        alt: {
          en: 'A bright bedroom with a wooden bed and a cane headboard',
          pt: 'Um quarto iluminado com uma cama de madeira e uma cabeceira de vime'
        },
      },
    ],
    rooms: [
      {
        name: { 
          en: 'Calanque suite',
          pt: 'Suíte Calanque'
        },
        beds: {
          en: 'King-size bed, 180 × 200 cm',
          pt: 'Cama king-size, 180 × 200 cm'
        },
        details: {
          en: 'En-suite with walk-in shower · sea view · direct access to the terrace',
          pt: 'Suíte com chuveiro interno · vista para o mar · acesso direto ao terraço'
        },
      },
      {
        name: { 
          en: 'Pine room',
          pt: 'Quarto de Pinheiro'
        },
        beds: {
          en: 'Queen-size bed, 160 × 200 cm',
          pt: 'Cama queen-size, 160 × 200 cm'
        },
        details: {
          en: 'Private shower room · opens onto the garden',
          pt: 'Chuveiro privado · dá para o jardim'
        },
      },
      {
        name: { 
          en: 'Camarat room',
          pt: 'Quarto Camarat'
        },
        beds: {
          en: 'King-size bed, 180 × 200 cm',
          pt: 'Cama king-size, 180 × 200 cm'
        },
        details: {
          en: 'Private shower room · balcony over the vineyards',
          pt: 'Chuveiro privado · varanda sobre as vinhas'
        },
      },
      {
        name: { 
          en: 'Vineyard room',
          pt: 'Quarto da Vinha'
        },
        beds: {
          en: 'Two single beds, 90 × 200 cm',
          pt: 'Duas camas individuais, 90 × 200 cm'
        },
        details: {
          en: 'Private shower room · ideal for children',
          pt: 'Chuveiro privado · ideal para crianças'
        },
      },
    ],
  },

  // `google` links an amenity to the name Google understands (optional).
  amenities: [
    {
      group: { 
        en: 'Outdoors',
        pt: 'Ao Ar Livre'
      },
      items: [
        {
          icon: 'pool',
          google: 'pool',
          label: {
            en: 'Heated infinity pool',
            pt: 'Piscina infinita aquecida'
          },
        },
        {
          icon: 'sun',
          google: 'patio',
          label: {
            en: 'Terrace with pergola',
            pt: 'Terraço com pergola'
          },
        },
        {
          icon: 'grill',
          google: 'outdoorGrill',
          label: {
            en: 'Summer kitchen, barbecue and plancha',
            pt: 'Cozinha de verão, churrasqueira e plancha'
          },
        },
        {
          icon: 'leaf',
          label: {
            en: 'Olive and lavender garden',
            pt: 'Jardim de azevins e lavandas'
          },
        },
        {
          icon: 'parking',
          label: {
            en: 'Private parking for 3 cars',
            pt: 'Estacionamento privado para 3 carros'
          },
        },
      ],
    },
    {
      group: { 
        en: 'Indoors',
        pt: 'Interior'
      },
      items: [
        {
          icon: 'kitchen',
          google: 'kitchen',
          label: {
            en: 'Fitted kitchen, oven and dishwasher',
            pt: 'Cozinha integrada, forno e lava-louças'
          },
        },
        {
          icon: 'ac',
          google: 'ac',
          label: {
            en: 'Air conditioning in every room',
            pt: 'Ar condicionado em todos os quartos'
          },
        },
        {
          icon: 'wifi',
          google: 'wifi',
          label: {
            en: 'Fibre wifi',
            pt: 'Wifi de fibra'
          },
        },
        {
          icon: 'tv',
          google: 'tv',
          label: {
            en: 'Smart TV',
            pt: 'Smart TV'
          },
        },
        {
          icon: 'washer',
          google: 'washerDryer',
          label: {
            en: 'Washing machine and dryer',
            pt: 'Máquina de lavar e secadora'
          },
        },
      ],
    },
    {
      group: { 
        en: 'Comfort',
        pt: 'Conforto'
      },
      items: [
        {
          icon: 'bed',
          label: {
            en: 'Bed linen and towels provided',
            pt: 'Lençóis e toalhas fornecidas'
          },
        },
        {
          icon: 'sun',
          label: {
            en: 'Beach and pool towels',
            pt: 'Toalhas de praia e piscina'
          },
        },
        {
          icon: 'baby',
          google: 'crib',
          label: {
            en: 'Baby cot and high chair',
            pt: 'Berço e cadeira alta'
          },
        },
        {
          icon: 'coffee',
          label: {
            en: 'Espresso machine',
            pt: 'Máquina de café expresso'
          },
        },
      ],
    },
    {
      group: { 
        en: 'Services',
        pt: 'Serviços'
      },
      items: [
        {
          icon: 'key',
          label: {
            en: 'Personal welcome on arrival',
            pt: 'Recepção pessoal na chegada'
          },
        },
        {
          icon: 'shield',
          label: {
            en: 'Mid-stay cleaning on request',
            pt: 'Limpeza durante a estadia mediante solicitação'
          },
        },
        {
          icon: 'wine',
          label: {
            en: 'Private chef on request',
            pt: 'Chef privado mediante solicitação'
          },
        },
        {
          icon: 'sea',
          label: {
            en: 'Boat hire arranged for you',
            pt: 'Aluguel de barco organizado para você'
          },
        },
      ],
    },
  ],

  area: {
    navLabel: { 
      en: 'The Gulf',
      pt: 'O Golfo'
    },
    title: {
      en: 'The Gulf of *Saint-Tropez*, the quiet side',
      pt: 'O Golfo de *Saint-Tropez*, o lado tranquilo'
    },
    intro: {
      en: 'Ramatuelle keeps its flowered lanes and vineyards, away from the bustle of Saint-Tropez. The market in the morning, the sand of Pampelonne in the afternoon, the squares of Gassin at night: everything is less than twenty minutes away.',
      pt: 'Ramatuelle mantém suas ruas floreadas e vinícolas, longe da agitação de Saint-Tropez. O mercado pela manhã, a areia de Pampelonne à tarde, as praças de Gassin à noite: tudo está a menos de vinte minutos de distância.'
    },
    images: [
      {
        image: 'beach.jpg',
        alt: {
          en: 'White sand beach and turquoise water near Saint-Tropez',
          pt: 'Praia de areia branca e água turquesa perto de Saint-Tropez'
        },
      },
      {
        image: 'village.jpg',
        alt: {
          en: 'Saint-Tropez, its bell tower and the gulf seen from the hill',
          pt: 'Saint-Tropez, sua torre de sino e o golfo vistos da colina'
        },
      },
    ],
    places: [
      {
        name: 'Plage de Pampelonne',
        kind: { en: 'Sandy beach', pt: 'Praia de areia' },
        distance: { en: '2 km · 5 min', pt: '2 km · 5 min' },
      },
      {
        name: 'Ramatuelle',
        kind: { en: 'Hilltop village', pt: 'Vila na encosta' },
        distance: { en: '2.5 km · 6 min', pt: '2.5 km · 6 min' },
      },
      {
        name: 'Plage de l’Escalet',
        kind: { en: 'Rocky cove', pt: 'Baía rochosa' },
        distance: { en: '5 km · 10 min', pt: '5 km · 10 min' },
      },
      {
        name: 'Gassin',
        kind: { en: 'Hilltop village', pt: 'Vila na encosta' },
        distance: { en: '8 km · 15 min', pt: '8 km · 15 min' },
      },
      {
        name: 'Saint-Tropez',
        kind: { en: 'Harbour and market', pt: 'Porto e mercado' },
        distance: { en: '10 km · 20 min', pt: '10 km · 20 min' },
      },
      {
        name: 'Toulon-Hyères',
        kind: { en: 'Airport', pt: 'Aeroporto' },
        distance: { en: '55 km · 1 hr', pt: '55 km · 1 hr' },
      },
      {
        name: 'Nice Côte d’Azur',
        kind: { en: 'Airport', pt: 'Aeroporto' },
        distance: { en: '105 km · 1 hr 30', pt: '105 km · 1 hr 30' },
      },
    ],
  },

  rates: {
    intro: {
      en: 'Prices for the whole house, up to 8 guests, linen included.',
      pt: 'Preços para a casa inteira, até 8 hóspedes, com toalhas incluídas.'
    },
    seasons: [
      {
        name: { en: 'Low season', pt: 'Baixa temporada' },
        period: {
          en: 'November to April, holidays excluded',
          pt: 'Novembro a Abril, feriados excluídos'
        },
        nightly: 650,
        minNights: 3,
        ranges: [
          ['11-01', '12-19'],
          ['01-04', '04-30'],
        ],
      },
      {
        name: { en: 'Mid season', pt: 'Temporada intermediária' },
        period: {
          en: 'May, June, September and October',
          pt: 'Maio, Junho, Setembro e Outubro'
        },
        nightly: 950,
        minNights: 5,
        ranges: [
          ['05-01', '06-30'],
          ['09-01', '10-31'],
        ],
      },
      {
        name: { en: 'High season', pt: 'Alta temporada' },
        period: { en: 'July and August', pt: 'Julho e Agosto' },
        nightly: 1450,
        minNights: 7,
        ranges: [['07-01', '08-31']],
        note: {
          en: 'Saturday to Saturday.',
          pt: 'Sábado a Sábado.'
        },
      },
      {
        name: { en: 'Christmas and New Year', pt: 'Natal e Ano Novo' },
        period: {
          en: '20 December to 3 January',
          pt: '20 de Dezembro a 3 de Janeiro'
        },
        nightly: 1100,
        minNights: 5,
        ranges: [['12-20', '01-03']],
      },
    ],
    extras: [
      {
        label: { en: 'Final cleaning', pt: 'Limpeza final' },
        value: { en: '€350', pt: '€350' },
      },
      {
        label: { en: 'Security deposit', pt: 'Depósito de segurança' },
        value: {
          en: '€3,000, returned after departure',
          pt: '€3,000, devolvido após a saída'
        },
      },
      {
        label: { en: 'Baby cot and high chair', pt: 'Criança e cadeira de alta' },
        value: { en: 'Free', pt: 'Gratuito' },
      },
      {
        label: { en: 'Dog (on request)', pt: 'Cão (sob solicitação)' },
        value: { en: '€100 per stay', pt: '€100 por estadia' },
      },
    ],
    touristTax: {
      en: 'Set by the town, about €3 per adult per night, added to the balance. Free for under-18s.',
      pt: 'Definido pela cidade, cerca de €3 por adulto por noite, adicionado ao saldo. Gratuito para menores de 18 anos.'
    },
    payment: {
      en: '30% when booking, the balance 30 days before arrival, by bank transfer or card. Free cancellation up to 60 days before arrival.',
      pt: '30% ao fazer a reserva, o saldo 30 dias antes da chegada, por transferência bancária ou cartão. Cancelamento gratuito até 60 dias antes da chegada.'
    },
  },

  // Reviews are shown as the guests wrote them, in their own language.
  reviews: [
    {
      author: 'Claire D.',
      origin: { 
        en: 'Lyon, France',
        pt: 'Lyon, França'
      },
      date: '2026-08',
      stayDate: '2026-08-08',
      rating: 5,
      lang: 'fr',
      source: 'airbnb',
      text: 'Une maison encore plus belle que sur les photos. La piscine face à la mer au réveil, les dîners sous la pergola, les plages à cinq minutes : nous avons déjà réservé l’été prochain.',
    },
    {
      author: 'James W.',
      origin: { 
        en: 'London, United Kingdom',
        pt: 'Londres, Reino Unido'
      },
      date: '2026-07',
      stayDate: '2026-07-11',
      rating: 5,
      lang: 'en',
      source: 'airbnb',
      text: 'A beautifully designed house with a view you never tire of. Spotless, calm, and the owners’ restaurant tips were spot on. Perfect for our two families.',
    },
    {
      author: 'Giulia R.',
      origin: { 
        en: 'Milan, Italy',
        pt: 'Milão, Itália'
      },
      date: '2026-06',
      stayDate: '2026-06-13',
      rating: 5,
      lang: 'it',
      source: 'airbnb',
      text: 'Villa curatissima, camere fresche e silenziose, terrazza meravigliosa. Proprietari gentilissimi e sempre disponibili. Torneremo di sicuro!',
    },
    {
      author: 'Familie Becker',
      origin: { 
        en: 'Munich, Germany',
        pt: 'Munique, Alemanha'
      },
      date: '2026-09',
      stayDate: '2026-09-05',
      rating: 5,
      lang: 'de',
      source: 'airbnb',
      text: 'Ein traumhaftes Haus für unsere Familie mit drei Kindern. Der Pool ist ein Erlebnis, die Küche bestens ausgestattet und Pampelonne in wenigen Minuten erreichbar.',
    },
  ],

  faq: [
    {
      question: {
        en: 'How does booking direct work?',
        pt: 'Como funciona a reserva direta?'
      },
      answer: {
        en: 'Send your request with your dates. We reply within 24 hours with a quote and a rental agreement. Your booking is confirmed once we receive the 30% deposit.',
        pt: 'Envie seu pedido com as datas. Responderemos dentro de 24 horas com uma cotação e um contrato de aluguel. Sua reserva é confirmada assim que recebermos o depósito de 30%.'
      },
    },
    {
      question: {
        en: 'Why is it cheaper than booking through a platform?',
        pt: 'Por que é mais barato do que reservar através de uma plataforma?'
      },
      answer: {
        en: 'Platforms add service fees on top of the rental price. When you book direct, you only pay for the stay, the cleaning and the tourist tax.',
        pt: 'As plataformas adicionam taxas de serviço sobre o preço do aluguel. Quando você reserva diretamente, você só paga pela estadia, a limpeza e o imposto turístico.'
      },
    },
    {
      question: {
        en: 'Is the pool safe for children?',
        pt: 'O piscina é segura para crianças?'
      },
      answer: {
        en: 'Yes. It has a pool alarm, and a removable fence can be put up before you arrive.',
        pt: 'Sim. Tem um alarme de piscina, e uma cerca removível pode ser colocada antes de você chegar.'
      },
    },
    {
      question: {
        en: 'Do we need a car?',
        pt: 'Precisamos de um carro?'
      },
      answer: {
        en: 'It is best: the house sits on the hills, 2 km from the beach. The private car park holds three cars.', 
        pt: 'É melhor: a casa fica nas colinas, a 2 km da praia. O estacionamento privado comporta três carros.'
      },
    },
    {
      question: {
        en: 'Can we arrive late in the evening?',
        pt: 'Podemos chegar tarde à noite?'
      },
      answer: {
        en: 'Yes. We welcome you from 4 pm. After 8 pm, a key box is waiting for you with all the instructions.',
        pt: 'Sim. Você é bem-vindo a partir das 16h. Após as 20h, uma caixa de chaves está esperando por você com todas as instruções.'
      },
    },
    {
      question: {
        en: 'Is the house open all year round?',
        pt: 'A casa está aberta o ano todo?'
      },
      answer: {
        en: 'Yes, and it is heated in winter. Outside July and August, you can arrive on any day of the week.',
        pt: 'Sim, e é aquecida no inverno. Fora de julho e agosto, você pode chegar em qualquer dia da semana.'
      },
    },
  ],

  rules: [
    {
      icon: 'clock',
      title: { 
        en: 'Times',
        pt: 'Horários'
      },
      text: {
        en: 'Check-in from 4 pm, check-out by 10 am.',
        pt: 'Entrada a partir das 16h, saída até as 10h.'
      },
    },
    {
      icon: 'people',
      title: { 
        en: '8 guests at most',
        pt: 'No máximo 8 hóspedes'
      },
      text: {
        en: 'Friends are welcome during the day, with our agreement.',
        pt: 'Amigos são bem-vindos durante o dia, com a nossa concordância.'
      },
    },
    {
      icon: 'music',
      title: { 
        en: 'No parties',
        pt: 'Sem festas'
      },
      text: {
        en: 'No parties or events, out of respect for the neighbours. Quiet after 10 pm.',
        pt: 'Sem festas ou eventos, por respeito aos vizinhos. Silêncio após as 22h.'
      },
    },
    {
      icon: 'no-smoking',
      title: { 
        en: 'No smoking',
        pt: 'Sem fumar'
      },
      text: {
        en: 'No smoking indoors. Ashtrays are waiting for you on the terrace.',
        pt: 'Não é permitido fumar em ambientes fechados. Cinzeiros estão disponíveis na terraço.'
      },
    },
    {
      icon: 'paw',
      title: { 
        en: 'Pets on request',
        pt: 'Animais de estimação sob solicitação'
      },
      text: {
        en: 'One calm dog is welcome with our agreement.',
        pt: 'Um cão calmo é bem-vindo com a nossa concordância.',
      },
    },
    {
      icon: 'shield',
      title: { 
        en: 'Security deposit',
        pt: 'Depósito de segurança'
      },
      text: {
        en: '€3,000 held on your card, released within 7 days of departure.',
        pt: '€3,000 mantido na sua carta, libertado dentro de 7 dias da saída.',
      },
    },
  ],

  // Legal notice and privacy pages (/legal/, /privacy/). Fill in your details: until then the
  // pages show "[to complete]". Or set noticeUrl to a legal notice you already publish elsewhere.
  // These pages are templates, not legal advice: have them checked for your country.
  legal: {
    // noticeUrl: 'https://your-company.example/legal-notice',
    publisherName: '', // owner or company publishing the site
    publisherAddress: '',
    companyId: '', // company number (SIRET, VAT...), empty if none
    publicationDirector: '',
    hostingProvider: {
      name: 'Cloudflare, Inc.',
      address: '101 Townsend St, San Francisco, CA 94107, USA',
      website: 'https://www.cloudflare.com',
    },
    updated: '2026-11-01',
  },
});
