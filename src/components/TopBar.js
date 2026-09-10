import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-[#00A8E8] text-white text-[13px] py-3 hidden md:block border-b border-white/20 shadow-sm">
      <div className="site-container flex justify-between items-center">
        <div className="flex items-center gap-6 divide-x divide-white/30">
          <div className="flex items-center gap-2 pr-6 font-semibold">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span>15 Years of Experience</span>
          </div>
          <div className="flex items-center gap-2 pl-6 pr-6 font-semibold">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>250+ GP Practices</span>
          </div>
          <div className="flex items-center gap-2 pl-6 font-semibold">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 15l-2 5l-2.5 -1.5l-2.5 1.5l1 -5.5l-4 -3.5l5.5 -.5l2 -5l2 5l5.5 .5l-4 3.5l1 5.5z"/></svg>
            <span>5 Industry Awards</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/security-compliance" className="hover:text-white/90 transition-colors font-bold flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
            EMIS Web Integrated
          </Link>
          <Link href="/contact" className="hover:text-white/90 transition-colors font-bold flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full border border-white/30">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
            Contact Practice Team
          </Link>
        </div>
      </div>
    </div>
  );
}
