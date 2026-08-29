import { site } from '../data/site'
import { SocialIcon } from './Icons'
import { Wordmark } from './Wordmark'

const nav = [
  ['Home', '#top'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['About', '#about'],
  ['The Experience', '#experience'],
  ['FAQ', '#faq'],
  ['Contact', '#visit'],
]

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex justify-center pt-14">
          <Wordmark tone="light" className="text-xl text-cream sm:text-2xl" />
        </div>

        <div className="grid gap-10 pb-16 pt-14 md:grid-cols-3">
          <div>
            <p className="editorial-label text-gold-soft">Studio</p>
            <p className="mt-4 text-sm font-light text-cream/70">
              {site.location.label}
              <br />
              {site.location.detail}
            </p>
            <div className="mt-4 space-y-1 text-sm font-light text-cream/70">
              <a href={site.emailHref} className="block break-all hover:text-rose">
                {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-rose"
              >
                {site.instagramHandle}
              </a>
            </div>
          </div>

          <div>
            <p className="editorial-label text-gold-soft">Menu</p>
            <ul className="mt-4 space-y-2 text-sm font-light text-cream/70">
              {nav.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-rose">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="editorial-label text-gold-soft">Book</p>
            <ul className="mt-4 space-y-2 text-sm font-light text-cream/70">
              <li>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-rose"
                >
                  Online booking
                </a>
              </li>
              <li>
                <a
                  href={site.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-rose"
                >
                  Shop &amp; aftercare
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-all hover:border-rose hover:text-rose"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant wordmark — SVG scales to fit width, never overflows */}
        <a
          href="#top"
          className="block border-t border-cream/10 pt-10"
          aria-label="Lashed Up"
        >
          <svg
            viewBox="0 0 1000 190"
            className="block w-full text-cream/95"
            role="img"
            aria-label="Lashed Up"
          >
            <text
              x="0"
              y="150"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
              fill="currentColor"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 600 }}
              fontSize="180"
            >
              LASHED
              <tspan fill="#b58be4"> UP</tspan>
            </text>
          </svg>
        </a>

        <div className="flex flex-col items-center justify-between gap-3 py-8 text-xs text-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Lashed Up</p>
          <p>Surrey, British Columbia · By appointment</p>
        </div>
      </div>
    </footer>
  )
}
