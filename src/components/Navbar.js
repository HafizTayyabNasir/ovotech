"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.webp" alt="Ovotech Logo" style={{ height: "32px", width: "auto" }} />
        </Link>
        
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <li className={styles.hasDropdown}>
            <Link href="/solutions" className={styles.navLink}>
              Solutions{" "}
              <svg width="10" height="6" viewBox="0 0 10 6">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </Link>
            
            {/* Mega Menu for Solutions */}
            <div className={styles.megaMenu}>
              <div className={styles.megaMenuInner}>
                <div className={styles.megaColumns}>
                  <div className={styles.megaCol}>
                    <h3 className={styles.colHeader}>Administrative</h3>
                    <Link href="/solutions/prescription-automation">Prescription Automation</Link>
                    <Link href="/solutions/referral-automation">Referral Automation</Link>
                    <Link href="/solutions/appointment-automation">Appointment Automation</Link>
                  </div>
                  <div className={styles.megaCol}>
                    <h3 className={styles.colHeader}>Financial & Compliance</h3>
                    <Link href="/solutions/invoice-automation">Invoice Automation</Link>
                    <Link href="/solutions/policy-update-automation">Policy Update Automation</Link>
                  </div>
                </div>
                
                <div className={styles.megaPromo}>
                  <div className={styles.promoContent}>
                    <h4>NPS 81.8%</h4>
                    <p>75% reduction in prescription processing time for our GP partners across the UK.</p>
                  </div>
                  <img src="/benefits-man.png" alt="Promo" className={styles.promoImg} />
                </div>
              </div>
              <div className={styles.megaBottom}>
                <span>Ready to transform your practice?</span>
                <Link href="/contact" className="btn btn-primary" style={{ padding: "8px 20px" }}>Let's Talk</Link>
              </div>
            </div>
          </li>

          <li className={styles.hasDropdown}>
            <Link href="/who-we-help" className={styles.navLink}>
              Who We Help{" "}
              <svg width="10" height="6" viewBox="0 0 10 6">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </Link>
            <div className={styles.megaMenu}>
              <div className={styles.megaMenuInner}>
                <div className={styles.megaColumns}>
                  <div className={styles.megaCol}>
                    <h3 className={styles.colHeader}>Healthcare Providers</h3>
                    <Link href="/who-we-help/gp-practices">GP Practices</Link>
                    <Link href="/who-we-help/primary-care-networks">Primary Care Networks (PCNs)</Link>
                    <Link href="/who-we-help/nhs-providers">NHS Healthcare Providers</Link>
                  </div>
                </div>
                <div className={styles.megaPromo} style={{ background: "linear-gradient(135deg, #16a34a, #065f46)" }}>
                  <div className={styles.promoContent}>
                    <h4>NHS Accredited</h4>
                    <p>Fully compliant with DSPT and DCB0129 standards for clinical safety.</p>
                  </div>
                  <img src="/testimonial-man.png" alt="Promo" className={styles.promoImg} />
                </div>
              </div>
            </div>
          </li>

          <li><Link href="/how-it-works" className={styles.navLink}>How it Works</Link></li>
          
          <li className={styles.hasDropdown}>
            <Link href="/resources" className={styles.navLink}>
              Resources{" "}
              <svg width="10" height="6" viewBox="0 0 10 6">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </Link>
            <div className={styles.megaMenu}>
              <div className={styles.megaMenuInner}>
                <div className={styles.megaColumns}>
                  <div className={styles.megaCol}>
                    <h3 className={styles.colHeader}>Learn & Discover</h3>
                    <Link href="/case-studies">Case Studies</Link>
                    <Link href="/blog">Blog & Insights</Link>
                    <Link href="/help-centre">Help Centre</Link>
                  </div>
                </div>
                <div className={styles.megaPromo} style={{ background: "linear-gradient(135deg, #42B1E5, #1e3a8a)" }}>
                  <div className={styles.promoContent}>
                    <h4>Latest Insight</h4>
                    <p>How AI is Transforming Primary Care in 2025.</p>
                    <Link href="/blog" style={{ color: "#fff", textDecoration: "underline", marginTop: "10px", display: "inline-block" }}>Read Article</Link>
                  </div>
                  <img src="/hero-man.png" alt="Promo" className={styles.promoImg} />
                </div>
              </div>
            </div>
          </li>

          <li className={styles.hasDropdown}>
            <Link href="/about" className={styles.navLink}>
              About{" "}
              <svg width="10" height="6" viewBox="0 0 10 6">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </Link>
            <div className={styles.megaMenu}>
              <div className={styles.megaMenuInner}>
                <div className={styles.megaColumns}>
                  <div className={styles.megaCol}>
                    <h3 className={styles.colHeader}>Company</h3>
                    <Link href="/about">About Us</Link>
                    <Link href="/careers">Careers</Link>
                    <Link href="/contact">Contact Us</Link>
                  </div>
                  <div className={styles.megaCol}>
                    <h3 className={styles.colHeader}>Legal</h3>
                    <Link href="/security-compliance">Security &amp; Compliance</Link>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/terms">Terms &amp; Conditions</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.mobileCta}>
            <Link href="/contact" className="btn btn-cta" style={{ width: "100%", justifyContent: "center" }} onClick={() => setMenuOpen(false)}>Book a Demo</Link>
          </li>
        </ul>
        <div className={styles.desktopCta}>
          <Link href="/contact" className="btn btn-cta" style={{ padding: "10px 24px", fontSize: "14px" }}>Book a Demo</Link>
        </div>
      </div>
    </nav>
  );
}
