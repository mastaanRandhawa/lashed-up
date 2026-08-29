import { gallery, site } from '../data/site'
import { Reveal } from './Reveal'
import { LazyImage } from './LazyImage'
import { ArrowUpRight, Instagram } from './Icons'

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="editorial-label">Gallery — Our Work</Reveal>

        <Reveal className="mt-6 flex flex-col items-end justify-between gap-6 sm:flex-row">
          <h2 className="font-serif text-4xl text-plum sm:text-5xl">
            Sets from
            <span className="block italic text-mauve">the studio</span>
          </h2>
          <p className="max-w-sm text-sm font-light text-plum/60">
            Hybrids, wet sets, volumes and lifts — straight from the Lashed Up feed.
            Follow along for the latest work and openings.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[13rem] grid-cols-2 gap-4 sm:auto-rows-[15rem] lg:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal
              key={g.src}
              delay={(i % 4) * 70}
              className={`group overflow-hidden rounded-3xl ${
                i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              } ${i === 3 ? 'row-span-2' : ''}`}
            >
              <LazyImage
                src={g.src}
                srcSet={`${g.src400} 400w, ${g.src} 800w`}
                sizes="(min-width: 1024px) 25vw, 50vw"
                alt={g.alt}
                className="h-full w-full object-cover ease-out group-hover:scale-105"
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full border border-mauve/30 px-7 py-3.5 text-sm uppercase tracking-[0.16em] text-plum transition-colors hover:border-plum hover:bg-plum hover:text-cream"
          >
            <Instagram className="h-4 w-4" />
            Follow {site.instagramHandle}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
