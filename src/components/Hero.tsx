import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { ArrowUpRight } from './Icons'

import hero1_700 from '../assets/hero/hero-1-700.webp'
import hero1_1400 from '../assets/hero/hero-1-1400.webp'
import hero2_700 from '../assets/hero/hero-2-700.webp'
import hero2_1400 from '../assets/hero/hero-2-1400.webp'
import hero3_700 from '../assets/hero/hero-3-700.webp'
import hero3_1400 from '../assets/hero/hero-3-1400.webp'
import hero4_700 from '../assets/hero/hero-4-700.webp'
import hero4_1400 from '../assets/hero/hero-4-1400.webp'

// Soft, dreamy salon imagery that auto cross-fades behind the hero.
// Self-hosted (rather than hotlinked) so the LCP image doesn't wait on a
// third-party origin's DNS/TLS handshake.
const slides = [
  { src700: hero1_700, src1400: hero1_1400 },
  { src700: hero2_700, src1400: hero2_1400 },
  { src700: hero3_700, src1400: hero3_1400 },
  { src700: hero4_700, src1400: hero4_1400 },
]

export function Hero() {
  const [active, setActive] = useState(0)
  // Load the first slide immediately; stream the rest in once the page is
  // interactive so the initial mobile load stays light.
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
    <section id="top" className="relative min-h-screen overflow-hidden bg-cream">
      {/* Auto-fading salon carousel */}
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
              className={`animate-kenburns absolute inset-0 h-full w-full object-cover blur-[4px] transition-opacity duration-[2200ms] ease-in-out ${
                i === active ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )
        })}
      </div>

      {/* Dreamy pink mist — heavier veil so the salon fades softly behind the text */}
      <div className="absolute inset-0 bg-blush/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-rose/25 to-cream/90" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-rose/35 blur-[130px]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-blush/70 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-mauve/25 blur-[120px]" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 pb-10 pt-28 lg:px-10">
        {/* Center cluster */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.22em] text-plum/70 drop-shadow-[0_1px_14px_rgba(250,243,239,0.95)]">
            Russian Manicure &amp; Beauty Bar — Surrey, BC
          </p>

          <h1 className="font-serif text-6xl leading-[0.9] text-plum drop-shadow-[0_1px_26px_rgba(250,243,239,0.95)] sm:text-8xl lg:text-[8.5rem]">
            Rejoice,
            <span className="mt-1 block italic text-[#bf6076]">Always</span>
          </h1>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-plum px-8 py-4 text-sm uppercase tracking-[0.16em] text-cream transition-all duration-300 hover:bg-espresso hover:shadow-[0_20px_40px_-16px_rgba(59,45,48,0.6)]"
            >
              Book an Appointment
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#services"
              className="rounded-full border border-plum/40 bg-cream/40 px-8 py-4 text-sm uppercase tracking-[0.16em] text-plum backdrop-blur-sm transition-colors duration-300 hover:border-plum hover:bg-cream/70"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-6 border-t border-mauve/25 pt-6 text-plum/70 md:flex-row md:items-end md:justify-between">
          <div className="hidden text-lg tracking-[0.35em] text-rose/60 md:block">
            &#10022; &#10022; &#10022;
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="editorial-label">Scroll Down</span>
            <span className="h-8 w-px animate-pulse bg-mauve/50" />
          </div>
          <p className="max-w-xs text-center text-sm font-light leading-relaxed text-plum/70 md:text-right">
            Your beauty deserves the same care as your spirit. Let&apos;s create
            something lovely — one detail at a time.
          </p>
        </div>
      </div>
    </section>
  )
}
