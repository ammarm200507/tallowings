'use client'

import { useState } from 'react'

export default function EmailForm({ variant = 'hero' }: { variant?: 'hero' | 'section' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    // Replace this URL with your Resend/Mailchimp/ConvertKit endpoint
    // For now, simulates success after 800ms
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
    setEmail('')
  }

  const isHero = variant === 'hero'

  if (status === 'success') {
    return (
      <p
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: isHero ? '1.5rem' : '1.25rem',
          color: '#D4A437',
          letterSpacing: '0.05em',
        }}
      >
        You're on the team. See you opening day.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 text-sm outline-none"
        style={{
          backgroundColor: isHero ? '#1C1C1C' : '#111111',
          color: '#F8F5EF',
          border: '1px solid #D4A437',
          fontFamily: 'var(--font-body)',
        }}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 font-bold tracking-widest uppercase transition-all duration-200 hover:scale-105 hover:brightness-110 disabled:opacity-60"
        style={{
          backgroundColor: '#C41E3A',
          color: '#F8F5EF',
          fontFamily: 'var(--font-body)',
          fontSize: '0.85rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          whiteSpace: 'nowrap',
        }}
      >
        {status === 'loading' ? 'Joining...' : 'Join the Team'}
      </button>
    </form>
  )
}
