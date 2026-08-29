import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { ArrowUpRight, Instagram } from './Icons'

import hero1_700 from '../assets/hero/hero-1-700.webp'
import hero1_1400 from '../assets/hero/hero-1-1400.webp'
import hero2_700 from '../assets/hero/hero-2-700.webp'
import hero2_1400 from '../assets/hero/hero-2-1400.webp'
import hero3_700 from '../assets/hero/hero-3-700.webp'
import hero3_1400 from '../assets/hero/hero-3-1400.webp'
import hero4_700 from '../assets/hero/hero-4-700.webp'
import hero4_1400 from '../assets/hero/hero-4-1400.webp'

// Real lash work from the studio, auto cross-fading behind the hero.
// Self-hosted so the LCP image doesn't wait on a third-party origin.
const slides = [
  { src700: hero1_700, src1400: hero1_1400 },
  { src700: hero2_700, src1400: hero2_1400 },
  { src700: hero3_700, src1400: hero3_1400 },
  { src700: hero4_700, src1400: hero4_1400 },
]

export function Hero() {
  const [active, setActive] = useState(0)
  const [loadRest, setLoadRest] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setLoadRest(true), 1200)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % slides.length),
      5000,
    )
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-espresso">
      {/* Auto-fading lash carousel */}
      <div className="absolute inset-0">
        {slides.map((s, i) => {
          const show = i === 0 || loadRest
          return (
            <img
              key={s.src1400}
              src={show ? s.src1400 : undefined}
              srcSet={show ? `${s.src700} 700w, ${s.src1400} 1400w` : undefined}
              sizes="100vw"
              alt=""
              aria-hidden="true"
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'low'}
              decoding="async"
              className={`animate-kenburns absolute inset-0 h-full w-full object-cover transition-opacity duration-[2200ms] ease-in-out ${
                i === active ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )
        })}
      </div>

      {/* Violet veil so the wordmark and copy sit cleanly over the imagery */}
      <div className="absolute inset-0 bg-espresso/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/45 to-espresso/95" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-rose/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-mauve/20 blur-[120px]" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 pb-10 pt-28 lg:px-10">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.24em] text-cream/70">
            Lash Extensions &amp; Lifts — Surrey, BC
          </p>

          <h1 className="font-serif text-5xl uppercase leading-[0.95] tracking-[0.06em] text-cream drop-shadow-[0_2px_30px_rgba(19,12,34,0.6)] sm:text-7xl lg:text-8xl">
            Lashed
            <span className="mt-1 block italic lowercase tracking-normal text-gold-soft">
              up
            </span>
          </h1>

          <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-cream/75">
            Hybrid, volume, mega volume and wet sets — mapped to your eye and
            applied by a certified lash tech in a private Surrey studio.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-rose px-8 py-4 text-sm uppercase tracking-[0.16em] text-cream transition-all duration-300 hover:bg-cream hover:text-plum hover:shadow-[0_20px_40px_-16px_rgba(19,12,34,0.7)]"
            >
              Book Now
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#services"
              className="rounded-full border border-cream/40 px-8 py-4 text-sm uppercase tracking-[0.16em] text-cream backdrop-blur-sm transition-colors duration-300 hover:border-cream hover:bg-cream/10"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 border-t border-cream/15 pt-6 text-cream/70 md:flex-row md:items-end md:justify-between">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 text-sm tracking-[0.14em] transition-colors hover:text-rose md:flex"
          >
            <Instagram className="h-4 w-4" />
            {site.instagramHandle}
          </a>
          <div className="flex flex-col items-center gap-1">
            <span className="editorial-label text-gold-soft">Scroll</span>
            <span className="h-8 w-px animate-pulse bg-cream/40" />
          </div>
          <p className="max-w-xs text-center text-sm font-light leading-relaxed text-cream/70 md:text-right">
            Fills every 2–3 weeks. Lifts, tints &amp; after-hours slots by DM.
          </p>
        </div>
      </div>
    </section>
  )
}
