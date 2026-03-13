import EmailForm from '@/components/ui/EmailForm'

export default function JoinTheTeam() {
  return (
    <section
      id="join"
      className="py-24 px-6 text-center"
      style={{ backgroundColor: '#C41E3A' }}
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
        <span
          className="uppercase tracking-widest"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: '#F8F5EF',
            letterSpacing: '0.25em',
            fontWeight: 600,
            opacity: 0.8,
          }}
        >
          Opening Late March 2026
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            color: '#F8F5EF',
            letterSpacing: '0.02em',
            lineHeight: 1,
          }}
        >
          Join the Team.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: '#F8F5EF',
            opacity: 0.85,
            lineHeight: 1.6,
            maxWidth: '460px',
          }}
        >
          Tallowing&apos;s is launching in Glenview. Be first to know when we open, get
          opening week announcements, and secure your shot at the Hot Honey Biscuit
          Sandwich before it sells out.
        </p>

        <EmailForm variant="section" />

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            color: '#F8F5EF',
            opacity: 0.55,
            letterSpacing: '0.08em',
          }}
        >
          No spam. Just Glenview&apos;s best wings, dropping soon.
        </p>
      </div>
    </section>
  )
}
