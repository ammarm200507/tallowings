const TIER_STYLES: Record<string, { bg: string; label: string }> = {
  starter: { bg: '#1C1C1C', label: 'STARTER' },
  varsity: { bg: '#C41E3A', label: 'VARSITY' },
  allpro: { bg: '#D4A437', label: 'ALL-PRO' },
}

export default function HeatBadge({ tier }: { tier: 'starter' | 'varsity' | 'allpro' }) {
  const { bg, label } = TIER_STYLES[tier]
  return (
    <span
      className="inline-block px-2 py-0.5 text-xs"
      style={{
        backgroundColor: bg,
        color: '#F8F5EF',
        fontFamily: 'var(--font-heading)',
        letterSpacing: '0.1em',
        border: tier === 'starter' ? '1px solid #D4A437' : 'none',
      }}
    >
      {label}
    </span>
  )
}
