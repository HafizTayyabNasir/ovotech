"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is Ovotech and how does it work?",
    a: "Ovotech is a healthcare automation platform that helps GP practices and healthcare providers automate repetitive administrative tasks using AI and RPA. We integrate with your existing GP software securely, configure workflows to match your practice, and let AI bots handle the rest.",
  },
  {
    q: "Is Ovotech NHS accredited?",
    a: "Yes, Ovotech is fully NHS accredited and compliant with DSPT and DCB0129 standards for clinical safety. We also adhere to GDPR regulations for data protection.",
  },
  {
    q: "Which GP systems does Ovotech integrate with?",
    a: "Ovotech integrates with major GP systems including TPP SystmOne, EMIS Web, and other NHS-approved clinical systems. Our integration is secure and doesn't require changes to your existing infrastructure.",
  },
  {
    q: "How long does it take to set up Ovotech?",
    a: "Setup typically takes 2-4 weeks depending on the complexity of your workflows. Our team handles the entire onboarding process, from initial assessment to going live, with minimal disruption to your practice.",
  },
  {
    q: "What kind of support does Ovotech provide?",
    a: "We provide dedicated support including a named account manager, 24/7 monitoring of automated processes, regular performance reviews, and access to our Help Centre with guides and documentation.",
  },
  {
    q: "Can Ovotech scale across multiple practices?",
    a: "Absolutely. Ovotech is designed to scale across Primary Care Networks (PCNs) and multi-site practices. Our platform can be centrally managed while allowing individual practice customisation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-14">
          {/* Left */}
          <motion.div
            className="lg:w-80 shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-bold tracking-[2px] text-primary mb-3 uppercase">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading leading-tight mb-5">
              Frequently Asked
              <br />
              Questions
            </h2>
            <p className="text-text-body text-base leading-relaxed">
              Everything you need to know about Ovotech&apos;s healthcare automation platform.
            </p>
          </motion.div>

          {/* Right — Accordion */}
          <div className="flex-1">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="border-b border-border-light"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <button
                  className="w-full flex items-center justify-between py-5 text-left group"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className={`text-base font-semibold pr-4 transition-colors ${openIndex === i ? "text-primary" : "text-text-heading"} group-hover:text-primary`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-all ${openIndex === i ? "bg-primary text-white rotate-45" : "bg-bg-light text-text-heading"}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-text-body leading-relaxed pb-5 pr-12">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
