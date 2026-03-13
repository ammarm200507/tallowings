const points = [
  {
    number: '01',
    headline: 'It fries better.',
    body: 'Beef tallow hits 400°F+ without breaking down. That means a harder crust, cleaner bite, and no greasy aftertaste. Science backs it. Your tongue confirms it.',
  },
  {
    number: '02',
    headline: 'It tastes better.',
    body: "Beef fat carries flavor differently than vegetable oil. You'll taste the chicken, the sauce, and the seasoning — not the cooking medium. That's how it should work.",
  },
  {
    number: '03',
    headline: 'It's the right call.',
    body: "Seed oils are everywhere because they're cheap. We use beef tallow because we're not cutting corners on the thing that touches every single item on our menu.",
  },
]

export default function WhyTallow() {
  return (
    <section
      id="tallow"
      className="py-24 px-6"
      style={{ backgroundColor: '#111111' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
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
            The Ingredient
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
            Why Beef Tallow
          </h2>
        </div>

        {/* Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {points.map((p) => (
            <div key={p.number} className="flex flex-col gap-4">
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '3rem',
                  color: '#C41E3A',
                  lineHeight: 1,
                  opacity: 0.6,
                }}
              >
                {p.number}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.6rem',
                  color: '#D4A437',
                  letterSpacing: '0.04em',
                  lineHeight: 1.1,
                }}
              >
                {p.headline}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: '#F8F5EF',
                  opacity: 0.75,
                  lineHeight: 1.7,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div
          className="mt-16 pt-12 text-center"
          style={{ borderTop: '1px solid rgba(212,164,55,0.3)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: '#F8F5EF',
              letterSpacing: '0.04em',
              lineHeight: 1.3,
            }}
          >
            Beef tallow is the fat your grandparents fried in.
            <br />
            <span style={{ color: '#D4A437' }}>We just never stopped.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
