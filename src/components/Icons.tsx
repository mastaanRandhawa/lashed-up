type IconProps = { className?: string }

export function Instagram({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Facebook({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M14 8.5V7c0-1 .5-1.5 1.5-1.5H17V2.5h-2.5C12 2.5 10.5 4 10.5 6.7V8.5H8V12h2.5v9.5H14V12h2.3l.5-3.5H14Z" strokeLinejoin="round" />
    </svg>
  )
}

export function Google({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M21 12.2c0-.7-.06-1.2-.2-1.8H12v3.4h5.1c-.1.9-.66 2.2-1.9 3.1l-.02.1 2.8 2.1.2.02C19.9 17.5 21 15.1 21 12.2Z" />
      <path d="M12 21c2.5 0 4.6-.8 6.1-2.2l-2.9-2.2c-.8.5-1.8.9-3.2.9-2.5 0-4.5-1.6-5.3-3.9l-.1.01-3 2.3-.04.1C5.1 18.9 8.3 21 12 21Z" />
      <path d="M6.7 13.6c-.2-.6-.32-1.2-.32-1.9 0-.66.12-1.3.3-1.9v-.1l-3-2.35-.1.05C2.9 8.7 2.5 10.3 2.5 12s.4 3.3 1.1 4.6l3.1-2.4Z" />
      <path d="M12 5.9c1.8 0 3 .77 3.7 1.4l2.7-2.6C16.6 3.1 14.5 2.2 12 2.2 8.3 2.2 5.1 4.3 3.6 7.4l3.1 2.4C7.5 7.5 9.5 5.9 12 5.9Z" />
    </svg>
  )
}

export function Calendar({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" strokeLinecap="round" />
    </svg>
  )
}

const map = {
  instagram: Instagram,
  facebook: Facebook,
  google: Google,
  calendar: Calendar,
  mail: Mail,
}

export function SocialIcon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name as keyof typeof map] ?? Instagram
  return <Cmp className={className} />
}

export function MapPin({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function Phone({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 5c0-.6.4-1 1-1h2.6c.5 0 .9.3 1 .8l.8 3c.1.4 0 .8-.3 1L7.6 10.6a12 12 0 0 0 5.8 5.8l1.8-1.5c.3-.2.7-.3 1-.2l3 .8c.5.1.8.5.8 1V19c0 .6-.4 1-1 1A15 15 0 0 1 4 5Z" strokeLinejoin="round" />
    </svg>
  )
}

export function Mail({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 5 8-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Clock({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Arrow({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowUpRight({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowLeft({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Plus({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  )
}

export function Minus({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M5 12h14" strokeLinecap="round" />
    </svg>
  )
}

export function Menu({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 8h16M4 16h16" strokeLinecap="round" />
    </svg>
  )
}

export function Sparkle({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2c.4 3.9 2.1 5.6 6 6-3.9.4-5.6 2.1-6 6-.4-3.9-2.1-5.6-6-6 3.9-.4 5.6-2.1 6-6Z" />
    </svg>
  )
}
