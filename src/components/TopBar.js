import Link from "next/link";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={`container ${styles.inner}`}>
        <span>
          Automating GP administrative tasks so your team can focus on what
          matters most — patients.
        </span>
        <div className={styles.links}>
          <Link href="/security-compliance">NHS Accredited</Link>
          <Link href="/security-compliance">GDPR Compliant</Link>
          <Link href="/contact">Request a Portfolio</Link>
        </div>
      </div>
    </div>
  );
}
