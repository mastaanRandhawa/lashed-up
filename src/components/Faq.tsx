import { useState } from 'react'
import { faqs } from '../data/site'
import { Reveal } from './Reveal'
import { Minus, Plus } from './Icons'

export function Faq() {
  const [open, setOpen] = useState(1)

  return (
    <section id="faq" className="bg-shell/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="editorial-label">FAQ — Before You Book</Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="font-serif text-4xl leading-tight text-plum sm:text-5xl">
              Good to
              <span className="block italic text-mauve">know</span>
            </h2>
          </Reveal>

          <div>
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <Reveal key={f.q} delay={i * 50}>
                  <div className="border-b border-mauve/20">
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-serif text-xl transition-colors sm:text-2xl ${
                          isOpen ? 'text-plum' : 'text-plum/70'
                        }`}
                      >
                        {f.q}
                      </span>
                      <span className="shrink-0 text-mauve">
                        {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-xl text-sm font-light leading-relaxed text-plum/65">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
