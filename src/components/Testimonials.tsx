import { site } from '../data/site'
import { Reveal } from './Reveal'
import { LazyImage } from './LazyImage'
import { ArrowUpRight } from './Icons'
import experience1 from '../assets/services/testimonial-1-600.webp'
import experience2 from '../assets/services/testimonial-2-600.webp'

const steps = [
  {
    title: 'Style consult',
    body: 'We look at your natural lashes and eye shape and pick a set, curl and shape that suits them — cat or doll, soft or dramatic.',
  },
  {
    title: 'Lash & relax',
    body: 'You lie back with your eyes closed while each extension is placed by hand. A full set takes around two hours, a fill about one.',
  },
  {
    title: 'Aftercare',
    body: 'You leave with a mirror check and simple aftercare: cleanse daily, brush them through, book your fill in 2–3 weeks.',
  },
]

export function Testimonials() {
  return (
    <section id="experience" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex gap-4">
            <div className="mt-10 flex-1 overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <LazyImage
                src={experience1}
                alt="Finished lash set, close up"
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <LazyImage
                src={experience2}
                alt="Client after a lash appointment at Lashed Up"
                className="h-80 w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="flex flex-col justify-center">
            <span className="editorial-label">The Experience</span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-plum sm:text-5xl">
              What an appointment
              <span className="block italic text-mauve">actually looks like</span>
            </h2>

            <div className="mt-10 space-y-6">
              {steps.map((s, i) => (
                <div key={s.title} className="flex gap-5 border-b border-mauve/15 pb-6">
                  <span className="font-serif text-2xl text-mauve">0{i + 1}</span>
                  <div>
                    <div className="font-serif text-xl text-plum">{s.title}</div>
                    <p className="mt-1 max-w-md text-sm font-light leading-relaxed text-plum/65">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex w-fit items-center gap-2 rounded-full bg-plum px-6 py-3 text-xs uppercase tracking-[0.16em] text-cream transition-all hover:bg-espresso"
            >
              Book Your Set
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
