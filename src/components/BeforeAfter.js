"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const withoutItems = [
  "Manual data entry across multiple systems",
  "Hours spent on prescription processing",
  "Constant referral backlogs and delays",
  "Invoicing errors and late payments",
];

const withItems = [
  "Automated data flow between systems",
  "75% faster prescription processing",
  "Smart referral routing with zero backlogs",
  "Accurate invoicing and faster payment cycles",
];

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="container">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold tracking-[2px] text-primary mb-3 uppercase">
            The Ovotech Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading leading-tight">
            Before vs After Automation
          </h2>
          <p className="text-text-body mt-4 max-w-xl mx-auto text-base">
            See how GP practices transform their operations with Ovotech&apos;s intelligent automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {/* Without */}
          <motion.div
            className="bg-white rounded-2xl p-8 border border-red-100 shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-500 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </div>
              <h3 className="text-lg font-bold text-text-heading">Without Ovotech</h3>
            </div>
            <ul className="space-y-4">
              {withoutItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" className="shrink-0 mt-0.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  <span className="text-sm text-text-body">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With */}
          <motion.div
            className="bg-white rounded-2xl p-8 border border-green-100 shadow-sm ring-2 ring-green-200/50"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
              </div>
              <h3 className="text-lg font-bold text-text-heading">With Ovotech</h3>
            </div>
            <ul className="space-y-4">
              {withItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" className="shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                  <span className="text-sm text-text-body">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="bg-primary text-white font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            Start Your Transformation <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
