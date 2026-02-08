"use client";
import issues from "@/data/journal/issues.json";
import { BookOpen, ArrowRight, Calendar, Hash } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CurrentIssue() {
  const current = issues[0];

  return (
    <main className="min-h-screen bg-[#F9F8F4] pb-24">
      
      {/* === HERO: The Desk === */}
      <section className="relative pt-32 pb-24 px-6 bg-obsidian-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: The 3D Journal Cover */}
          <motion.div 
            initial={{ opacity: 0, y: 40, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1 }}
            className="md:col-span-4 flex justify-center md:justify-start perspective-1000"
          >
            <div className="relative w-64 h-80 bg-obsidian-900 rounded-r-xl shadow-[20px_20px_60px_rgba(0,0,0,0.5)] border-l-4 border-l-white/20 border-t border-t-white/10 border-b border-b-black/50 flex flex-col justify-between p-6 overflow-hidden group hover:scale-105 transition-transform duration-500">
              {/* Spine Highlight */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-white/20 to-transparent"></div>
              
              {/* Cover Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-gold-500 flex items-center justify-center text-gold-500 font-serif font-bold mb-6">JP</div>
                <h1 className="font-serif text-3xl text-white leading-tight mb-2">
                  Peace Service <br/> <span className="text-gold-500">Academy</span>
                </h1>
                <div className="h-0.5 w-10 bg-gold-500 mb-2"></div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400">Scholarly Repository</p>
              </div>

              <div className="relative z-10">
                <p className="text-4xl font-serif text-white/10 font-bold absolute bottom-0 right-0 -mb-4 -mr-4">2026</p>
                <p className="text-xs font-mono text-gold-400">{current.volume} • {current.number}</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: The Issue Details */}
          <div className="md:col-span-8 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded border border-gold-500/30 text-gold-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <BookOpen size={12} /> Current Issue
            </motion.div>
            
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl mb-6 tracking-tight leading-tight">
              {current.title}
            </motion.h2>
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-6 justify-center md:justify-start text-sm text-slate-400 font-mono">
              <span className="flex items-center gap-2"><Calendar size={14} className="text-gold-500"/> {current.date}</span>
              <span className="flex items-center gap-2"><Hash size={14} className="text-gold-500"/> ISSN: 2224-3453</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === TABLE OF CONTENTS === */}
      <section className="max-w-5xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-t-3xl shadow-2xl border border-slate-200 overflow-hidden">
          
          {/* Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-8 py-6">
            <h3 className="font-serif text-2xl text-obsidian-900">Table of Contents</h3>
          </div>

          {/* Articles List */}
          <div className="divide-y divide-slate-100">
            {current.articles.map((art, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 hover:bg-slate-50 transition-colors cursor-pointer relative"
              >
                {/* Hover Indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-2 py-0.5 rounded">
                        Article {i + 1}
                      </span>
                    </div>
                    <h4 className="font-serif text-2xl text-obsidian-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {art.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-serif italic">
                      {art.author}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 shrink-0">
                    <span className="text-xs font-mono text-slate-400">pp. {art.pages}</span>
                    <Link 
                      href={`/journal/article/${art.slug}`} 
                      className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-obsidian-900 group-hover:text-white group-hover:border-obsidian-900 transition-all"
                    >
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Footer */}
          <div className="bg-slate-50 p-6 text-center border-t border-slate-200">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Journal of Peace Service Academy • Vol 12, No 4
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
