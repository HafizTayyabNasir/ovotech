import styles from "./Cta.module.css";

export default function Cta() {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h2>
            Ready to Automate
            <br />
            Your Workflows?
          </h2>
          <p>
            Book a demo today and see how Ovotech can transform your GP
            practice.
          </p>
          <a href="#" className="btn btn-cta">
            Book a Demo <span>&rarr;</span>
          </a>
        </div>
        <div className={styles.image}>
          <img src="/cta-man.png" alt="Healthcare professional" />
        </div>
      </div>
    </section>
  );
}
