import Image from 'next/image'

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        backgroundColor: '#111111',
        borderBottom: '1px solid #D4A437',
      }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/icon-transparent.png"
          alt="Tallowing's"
          width={48}
          height={48}
          priority
        />
      </div>

      {/* Social links */}
      <div className="flex items-center gap-5">
        <a
          href="https://instagram.com/tallowing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram (opens in a new tab)"
          title="Instagram"
          className="text-cream hover:text-gold transition-colors duration-200"
          style={{ color: '#F8F5EF' }}
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
          className="text-cream hover:text-gold transition-colors duration-200"
          style={{ color: '#F8F5EF' }}
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
        <a
          href="#join"
          className="px-5 py-2 text-sm font-700 tracking-widest uppercase transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: '#C41E3A',
            color: '#F8F5EF',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
          }}
        >
          Join the Team
        </a>
      </div>
    </nav>
  )
}
