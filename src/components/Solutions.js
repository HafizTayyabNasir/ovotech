"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 12h6M12 9v6" />
      </svg>
    ),
    title: "Prescription Automation",
    desc: "Automate repeat prescriptions, reduce manual effort and notifications.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5">
        <path d="M12 5v14M5 12h14" /><circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: "Referral Automation",
    desc: "Automate incoming referrals, triage, and smart routing communications.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M8 4v-2M16 4v-2" />
      </svg>
    ),
    title: "Appointment Automation",
    desc: "Automate scheduling, reminders, and patient communication.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5">
        <path d="M4 4h16v16H4z" /><path d="M4 9h16M9 4v16" />
      </svg>
    ),
    title: "Invoice Automation",
    desc: "Automate invoice generation, validation, and processing.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Solutions() {
  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-[2px] text-primary mb-3 uppercase">
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading leading-tight">
            Automation for Every
            <br />
            Administrative Workflow
          </h2>
          <p className="text-text-body mt-4 max-w-xl mx-auto text-base">
            Streamline your practice with intelligent automation solutions designed for healthcare teams.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group bg-bg-light rounded-2xl p-7 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-text-heading mb-2.5 leading-snug">{s.title}</h3>
              <p className="text-sm text-text-body leading-relaxed mb-4">{s.desc}</p>
              <Link
                href="/solutions"
                className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 group-hover:gap-3 transition-all"
              >
                Explore More <span>→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold text-sm px-7 py-3 rounded-xl hover:bg-primary hover:text-white transition-all"
          >
            View All Solutions <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
