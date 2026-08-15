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
      label: "Solutions",
      href: "/solutions",
      key: "solutions",
      columns: [
        {
          header: "Administrative",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 12h6M12 9v6"/></svg>
          ),
          links: [
            { label: "Prescription Automation", href: "/solutions/prescription-automation", desc: "Automate repeat prescriptions & reduce manual effort" },
            { label: "Referral Automation", href: "/solutions/referral-automation", desc: "Smart routing for incoming referrals & triage" },
            { label: "Appointment Automation", href: "/solutions/appointment-automation", desc: "Scheduling, reminders & patient communication" },
          ],
        },
        {
          header: "Financial & Compliance",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          ),
          links: [
            { label: "Invoice Automation", href: "/solutions/invoice-automation", desc: "Invoice generation, validation & processing" },
            { label: "Policy Update Automation", href: "/solutions/policy-update-automation", desc: "Policy verifying, notifications & updates" },
            { label: "Admin & Document Automation", href: "/solutions", desc: "Letters, documents, data entry & reporting" },
          ],
        },
      ],
      promo: { title: "NPS 81.8%", text: "75% reduction in prescription processing time for our GP partners across the UK.", bg: "bg-gradient-to-br from-primary to-primary-dark" },
    },
    {
      label: "Who We Help",
      href: "/who-we-help",
      key: "who-we-help",
      columns: [
        {
          header: "Healthcare Providers",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg>
          ),
          links: [
            { label: "GP Practices", href: "/who-we-help/gp-practices", desc: "Tailored automation for general practices" },
            { label: "Primary Care Networks (PCNs)", href: "/who-we-help/primary-care-networks", desc: "Scale automation across your network" },
            { label: "NHS Healthcare Providers", href: "/who-we-help/nhs-providers", desc: "NHS-accredited compliant solutions" },
          ],
        },
      ],
      promo: { title: "NHS Accredited", text: "Fully compliant with DSPT and DCB0129 standards for clinical safety.", bg: "bg-gradient-to-br from-green-600 to-green-900" },
    },
    { label: "How it Works", href: "/how-it-works", key: "how-it-works" },
    {
      label: "Resources",
      href: "/resources",
      key: "resources",
      columns: [
        {
          header: "Learn & Discover",
          icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
          ),
          links: [
            { label: "Case Studies", href: "/case-studies", desc: "Real results from real practices" },
            { label: "Blog & Insights", href: "/blog", desc: "Latest articles on healthcare automation" },
            { label: "Help Centre", href: "/help-centre", desc: "Guides, FAQs & support resources" },
          ],
        },
      ],
      promo: { title: "Latest Insight", text: "How AI is Transforming Primary Care in 2025.", bg: "bg-gradient-to-br from-primary to-blue-900" },
    },
    {
      label: "About",
      href: "/about",
      key: "about",
      columns: [
        {
          header: "Company",
          links: [
            { label: "About Us", href: "/about", desc: "Our mission & story" },
            { label: "Careers", href: "/careers", desc: "Join the Ovotech team" },
            { label: "Contact Us", href: "/contact", desc: "Get in touch with our team" },
          ],
        },
        {
          header: "Legal",
          links: [
            { label: "Security & Compliance", href: "/security-compliance", desc: "DSPT, DCB0129 & GDPR" },
            { label: "Privacy Policy", href: "/privacy-policy", desc: "How we handle your data" },
            { label: "Terms & Conditions", href: "/terms", desc: "Our service agreement" },
          ],
        },
      ],
    },
  ];

  return (
    <nav className={`sticky top-0 z-[100] transition-all duration-300 ${scrolled ? "bg-[#1a1445] shadow-lg" : "bg-primary"}`}>
      <div className="container flex items-center justify-between relative py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo.webp" alt="Ovotech Logo" className="h-8 w-auto" />
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden bg-transparent border-none text-white cursor-pointer p-2 z-[102]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>

        {/* Nav Links */}
        <ul className={`
          md:flex md:items-center md:gap-1
          fixed md:static top-[65px] md:top-auto left-0 w-full md:w-auto
          h-[calc(100vh-65px)] md:h-auto
          bg-primary md:bg-transparent
          flex-col md:flex-row
          p-6 md:p-0
          gap-1
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0 flex" : "translate-x-full md:translate-x-0 hidden md:flex"}
          overflow-y-auto md:overflow-visible
          z-[101]
        `}>
          {navItems.map((item) => (
            <li key={item.key} className="relative group md:static">
              <Link
                href={item.href}
                className="text-white/90 hover:text-white text-sm font-medium flex items-center gap-1.5 py-3 px-3 rounded-lg hover:bg-white/10 transition-all"
                onClick={(e) => item.columns && handleDropdownClick(e, item.key)}
              >
                {item.label}
                {item.columns && (
                  <svg width="10" height="6" viewBox="0 0 10 6" className={`transition-transform duration-200 group-hover:rotate-180 ${openDropdown === item.key ? "rotate-180" : ""}`}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                )}
              </Link>

              {/* Mega Menu */}
              {item.columns && (
                <div className={`
                  md:absolute md:top-full md:left-0 md:w-full
                  md:bg-white md:rounded-b-2xl md:shadow-2xl
                  md:opacity-0 md:invisible md:translate-y-2
                  md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0
                  md:transition-all md:duration-300
                  md:border md:border-t-0 md:border-gray-100
                  ${openDropdown === item.key ? "block bg-white/5 rounded-xl mt-1 mb-2" : "hidden md:block"}
                `}>
                  <div className="md:flex md:min-h-[280px]">
                    {/* Columns */}
                    <div className="flex-1 md:grid md:grid-cols-2 md:gap-0 p-4 md:p-8">
                      {item.columns.map((col, ci) => (
                        <div key={ci} className="mb-4 md:mb-0">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-primary md:text-primary text-white/60 mb-4 pb-2 border-b-2 border-primary/20 md:border-primary inline-block">
                            {col.header}
                          </h3>
                          <div className="space-y-1">
                            {col.links.map((link, li) => (
                              <Link
                                key={li}
                                href={link.href}
                                className="block p-2.5 rounded-lg md:hover:bg-bg-light transition-colors group/link"
                                onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}
                              >
                                <span className="text-sm font-semibold text-white md:text-text-heading group-hover/link:text-primary transition-colors">{link.label}</span>
                                <span className="block text-xs text-white/50 md:text-text-muted mt-0.5">{link.desc}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Promo */}
                    {item.promo && (
                      <div className={`hidden md:flex w-[300px] ${item.promo.bg} text-white flex-col justify-center p-10 relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/20" />
                          <div className="absolute -left-5 -bottom-5 w-24 h-24 rounded-full bg-white/10" />
                        </div>
                        <h4 className="text-3xl font-extrabold mb-2 relative z-10">{item.promo.title}</h4>
                        <p className="text-sm text-white/70 leading-relaxed relative z-10">{item.promo.text}</p>
                      </div>
                    )}
                  </div>
                  {/* Bottom bar */}
                  <div className="hidden md:flex bg-bg-light px-8 py-4 items-center gap-5 border-t border-border-light">
                    <span className="text-sm font-semibold text-text-heading">Ready to transform your practice?</span>
                    <Link
                      href="/contact"
                      className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      Let&apos;s Talk
                    </Link>
                  </div>
                </div>
              )}
            </li>
          ))}
          {/* Mobile CTA */}
          <li className="md:hidden mt-4">
            <Link
              href="/contact"
              className="block w-full text-center bg-white text-primary font-bold py-3 px-6 rounded-xl hover:bg-white/90 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Book a Demo
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-white text-primary text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-white/90 hover:shadow-lg transition-all"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
