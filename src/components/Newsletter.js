"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !consent) return;
    alert("Subscribed! Connect to your newsletter API.");
  };

  return (
    <section className="py-16 bg-bg-light border-t border-border-light">
      <div className="container">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-text-heading mb-2">Stay Updated</h3>
          <p className="text-sm text-text-muted mb-6">Get the latest healthcare automation insights delivered to your inbox.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-border-light bg-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              required
            />
            <button type="submit" className="bg-primary text-white font-semibold text-sm px-7 py-3 rounded-xl hover:bg-primary-dark transition-all shrink-0">
              Subscribe
            </button>
          </form>
          <label className="flex items-start gap-2 justify-center text-xs text-text-muted cursor-pointer">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 accent-primary" />
            <span>I agree to receive marketing emails. You can unsubscribe at any time.</span>
          </label>
        </motion.div>
      </div>
    </section>
  );
}
