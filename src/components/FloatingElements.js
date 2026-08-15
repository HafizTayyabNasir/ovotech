"use client";
import { useState } from "react";

export default function FloatingElements() {
  const [cookieAccepted, setCookieAccepted] = useState(false);

  return (
    <>
      {/* Floating Call Button */}
      <a
        href="tel:+448001234567"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-xl shadow-primary/30 flex items-center justify-center hover:bg-primary-dark hover:scale-110 transition-all"
        aria-label="Call now"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      </a>

      {/* Cookie Consent */}
      {!cookieAccepted && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border-light shadow-2xl p-4 sm:p-5">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-body text-center sm:text-left">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => setCookieAccepted(true)}
                className="bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Accept
              </button>
              <button
                onClick={() => setCookieAccepted(true)}
                className="border border-border-light text-text-heading text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-bg-light transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
