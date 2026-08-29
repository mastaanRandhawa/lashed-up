import { site } from '../data/site'
import { Reveal } from './Reveal'
import { Arrow, Calendar, Instagram, Mail, MapPin } from './Icons'

export function Visit() {
  return (
    <section id="visit" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-luxe text-mauve">Contact</span>
          <h2 className="mt-4 font-serif text-4xl text-plum sm:text-5xl">
            Booking &amp; where to find us
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={<MapPin />} label="Location">
                {site.location.label}
                <span className="mt-1 block text-sm text-mauve">
                  {site.location.detail}
                </span>
              </InfoCard>

              <InfoCard icon={<Calendar />} label="Booking">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-rose"
                >
                  Online, by appointment
                </a>
                <span className="mt-1 block text-sm text-mauve">
                  Fills every 2–3 weeks
                </span>
              </InfoCard>

              <InfoCard icon={<Instagram />} label="Instagram">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-rose"
                >
                  {site.instagramHandle}
                </a>
                <span className="mt-1 block text-sm text-mauve">
                  Lifts, tints &amp; after-hours by DM
                </span>
              </InfoCard>

              <InfoCard icon={<Mail />} label="Email">
                <a
                  href={site.emailHref}
                  className="break-all transition-colors hover:text-rose"
                >
                  {site.email}
                </a>
                <span className="mt-1 block text-sm text-mauve">Deposit &amp; enquiries</span>
              </InfoCard>
            </div>

            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-1 flex items-center justify-between rounded-3xl bg-plum px-8 py-6 text-cream transition-all hover:bg-espresso"
            >
              <div>
                <div className="font-serif text-2xl">Book an appointment</div>
                <div className="text-sm text-cream/70">Real-time availability online</div>
              </div>
              <Arrow className="h-6 w-6 transition-transform group-hover:translate-x-1.5" />
            </a>
          </Reveal>

          <Reveal className="relative overflow-hidden rounded-3xl border border-mauve/15 bg-espresso p-8 text-cream shadow-[var(--shadow-card)] sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-rose/25 blur-[80px]" />
            <span className="editorial-label text-gold-soft">Deposit</span>
            <p className="mt-5 font-serif text-2xl leading-snug text-cream sm:text-3xl">
              {site.deposit}
            </p>
            <p className="mt-4 text-sm font-light leading-relaxed text-cream/70">
              The deposit comes off your service total on the day. Please come with clean
              lashes and no eye makeup, and message ahead if you need to reschedule.
            </p>
            <a
              href={site.depositEmailHref}
              className="group mt-8 flex w-fit items-center gap-2 rounded-full bg-rose px-6 py-3 text-xs uppercase tracking-[0.16em] text-cream transition-all hover:bg-cream hover:text-plum"
            >
              Send Deposit
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-3xl border border-mauve/15 bg-shell/40 p-6">
      <div className="flex items-center gap-2 text-mauve">
        <span className="text-rose">{icon}</span>
        <span className="text-xs uppercase tracking-[0.16em]">{label}</span>
      </div>
      <div className="mt-3 font-light leading-relaxed text-plum">{children}</div>
    </div>
  )
}
