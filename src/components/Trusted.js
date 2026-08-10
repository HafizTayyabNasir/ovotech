import styles from "./Trusted.module.css";

export default function Trusted() {
  return (
    <section className={styles.trusted}>
      <div className="container">
        <span className="section-label">TRUSTED BY NHS &amp; PRIVATE TEAMS</span>
        <h2 className="section-title">Real Results. Real Impact.</h2>
        <div className={styles.logos}>
          <span className={`${styles.logoLg} ${styles.nhs}`}>NHS</span>
          <span className={styles.logoLg}>tpp</span>
          <span className={styles.logoLg}>
            <svg width="60" height="24" viewBox="0 0 60 24">
              <text x="0" y="18" fontFamily="Inter" fontWeight="700" fontSize="18" fill="#333">emis</text>
            </svg>
          </span>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h4>GP Practice – London</h4>
            <p>Reduced prescription processing time by 75% using Ovotech.</p>
          </div>
          <div className={styles.card}>
            <h4>GP Practice – Manchester</h4>
            <p>Automated incoming referrals and cut manual workload significantly.</p>
          </div>
          <div className={styles.card}>
            <h4>GP Practice – Birmingham</h4>
            <p>Automated invoicing and improved payment cycle times.</p>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statVal}>75%</span>
            <span className={styles.statLabel}>Total Saved</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statVal}>60%</span>
            <span className={styles.statLabel}>Workload Reduced</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statVal}>45%</span>
            <span className={styles.statLabel}>Faster Payments</span>
          </div>
        </div>
        <div className="center-btn">
          <a href="#" className="btn btn-outline dark">
            View More Case Studies <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
