"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const images = [
  "https://images.unsplash.com/photo-1541339907198-e08756edd811?q=80&w=2070", // Placeholder 1
  "https://images.unsplash.com/photo-1521791136364-798a730bb361?q=80&w=2070", // Placeholder 2
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070", // Placeholder 3
  "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070"  // Placeholder 4
];

export default function AcademyHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-obsidian-950">
      
      {/* === BACKGROUND SLIDESHOW === */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>
        {/* Dark Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-900/80 via-transparent to-obsidian-900"></div>
        <div className="absolute inset-0 bg-obsidian-900/40"></div>
      </div>

      {/* === CONTENT === */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 max-w-5xl w-full"
      >
        {/* Institutional Seal */}
        <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-gold-500 rounded-full mx-auto mb-8 md:mb-12 flex items-center justify-center font-serif text-2xl md:text-3xl text-gold-500 shadow-[0_0_50px_rgba(212,175,55,0.3)] bg-obsidian-900/50 backdrop-blur-sm">
          JP
        </div>

        <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-[1.1] text-white drop-shadow-2xl">
          Creative Thinking <br className="hidden md:block"/> & Innovation
        </h1>
        
        <div className="h-1 w-16 md:w-24 bg-gold-500 mx-auto mb-8 shadow-[0_0_15px_rgba(212,175,55,0.8)]"></div>

        <p className="font-sans text-[10px] md:text-sm font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-gold-400 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Empowering the Next Generation of Peace-Builders
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-20 items-center">
          <Link href="/academy/programs" className="group flex flex-col items-center gap-3">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-white group-hover:text-gold-400 transition-all">View Programs</span>
            <span className="h-[2px] w-8 group-hover:w-full bg-gold-500 transition-all duration-500 shadow-[0_0_10px_#D4AF37]"></span>
          </Link>
          <Link href="/journal" className="group flex flex-col items-center gap-3">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-white group-hover:text-gold-400 transition-all">Read Journal</span>
            <span className="h-[2px] w-8 group-hover:w-full bg-gold-500 transition-all duration-500 shadow-[0_0_10px_#D4AF37]"></span>
          </Link>
        </div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 flex gap-3 z-20">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-gold-500' : 'w-2 bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
}
