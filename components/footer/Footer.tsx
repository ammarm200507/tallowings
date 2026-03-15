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
            src="/twyellow-transparent.png"
            alt="Tallowing"
            width={96}
            height={29}
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
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/tallowing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (opens in a new tab)"
                title="Instagram"
                className="hover:opacity-100 transition-opacity duration-200"
                style={{ color: '#F8F5EF', opacity: 0.55 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@tallowing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok (opens in a new tab)"
                title="TikTok"
                className="hover:opacity-100 transition-opacity duration-200"
                style={{ color: '#F8F5EF', opacity: 0.55 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M13.6 3.2c.9 1.3 2.2 2.2 3.8 2.4v2.8a7.7 7.7 0 0 1-3.8-1v5.2a5.5 5.5 0 1 1-4.7-5.4v2.9a2.7 2.7 0 1 0 1.9 2.6V3.2h2.8Z" />
                </svg>
              </a>
            </div>
            <a
              href="https://facebook.com/eattallowing"
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
              Facebook — @eattallowing
            </a>
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
