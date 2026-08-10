import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <span className="section-label" style={{ textAlign: "left" }}>BENEFITS</span>
        <h2 className="section-title left-align">
          More Time for Care.
          <br />
          Less Time on Admin.
        </h2>
        <div className={styles.inner}>
          <div className={styles.grid}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
              </div>
              <span>
                Reduce
                <br />
                Admin Workload
              </span>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <span>
                Save Staff
                <br />
                Time
              </span>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <span>
                Improve
                <br />
                Accuracy
              </span>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <span>
                Reduce
                <br />
                Cancellation Costs
              </span>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <span>
                Better Patient
                <br />
                Experience
              </span>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <span>
                Scale Without
                <br />
                Extra Headcount
              </span>
            </div>
          </div>
          <div className={styles.image}>
            <img src="/benefits-man.png" alt="Healthcare professional" />
            <div className={styles.badge}>120+</div>
          </div>
        </div>
      </div>
    </section>
  );
}
