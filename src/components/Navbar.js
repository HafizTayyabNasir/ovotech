import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#0A1E5C" />
            <path d="M8 16L12 10H20L24 16L20 22H12L8 16Z" fill="#fff" />
            <circle cx="16" cy="16" r="3" fill="#0A1E5C" />
          </svg>
          <span className={styles.logoText}>OVOTECH</span>
        </Link>
        
        <ul className={styles.navLinks}>
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
                <div className={styles.megaPromo} style={{ background: "linear-gradient(135deg, #2563eb, #1e3a8a)" }}>
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
        </ul>
        <Link href="/contact" className="btn btn-primary">Book a Demo</Link>
      </div>
    </nav>
  );
}
