"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

// Optimized Cloudinary URLs
const images = [
  "https://res.cloudinary.com/dwbjb3svx/image/upload/f_auto,q_auto/v1768786219/blog_assets/xzzjwx3wxxj902uahjpl.jpg", // Architecture
  "https://res.cloudinary.com/dwbjb3svx/image/upload/f_auto,q_auto/v1768786194/blog_assets/uqsvo2wu5lg4mdhsiv0s.jpg", // Handshake
  "https://res.cloudinary.com/dwbjb3svx/image/upload/f_auto,q_auto/v1768786178/blog_assets/qyur9rnpasjt9owvlbi7.jpg", // Journal
  "https://res.cloudinary.com/dwbjb3svx/image/upload/f_auto,q_auto/v1768786164/blog_assets/birjesviiw5m6w706xh4.jpg"  // Boardroom
];

const content = [
  { title: "Institutional Excellence", subtitle: "A Center for Advanced Peace Studies" },
  { title: "Diplomacy & Dialogue", subtitle: "Forging Paths to Sustainable Resolution" },
  { title: "Scholarly Authority", subtitle: "The Journal of Peace Service Academy" },
  { title: "Strategic Leadership", subtitle: "Empowering the Next Generation" }
];

export default function AcademyHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[95vh] w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-obsidian-950">
      
      {/* === CINEMATIC BACKGROUND (Ken Burns Effect) === */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* The Image Layer */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images[index]})` }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 7, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* === LUXURY OVERLAYS === */}
        {/* 1. Darken base */}
        <div className="absolute inset-0 bg-obsidian-950/40"></div>
        {/* 2. Gradient from bottom (for text readability) */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent"></div>
        {/* 3. Vignette (Focus center) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020408_120%)]"></div>
        {/* 4. Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* === CONTENT LAYER === */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        
        {/* Animated Seal */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-10"
        >
          <div className="w-20 h-20 border border-gold-500/50 rounded-full flex items-center justify-center backdrop-blur-md bg-obsidian-900/30 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <span className="font-serif text-2xl text-gold-500 font-bold">JP</span>
          </div>
        </motion.div>

        {/* Dynamic Headlines */}
        <div className="h-48 md:h-64 flex flex-col items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-white drop-shadow-2xl mb-4">
                {content[index].title}
              </h1>
              <p className="font-sans text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gold-400">
                {content[index].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Divider */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-1 bg-gold-500 mb-12 shadow-[0_0_15px_#D4AF37]"
        />

        {/* Premium Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 w-full max-w-lg"
        >
          <Link href="/academy/programs" className="flex-1 group relative overflow-hidden rounded-full bg-gold-500 px-8 py-4 transition-all hover:bg-white">
            <div className="relative z-10 flex items-center justify-center gap-2 text-obsidian-950 font-bold text-xs uppercase tracking-widest">
              <span>Explore Academy</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          
          <Link href="/journal" className="flex-1 group relative overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 transition-all hover:bg-white/10 hover:border-gold-500">
            <div className="relative z-10 flex items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:text-gold-400">
              <span>Access Journal</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>

      </div>

      {/* === PROGRESS BAR & INDICATORS === */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <motion.div
          key={index}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
          className="h-full bg-gold-500 shadow-[0_0_10px_#D4AF37]"
        />
      </div>
      
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>

    </section>
  );
}
