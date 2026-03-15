const TICKER_TEXT =
  'NO SEED OILS \u00a0•\u00a0 FRIED IN TALLOW \u00a0•\u00a0 GLENVIEW IL \u00a0•\u00a0 OPENING LATE MARCH 2026 \u00a0•\u00a0 HAND-BREADED DAILY \u00a0•\u00a0 NO SEED OILS \u00a0•\u00a0 FRIED IN TALLOW \u00a0•\u00a0 GLENVIEW IL \u00a0•\u00a0 OPENING LATE MARCH 2026 \u00a0•\u00a0 HAND-BREADED DAILY \u00a0•\u00a0'

export default function Ticker() {
  return (
    <div
      className="relative z-40 overflow-hidden py-3 mt-[88px] sm:mt-[73px]"
      style={{ backgroundColor: '#C41E3A' }}
    >
      <div
        className="ticker-track flex whitespace-nowrap"
        style={{
          animation: 'ticker 30s linear infinite',
          fontFamily: 'var(--font-heading)',
          color: '#F8F5EF',
          fontSize: '1rem',
          letterSpacing: '0.1em',
        }}
      >
        <span className="pr-8">{TICKER_TEXT}</span>
        <span className="pr-8">{TICKER_TEXT}</span>
      </div>
    </div>
  )
}
