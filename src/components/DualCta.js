"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const ctas = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M8 4v-2M16 4v-2"/></svg>,
    title: "Schedule a Demo",
    desc: "See Ovotech in action with a personalised walkthrough.",
    btnText: "Book a Demo",
    href: "/contact",
    primary: true,
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: "Explore Solutions",
    desc: "Browse our complete healthcare automation suite.",
    btnText: "View Solutions",
    href: "/solutions",
    primary: false,
  },
];

export default function DualCta() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {ctas.map((cta, i) => (
            <motion.div
              key={i}
              className={`rounded-2xl p-8 text-center border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${cta.primary ? "bg-primary text-white border-primary" : "bg-white text-text-heading border-border-light"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 ${cta.primary ? "bg-white/15 text-white" : "bg-primary/10 text-primary"}`}>
                {cta.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{cta.title}</h3>
              <p className={`text-sm leading-relaxed mb-6 ${cta.primary ? "text-white/70" : "text-text-muted"}`}>{cta.desc}</p>
              <Link href={cta.href} className={`inline-flex items-center gap-2 font-semibold text-sm px-7 py-3 rounded-xl transition-all ${cta.primary ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-white hover:bg-primary-dark"}`}>
                {cta.btnText} <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
