"use client";
import Link from "next/link";
import styles from "./Hero.module.css";
import { useState, useEffect } from "react";

const statements = [
  "Intelligent AI",
  "Reliable RPA",
  "Smart Workflows",
  "Automated Care"
];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delay = 2000;
    let timer;
    const i = loopNum % statements.length;
    const fullText = statements[i];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === fullText) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className={styles.badge}>HEALTHCARE AUTOMATION PLATFORM</span>
          <h1 className={styles.heading}>
            Scale Your Business With
            <br />
            <span className={styles.typeText}>{text}</span><span className={styles.cursor}>|</span>
          </h1>
          <p className={styles.desc}>
            Ovotech helps GP practices and healthcare providers automate
            repetitive admin tasks using AI and RPA. Save time. Reduce costs.
            Improve patient care.
          </p>
          <div className={styles.btns}>
            <Link href="/contact" className="btn btn-primary">
              Book a Demo <span>&rarr;</span>
            </Link>
            <Link href="/solutions" className="btn btn-outline">
              Explore Solutions <span>&rarr;</span>
            </Link>
          </div>
          <p className={styles.trustText}>
            Trusted by GP practices &amp; healthcare teams across the UK
          </p>
          <div className={styles.trustLogos}>
            <span className={`${styles.trustLogo} ${styles.nhs}`}>NHS</span>
            <span className={styles.trustLogo}>tpp</span>
            <span className={styles.trustLogo}>emis</span>
            <span className={styles.trustLogo}>systmone</span>
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.imgRing}>
            <div className={styles.orbit}>
              <div className={`${styles.decorativeDot} ${styles.dot1}`}></div>
              <div className={`${styles.decorativeDot} ${styles.dot2}`}></div>
              <div className={`${styles.decorativeDot} ${styles.dot3}`}></div>
            </div>
            <img src="/hero-banner-man.png" alt="Professional man working on laptop" />
          </div>
          <div className={`${styles.floatCard} ${styles.card1}`}>
            <div className={`${styles.floatIcon} ${styles.blueIcon}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M9 12h6M12 9v6" />
              </svg>
            </div>
            <div>
              <div className={styles.floatLabel}>Prescription Automator</div>
              <div className={styles.floatValue}>2,743</div>
            </div>
          </div>
          <div className={`${styles.floatCard} ${styles.card2}`}>
            <div className={`${styles.floatIcon} ${styles.greenIcon}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>
            <div>
              <div className={styles.floatLabel}>Referral Automation</div>
              <div className={`${styles.floatValue} ${styles.green}`}>Active</div>
            </div>
          </div>
          <div className={`${styles.floatCard} ${styles.card3}`}>
            <div>
              <div className={styles.floatLabel}>Invoices Automated</div>
              <div className={styles.floatValue}>1,192</div>
            </div>
          </div>
          <div className={`${styles.floatCard} ${styles.card4}`}>
            <div className={styles.floatValue}>205</div>
          </div>
        </div>
      </div>
    </section>
  );
}
