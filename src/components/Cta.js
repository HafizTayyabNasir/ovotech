"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute left-10 bottom-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2" />
      <div className="absolute right-20 bottom-10 w-20 h-20 rounded-full border-2 border-white/10" />

      <div className="container relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Ready to Automate
              <br />
              Your Workflows?
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Book a demo today and see how Ovotech can transform your GP
              practice. Start saving time and reducing costs.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary font-bold text-sm px-8 py-4 rounded-xl hover:bg-white/90 hover:shadow-2xl transition-all inline-flex items-center gap-2"
            >
              Book a Demo <span>→</span>
            </Link>
          </div>
          <div className="shrink-0 hidden lg:block">
            <img
              src="/cta-man.png"
              alt="Healthcare professional"
              className="w-80 h-auto rounded-2xl opacity-90"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
