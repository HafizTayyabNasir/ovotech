"use client";
import Link from "next/link";

const footerLinks = {
  Platform: [
    { label: "Review Queue", href: "/solutions#review-queue" },
    { label: "Clinical Review", href: "/solutions#clinical-review" },
    { label: "Patient History", href: "/solutions#patient-history" },
    { label: "SNOMED CT Coding", href: "/solutions#snomed-coding" },
    { label: "EMIS Web Integration", href: "/solutions#emis-integration" },
    { label: "Dashboard & KPIs", href: "/solutions#kpi-tracking" },
  ],
  "Who We Help": [
    { label: "GP Practices", href: "/who-we-help/gp-practices" },
    { label: "Primary Care Networks", href: "/who-we-help/primary-care-networks" },
    { label: "NHS Healthcare Providers", href: "/who-we-help/nhs-providers" },
  ],
  Resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog & Insights", href: "/blog" },
    { label: "Help Centre", href: "/help-centre" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Security & Compliance", href: "/security-compliance" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#060D1F", color: "#fff", paddingTop: "80px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="site-container" style={{ display: "flex", flexWrap: "wrap", gap: "60px", paddingBottom: "60px" }}>
        {/* Brand */}
        <div style={{ flex: "0 1 280px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <img src="/logo.webp" alt="Ovotech Logo" style={{ height: "32px", width: "auto" }} />
          </div>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "24px" }}>
            Ovotech is an end-to-end clinical document processing and coding workflow platform designed specifically for UK GP practices.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
              { label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" },
            ].map((s, i) => (
              <a key={i} href="#" aria-label={s.label} style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.08)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s" }} onMouseEnter={e => e.currentTarget.style.background = "#02ACEA"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        <div style={{ flex: "1 1 500px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "32px" }}>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "20px", color: "#fff" }}>{title}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link, i) => (
                  <Link key={i} href={link.href} style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#02ACEA"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="site-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", padding: "20px 0", gap: "16px", fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>
          <span>&copy; 2025 Ovotech. All rights reserved.</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/privacy-policy" style={{ transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#02ACEA"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>Privacy Policy</Link>
            <Link href="/terms" style={{ transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#02ACEA"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
