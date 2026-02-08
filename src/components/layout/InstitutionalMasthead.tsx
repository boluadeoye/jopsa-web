"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// OFFICIAL PSA LOGO
const LOGO_URL = "https://res.cloudinary.com/dwbjb3svx/image/upload/f_auto,q_auto/v1769142511/blog_assets/dxbchgsoje3rjcwyq0zh.png";

export default function InstitutionalMasthead() {
  const pathname = usePathname();
  const isJournal = pathname.startsWith("/journal");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const brandTitle = isJournal ? "Journal of Peace Service Academy" : "Peace Service Academy";
  const brandSubtitle = isJournal ? "Scholarly Repository" : "Institutional Excellence • Est. 2020";

  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'; }, [isMobileMenuOpen]);

  return (
    <>
      <header key={pathname} className="sticky top-0 z-50 bg-obsidian-900 text-white border-b border-gold-600/30 shadow-2xl transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center relative z-50 bg-obsidian-900">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Real Logo Image */}
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gold-500/50 bg-white/10 p-0.5 overflow-hidden group-hover:border-gold-500 transition-all">
              <img src={LOGO_URL} alt="PSA Logo" className="w-full h-full object-contain" />
            </div>
            
            <div className="flex flex-col">
              <h1 className="font-serif text-xs md:text-lg tracking-wide leading-none uppercase transition-all duration-300 max-w-[200px] md:max-w-none">
                {brandTitle}
              </h1>
              <p className="text-[8px] md:text-[9px] text-gold-400 uppercase tracking-[0.2em] mt-1 font-bold hidden sm:block">
                {brandSubtitle}
              </p>
            </div>
          </Link>

          <button className="md:hidden p-2 text-gold-500 hover:bg-white/10 rounded-full transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex bg-obsidian-950 rounded-full p-1 border border-white/10 shadow-inner">
            <Link href="/academy" className={`px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${!isJournal ? 'bg-gold-500 text-obsidian-900 shadow-lg' : 'text-slate-500 hover:text-white'}`}>Academy</Link>
            <Link href="/journal" className={`px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isJournal ? 'bg-white text-obsidian-900 shadow-lg' : 'text-slate-500 hover:text-white'}`}>Journal</Link>
          </div>
        </div>

        <nav className="hidden md:block bg-obsidian-950/40 backdrop-blur-md border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <ul className="flex gap-8 overflow-x-auto py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap scrollbar-hide">
              {!isJournal ? (
                <>
                  <li><Link href="/academy/programs" className="hover:text-gold-500 transition-colors">Programs</Link></li>
                  <li><Link href="/academy/services" className="hover:text-gold-500 transition-colors">Business Services</Link></li>
                  <li><Link href="/academy/partners" className="hover:text-gold-500 transition-colors">Partnerships</Link></li>
                  <li><Link href="/academy/about" className="hover:text-gold-500 transition-colors">About Academy</Link></li>
                </>
              ) : (
                <>
                  <li><Link href="/journal/current" className="hover:text-white transition-colors">Current Issue</Link></li>
                  <li><Link href="/journal/archives" className="hover:text-white transition-colors">Archives</Link></li>
                  <li><Link href="/journal/guidelines" className="hover:text-white transition-colors">Submission Portal</Link></li>
                  <li><Link href="/journal/about" className="hover:text-white transition-colors">About the Journal</Link></li>
                </>
              )}
            </ul>
          </div>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-obsidian-950/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col">
              <div className="flex bg-obsidian-900 rounded-xl p-1.5 border border-white/10 mb-8">
                <Link href="/academy" className={`flex-1 text-center py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${!isJournal ? 'bg-gold-500 text-obsidian-900 shadow-lg' : 'text-slate-500'}`}>Academy</Link>
                <Link href="/journal" className={`flex-1 text-center py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${isJournal ? 'bg-white text-obsidian-900 shadow-lg' : 'text-slate-500'}`}>Journal</Link>
              </div>
              <div className="flex-1 overflow-y-auto">
                <ul className="flex flex-col gap-6 text-lg font-serif text-white">
                  {!isJournal ? (
                    <>
                      <li className="border-b border-white/5 pb-4"><Link href="/academy/programs" className="block hover:text-gold-500">Programs</Link></li>
                      <li className="border-b border-white/5 pb-4"><Link href="/academy/services" className="block hover:text-gold-500">Business Services</Link></li>
                      <li className="border-b border-white/5 pb-4"><Link href="/academy/partners" className="block hover:text-gold-500">Partnerships</Link></li>
                      <li className="border-b border-white/5 pb-4"><Link href="/academy/about" className="block hover:text-gold-500">About Academy</Link></li>
                    </>
                  ) : (
                    <>
                      <li className="border-b border-white/5 pb-4"><Link href="/journal/current" className="block hover:text-gold-500">Current Issue</Link></li>
                      <li className="border-b border-white/5 pb-4"><Link href="/journal/archives" className="block hover:text-gold-500">Archives</Link></li>
                      <li className="border-b border-white/5 pb-4"><Link href="/journal/guidelines" className="block hover:text-gold-500">Submission Portal</Link></li>
                      <li className="border-b border-white/5 pb-4"><Link href="/journal/about" className="block hover:text-gold-500">About the Journal</Link></li>
                    </>
                  )}
                </ul>
              </div>
              <div className="py-8 text-center border-t border-white/10">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">© 2026 Peace Service Academy</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
