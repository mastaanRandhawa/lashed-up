import { site } from '../data/site'
import { Reveal } from './Reveal'
import { ArrowUpRight, Instagram } from './Icons'

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-espresso py-20 text-cream">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-rose/25 blur-[36px] sm:blur-[110px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-mauve/20 blur-[110px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal className="editorial-label text-gold-soft">Ready for your next set?</Reveal>
        <Reveal className="mt-5 font-serif text-4xl uppercase tracking-[0.06em] text-cream sm:text-6xl">
          Get Lashed Up
        </Reveal>
        <Reveal className="mx-auto mt-4 max-w-lg text-sm font-light leading-relaxed text-cream/70">
          Pick your set, choose a time and secure it with a $25 deposit. Lifts, tints and
          after-hours by DM.
        </Reveal>
        <Reveal className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-rose px-8 py-4 text-sm uppercase tracking-[0.16em] text-cream transition-all hover:bg-cream hover:text-plum"
          >
            Book Your Appointment
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-cream/30 px-8 py-4 text-sm uppercase tracking-[0.16em] text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            <Instagram className="h-4 w-4" />
            {site.instagramHandle}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
