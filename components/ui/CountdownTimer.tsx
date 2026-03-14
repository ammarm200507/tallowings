'use client'

import { useEffect, useState } from 'react'

const OPENING_DATE = new Date('2026-03-28T11:00:00')

function getTimeLeft() {
  const now = new Date()
  const diff = OPENING_DATE.getTime() - now.getTime()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function Pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    setTime(getTimeLeft())
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'DAYS', value: time.days },
    { label: 'HRS', value: time.hours },
    { label: 'MIN', value: time.minutes },
    { label: 'SEC', value: time.seconds },
  ]

  return (
    <div className="flex items-center gap-4 md:gap-6">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center">
            <span
              className="tabular-nums"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                color: '#D4A437',
                lineHeight: 1,
              }}
            >
              {Pad(value)}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                color: '#F8F5EF',
                letterSpacing: '0.15em',
                marginTop: '4px',
                opacity: 0.7,
              }}
            >
              {label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#C41E3A',
                lineHeight: 1,
                marginBottom: '16px',
              }}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
