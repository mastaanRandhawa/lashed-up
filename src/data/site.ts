export const site = {
  name: 'Lashed Up',
  fullName: 'LASHED UP',
  tagline: 'Lash Extensions & Lifts — Surrey, BC',
  bookingUrl: 'https://lashedupxx.square.site/s/appointments',
  storeUrl: 'https://lashedupxx.square.site/',
  instagram: 'https://www.instagram.com/_.lashedup._/',
  instagramHandle: '@_.lashedup._',
  email: 'lashedupxx@gmail.com',
  emailHref: 'mailto:lashedupxx@gmail.com',
  depositEmailHref:
    'mailto:lashedupxx@gmail.com?subject=Deposit%20%E2%80%94%20Lashed%20Up%20Booking',
  /** Verified deposit policy, quoted from the booking site. */
  deposit:
    'Your appointment is confirmed once a $25 non-refundable deposit is sent to lashedupxx@gmail.com.',
  location: {
    label: 'Surrey, BC',
    detail: 'Private home-based studio · exact address shared on booking',
  },
  socials: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/_.lashedup._/',
      icon: 'instagram',
    },
    { label: 'Book online', href: 'https://lashedupxx.square.site/', icon: 'calendar' },
    { label: 'Email', href: 'mailto:lashedupxx@gmail.com', icon: 'mail' },
  ],
  info: [
    { label: 'Booking', value: 'By appointment · online' },
    { label: 'Fills', value: 'Every 2–3 weeks' },
    { label: 'After-hours', value: 'Lifts, tints & late slots by DM' },
  ],
} as const

export type Service = {
  title: string
  blurb: string
  price: string
  tags: string[]
  featured?: boolean
}

/** Every extension set and fill, taken directly from the Square booking menu. */
export const services: Service[] = [
  {
    title: 'Hybrid Set',
    blurb:
      'A mix of thin, light fans on single natural lashes — fuller than a soft hybrid, softer than a volume. The in-between look for anyone easing into extensions.',
    price: 'CAD $85',
    tags: ['Full set', 'Texture', 'Everyday'],
    featured: true,
  },
  {
    title: 'Volume Set',
    blurb:
      'Thicker handmade fans on each natural lash for a fuller, more dramatic finish. Choose a lighter or heavier density and a cat or doll shape.',
    price: 'CAD $95',
    tags: ['Full set', 'Fluffy', 'Cat / doll'],
    featured: true,
  },
  {
    title: 'Mega Volume Set',
    blurb:
      'Dense, ultra-fine fans built for maximum fullness — our most dramatic set. Cat or doll styling to suit your eye shape.',
    price: 'CAD $110',
    tags: ['Full set', 'Dramatic', 'Cat / doll'],
    featured: true,
  },
  {
    title: 'Wet Set',
    blurb:
      'A few extensions placed on a single lash for a textured, spiky, wispy effect — more piecey and defined than a hybrid.',
    price: 'CAD $90',
    tags: ['Full set', 'Wispy', 'Spiked'],
    featured: true,
  },
  {
    title: 'Hybrid Fill',
    blurb:
      'Grown-out fans are removed and fresh ones added to rebuild a full hybrid set. Book every 2–3 weeks with at least 40% of lashes remaining.',
    price: 'CAD $70',
    tags: ['Fill', '2–3 weeks'],
  },
  {
    title: 'Volume Fill',
    blurb:
      'Maintains your volume set between appointments — old fans out, new fans in for a just-done look again.',
    price: 'CAD $80',
    tags: ['Fill', '2–3 weeks'],
  },
  {
    title: 'Mega Volume Fill',
    blurb:
      'Keeps mega volume dense and even. Booked every 2–3 weeks with at least 40% of lashes still on.',
    price: 'CAD $90',
    tags: ['Fill', '2–3 weeks'],
  },
  {
    title: 'Wet Set Fill',
    blurb:
      'Refreshes the wispy, textured wet look — grown-out extensions swapped for new ones every 2–3 weeks.',
    price: 'CAD $75',
    tags: ['Fill', '2–3 weeks'],
  },
  {
    title: 'Lash Removal',
    blurb:
      'Gentle, safe removal of a full set of extensions with no damage to your natural lashes.',
    price: 'CAD $25',
    tags: ['Add-on'],
  },
  {
    title: 'Lash Lift & Tint',
    blurb:
      'A boost of curl and colour for your own natural lashes — no extensions. Booked through Instagram DM.',
    price: 'By DM',
    tags: ['Natural lashes', 'By DM'],
  },
]

export type Product = { name: string; price: string; note: string }

export const products: Product[] = [
  {
    name: 'Aftercare Kit',
    price: 'CAD $35',
    note: 'Everything you need to keep a set clean, fluffy and lasting between fills.',
  },
  {
    name: 'Lash Shampoo',
    price: 'CAD $15',
    note: 'Gentle foaming cleanser formulated for lash extensions — use it every day.',
  },
]

export const offers = [
  {
    title: 'Booking & Deposit',
    body: 'Book any set or fill through the online calendar. Your spot is held once a $25 non-refundable deposit reaches lashedupxx@gmail.com — it comes off your service total on the day.',
    cta: 'Book an Appointment',
    href: 'https://lashedupxx.square.site/s/appointments',
  },
  {
    title: 'After-Hours & Lifts',
    body: 'Lash lifts, tints and late-evening appointments aren’t on the calendar — send a DM on Instagram and we’ll find a time that works.',
    cta: 'Message on Instagram',
    href: 'https://www.instagram.com/_.lashedup._/',
  },
]

/** Differentiators — no invented numbers. */
export const values = [
  {
    title: 'Certified Lash Tech',
    body: 'Every set is applied by a certified lash technician who lashes extensions and lifts full-time.',
  },
  {
    title: 'Styled To Your Eye',
    body: 'Cat or doll, light or dramatic — density and shape are mapped to your natural lashes and face.',
  },
  {
    title: 'Private Home Studio',
    body: 'A calm one-on-one space in Surrey. No crowds, no rushing — just your appointment.',
  },
  {
    title: 'Easy Online Booking',
    body: 'Pick your set, see real availability and reserve in a couple of taps. After-hours by DM.',
  },
]

export const faqs = [
  {
    q: 'How long does an appointment take?',
    a: 'A full set generally takes around two hours and a fill about an hour to ninety minutes, depending on the style. Plan to relax with your eyes closed for the whole appointment.',
  },
  {
    q: 'How often do I need a fill?',
    a: 'Fills are booked every 2–3 weeks. You need at least 40% of your extensions still on for it to count as a fill — grown-out fans are removed and new ones added to bring the set back to full.',
  },
  {
    q: 'Which set should I choose?',
    a: 'Hybrid is the softest, most natural extension set. Wet sets add a piecey, spiked texture. Volume and mega volume build progressively fuller, fluffier and more dramatic, with a cat or doll shape.',
  },
  {
    q: 'How do I book and pay the deposit?',
    a: 'Tap any “Book Now” button to open the online calendar and choose your set and time. Your appointment is confirmed once a $25 non-refundable deposit is sent to lashedupxx@gmail.com. The deposit is applied to your service.',
  },
  {
    q: 'How do I prepare for my appointment?',
    a: 'Come with clean lashes and no eye makeup or mascara. Avoid caffeine if it makes it hard to keep still, and remove contact lenses before you arrive.',
  },
  {
    q: 'How do I take care of my lashes?',
    a: 'Cleanse daily with a lash shampoo, brush them through gently, and keep heavy oils and steam away from the lash line. An aftercare kit and lash shampoo are available to take home.',
  },
  {
    q: 'Do you offer lash lifts and after-hours appointments?',
    a: 'Yes. Lash lifts, tints and late-evening slots aren’t on the online calendar — send a DM on Instagram and we’ll arrange a time.',
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

/** Real work from the Lashed Up Instagram feed. */
export const gallery = [
  { src: gallery1_800, src400: gallery1_400, alt: 'Hybrid lash set, natural wispy texture' },
  { src: gallery2_800, src400: gallery2_400, alt: 'Close-up of a finished volume lash set' },
  { src: gallery3_800, src400: gallery3_400, alt: 'Lash lift in progress on natural lashes' },
  { src: gallery4_800, src400: gallery4_400, alt: 'The lash artist behind Lashed Up' },
  { src: gallery5_800, src400: gallery5_400, alt: 'Volume fans framing the eye' },
  { src: gallery6_800, src400: gallery6_400, alt: 'Fluffy volume lashes, cat-eye styling' },
]
