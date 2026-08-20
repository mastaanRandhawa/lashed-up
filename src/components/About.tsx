import { site } from '../data/site'
import { Reveal } from './Reveal'
import { LazyImage } from './LazyImage'
import { ArrowUpRight } from './Icons'
import about1_600 from '../assets/gallery/about-1-600.webp'
import about1_1000 from '../assets/gallery/about-1-1000.webp'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="editorial-label">
          (A) — Little Wonders Behind the Beauty Bar
        </Reveal>

        <div className="relative mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* Big statement */}
          <Reveal className="relative">
            <h2 className="font-serif text-4xl leading-[1.12] text-plum sm:text-5xl lg:text-[3.4rem]">
              Our journey began with a vision — to create a sanctuary where hands are
              cared for and confidence is
              <span className="italic text-mauve"> rediscovered.</span> We help every
              guest embrace beauty, calm and a little everyday luxury.
            </h2>
          </Reveal>

          {/* Left image + body + arrow */}
          <Reveal className="flex flex-col gap-6" delay={120}>
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <LazyImage
                src={about1_600}
                srcSet={`${about1_600} 600w, ${about1_1000} 1000w`}
                sizes="(min-width: 1024px) 40vw, 90vw"
                alt="Elegant French manicure"
                className="h-56 w-full object-cover"
              />
            </div>
            <p className="text-sm font-light leading-relaxed text-plum/65">
              We take pride in offering a professional, friendly atmosphere where you can
              indulge in the best beauty treatments available — specialising in Russian
              manicures and Gel-X extensions, and a full menu of lash, brow and skin care.
            </p>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-16 w-16 items-center justify-center rounded-full border border-mauve/40 text-plum transition-all hover:bg-plum hover:text-cream"
              aria-label="Book an appointment"
            >
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
