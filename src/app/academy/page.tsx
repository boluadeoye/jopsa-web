"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Briefcase, Users, Award, ArrowRight } from "lucide-react";

const sections = [
  {
    title: "Certificate Programs",
    desc: "Professional training in Mediation, Negotiation, and Leadership.",
    icon: <BookOpen size={32} />,
    href: "/academy/programs",
    color: "bg-blue-900"
  },
  {
    title: "Business Services",
    desc: "Scholarly editing, book publishing, and educational sales.",
    icon: <Briefcase size={32} />,
    href: "/academy/services",
    color: "bg-emerald-900"
  },
  {
    title: "Strategic Partnerships",
    desc: "Our alliances with GAMIP, CePReDiP, and global institutions.",
    icon: <Users size={32} />,
    href: "/academy/partners",
    color: "bg-purple-900"
  },
  {
    title: "Leadership & Governance",
    desc: "Meet the Director and the Governing Council.",
    icon: <Award size={32} />,
    href: "/academy/about",
    color: "bg-amber-900"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function AcademyHome() {
  return (
    <main className="min-h-screen bg-obsidian-950 text-white pb-24">
      
      {/* === HERO === */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#152036,transparent_70%)]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-6">
            <div className="px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              Professional Training Wing
            </div>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-7xl mb-6 tracking-tight">
            The Academy
          </motion.h1>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A center of excellence dedicated to equipping the next generation of peace-builders with practical skills and intellectual tools.
          </motion.p>
        </div>
      </section>

      {/* === NAVIGATION GRID === */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {sections.map((s, i) => (
            <motion.div key={i} variants={item}>
              <Link href={s.href} className="group relative block h-full p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all overflow-hidden">
                
                {/* Hover Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-gold-500 to-transparent`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 p-4 bg-obsidian-900 rounded-2xl w-fit text-gold-500 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    {s.icon}
                  </div>
                  
                  <h3 className="font-serif text-3xl text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {s.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {s.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:gap-4 transition-all">
                    <span>Explore</span>
                    <ArrowRight size={14} className="text-gold-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}
