import { useState } from 'react'
import { testimonials } from '../data/site'
import { Reveal } from './Reveal'
import { LazyImage } from './LazyImage'
import { ArrowLeft, Arrow } from './Icons'
import testimonial1 from '../assets/services/testimonial-1-600.webp'
import testimonial2 from '../assets/services/testimonial-2-600.webp'

const photos = [testimonial1, testimonial2]

export function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const go = (dir: number) =>
    setI((v) => (v + dir + testimonials.length) % testimonials.length)

  return (
    <section id="reviews" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Images */}
          <Reveal className="flex gap-4">
            <div className="mt-10 flex-1 overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <LazyImage src={photos[0]} alt="Guest in the studio" className="h-72 w-full object-cover" />
            </div>
            <div className="flex-1 overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <LazyImage src={photos[1]} alt="Finished nail set" className="h-80 w-full object-cover" />
            </div>
          </Reveal>

          {/* Quote */}
          <Reveal className="flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <span className="font-serif text-3xl text-plum">4.9/5</span>
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
                  </svg>
                ))}
              </div>
              <span className="editorial-label ml-auto hidden sm:block">
                (D) — Hear From Real Guests
              </span>
            </div>

            <blockquote className="mt-8 font-serif text-3xl leading-[1.28] text-plum sm:text-4xl">
              <span className="text-mauve">—</span> {t.quote}
            </blockquote>

            <div className="mt-10 flex items-center justify-between">
              <div>
                <div className="font-serif text-3xl italic text-mauve">{t.author}</div>
                <div className="editorial-label mt-1">{t.detail}</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm tracking-[0.2em] text-plum/50">
                  0{i + 1}/0{testimonials.length}
                </span>
                <button
                  onClick={() => go(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-mauve/30 text-plum transition-colors hover:bg-plum hover:text-cream"
                  aria-label="Previous review"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-mauve/30 text-plum transition-colors hover:bg-plum hover:text-cream"
                  aria-label="Next review"
                >
                  <Arrow className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
