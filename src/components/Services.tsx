import { useState } from 'react'
import { services, products, site } from '../data/site'
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

const featured = services.filter((s) => s.featured)
const images = [
  { img500: service1_500, img900: service1_900 },
  { img500: service2_500, img900: service2_900 },
  { img500: service3_500, img900: service3_900 },
  { img500: service4_500, img900: service4_900 },
]

export function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="bg-shell/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="editorial-label">Services — Signature Lash Sets</Reveal>

        <Reveal className="mt-6 max-w-2xl font-serif text-4xl leading-tight text-plum sm:text-5xl">
          Four ways to wear
          <span className="italic text-mauve"> extensions.</span>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Numbered serif list */}
          <div className="flex flex-col justify-center">
            {featured.map((m, i) => (
              <Reveal key={m.title} delay={i * 70}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-baseline gap-4 border-b border-mauve/15 py-3 text-left"
                  aria-label={m.title}
                >
                  <span
                    className={`font-serif text-3xl transition-colors duration-300 sm:text-4xl ${
                      active === i ? 'text-plum' : 'text-plum/45 group-hover:text-plum/80'
                    }`}
                  >
                    {m.title}
                  </span>
                  <span className="ml-auto font-sans text-xs tracking-[0.2em] text-mauve">
                    {m.price}
                  </span>
                </button>
              </Reveal>
            ))}

            <Reveal className="mt-8 max-w-md text-sm font-light leading-relaxed text-plum/65">
              {featured[active].blurb}
            </Reveal>
            <Reveal delay={80}>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex w-fit items-center gap-2 rounded-full bg-plum px-6 py-3 text-xs uppercase tracking-[0.16em] text-cream transition-all hover:bg-espresso"
              >
                Book {featured[active].title}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>

          {/* Reactive feature image */}
          <Reveal className="relative min-h-[26rem] overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
            {images.map((m, i) => (
              <img
                key={i}
                src={m.img900}
                srcSet={`${m.img500} 500w, ${m.img900} 900w`}
                sizes="(min-width: 1024px) 45vw, 100vw"
                alt={featured[i].title}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  active === i ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/80 to-transparent p-6">
              <span className="font-serif text-2xl italic text-cream">
                {featured[active].title}
              </span>
            </div>
          </Reveal>
        </div>

        {/* Full menu with prices */}
        <div className="mt-20">
          <Reveal className="flex items-end justify-between">
            <h3 className="font-serif text-3xl text-plum sm:text-4xl">
              Full menu &amp; pricing
            </h3>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 text-xs uppercase tracking-[0.16em] text-mauve transition-colors hover:text-plum sm:flex"
            >
              Open booking
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          <div className="mt-8 grid gap-x-12 gap-y-1 sm:grid-cols-2">
            {services.map((m, i) => (
              <Reveal
                key={m.title}
                delay={(i % 2) * 60}
                className="flex flex-col gap-2 border-b border-mauve/15 py-5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-serif text-xl text-plum">{m.title}</span>
                  <span className="font-sans text-sm tracking-[0.08em] text-mauve">
                    {m.price}
                  </span>
                </div>
                <p className="text-sm font-light leading-relaxed text-plum/60">{m.blurb}</p>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-mauve/25 px-2.5 py-0.5 text-[0.62rem] uppercase tracking-[0.12em] text-mauve"
                    >
                      {t}
                    </span>
                  ))}
                  <a
                    href={
                      m.price === 'By DM' ? site.instagram : site.bookingUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs uppercase tracking-[0.14em] text-plum underline-offset-4 transition-colors hover:text-rose hover:underline"
                  >
                    {m.price === 'By DM' ? 'Message' : 'Book'}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 text-xs font-light leading-relaxed text-plum/55">
            {site.deposit} Fills are booked every 2–3 weeks and need at least 40% of
            extensions still on.
          </p>
        </div>

        {/* Take-home */}
        <div className="mt-20">
          <Reveal className="font-serif text-3xl text-plum sm:text-4xl">Take home</Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {products.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 100}
                className="flex flex-col gap-2 rounded-3xl border border-mauve/20 bg-cream p-8 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-serif text-2xl text-plum">{p.name}</h4>
                  <span className="font-sans text-sm text-mauve">{p.price}</span>
                </div>
                <p className="text-sm font-light leading-relaxed text-plum/65">{p.note}</p>
                <a
                  href={site.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.16em] text-plum transition-colors hover:text-rose"
                >
                  Shop
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
