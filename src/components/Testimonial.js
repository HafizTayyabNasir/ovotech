import styles from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <section className={styles.testimonial}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className="section-label" style={{ textAlign: "left", marginBottom: "20px" }}>
            WHAT OUR CLIENTS SAY
          </span>
          <blockquote>
            "Ovotech has transformed the way we handle administrative tasks. Our
            team saves hours every day, and our patients benefit from faster,
            more accurate service."
          </blockquote>
        </div>
        <div className={styles.right}>
          <img src="/testimonial-man.png" alt="Dr. Sarah Mitchell" />
          <div className={styles.info}>
            <strong>Dr. Sarah Mitchell</strong>
            <span>Practice Manager</span>
            <span>MHGP Practice</span>
          </div>
        </div>
      </div>
    </section>
  );
}
