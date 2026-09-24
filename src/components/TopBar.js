import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-[#0A1838] text-white/90 text-[13px] py-2.5 hidden md:block border-b border-white/10">
      <div className="site-container flex justify-between items-center">
        <div className="flex items-center gap-6">
          
          <div className="flex items-center gap-2 font-medium">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#02ACEA" strokeWidth="2.2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
            <span>support@ovotech.co.uk</span>
          </div>
        </div>
        <div className="flex items-center gap-6 divide-x divide-white/20">
          <Link href="/contact" className="hover:text-white transition-colors font-medium">
            Contact Us
          </Link>
          <Link href="/security-compliance" className="pl-6 hover:text-white transition-colors font-medium">
            Security &amp; Compliance (DSPT, DTAC, ISO 27001)
          </Link>

        </div>
      </div>
    </div>
  );
}
