"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InstitutionalMasthead() {
  const pathname = usePathname();
  const isJournal = pathname.startsWith("/journal");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-obsidian-900 text-white border-b border-gold-600/30 shadow-2xl">
      {/* Top Identity Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gold-500 flex items-center justify-center font-serif text-gold-500 font-bold text-lg md:text-xl group-hover:bg-gold-500 group-hover:text-obsidian-900 transition-all">
            JP
          </div>
          <div className="flex flex-col">
            <h1 className="font-serif text-base md:text-lg tracking-wide leading-none uppercase">
              Peace Service Academy
            </h1>
            <p className="text-[8px] md:text-[9px] text-gold-400 uppercase tracking-[0.2em] mt-1 font-bold hidden sm:block">
              Institutional Excellence • Est. 2020
            </p>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-gold-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Wing Switcher */}
        <div className="hidden md:flex bg-obsidian-950 rounded-full p-1 border border-white/10 shadow-inner">
          <Link 
            href="/academy" 
            className={`px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${!isJournal ? 'bg-gold-500 text-obsidian-900 shadow-lg' : 'text-slate-500 hover:text-white'}`}
          >
            Academy
          </Link>
          <Link 
            href="/journal" 
            className={`px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isJournal ? 'bg-white text-obsidian-900 shadow-lg' : 'text-slate-500 hover:text-white'}`}
          >
            Journal
          </Link>
        </div>
      </div>

      {/* Desktop Contextual Navigation */}
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
                <li><Link href="/journal/submit" className="hover:text-white transition-colors">Submission Portal</Link></li>
                <li><Link href="/journal/editorial-board" className="hover:text-white transition-colors">Editorial Board</Link></li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-obsidian-900 border-t border-white/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-6">
              {/* Mobile Wing Switcher */}
              <div className="flex bg-obsidian-950 rounded-lg p-1 border border-white/10">
                <Link 
                  href="/academy" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex-1 text-center py-3 rounded-md text-xs font-bold uppercase tracking-widest ${!isJournal ? 'bg-gold-500 text-obsidian-900' : 'text-slate-500'}`}
                >
                  Academy
                </Link>
                <Link 
                  href="/journal" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex-1 text-center py-3 rounded-md text-xs font-bold uppercase tracking-widest ${isJournal ? 'bg-white text-obsidian-900' : 'text-slate-500'}`}
                >
                  Journal
                </Link>
              </div>

              {/* Mobile Links */}
              <ul className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-slate-300">
                {!isJournal ? (
                  <>
                    <li><Link href="/academy/programs" onClick={() => setIsMobileMenuOpen(false)}>Programs</Link></li>
                    <li><Link href="/academy/services" onClick={() => setIsMobileMenuOpen(false)}>Business Services</Link></li>
                    <li><Link href="/academy/partners" onClick={() => setIsMobileMenuOpen(false)}>Partnerships</Link></li>
                    <li><Link href="/academy/about" onClick={() => setIsMobileMenuOpen(false)}>About Academy</Link></li>
                  </>
                ) : (
                  <>
                    <li><Link href="/journal/current" onClick={() => setIsMobileMenuOpen(false)}>Current Issue</Link></li>
                    <li><Link href="/journal/archives" onClick={() => setIsMobileMenuOpen(false)}>Archives</Link></li>
                    <li><Link href="/journal/submit" onClick={() => setIsMobileMenuOpen(false)}>Submission Portal</Link></li>
                    <li><Link href="/journal/editorial-board" onClick={() => setIsMobileMenuOpen(false)}>Editorial Board</Link></li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
