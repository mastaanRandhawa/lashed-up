import { useState } from 'react'
import { services, fullMenu, site } from '../data/site'
import { Reveal } from './Reveal'
import { ArrowUpRight } from './Icons'

import service1_500 from '../assets/services/service-1-500.webp'
import service1_900 from '../assets/services/service-1-900.webp'
import service2_500 from '../assets/services/service-2-500.webp'
import service2_900 from '../assets/services/service-2-900.webp'
import service3_500 from '../assets/services/service-3-500.webp'
import service3_900 from '../assets/services/service-3-900.webp'
import service4_500 from '../assets/services/service-4-500.webp'
import service4_900 from '../assets/services/service-4-900.webp'
import service5_500 from '../assets/services/service-5-500.webp'
import service5_900 from '../assets/services/service-5-900.webp'

// Curated headline services for the editorial list. Self-hosted (rather
// than hotlinked to Unsplash) so this section doesn't depend on a
// third-party origin.
const menu = [
  { title: 'Russian Manicure', img500: service1_500, img900: service1_900 },
  { title: 'Gel-X Enhancement', img500: service2_500, img900: service2_900 },
  { title: 'Permanent Makeup', img500: service3_500, img900: service3_900 },
  { title: 'Lashes & Brows', img500: service4_500, img900: service4_900 },
  { title: 'Skin Care & Waxing', img500: service5_500, img900: service5_900 },
]

export function Services() {
  const [active, setActive] = useState(0)
  const blurb = services.find((s) =>
    menu[active].title.toLowerCase().includes(s.title.split(' ')[0].toLowerCase()),
  )?.blurb

  return (
    <section id="services" className="bg-shell/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="editorial-label">
          (B) — Our Services That Celebrate You
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Numbered serif list */}
          <div className="flex flex-col justify-center">
            {menu.map((m, i) => (
              <Reveal key={m.title} delay={i * 70}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-baseline gap-4 border-b border-mauve/15 py-3 text-left"
                >
                  <span
                    className={`ornate-initial font-serif text-3xl transition-colors duration-300 sm:text-5xl ${
                      active === i ? 'text-plum' : 'text-plum/45 group-hover:text-plum/80'
                    }`}
                  >
                    {m.title}
                  </span>
                  <span className="ml-auto font-sans text-xs tracking-[0.2em] text-mauve">
                    0{i + 1}
                  </span>
                </button>
              </Reveal>
            ))}

            <Reveal className="mt-8 max-w-md text-sm font-light leading-relaxed text-plum/65">
              {blurb ??
                'Curate your visit with French tips, chrome, hand-painted art and nourishing extras — tailored to you.'}
            </Reveal>
          </div>

          {/* Reactive feature image */}
          <Reveal className="relative min-h-[26rem] overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
            {menu.map((m, i) => (
              <img
                key={m.title}
                src={m.img900}
                srcSet={`${m.img500} 500w, ${m.img900} 900w`}
                sizes="(min-width: 1024px) 45vw, 100vw"
                alt={m.title}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  active === i ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/70 to-transparent p-6">
              <span className="font-serif text-2xl italic text-cream">
                {menu[active].title}
              </span>
            </div>
          </Reveal>
        </div>

        {/* Full treatment menu */}
        <div className="mt-20">
          <Reveal className="flex items-end justify-between">
            <h3 className="font-serif text-3xl text-plum sm:text-4xl">The Full Menu</h3>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 text-xs uppercase tracking-[0.16em] text-mauve transition-colors hover:text-plum sm:flex"
            >
              Book any service
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          <div className="mt-8 grid gap-x-12 gap-y-1 sm:grid-cols-2">
            {fullMenu.map((m, i) => (
              <Reveal
                key={m.name}
                delay={(i % 2) * 60}
                className="flex items-baseline gap-4 border-b border-mauve/15 py-4"
              >
                <span className="font-sans text-xs tracking-[0.16em] text-mauve">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="font-serif text-xl text-plum">{m.name}</div>
                  <p className="mt-0.5 text-sm font-light text-plum/60">{m.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
