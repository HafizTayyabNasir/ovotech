import styles from "./Solutions.module.css";

const solutions = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 12h6M12 9v6" />
      </svg>
    ),
    title: "Prescription\nAutomation",
    desc: "Automate repeat prescriptions, reduce manual effort and notifications.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
        <path d="M12 5v14M5 12h14" /><circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: "Referral\nAutomation",
    desc: "Automate incoming referrals, triage, and smart routing communications.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M8 4v-2M16 4v-2" />
      </svg>
    ),
    title: "Appointment\nAutomation",
    desc: "Automate scheduling, reminders, and patient communication.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
        <path d="M4 4h16v16H4z" /><path d="M4 9h16M9 4v16" />
      </svg>
    ),
    title: "Invoice\nAutomation",
    desc: "Automate invoice generation, validation, and processing.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Policy Update\nAutomation",
    desc: "Automate policy verifying, notifications, and updates.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0A1E5C" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    title: "Admin & Document\nAutomation",
    desc: "Automate letters, documents, data entry, and reporting.",
  },
];

export default function Solutions() {
  return (
    <section className={styles.solutions} id="solutions">
      <div className="container">
        <span className="section-label">OUR SOLUTIONS</span>
        <h2 className="section-title">
          Automation for Every
          <br />
          Administrative Workflow
        </h2>
        <div className={styles.grid}>
          {solutions.map((s, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title.split("\n").map((line, j) => (
                <span key={j}>{line}{j === 0 && <br />}</span>
              ))}</h3>
              <p>{s.desc}</p>
              <a href="#" className={styles.learnLink}>
                Learn More <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
        <div className="center-btn">
          <a href="#" className="btn btn-outline dark">
            View All Solutions <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
