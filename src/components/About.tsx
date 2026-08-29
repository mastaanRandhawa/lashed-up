import { site } from '../data/site'
import { Reveal } from './Reveal'
import { LazyImage } from './LazyImage'
import { ArrowUpRight, Instagram } from './Icons'
import about1_600 from '../assets/gallery/about-1-600.webp'
import about1_1000 from '../assets/gallery/about-1-1000.webp'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="editorial-label">About — The Artist Behind Lashed Up</Reveal>

        <div className="relative mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Reveal className="relative">
            <h2 className="font-serif text-4xl leading-[1.12] text-plum sm:text-5xl lg:text-[3.4rem]">
              Lashed Up is a private, home-based lash studio in Surrey, run by a
              <span className="italic text-mauve"> certified lash technician</span> who
              lashes extensions and lifts full-time.
            </h2>
          </Reveal>

          <Reveal className="flex flex-col gap-6" delay={120}>
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <LazyImage
                src={about1_600}
                srcSet={`${about1_600} 600w, ${about1_1000} 1000w`}
                sizes="(min-width: 1024px) 40vw, 90vw"
                alt="The lash artist behind Lashed Up"
                className="h-72 w-full object-cover"
              />
            </div>
            <p className="text-sm font-light leading-relaxed text-plum/65">
              Every set starts with a look at your natural lashes and eye shape, then a
              style built around them — hybrid, wet, volume or mega volume, cat or doll,
              soft or dramatic. One client at a time, no rushing.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-plum px-6 py-3 text-xs uppercase tracking-[0.16em] text-cream transition-all hover:bg-espresso"
              >
                Book Appointment
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-mauve/40 text-plum transition-all hover:bg-plum hover:text-cream"
                aria-label="Lashed Up on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
