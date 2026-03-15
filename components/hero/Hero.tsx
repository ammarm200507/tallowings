import CountdownTimer from '@/components/ui/CountdownTimer'
import EmailForm from '@/components/ui/EmailForm'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center"
      style={{ backgroundColor: '#111111' }}
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(248,245,239,0.3) 2px, rgba(248,245,239,0.3) 4px)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <span
          className="tracking-widest uppercase"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: '#D4A437',
            letterSpacing: '0.25em',
            fontWeight: 600,
          }}
        >
          Coming to Glenview, IL — Late March 2026
        </span>

        {/* Headline */}
        <h1
          className="leading-none"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            color: '#F8F5EF',
            letterSpacing: '0.02em',
          }}
        >
          Fried in Tallow.
          <br />
          <span style={{ color: '#C41E3A' }}>No Seed Oils.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-xl"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#F8F5EF',
            opacity: 0.85,
            lineHeight: 1.6,
          }}
        >
          Chicken wings, tenders & biscuit sandwiches. Fried in tallow. No seed oils.
          <br />
          Hand-breaded daily. Halal certified.
        </p>

        {/* Countdown */}
        <div className="mt-4">
          <CountdownTimer />
        </div>

        {/* Email CTA */}
        <div className="mt-4 w-full flex flex-col items-center gap-3">
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              color: '#F8F5EF',
              opacity: 0.6,
              letterSpacing: '0.1em',
            }}
          >
            Be first through the door. Join the team.
          </p>
          <EmailForm variant="hero" />
        </div>

        {/* FOMO note */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: '#D4A437',
            opacity: 0.9,
            letterSpacing: '0.08em',
          }}
        >
          Hot Honey Biscuit Sandwich: 30 made daily. Team members get first call.
        </p>
      </div>
    </section>
  )
}
