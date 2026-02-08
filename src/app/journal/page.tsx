"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Share2 } from "lucide-react";
import meta from "@/data/journal/meta.json";
import issues from "@/data/journal/issues.json";

export default function JournalHome() {
  const currentIssue = issues[0];

  const handleShare = () => {
    const text = `Explore the scholarly repository of the Journal of Peace Service Academy (JoPSA): ${window.location.href}`;
    if (navigator.share) {
      navigator.share({ title: 'JoPSA Journal', text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Journal link copied to clipboard");
    }
  };

  return (
    <main className="min-h-screen bg-[#F9F8F4] text-obsidian-900">
      <section className="relative pt-24 pb-20 px-6 bg-obsidian-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded border border-gold-500/30 text-gold-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Scholarly Repository
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-7xl mb-6 tracking-tight text-white">
            Journal of Peace <br/> Service Academy
          </motion.h1>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/journal/current" className="px-8 py-3 bg-gold-500 text-obsidian-950 font-black text-[10px] uppercase tracking-widest rounded hover:bg-white transition-all shadow-xl">
              View Current Issue
            </Link>
            <button onClick={handleShare} className="px-8 py-3 border border-white/20 text-white font-black text-[10px] uppercase tracking-widest rounded hover:bg-white/10 flex items-center gap-2 transition-all">
              <Share2 size={14} /> Share Portal
            </button>
          </div>
        </div>
      </section>

      {/* ... Rest of the page ... */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-obsidian-900 mb-6 font-medium italic">Aims & Scope</h2>
          <p className="font-serif text-xl md:text-2xl text-slate-700 leading-relaxed">"{meta.aims_scope}"</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400">Featured Research</span>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>
          <div className="group relative bg-white p-10 rounded-2xl shadow-2xl border border-slate-100 hover:border-gold-500/30 transition-all">
            <p className="text-[10px] font-mono text-slate-400 mb-4 uppercase tracking-widest">{currentIssue.date} • {currentIssue.volume}</p>
            <h3 className="font-serif text-3xl text-obsidian-900 mb-6 group-hover:text-gold-600 transition-colors leading-tight font-medium">
              {currentIssue.featured_article.title}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-10 text-base md:text-lg italic font-serif">
              {currentIssue.featured_article.abstract.substring(0, 200)}...
            </p>
            <Link href={`/journal/article/${currentIssue.featured_article.slug}`} className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-obsidian-950 border-b-2 border-gold-500 pb-1 hover:text-gold-600 transition-all">
              Read Manuscript <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400">Why Publish With JoPSA</span>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>
          <div className="space-y-10">
            {meta.why_publish.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="mt-1 w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl md:text-2xl text-obsidian-900 mb-2 font-medium tracking-tight">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
