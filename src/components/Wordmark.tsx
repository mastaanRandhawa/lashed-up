type Props = { className?: string; tone?: 'dark' | 'light' }

/** Text lockup for LASHED UP — no bitmap logo to keep the mark crisp at any size. */
export function Wordmark({ className = '', tone = 'dark' }: Props) {
  const accent = tone === 'light' ? 'text-gold-soft' : 'text-rose'
  return (
    <span
      className={`font-serif uppercase leading-none tracking-[0.34em] ${className}`}
      aria-label="Lashed Up"
    >
      Lashed<span className={accent}>&nbsp;Up</span>
    </span>
  )
}
