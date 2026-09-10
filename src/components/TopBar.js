import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-[#09132B] text-white/90 text-[13px] py-2.5 hidden md:block border-b border-white/10">
      <div className="site-container flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-medium">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A8E8" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            <span>0161 820 1123</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A8E8" strokeWidth="2.2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
            <span>ovotech.services@nhs.net</span>
          </div>
        </div>
        <div className="flex items-center gap-6 divide-x divide-white/20">
          <Link href="/contact" className="hover:text-white transition-colors font-medium">
            Contact Us
          </Link>
          <Link href="/security-compliance" className="pl-6 hover:text-white transition-colors font-medium">
            NHS Framework
          </Link>
          <button className="pl-6 text-white/80 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
