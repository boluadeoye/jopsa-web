"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AcademyHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 md:px-6 bg-obsidian-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian-900/50 to-obsidian-900"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl w-full"
      >
        {/* Logo Placeholder */}
        <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-gold-500 rounded-full mx-auto mb-8 md:mb-12 flex items-center justify-center font-serif text-2xl md:text-3xl text-gold-500 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
          JP
        </div>

        <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-[1.1]">
          Creative Thinking <br/> & Innovation
        </h1>
        
        <div className="h-1 w-16 md:w-24 bg-gold-500 mx-auto mb-8"></div>

        <p className="font-sans text-[10px] md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-gold-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Empowering the Next Generation of Peace-Builders
        </p>

        {/* Buttons - Fixed Spacing */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-16 items-center">
          <Link href="/academy/programs" className="group flex flex-col items-center gap-2 w-48">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white group-hover:text-gold-400 transition-colors">View Programs</span>
            <span className="h-px w-12 group-hover:w-full bg-gold-500 transition-all duration-300"></span>
          </Link>
          <Link href="/journal" className="group flex flex-col items-center gap-2 w-48">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white group-hover:text-gold-400 transition-colors">Read Journal</span>
            <span className="h-px w-12 group-hover:w-full bg-gold-500 transition-all duration-300"></span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
