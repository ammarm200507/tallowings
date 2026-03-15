import HeatBadge from '@/components/ui/HeatBadge'

const menuCategories = [
  {
    title: 'Wings',
    items: [
      {
        name: 'Traditional Bone-In',
        desc: '48-hour marinated for deeper flavor and tenderness. Choice of house sauce or dry rub.',
      },
      {
        name: 'Boneless Wings',
        desc: '24-hour buttermilk marinated, hand-breaded, fried crispy. Choice of sauce or dry rub.',
      },
    ],
  },
  {
    title: 'Hand-Breaded Chicken',
    items: [
      {
        name: 'Chicken Tenders',
        desc: '24-hour buttermilk marinated, hand-breaded, crispy and golden.',
      },
      {
        name: 'Crispy Chicken Sandwich',
        desc: 'Chicken thigh on brioche, jalapeño or white American cheese, thick dill pickles, Guajillo Garlic sauce.',
      },
      {
        name: 'Hot Honey Biscuit Sandwich',
        desc: 'Buttermilk cheddar biscuit, hot honey, crispy chicken thigh, dill pickles, Guajillo Garlic sauce.',
        limited: true,
      },
    ],
  },
  {
    title: 'Fries',
    items: [
      { name: 'Seasoned Fries', desc: 'Crispy golden fries tossed in house seasoning.' },
      { name: 'Cheese Fries', desc: 'Seasoned fries topped with house-made cheddar cheese sauce.' },
      {
        name: 'Loaded Tender Fries',
        desc: 'Cheese sauce, ranch, Guajillo Garlic, chopped tender, beef bacon bits.',
      },
    ],
  },
]

const sauces: { name: string; desc: string; tier: 'starter' | 'varsity' | 'allpro' }[] = [
  { name: 'Final Drive Buffalo', desc: 'Classic buttery cayenne hot sauce.', tier: 'starter' },
  { name: 'Garlic Power Play', desc: 'Creamy garlic finished with parmesan.', tier: 'starter' },
  { name: 'Hot Honey', desc: 'Sweet honey with a touch of heat.', tier: 'starter' },
  { name: 'Sideline BBQ', desc: 'Sweet and smoky barbecue sauce.', tier: 'starter' },
  { name: 'Creamy Sweet Chili', desc: 'Chili garlic sauce with sweet heat.', tier: 'varsity' },
  { name: 'Sesame Slam', desc: 'Garlic, soy, and sesame glaze.', tier: 'varsity' },
  { name: 'Tropical Heatwave', desc: 'Sweet mango with slow habanero heat.', tier: 'allpro' },
]

const dryRubs = ['All-Star Rub', 'Lemon Pepper', 'Nashville Hot']
const dips = ['The Tallow Dip', 'Ranch', 'Blue Cheese']

export default function MenuPreview() {
  return (
    <section
      id="menu"
      className="py-24 px-6"
      style={{ backgroundColor: '#F8F5EF' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="uppercase tracking-widest"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: '#C41E3A',
              letterSpacing: '0.25em',
              fontWeight: 600,
            }}
          >
            The Playbook
          </span>
          <h2
            className="mt-2"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: '#111111',
              letterSpacing: '0.02em',
              lineHeight: 1,
            }}
          >
            Menu Preview
          </h2>
          <p
            className="mt-4 max-w-md mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: '#1C1C1C',
              opacity: 0.7,
            }}
          >
            Everything fried in 100% beef tallow. All sauces and dips made in-house.
          </p>
        </div>

        {/* Menu categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {menuCategories.map((cat) => (
            <div key={cat.title}>
              <h3
                className="pb-2 mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  color: '#C41E3A',
                  letterSpacing: '0.06em',
                  borderBottom: '2px solid #C41E3A',
                }}
              >
                {cat.title}
              </h3>
              <div className="flex flex-col gap-5">
                {cat.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex items-start gap-2">
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.05rem',
                          color: '#111111',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {item.name}
                      </span>
                      {'limited' in item && item.limited && (
                        <span
                          className="shrink-0 mt-0.5 px-2 py-0.5 text-xs"
                          style={{
                            backgroundColor: '#D4A437',
                            color: '#111111',
                            fontFamily: 'var(--font-body)',
                            fontWeight: 700,
                            fontSize: '0.6rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                          }}
                        >
                          30/day
                        </span>
                      )}
                    </div>
                    <p
                      className="mt-1"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.85rem',
                        color: '#1C1C1C',
                        opacity: 0.75,
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sauce depth chart */}
        <div
          className="p-8"
          style={{ backgroundColor: '#111111' }}
        >
          <h3
            className="mb-2"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.8rem',
              color: '#F8F5EF',
              letterSpacing: '0.06em',
            }}
          >
            Sauce Depth Chart
          </h3>
          <p
            className="mb-6"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              color: '#D4A437',
              letterSpacing: '0.1em',
            }}
          >
            STARTER → VARSITY → ALL-PRO
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sauces.map((s) => (
              <div
                key={s.name}
                className="p-4 transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: '#1C1C1C', border: '1px solid rgba(212,164,55,0.15)' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <HeatBadge tier={s.tier} />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    color: '#F8F5EF',
                    letterSpacing: '0.04em',
                    marginTop: '4px',
                  }}
                >
                  {s.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: '#F8F5EF',
                    opacity: 0.55,
                    marginTop: '4px',
                  }}
                >
                  {s.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Dry rubs + dips */}
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div>
              <div
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  color: '#D4A437',
                  letterSpacing: '0.1em',
                }}
              >
                DRY RUBS
              </div>
              <div className="flex flex-wrap gap-2">
                {dryRubs.map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1 text-xs"
                    style={{
                      border: '1px solid rgba(212,164,55,0.4)',
                      color: '#F8F5EF',
                      fontFamily: 'var(--font-body)',
                      opacity: 0.8,
                    }}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  color: '#D4A437',
                  letterSpacing: '0.1em',
                }}
              >
                DIPPING SAUCES
              </div>
              <div className="flex flex-wrap gap-2">
                {dips.map((d) => (
                  <span
                    key={d}
                    className="px-3 py-1 text-xs"
                    style={{
                      border: '1px solid rgba(212,164,55,0.4)',
                      color: '#F8F5EF',
                      fontFamily: 'var(--font-body)',
                      opacity: 0.8,
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
