"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const statements = [
  "Intelligent AI",
  "Reliable RPA",
  "Smart Workflows",
  "Automated Care",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delay = 2000;
    let timer;
    const i = loopNum % statements.length;
    const fullText = statements[i];

    if (isDeleting) {
      timer = setTimeout(() => setText(fullText.substring(0, text.length - 1)), deletingSpeed);
    } else {
      timer = setTimeout(() => setText(fullText.substring(0, text.length + 1)), typingSpeed);
    }

    if (!isDeleting && text === fullText) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email";
    if (!formData.phone.trim()) errors.phone = "Phone is required";
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // TODO: Connect to form handler/API route
      alert("Form submitted! Connect to your API route.");
    }
  };

  const stats = [
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, value: "75%", label: "Time Saved" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg>, value: "60%", label: "Workload Reduced" },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>, value: "120+", label: "Practices Automated" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#f8f7ff] via-white to-[#f0eeff] pt-16 pb-10 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Content */}
          <motion.div
            className="flex-1 max-w-xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase">
              Healthcare Automation Platform
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.08] mb-5 text-text-heading">
              Scale Your Business With
              <br />
              <span className="text-primary whitespace-nowrap">{text}</span>
              <span className="font-light text-primary animate-pulse">|</span>
            </h1>
            <p className="text-base text-text-body leading-relaxed mb-8 max-w-md">
              Ovotech helps GP practices and healthcare providers automate
              repetitive admin tasks using AI and RPA. Save time. Reduce costs.
              Improve patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contact"
                className="bg-primary text-white font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-primary-dark hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
              >
                Book a Demo <span>→</span>
              </Link>
              <Link
                href="/solutions"
                className="border-2 border-primary text-primary font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-primary hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                Explore Solutions <span>→</span>
              </Link>
            </div>
            <p className="text-sm text-text-muted mb-4">
              Trusted by GP practices &amp; healthcare teams across the UK
            </p>
            <div className="flex items-center gap-6">
              <span className="text-nhs-blue text-xl font-extrabold tracking-wide">NHS</span>
              <span className="text-lg font-bold text-gray-400 tracking-wide">tpp</span>
              <span className="text-lg font-bold text-gray-400 tracking-wide">emis</span>
              <span className="text-lg font-bold text-gray-400 tracking-wide">systmone</span>
            </div>
          </motion.div>

          {/* Right — Lead Capture Form */}
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-white rounded-2xl shadow-2xl shadow-primary/10 p-8 border border-border-light">
              <h3 className="text-xl font-bold text-text-heading mb-1">Get a Free Consultation</h3>
              <p className="text-sm text-text-muted mb-6">Talk to our automation experts today</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-bg-light placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${formErrors.name ? "border-red-400" : "border-border-light"}`}
                  />
                  {formErrors.name && <span className="text-red-500 text-xs mt-1 block">{formErrors.name}</span>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-bg-light placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${formErrors.email ? "border-red-400" : "border-border-light"}`}
                  />
                  {formErrors.email && <span className="text-red-500 text-xs mt-1 block">{formErrors.email}</span>}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-bg-light placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${formErrors.phone ? "border-red-400" : "border-border-light"}`}
                  />
                  {formErrors.phone && <span className="text-red-500 text-xs mt-1 block">{formErrors.phone}</span>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all text-sm"
                >
                  Book a Demo →
                </button>
              </form>
              <p className="text-xs text-text-muted text-center mt-4">
                No spam. We respect your privacy.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats row below hero */}
        <motion.div
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-2xl px-6 py-5 shadow-md shadow-primary/5 border border-border-light">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                {s.icon}
              </div>
              <div>
                <div className="text-2xl font-extrabold text-primary">{s.value}</div>
                <div className="text-sm text-text-muted font-medium">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
