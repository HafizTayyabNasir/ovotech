"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5"><path d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/><path d="M2 12h4M18 12h4"/></svg>,
    title: "Connect",
    desc: "We connect with your existing GP software securely.",
  },
  {
    num: 2,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
    title: "Configure",
    desc: "We configure workflows to match your practice.",
  },
  {
    num: 3,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: "Automate",
    desc: "AI & RPA bots handle repetitive administrative tasks.",
  },
  {
    num: 4,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    title: "Monitor",
    desc: "Real-time monitoring ensures accuracy.",
  },
  {
    num: 5,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>,
    title: "Improve",
    desc: "Continuous optimisation reduces errors and improves.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          {/* Left */}
          <motion.div
            className="lg:w-80 shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold tracking-[2px] text-primary mb-3 uppercase">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading leading-tight mb-5">
              Simple. Smart.
              <br />
              Seamless.
            </h2>
            <p className="text-text-body text-base leading-relaxed mb-7">
              Ovotech integrates with your existing systems and automates your
              workflows with accuracy and compliance.
            </p>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold text-sm px-7 py-3 rounded-xl hover:bg-primary hover:text-white transition-all"
            >
              See How it Works <span>→</span>
            </Link>
          </motion.div>

          {/* Right — Steps */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-6 border border-border-light hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {s.num}
                </div>
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  {s.icon}
                </div>
                <h4 className="text-base font-bold text-text-heading mb-2">{s.title}</h4>
                <p className="text-xs text-text-muted leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
