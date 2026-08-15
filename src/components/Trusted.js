"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
    value: "75%",
    label: "Time Saved on Admin Tasks",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>,
    value: "60%",
    label: "Workload Reduced",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
    value: "45%",
    label: "Faster Payment Cycles",
  },
];

const cases = [
  { location: "GP Practice – London", text: "Reduced prescription processing time by 75% using Ovotech." },
  { location: "GP Practice – Manchester", text: "Automated incoming referrals and cut manual workload significantly." },
  { location: "GP Practice – Birmingham", text: "Automated invoicing and improved payment cycle times." },
];

export default function Trusted() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-[2px] text-primary mb-3 uppercase">
            Trusted by NHS &amp; Private Teams
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading leading-tight">
            Real Results. Real Impact.
          </h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-lg shadow-primary/5 border border-border-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                {s.icon}
              </div>
              <div className="text-4xl font-extrabold text-primary mb-2">{s.value}</div>
              <div className="text-sm text-text-muted font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Trust Logos */}
        <motion.div
          className="flex justify-center items-center gap-10 sm:gap-16 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-nhs-blue text-3xl font-extrabold tracking-wide">NHS</span>
          <span className="text-2xl font-extrabold text-gray-300 tracking-wide">tpp</span>
          <span className="text-2xl font-extrabold text-gray-300 tracking-wide">emis</span>
          <span className="text-2xl font-extrabold text-gray-300 tracking-wide">systmone</span>
        </motion.div>

        {/* Case Study Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {cases.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 border border-border-light hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h4 className="text-base font-bold text-text-heading mb-2">{c.location}</h4>
              <p className="text-sm text-text-body leading-relaxed">{c.text}</p>
            </div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold text-sm px-7 py-3 rounded-xl hover:bg-primary hover:text-white transition-all"
          >
            View More Case Studies <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
