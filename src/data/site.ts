export const site = {
  name: 'Theo·Stella',
  fullName: 'Theo·Stella Beauty Bar',
  tagline: 'Surrey Nail & Beauty Studio',
  bookingUrl: 'https://booking.gocheckin.net/v2/14339',
  phone: '604-529-8078',
  phoneHref: 'tel:+16045298078',
  email: 'hello@theostellabeauty.ca',
  address: {
    line1: '13639 George Jct #104',
    line2: 'Surrey, BC V3T 0R1',
    full: '13639 George Jct #104, Surrey, BC V3T 0R1',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=13639+George+Jct+%23104+Surrey+BC+V3T+0R1',
    lat: 49.1819074,
    lon: -122.8433873,
  },
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
    { label: 'Google', href: 'https://www.google.com/maps', icon: 'google' },
  ],
  hours: [
    { day: 'Monday – Saturday', time: '10:00 am – 7:00 pm' },
    { day: 'Sunday', time: '10:00 am – 6:00 pm' },
  ],
} as const

export type Service = {
  title: string
  blurb: string
  tags: string[]
  featured?: boolean
}

export const services: Service[] = [
  {
    title: 'Russian Manicure',
    blurb:
      'Our signature dry manicure. Precise cuticle work and a flawless, long-lasting gel finish that grows out clean.',
    tags: ['Signature', 'Gel', 'Dry technique'],
    featured: true,
  },
  {
    title: 'Russian Pedicure',
    blurb:
      'Meticulous care from cuticle to heel, leaving feet soft, refined and beautifully polished.',
    tags: ['Gel', 'Detailed'],
  },
  {
    title: 'Nail Enhancement',
    blurb:
      'Gel-X extensions and builder gel shaped to your ideal length — natural strength, effortless wear.',
    tags: ['Gel-X', 'Builder gel'],
    featured: true,
  },
  {
    title: 'Relaxing Nail Care',
    blurb:
      'A gentle, restorative treatment for natural nails — shaping, buffing and hydration to unwind.',
    tags: ['Natural', 'Spa'],
  },
  {
    title: 'Nail Combo & Add-Ons',
    blurb:
      'Curate your visit with French tips, chrome, hand-painted art and nourishing extras.',
    tags: ['Custom art', 'Chrome', 'French'],
  },
  {
    title: 'Permanent Makeup',
    blurb:
      'Wake up ready. Soft, natural-looking enhancements crafted to flatter your features for months.',
    tags: ['PMU', 'Long-lasting'],
    featured: true,
  },
  {
    title: 'Brows',
    blurb:
      'Shaping, tinting and lamination to sculpt full, defined brows tailored to your face.',
    tags: ['Shape', 'Lamination', 'Tint'],
  },
  {
    title: 'Lashes',
    blurb:
      'Classic to volume extensions and lifts that open the eyes with weightless, wispy fullness.',
    tags: ['Extensions', 'Lift'],
  },
  {
    title: 'Waxing',
    blurb:
      'Smooth, precise hair removal with premium wax and a gentle, comfortable touch.',
    tags: ['Face', 'Body'],
  },
  {
    title: 'Skin Care',
    blurb:
      'Tailored facial treatments that cleanse, brighten and renew for a lit-from-within glow.',
    tags: ['Facial', 'Glow'],
  },
]

/** The complete treatment menu — every service from the original site. */
export const fullMenu = [
  { name: 'Russian Manicure', note: 'Signature dry manicure with a flawless, long-lasting gel finish.' },
  { name: 'Russian Pedicure', note: 'Meticulous cuticle-to-heel care that leaves feet soft and refined.' },
  { name: 'Relaxing Nail Care', note: 'A gentle, restorative treatment for natural nails.' },
  { name: 'Nail Combo', note: 'Manicure and pedicure paired for head-to-toe polish.' },
  { name: 'Nail Enhancement', note: 'Gel-X extensions and builder gel shaped to your ideal length.' },
  { name: 'Nail Add-On', note: 'French, chrome, hand-painted art and nourishing extras.' },
  { name: 'Wax', note: 'Smooth, precise hair removal for face and body.' },
  { name: 'Skin Care', note: 'Tailored facials that cleanse, brighten and renew.' },
  { name: 'Permanent Makeup', note: 'Soft, natural-looking enhancements crafted to last for months.' },
  { name: 'Brow', note: 'Shaping, tinting and lamination for full, defined brows.' },
  { name: 'Lash', note: 'Classic to volume extensions and lifts for weightless fullness.' },
]

export const offers = [
  {
    title: 'E-Gift Cards',
    body: 'Give the gift of self-care. Digital gift cards are available in any amount and delivered straight to their inbox — perfect for birthdays, holidays and thank-yous.',
    cta: 'Send a Gift Card',
    href: 'mailto:hello@theostellabeauty.ca?subject=E-Gift%20Card%20Enquiry',
  },
  {
    title: 'Promotions',
    body: 'From new-guest offers to seasonal treatments, we love to spoil our community. Ask about our current promotions when you book, or follow us on Instagram for the latest.',
    cta: 'View Booking',
    href: 'https://booking.gocheckin.net/v2/14339',
  },
]

export const stats = [
  { value: '5000+', label: 'Happy Guests' },
  { value: '4.9★', label: 'Client Rating' },
  { value: '10+', label: 'Signature Services' },
  { value: '100%', label: 'Sterilised Tools' },
]

export const faqs = [
  {
    q: 'What is a Russian manicure?',
    a: 'It’s a dry, machine-based technique that gently cleans under and around the cuticle for an ultra-clean finish. The result looks flawless and grows out beautifully — often lasting up to three weeks.',
  },
  {
    q: 'How do I book my first appointment?',
    a: 'Tap any “Book Now” button to open our live booking calendar, choose your service and time, and you’re set. Prefer to chat first? Call or message us — we’re happy to guide you.',
  },
  {
    q: 'Do you offer Gel-X and nail enhancements?',
    a: 'Yes. We specialise in Gel-X extensions and builder gel, shaped to your ideal length for natural-feeling strength and effortless, long-lasting wear.',
  },
  {
    q: 'Is the studio hygienic and safe?',
    a: 'Absolutely. Tools are sterilised between every guest and single-use items are used where it matters most. Your safety and comfort are never an afterthought.',
  },
  {
    q: 'Can I come in for lashes, brows or skin care too?',
    a: 'Of course — we’re a full beauty bar. Book lashes, brow shaping and lamination, permanent makeup, waxing or a tailored facial, on their own or alongside your nails.',
  },
]

export const values = [
  {
    title: 'Russian Precision',
    body: 'A dry-technique specialty that means cleaner lines, healthier cuticles and manicures that last up to three weeks.',
  },
  {
    title: 'Hospital-Grade Hygiene',
    body: 'Tools are sterilised and single-use where it matters. Your safety is never an afterthought.',
  },
  {
    title: 'Quietly Luxurious',
    body: 'A calm, boutique space designed for you to exhale — no rush, no crowds, just your appointment.',
  },
]

export const testimonials = [
  {
    quote:
      'The best Russian manicure I have found in the Lower Mainland. My nails have never grown out this cleanly.',
    author: 'Priya K.',
    detail: 'Russian Manicure',
  },
  {
    quote:
      'Immaculate space, warm team, and my Gel-X extensions lasted a full month with zero lifting. Obsessed.',
    author: 'Danielle R.',
    detail: 'Nail Enhancement',
  },
  {
    quote:
      'My brows finally look like *my* brows, just better. The attention to detail here is unmatched.',
    author: 'Sofia M.',
    detail: 'Permanent Makeup',
  },
]

import gallery1_400 from '../assets/gallery/gallery-1-400.webp'
import gallery1_800 from '../assets/gallery/gallery-1-800.webp'
import gallery2_400 from '../assets/gallery/gallery-2-400.webp'
import gallery2_800 from '../assets/gallery/gallery-2-800.webp'
import gallery3_400 from '../assets/gallery/gallery-3-400.webp'
import gallery3_800 from '../assets/gallery/gallery-3-800.webp'
import gallery4_400 from '../assets/gallery/gallery-4-400.webp'
import gallery4_800 from '../assets/gallery/gallery-4-800.webp'
import gallery5_400 from '../assets/gallery/gallery-5-400.webp'
import gallery5_800 from '../assets/gallery/gallery-5-800.webp'
import gallery6_400 from '../assets/gallery/gallery-6-400.webp'
import gallery6_800 from '../assets/gallery/gallery-6-800.webp'

// Self-hosted (rather than hotlinked to Unsplash) so the gallery doesn't
// depend on a third-party origin.
export const gallery = [
  { src: gallery1_800, src400: gallery1_400, alt: 'Glossy neutral manicure' },
  { src: gallery2_800, src400: gallery2_400, alt: 'Nail art detail' },
  { src: gallery3_800, src400: gallery3_400, alt: 'Soft glam lashes' },
  { src: gallery4_800, src400: gallery4_400, alt: 'Calm salon interior' },
  { src: gallery5_800, src400: gallery5_400, alt: 'French tip nails' },
  { src: gallery6_800, src400: gallery6_400, alt: 'Elegant nail set' },
]
