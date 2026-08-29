import { offers } from '../data/site'
import { Reveal } from './Reveal'
import { ArrowUpRight, Sparkle } from './Icons'

export function Offers() {
  return (
    <section id="offers" className="bg-shell/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="editorial-label">Booking — How It Works</Reveal>

        <Reveal className="mt-6 max-w-2xl font-serif text-4xl leading-tight text-plum sm:text-5xl">
          Ready for your
          <span className="italic text-mauve"> next set?</span>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {offers.map((o, i) => (
            <Reveal
              key={o.title}
              delay={i * 120}
              className="group flex flex-col rounded-3xl border border-mauve/20 bg-cream p-9 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1"
            >
              <Sparkle className="h-6 w-6 text-gold" />
              <h3 className="mt-5 font-serif text-3xl text-plum">{o.title}</h3>
              <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-plum/65">
                {o.body}
              </p>
              <a
                href={o.href}
                target={o.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="mt-7 flex w-fit items-center gap-2 text-sm uppercase tracking-[0.16em] text-plum transition-colors group-hover:text-rose"
              >
                {o.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
