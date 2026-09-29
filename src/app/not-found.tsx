import Link from 'next/link'

export default function NotFound() {
  return (
    <section style={{ padding: '128px 0', background: '#081B3C', color: '#FFFFFF', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="wrap clear" style={{ maxWidth: '860px', margin: '0 auto' }}>
        <div className="eyebrow" style={{ color: '#55CBE8', fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>
          Error 404
        </div>
        <h1 className="h1" style={{ fontSize: 'clamp(40px, 5vw, 76px)', fontWeight: 400, fontFamily: '"Newsreader", Georgia, serif', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '20px' }}>
          We couldn't find that page.
        </h1>
        <p className="lead" style={{ fontSize: '18px', color: '#CBD5E1', marginBottom: '40px', lineHeight: 1.6 }}>
          It may have moved, or the link may be out of date. These are good places to pick up from.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn p" style={{ padding: '15px 26px', background: '#2F6BE0', color: '#FFFFFF', borderRadius: '999px', textDecoration: 'none', fontWeight: 600 }}>
            Go to the home page
          </Link>
          <Link href="/medical-coding" className="btn o" style={{ padding: '15px 26px', border: '1px solid rgba(255,255,255,0.3)', color: '#FFFFFF', borderRadius: '999px', textDecoration: 'none', fontWeight: 600 }}>
            See Medical Coding
          </Link>
          <Link href="/demo" className="btn o" style={{ padding: '15px 26px', border: '1px solid rgba(255,255,255,0.3)', color: '#FFFFFF', borderRadius: '999px', textDecoration: 'none', fontWeight: 600 }}>
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  )
}
