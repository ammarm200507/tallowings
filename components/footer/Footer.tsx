import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      className="px-6 py-12"
      style={{ backgroundColor: '#111111', borderTop: '1px solid rgba(212,164,55,0.2)' }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-3">
          <Image
            src="/tallowing-logo.png"
            alt="Tallowing's"
            width={120}
            height={36}
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              color: '#F8F5EF',
              opacity: 0.5,
              lineHeight: 1.5,
            }}
          >
            Fried in beef. Built different.
          </p>
          {/* Halal badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mt-1 w-fit"
            style={{ border: '1px solid #D4A437' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                color: '#D4A437',
                letterSpacing: '0.1em',
              }}
            >
              HALAL CERTIFIED
            </span>
          </div>
        </div>

        {/* Address */}
        <div>
          <div
            className="mb-2"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9rem',
              color: '#D4A437',
              letterSpacing: '0.12em',
            }}
          >
            LOCATION
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: '#F8F5EF',
              opacity: 0.65,
              lineHeight: 1.7,
            }}
          >
            2528 Waukegan Rd
            <br />
            Glenview, IL 60025
            <br />
            Opening Late March 2026
          </p>
          <a
            href="mailto:info@eattallowing.com"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              color: '#F8F5EF',
              opacity: 0.5,
              display: 'block',
              marginTop: '8px',
            }}
          >
            info@eattallowing.com
          </a>
        </div>

        {/* Socials */}
        <div>
          <div
            className="mb-3"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.9rem',
              color: '#D4A437',
              letterSpacing: '0.12em',
            }}
          >
            FOLLOW
          </div>
          <div className="flex flex-col gap-2">
            {[
              { label: 'Instagram', href: 'https://instagram.com/tallowing', handle: '@tallowing' },
              { label: 'TikTok', href: 'https://tiktok.com/@tallowing', handle: '@tallowing' },
              { label: 'Facebook', href: 'https://facebook.com/eattallowing', handle: '@eattallowing' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity duration-200"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: '#F8F5EF',
                  opacity: 0.55,
                }}
              >
                {s.label} — {s.handle}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-5xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2"
        style={{ borderTop: '1px solid rgba(212,164,55,0.1)' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            color: '#F8F5EF',
            opacity: 0.35,
          }}
        >
          © 2026 Tallowing&apos;s. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            color: '#F8F5EF',
            opacity: 0.35,
          }}
        >
          No seed oils. No apologies.
        </p>
      </div>
    </footer>
  )
}
