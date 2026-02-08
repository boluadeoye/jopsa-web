"use client";
import issues from "@/data/journal/issues.json";
import { BookOpen, ArrowRight, Calendar, Hash, Share2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CurrentIssue() {
  const current = issues[0];

  const handleShare = () => {
    const text = `Journal of Peace Service Academy - New Release: ${current.title}`;
    if (navigator.share) {
      navigator.share({ title: 'JoPSA New Release', text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Issue link copied");
    }
  };

  return (
    <main className="min-h-screen bg-[#F9F8F4] pb-24">
      <section className="relative pt-32 pb-24 px-6 bg-obsidian-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-64 h-80 bg-obsidian-900 rounded-r-xl shadow-[20px_20px_60px_rgba(0,0,0,0.5)] border-l-4 border-gold-500/50 flex flex-col justify-between p-8 overflow-hidden group hover:scale-105 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-gold-500 flex items-center justify-center text-gold-500 font-serif font-bold text-xl mb-6">JP</div>
                <h1 className="font-serif text-3xl text-white leading-tight mb-4 font-medium uppercase tracking-tight">Peace Service <br/><span className="text-gold-500">Academy</span></h1>
              </div>
              <p className="relative z-10 text-xs font-mono text-gold-400 font-bold">{current.volume} • {current.number}</p>
            </div>
          </motion.div>

          <div className="lg:col-span-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded border border-gold-500/30 text-gold-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                <BookOpen size={12} /> Current Release
              </span>
              <button onClick={handleShare} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-gold-500 transition-all">
                <Share2 size={16} /> Share This Issue
              </button>
            </div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-6xl mb-8 tracking-tight text-white leading-tight font-medium">
              {current.title}
            </motion.h2>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-100 px-10 py-8 flex items-center justify-between">
            <h3 className="font-serif text-3xl text-obsidian-950 font-medium">Table of Contents</h3>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{current.date}</span>
          </div>
          <div className="divide-y divide-slate-100">
            {current.articles.map((art, i) => (
              <motion.div key={i} whileHover={{ x: 10 }} className="group p-10 hover:bg-slate-50 transition-all cursor-pointer relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-500 opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gold-600 mb-2 block">Article {i + 1}</span>
                    <h4 className="font-serif text-2xl md:text-3xl text-obsidian-900 mb-4 group-hover:text-gold-600 transition-colors font-medium leading-tight">{art.title}</h4>
                    <p className="text-sm text-slate-500 font-serif italic uppercase tracking-wider">{art.author}</p>
                  </div>
                  <div className="flex items-center gap-10">
                    <span className="text-xs font-mono text-slate-400 font-bold uppercase">pp. {art.pages}</span>
                    <Link href={`/journal/article/${art.slug}`} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-300 group-hover:bg-obsidian-900 group-hover:text-white group-hover:border-obsidian-900 transition-all shadow-sm">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
