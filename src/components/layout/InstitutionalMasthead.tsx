"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function InstitutionalMasthead() {
  const pathname = usePathname();
  const isJournal = pathname.startsWith("/journal");

  return (
    <header className="sticky top-0 z-50 bg-obsidian-900 text-white border-b border-gold-600/30 shadow-2xl">
      {/* Top Identity Bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-full border-2 border-gold-500 flex items-center justify-center font-serif text-gold-500 font-bold text-xl group-hover:bg-gold-500 group-hover:text-obsidian-900 transition-all">
            JP
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif text-lg tracking-wide leading-none uppercase">
              Peace Service Academy
            </h1>
            <p className="text-[9px] text-gold-400 uppercase tracking-[0.3em] mt-1 font-bold">
              Institutional Excellence • Est. 2020
            </p>
          </div>
        </Link>

        {/* Wing Switcher */}
        <div className="flex bg-obsidian-950 rounded-full p-1 border border-white/10 shadow-inner">
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

      {/* Contextual Navigation */}
      <nav className="bg-obsidian-950/40 backdrop-blur-md border-t border-white/5">
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
    </header>
  );
}
