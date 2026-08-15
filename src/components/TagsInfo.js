"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const tags = [
  "Prescription Automation",
  "Referral Automation",
  "Appointment Automation",
  "Invoice Automation",
  "Policy Update Automation",
  "Admin & Document Automation",
];

export default function TagsInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          {/* Left — Tags */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold tracking-[2px] text-primary mb-3 uppercase">
              Complete Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading leading-tight mb-4">
              Every Workflow,
              <br />
              Fully Automated.
            </h2>
            <p className="text-text-body text-base leading-relaxed mb-8 max-w-md">
              From front desk to back office, our solutions cover every aspect of GP
              practice administration.
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  className="inline-flex items-center gap-2 bg-primary/8 text-primary text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all cursor-pointer border border-primary/15"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
                  </svg>
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right — Stat Cards */}
          <motion.div
            className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 flex-1 min-w-[220px]">
              <div className="text-xs font-bold tracking-wider uppercase text-white/60 mb-3">Happiness Score</div>
              <div className="text-4xl font-extrabold mb-1">96%</div>
              <p className="text-sm text-white/60 mb-4">Client satisfaction rate</p>
              <Link href="/case-studies" className="text-sm font-semibold text-white/80 hover:text-white inline-flex items-center gap-1.5 transition-colors">
                View Results <span>→</span>
              </Link>
            </div>
            <div className="bg-white border-2 border-primary/10 rounded-2xl p-8 flex-1 min-w-[220px]">
              <div className="text-xs font-bold tracking-wider uppercase text-text-muted mb-3">Experts</div>
              <div className="text-4xl font-extrabold text-primary mb-1">120+</div>
              <p className="text-sm text-text-muted mb-4">Healthcare automation specialists</p>
              <Link href="/about" className="text-sm font-semibold text-primary hover:text-primary-dark inline-flex items-center gap-1.5 transition-colors">
                Meet the Team <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
