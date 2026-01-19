"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Optimized Cloudinary URLs (f_auto, q_auto applied)
const images = [
  "https://res.cloudinary.com/dwbjb3svx/image/upload/f_auto,q_auto/v1768786219/blog_assets/xzzjwx3wxxj902uahjpl.jpg", // Architecture
  "https://res.cloudinary.com/dwbjb3svx/image/upload/f_auto,q_auto/v1768786194/blog_assets/uqsvo2wu5lg4mdhsiv0s.jpg", // Handshake
  "https://res.cloudinary.com/dwbjb3svx/image/upload/f_auto,q_auto/v1768786178/blog_assets/qyur9rnpasjt9owvlbi7.jpg", // Journal
  "https://res.cloudinary.com/dwbjb3svx/image/upload/f_auto,q_auto/v1768786164/blog_assets/birjesviiw5m6w706xh4.jpg"  // Boardroom
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
            animate={{ opacity: 0.6, scale: 1 }} // Increased opacity slightly for better visibility of the beautiful art
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
        </AnimatePresence>
        
        {/* Cinematic Gradient Overlays (Crucial for Text Pop) */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-900/90 via-obsidian-900/40 to-obsidian-900"></div>
        <div className="absolute inset-0 bg-obsidian-950/30 mix-blend-multiply"></div>
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
