import Image from 'next/image'
import Link from 'next/link'

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
          src="/tallowing-logo.png"
          alt="Tallowing's"
          width={140}
          height={42}
          priority
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

      {/* Social links */}
      <div className="flex items-center gap-5">
        <a
          href="https://instagram.com/tallowing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cream hover:text-gold transition-colors duration-200 font-body text-sm font-600 tracking-widest uppercase"
          style={{ color: '#F8F5EF', fontFamily: 'var(--font-body)' }}
        >
          Instagram
        </a>
        <a
          href="https://tiktok.com/@tallowing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cream hover:text-gold transition-colors duration-200 font-body text-sm font-600 tracking-widest uppercase"
          style={{ color: '#F8F5EF', fontFamily: 'var(--font-body)' }}
        >
          TikTok
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
