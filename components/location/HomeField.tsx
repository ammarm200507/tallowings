export default function HomeField() {
  return (
    <section
      id="location"
      className="py-24 px-6"
      style={{ backgroundColor: '#1C1C1C' }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
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
            Home Field
          </span>
          <h2
            className="mt-2 mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: '#F8F5EF',
              letterSpacing: '0.02em',
              lineHeight: 1,
            }}
          >
            We're Coming
            <br />
            <span style={{ color: '#C41E3A' }}>to Glenview.</span>
          </h2>

          <div className="flex flex-col gap-4">
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  color: '#D4A437',
                  letterSpacing: '0.1em',
                }}
              >
                ADDRESS
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.1rem',
                  color: '#F8F5EF',
                  marginTop: '4px',
                  lineHeight: 1.5,
                }}
              >
                2528 Waukegan Rd
                <br />
                Glenview, IL 60025
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  color: '#D4A437',
                  letterSpacing: '0.1em',
                }}
              >
                OPENING
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.8rem',
                  color: '#F8F5EF',
                  marginTop: '4px',
                  letterSpacing: '0.04em',
                }}
              >
                Late March 2026
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  color: '#D4A437',
                  letterSpacing: '0.1em',
                }}
              >
                CONTACT
              </div>
              <a
                href="mailto:info@eattallowing.com"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: '#F8F5EF',
                  marginTop: '4px',
                  display: 'block',
                  opacity: 0.8,
                }}
              >
                info@eattallowing.com
              </a>
            </div>
          </div>
        </div>

        {/* Map embed */}
        <div
          className="w-full h-72 md:h-96"
          style={{ border: '1px solid rgba(212,164,55,0.3)' }}
        >
          <iframe
            title="Tallowing's Location"
            src="https://maps.google.com/maps?q=2528+Waukegan+Rd+Glenview+IL+60025&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) contrast(1.1) invert(0.9)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
