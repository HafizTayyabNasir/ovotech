"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg>,
    title: "Reduce Admin Workload",
    desc: "Automate repetitive tasks so your team can focus on patient care.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
    title: "Save Staff Time",
    desc: "Recover hours each day with intelligent workflow automation.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>,
    title: "Improve Accuracy",
    desc: "AI-powered systems reduce human errors in data entry and processing.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#362D7E" strokeWidth="1.5"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
    title: "Reduce Costs",
    desc: "Cut operational costs without compromising quality of service.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Left — Image */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              <img
                src="/benefits-doctor.png"
                alt="Healthcare professional using Ovotech"
                className="w-full rounded-2xl shadow-xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-3xl font-extrabold">120+</div>
                <div className="text-xs text-white/70 font-medium">Practices Automated</div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-accent/10 rounded-full -z-10" />
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="inline-block text-xs font-bold tracking-[2px] text-primary mb-3 uppercase">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading leading-tight mb-4">
              More Time for Care.
              <br />
              Less Time on Admin.
            </h2>
            <p className="text-text-body text-base leading-relaxed mb-8 max-w-md">
              Ovotech integrates with your existing systems and automates your
              workflows with accuracy and compliance.
            </p>

            {/* 2x2 feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-3.5 items-start">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-heading mb-1">{f.title}</h4>
                    <p className="text-xs text-text-muted leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/how-it-works"
              className="bg-primary text-white font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              See How it Works <span>→</span>
            </Link>
          </motion.div>
        </div>

        {/* Full-width secondary paragraph */}
        <motion.div
          className="mt-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-body leading-relaxed">
            From prescription processing to referral management, Ovotech&apos;s AI and RPA solutions are built for NHS and private GP practices. Reduce errors, improve patient outcomes, and scale without extra headcount.
          </p>
          <Link href="/solutions" className="text-primary font-semibold text-sm mt-4 inline-flex items-center gap-1.5 hover:gap-3 transition-all">
            Explore our full suite of solutions <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
