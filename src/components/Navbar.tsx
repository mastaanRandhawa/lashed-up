import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { ArrowUpRight, Instagram, Menu } from './Icons'
import { Wordmark } from './Wordmark'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#visit' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Light text while over the dark hero (top, not yet scrolled) or while the
  // dark overlay menu is open; dark text once the cream bar appears on scroll.
  const light = open || !scrolled

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !open
            ? 'bg-cream/85 py-2 shadow-[0_10px_30px_-26px_rgba(27,19,48,0.7)] backdrop-blur-md'
            : 'bg-transparent py-4'
        }`}
      >
        <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-10">
          {/* Left — wordmark */}
          <a
            href="#top"
            className="justify-self-start"
            onClick={() => setOpen(false)}
            aria-label="Lashed Up — home"
          >
            <Wordmark
              tone={light ? 'light' : 'dark'}
              className={`text-sm tracking-[0.24em] sm:text-xl sm:tracking-[0.34em] ${
                light ? 'text-cream' : 'text-plum'
              }`}
            />
          </a>

          {/* Center — desktop links */}
          <div className="hidden items-center gap-7 justify-self-center lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-xs uppercase tracking-[0.18em] transition-colors ${
                  light ? 'text-cream/80 hover:text-cream' : 'text-plum/70 hover:text-plum'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right — book + menu */}
          <div className="flex items-center gap-2 justify-self-end sm:gap-3">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-4 py-2 text-[0.65rem] uppercase tracking-[0.16em] transition-colors sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.18em] ${
                light
                  ? 'bg-cream text-plum hover:bg-gold-soft'
                  : 'bg-plum text-cream hover:bg-espresso'
              }`}
            >
              Book<span className="hidden sm:inline"> Now</span>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`flex items-center gap-2 rounded-full border px-3 py-2 text-[0.65rem] uppercase tracking-[0.16em] transition-colors sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.18em] ${
                light
                  ? 'border-cream/40 text-cream hover:bg-cream hover:text-plum'
                  : 'border-plum/25 text-plum hover:bg-plum hover:text-cream'
              }`}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <Menu className="h-4 w-4" />
              <span className="hidden sm:inline">{open ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay menu */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-espresso text-cream transition-opacity duration-500 ${
          open
            ? 'visible pointer-events-auto opacity-100'
            : 'invisible pointer-events-none opacity-0'
        }`}
      >
        <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-rose/20 blur-[40px] sm:blur-[120px]" />
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <p className="editorial-label mb-6 text-gold-soft">Navigate</p>
          <ul className="space-y-0.5">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-5 border-b border-cream/10 py-3 font-serif text-3xl transition-colors hover:text-rose sm:text-5xl"
                >
                  <span className="text-sm text-gold-soft">0{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-rose"
            >
              <Instagram className="h-4 w-4" />
              {site.instagramHandle}
            </a>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-2 rounded-full bg-rose px-8 py-4 text-sm uppercase tracking-[0.16em] text-cream transition-all hover:bg-cream hover:text-plum"
            >
              Book an Appointment
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
