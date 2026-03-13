const tallow = [
  { stat: 'Fat Source', value: '100% Beef Tallow' },
  { stat: 'Heat Stability', value: 'High — 400°F+' },
  { stat: 'Texture', value: 'Unmatched crispiness' },
  { stat: 'Flavor', value: 'Deep, clean, rich' },
  { stat: 'Oxidation', value: 'Stable under heat' },
  { stat: 'Verdict', value: 'The only choice' },
]

const seedOils = [
  { stat: 'Fat Source', value: 'Industrial extraction' },
  { stat: 'Heat Stability', value: 'Low — breaks down fast' },
  { stat: 'Texture', value: 'Soggy aftertaste' },
  { stat: 'Flavor', value: 'Bland, greasy' },
  { stat: 'Oxidation', value: 'Highly oxidative' },
  { stat: 'Verdict', value: 'Not here' },
]

export default function TaleOfTheTape() {
  return (
    <section
      id="tale"
      className="py-24 px-6"
      style={{ backgroundColor: '#1C1C1C' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span
            className="uppercase tracking-widest"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: '#D4A437',
              letterSpacing: '0.25em',
              fontWeight: 600,
            }}
          >
            The Matchup
          </span>
          <h2
            className="mt-2"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: '#F8F5EF',
              letterSpacing: '0.02em',
              lineHeight: 1,
            }}
          >
            Tale of the Tape
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: '#F8F5EF',
              opacity: 0.7,
            }}
          >
            Most spots fry in vegetable oil. We don&apos;t. Here&apos;s why that matters.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#D4A437]">
          {/* Tallow column */}
          <div className="md:col-span-1" style={{ backgroundColor: '#111111' }}>
            <div
              className="py-4 px-6 text-center"
              style={{ borderBottom: '1px solid #D4A437', backgroundColor: '#C41E3A' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  color: '#F8F5EF',
                  letterSpacing: '0.08em',
                }}
              >
                BEEF TALLOW
              </span>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  color: '#F8F5EF',
                  opacity: 0.8,
                  letterSpacing: '0.15em',
                  marginTop: '2px',
                }}
              >
                THE CHAMP
              </div>
            </div>
            {tallow.map((row, i) => (
              <div
                key={row.stat}
                className="py-4 px-6"
                style={{
                  borderBottom: i < tallow.length - 1 ? '1px solid rgba(212,164,55,0.2)' : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.65rem',
                    color: '#D4A437',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '2px',
                  }}
                >
                  {row.stat}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    color: '#F8F5EF',
                    letterSpacing: '0.04em',
                  }}
                >
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          {/* VS divider */}
          <div
            className="hidden md:flex items-center justify-center"
            style={{ borderLeft: '1px solid #D4A437', borderRight: '1px solid #D4A437' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '4rem',
                color: '#D4A437',
                opacity: 0.4,
                letterSpacing: '0.1em',
              }}
            >
              VS
            </span>
          </div>

          {/* Seed oils column */}
          <div className="md:col-span-1" style={{ backgroundColor: '#111111' }}>
            <div
              className="py-4 px-6 text-center"
              style={{ borderBottom: '1px solid #D4A437', backgroundColor: '#1C1C1C' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  color: '#F8F5EF',
                  letterSpacing: '0.08em',
                  opacity: 0.5,
                }}
              >
                SEED OILS
              </span>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  color: '#F8F5EF',
                  opacity: 0.4,
                  letterSpacing: '0.15em',
                  marginTop: '2px',
                }}
              >
                NOT HERE
              </div>
            </div>
            {seedOils.map((row, i) => (
              <div
                key={row.stat}
                className="py-4 px-6"
                style={{
                  borderBottom: i < seedOils.length - 1 ? '1px solid rgba(212,164,55,0.1)' : 'none',
                  opacity: 0.5,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.65rem',
                    color: '#D4A437',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '2px',
                  }}
                >
                  {row.stat}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    color: '#F8F5EF',
                    letterSpacing: '0.04em',
                  }}
                >
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
