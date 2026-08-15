"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownClick = (e, menuName) => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      e.preventDefault();
      setOpenDropdown(openDropdown !== menuName ? menuName : null);
    }
  };

  const navItems = [
    {
      label: "Solutions", href: "/solutions", key: "solutions",
      columns: [
        { header: "Administrative", links: [
          { label: "Prescription Automation", href: "/solutions/prescription-automation", desc: "Automate repeat prescriptions & reduce manual effort" },
          { label: "Referral Automation", href: "/solutions/referral-automation", desc: "Smart routing for incoming referrals & triage" },
          { label: "Appointment Automation", href: "/solutions/appointment-automation", desc: "Scheduling, reminders & patient communication" },
        ]},
        { header: "Financial & Compliance", links: [
          { label: "Invoice Automation", href: "/solutions/invoice-automation", desc: "Invoice generation, validation & processing" },
          { label: "Policy Update Automation", href: "/solutions/policy-update-automation", desc: "Policy verifying, notifications & updates" },
          { label: "Admin & Document Automation", href: "/solutions", desc: "Letters, documents, data entry & reporting" },
        ]},
      ],
      promo: { title: "NPS 81.8%", text: "75% reduction in prescription processing time for our GP partners.", bg: "from-primary to-primary-dark" },
    },
    {
      label: "Who We Help", href: "/who-we-help", key: "who-we-help",
      columns: [
        { header: "Healthcare Providers", links: [
          { label: "GP Practices", href: "/who-we-help/gp-practices", desc: "Tailored automation for general practices" },
          { label: "Primary Care Networks", href: "/who-we-help/primary-care-networks", desc: "Scale automation across your network" },
          { label: "NHS Healthcare Providers", href: "/who-we-help/nhs-providers", desc: "NHS-accredited compliant solutions" },
        ]},
      ],
      promo: { title: "NHS Accredited", text: "Fully compliant with DSPT and DCB0129 standards.", bg: "from-green-600 to-green-900" },
    },
    { label: "How it Works", href: "/how-it-works", key: "how-it-works" },
    {
      label: "Resources", href: "/resources", key: "resources",
      columns: [
        { header: "Learn & Discover", links: [
          { label: "Case Studies", href: "/case-studies", desc: "Real results from real practices" },
          { label: "Blog & Insights", href: "/blog", desc: "Latest articles on healthcare automation" },
          { label: "Help Centre", href: "/help-centre", desc: "Guides, FAQs & support resources" },
        ]},
      ],
      promo: { title: "Latest Insight", text: "How AI is Transforming Primary Care in 2025.", bg: "from-primary to-blue-900" },
    },
    {
      label: "About", href: "/about", key: "about",
      columns: [
        { header: "Company", links: [
          { label: "About Us", href: "/about", desc: "Our mission & story" },
          { label: "Careers", href: "/careers", desc: "Join the Ovotech team" },
          { label: "Contact Us", href: "/contact", desc: "Get in touch with our team" },
        ]},
        { header: "Legal", links: [
          { label: "Security & Compliance", href: "/security-compliance", desc: "DSPT, DCB0129 & GDPR" },
          { label: "Privacy Policy", href: "/privacy-policy", desc: "How we handle your data" },
          { label: "Terms & Conditions", href: "/terms", desc: "Our service agreement" },
        ]},
      ],
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-[100] transition-all duration-300 ${scrolled ? "shadow-xl shadow-black/10" : ""}`}
      style={{ background: scrolled ? "#1a1445" : "#362D7E" }}
    >
      <div className="site-container flex items-center justify-between relative" style={{ padding: "16px 24px" }}>
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo.webp" alt="Ovotech Logo" style={{ height: "32px", width: "auto" }} />
        </Link>

        <button
          className="md:hidden bg-transparent border-none text-white cursor-pointer z-[102]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ padding: "8px" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>

        <ul
          className={`md:flex md:items-center md:gap-1 ${menuOpen ? "flex" : "hidden md:flex"}`}
          style={{
            ...(typeof window !== "undefined" && window.innerWidth <= 768 ? {
              position: "fixed", top: "65px", left: 0, width: "100%",
              height: "calc(100vh - 65px)", background: "#362D7E",
              flexDirection: "column", padding: "24px",
              gap: "4px", overflowY: "auto", zIndex: 101,
            } : {}),
          }}
        >
          {navItems.map((item) => (
            <li key={item.key} className="relative group md:static">
              <Link
                href={item.href}
                className="text-white/90 hover:text-white flex items-center gap-1.5 transition-all"
                onClick={(e) => item.columns && handleDropdownClick(e, item.key)}
                style={{ fontSize: "14px", fontWeight: 500, padding: "10px 14px", borderRadius: "8px" }}
              >
                {item.label}
                {item.columns && (
                  <svg width="10" height="6" viewBox="0 0 10 6" className={`transition-transform duration-200 group-hover:rotate-180 ${openDropdown === item.key ? "rotate-180" : ""}`}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
              </Link>

              {item.columns && (
                <div
                  className="md:absolute md:top-full md:left-0 md:w-full md:opacity-0 md:invisible md:translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0 md:transition-all md:duration-300"
                  style={{
                    background: "#fff", borderRadius: "0 0 16px 16px",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
                    border: "1px solid #eee", borderTop: "none",
                    display: openDropdown === item.key ? "block" : undefined,
                  }}
                >
                  <div className="md:flex" style={{ minHeight: "280px" }}>
                    <div className="flex-1 md:grid md:grid-cols-2" style={{ padding: "32px 40px", gap: "40px" }}>
                      {item.columns.map((col, ci) => (
                        <div key={ci} style={{ marginBottom: "16px" }}>
                          <h3 style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#362D7E", marginBottom: "16px", paddingBottom: "8px", borderBottom: "2px solid #362D7E", display: "inline-block" }}>
                            {col.header}
                          </h3>
                          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            {col.links.map((link, li) => (
                              <Link
                                key={li} href={link.href}
                                style={{ display: "block", padding: "10px 12px", borderRadius: "8px", transition: "background 0.2s" }}
                                className="hover:bg-[#F7F7FA]"
                                onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}
                              >
                                <span style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A", display: "block" }}>{link.label}</span>
                                <span style={{ fontSize: "12px", color: "#888", display: "block", marginTop: "2px" }}>{link.desc}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {item.promo && (
                      <div
                        className="hidden md:flex"
                        style={{
                          width: "300px", background: `linear-gradient(135deg, ${item.promo.bg.includes("green") ? "#16a34a, #065f46" : item.promo.bg.includes("blue") ? "#362D7E, #1e3a8a" : "#362D7E, #2a2265"})`,
                          color: "#fff", flexDirection: "column", justifyContent: "center", padding: "40px", position: "relative", overflow: "hidden",
                        }}
                      >
                        <div style={{ position: "absolute", right: "-40px", top: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
                        <h4 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "10px" }}>{item.promo.title}</h4>
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{item.promo.text}</p>
                      </div>
                    )}
                  </div>
                  <div className="hidden md:flex" style={{ background: "#F7F7FA", padding: "16px 40px", alignItems: "center", gap: "20px", borderTop: "1px solid #E8E8EF" }}>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>Ready to transform your practice?</span>
                    <Link href="/contact" style={{ background: "#362D7E", color: "#fff", fontSize: "14px", fontWeight: 600, padding: "8px 20px", borderRadius: "8px" }}>
                      Let&apos;s Talk
                    </Link>
                  </div>
                </div>
              )}
            </li>
          ))}
          <li className="md:hidden" style={{ marginTop: "16px" }}>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", width: "100%", textAlign: "center", background: "#fff", color: "#362D7E", fontWeight: 700, padding: "14px 24px", borderRadius: "12px" }}
            >
              Book a Demo
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <Link href="/contact" style={{ background: "#fff", color: "#362D7E", fontSize: "14px", fontWeight: 700, padding: "10px 24px", borderRadius: "10px", display: "inline-block", transition: "all 0.3s" }}>
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
