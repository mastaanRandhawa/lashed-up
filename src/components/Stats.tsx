import { values } from '../data/site'
import { Reveal } from './Reveal'

export function Stats() {
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="editorial-label">Why Lashed Up</Reveal>
        <div className="mt-8 grid grid-cols-1 divide-y divide-mauve/15 border-y border-mauve/15 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 80}
              className="flex flex-col gap-2 px-4 py-8 sm:py-10"
            >
              <span className="font-sans text-xs tracking-[0.2em] text-mauve">
                0{i + 1}
              </span>
              <div className="font-serif text-2xl text-plum">{v.title}</div>
              <p className="text-sm font-light leading-relaxed text-plum/60">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
