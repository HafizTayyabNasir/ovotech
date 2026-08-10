import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className="section-label">HOW IT WORKS</span>
          <h2 className="section-title left-align">
            Simple. Smart.
            <br />
            Seamless.
          </h2>
          <p>
            Ovotech integrates with your existing systems and automates your
            workflows with accuracy and compliance.
          </p>
          <a href="#" className="btn btn-outline dark">
            See How it Works <span>&rarr;</span>
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
                  <path d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z" />
                  <path d="M2 12h4M18 12h4" />
                </svg>
              </div>
              <h4>Connect</h4>
              <p>We connect with your existing GP software securely.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </div>
              <h4>Configure</h4>
              <p>We configure workflows to match your practice.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h4>Automate</h4>
              <p>AI & RPA bots handle repetitive administrative tasks.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>4</div>
              <div className={styles.stepIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h4>Monitor</h4>
              <p>Real-time monitoring ensures accuracy.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>5</div>
              <div className={styles.stepIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
                  <path d="M23 6l-9.5 9.5-5-5L1 18" />
                  <path d="M17 6h6v6" />
                </svg>
              </div>
              <h4>Improve</h4>
              <p>Continuous optimisation reduces errors and improves.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
