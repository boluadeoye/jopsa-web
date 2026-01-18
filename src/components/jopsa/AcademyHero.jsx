"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AcademyHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 bg-obsidian-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-900/50 to-obsidian-900"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl"
      >
        {/* Logo Placeholder */}
        <div className="w-24 h-24 border-2 border-gold-500 rounded-full mx-auto mb-12 flex items-center justify-center font-serif text-3xl text-gold-500 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
          JP
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-[1.1]">
          Creative Thinking <br/> & Innovation
        </h1>
        
        <div className="h-1 w-24 bg-gold-500 mx-auto mb-8"></div>

        <p className="font-sans text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gold-400 mb-12">
          Empowering the Next Generation of Peace-Builders
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <Link href="/academy/programs" className="group flex flex-col items-center gap-2">
            <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-gold-400 transition-colors">View Programs</span>
            <span className="h-px w-0 group-hover:w-full bg-gold-500 transition-all duration-300"></span>
          </Link>
          <Link href="/journal" className="group flex flex-col items-center gap-2">
            <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-gold-400 transition-colors">Read Journal</span>
            <span className="h-px w-0 group-hover:w-full bg-gold-500 transition-all duration-300"></span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
