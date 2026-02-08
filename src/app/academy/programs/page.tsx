"use client";
import { getPrograms } from "@/lib/cms";
import { motion, Variants } from "framer-motion";
import { ArrowRight, BookOpen, Award } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 50 } 
  }
};

export default function ProgramsPage() {
  const programs = getPrograms();

  return (
    <main className="min-h-screen bg-obsidian-950 text-white pb-24">
      
      {/* Hero Header */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#152036,transparent_70%)]"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            <Award size={14} /> Academic Excellence
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-5xl md:text-7xl mb-6">
            Certificate Programs
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 text-lg leading-relaxed">
            Rigorous training designed for leaders, mediators, and peace-builders.
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((prog: any) => (
            <motion.div key={prog.id} variants={item} className="group relative h-full">
              <div className="absolute inset-0 bg-gold-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="relative h-full bg-obsidian-900 border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                
                {/* Icon & Code */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-obsidian-800 rounded-xl border border-white/5 text-gold-500 group-hover:text-white group-hover:bg-gold-500 transition-colors">
                    <BookOpen size={24} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded">
                    {prog.code}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {prog.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {prog.description}
                </p>

                {/* FIXED EMAIL LINK */}
                <a 
                  href={`mailto:info_peaceserviceacademy@gamip.org?cc=osereme1@gmail.com&subject=Application for ${prog.title} Program`}
                  className="w-full py-4 flex items-center justify-center gap-2 bg-white/5 hover:bg-gold-500 text-white hover:text-obsidian-900 font-bold text-xs uppercase tracking-widest rounded-xl transition-all border border-white/10 hover:border-gold-500"
                >
                  Enroll Now <ArrowRight size={14} />
                </a>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-24 text-center px-6">
        <div className="p-8 md:p-12 bg-gradient-to-r from-obsidian-900 to-obsidian-800 rounded-3xl border border-gold-500/20 max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-white mb-4">Need Custom Training?</h2>
          <p className="text-slate-400 mb-8">We offer tailored leadership and conflict resolution workshops for organizations.</p>
          {/* FIXED EMAIL LINK */}
          <a href="mailto:info_peaceserviceacademy@gamip.org?cc=osereme1@gmail.com&subject=Inquiry for Corporate Training" className="inline-flex items-center gap-3 text-gold-400 hover:text-white font-bold uppercase tracking-widest text-sm transition-colors">
            Contact Administration <ArrowRight size={16} />
          </a>
        </div>
      </section>

    </main>
  );
}
