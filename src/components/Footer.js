import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#fff" />
              <path d="M8 16L12 10H20L24 16L20 22H12L8 16Z" fill="#0A1E5C" />
              <circle cx="16" cy="16" r="3" fill="#fff" />
            </svg>
            <span>OVOTECH</span>
          </div>
          <p>
            Ovotech helps GP practices and healthcare providers automate primary
            care administrative tasks.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
                <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" fill="#0A1E5C" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.linksGroup}>
          <div className={styles.col}>
            <h4>Solutions</h4>
            <Link href="/solutions/prescription-automation">Prescription Automation</Link>
            <Link href="/solutions/referral-automation">Referral Automation</Link>
            <Link href="/solutions/appointment-automation">Appointment Automation</Link>
            <Link href="/solutions/invoice-automation">Invoice Automation</Link>
            <Link href="/solutions/policy-update-automation">Policy Update Automation</Link>
          </div>
          <div className={styles.col}>
            <h4>Who We Help</h4>
            <Link href="/who-we-help/gp-practices">GP Practices</Link>
            <Link href="/who-we-help/primary-care-networks">Primary Care Networks</Link>
            <Link href="/who-we-help/nhs-providers">NHS Healthcare Providers</Link>
          </div>
          <div className={styles.col}>
            <h4>Resources</h4>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/help-centre">Help Centre</Link>
          </div>
          <div className={styles.col}>
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/security-compliance">Security &amp; Compliance</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>&copy; 2025 Ovotech. All rights reserved.</span>
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
