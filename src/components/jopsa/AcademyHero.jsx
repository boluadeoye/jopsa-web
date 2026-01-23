"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

// OFFICIAL PSA LOGO
const LOGO_URL = "https://res.cloudinary.com/dwbjb3svx/image/upload/f_auto,q_auto/v1769142511/blog_assets/dxbchgsoje3rjcwyq0zh.png";

const images = [
  "https://res.cloudinary.com/dwbjb3svx/image/upload/f_auto,q_auto/v1768786219/blog_assets/xzzjwx3wxxj902uahjpl.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/f_auto,q_auto/v1768786194/blog_assets/uqsvo2wu5lg4mdhsiv0s.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/f_auto,q_auto/v1768786178/blog_assets/qyur9rnpasjt9owvlbi7.jpg",
  "https://res.cloudinary.com/dwbjb3svx/image/upload/f_auto,q_auto/v1768786164/blog_assets/birjesviiw5m6w706xh4.jpg"
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
    <section className="relative h-[100vh] w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-obsidian-950">
      
      {/* === BACKGROUND === */}
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
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images[index]})` }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 7, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-obsidian-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020408_120%)]"></div>
      </div>

      {/* === CONTENT LAYER === */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center pt-10">
        
        {/* 1. THE LOGO */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md shadow-[0_0_50px_rgba(212,175,55,0.4)] border border-gold-500/30 p-2">
            <img src={LOGO_URL} alt="PSA Logo" className="w-full h-full object-contain drop-shadow-xl" />
          </div>
        </motion.div>

        {/* 2. THE AFFILIATION STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 max-w-4xl bg-obsidian-900/60 backdrop-blur-md border-y border-gold-500/30 py-4 px-6 md:px-10"
        >
          <p className="font-serif text-sm md:text-lg text-white leading-relaxed font-medium tracking-wide">
            <span className="text-gold-400 font-bold">Peace Service Academy (PSA)</span> is affiliated to the <span className="text-gold-400 font-bold">Global Alliance for Ministries and Infrastructures for Peace (GAMIP)</span> as GAMIP training and academic unit committed to empowerment and capacity building as well as promoting scholarly publications via its <span className="italic">Journal of Peace Service Academy (JoPSA)</span>.
          </p>
        </motion.div>

        {/* 3. DYNAMIC HEADLINES */}
        <div className="h-32 md:h-40 flex flex-col items-center justify-center overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] text-white drop-shadow-2xl mb-2">
                {content[index].title}
              </h1>
              <p className="font-sans text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gold-500">
                {content[index].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4. BUTTONS */}
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

      {/* PROGRESS BAR */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <motion.div
          key={index}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
          className="h-full bg-gold-500 shadow-[0_0_10px_#D4AF37]"
        />
      </div>
    </section>
  );
}
