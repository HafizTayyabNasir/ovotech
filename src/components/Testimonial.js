"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div
          className="bg-gradient-to-br from-[#f8f7ff] to-[#f0eeff] rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Quote */}
          <div className="flex-1">
            <span className="inline-block text-xs font-bold tracking-[2px] text-primary mb-4 uppercase">
              What Our Clients Say
            </span>
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl font-medium text-text-heading leading-relaxed mb-8 relative">
              <span className="text-primary text-5xl font-serif absolute -top-4 -left-2 opacity-30">&ldquo;</span>
              Ovotech has transformed the way we handle administrative tasks. Our
              team saves hours every day, and our patients benefit from faster,
              more accurate service.
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src="/testimonial-man.png"
                alt="Dr. Sarah Mitchell"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div>
                <strong className="text-base font-bold text-text-heading block">Dr. Sarah Mitchell</strong>
                <span className="text-sm text-text-muted">Practice Manager, MHGP Practice</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="shrink-0 flex flex-col items-center lg:items-start gap-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-border-light">
              <div className="text-5xl font-extrabold text-primary mb-2">81.8%</div>
              <div className="text-sm text-text-muted font-medium mb-4">Net Promoter Score</div>
              <Link
                href="/case-studies"
                className="bg-primary text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                Read More Stories <span>→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
