"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, FileText, Users, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import meta from "@/data/journal/meta.json";
import issues from "@/data/journal/issues.json";

export default function JournalHome() {
  const currentIssue = issues[0];

  return (
    <main className="min-h-screen bg-[#F9F8F4] text-obsidian-900">
      
      {/* === HERO: The Scholarly Header === */}
      <section className="relative pt-24 pb-20 px-6 bg-obsidian-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#D4AF37_0%,transparent_40%)] opacity-20"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded border border-gold-500/30 text-gold-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <Globe size={12} /> Open Access • Peer Reviewed
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-7xl mb-6 tracking-tight">
            Journal of Peace <br/> Service Academy
          </motion.h1>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-sans text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A biannual repository of scholarly works advancing the science of conflict transformation and management.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/journal/current" className="px-8 py-3 bg-gold-500 text-obsidian-900 font-bold text-xs uppercase tracking-widest rounded hover:bg-white transition-colors">
              Read Current Issue
            </Link>
            <Link href="/journal/guidelines" className="px-8 py-3 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-white/10 transition-colors">
              Submit Manuscript
            </Link>
          </motion.div>
        </div>
      </section>

      {/* === AIMS & SCOPE (The Authority Section) === */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-obsidian-900 mb-6">Aims & Scope</h2>
          <p className="font-serif text-xl md:text-2xl text-slate-700 leading-relaxed italic">
            "{meta.aims_scope}"
          </p>
        </div>
      </section>

      {/* === FEATURED ISSUE & WHY PUBLISH === */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Current Issue Spotlight */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-slate-300"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Latest Publication</span>
            <div className="h-px flex-1 bg-slate-300"></div>
          </div>

          <div className="group relative bg-white p-8 rounded-xl shadow-xl border border-slate-100 hover:border-gold-500/30 transition-all">
            <div className="absolute top-0 right-0 bg-gold-500 text-obsidian-900 text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-xl">
              Editor's Choice
            </div>
            
            <p className="text-xs font-mono text-slate-400 mb-4">{currentIssue.date} • {currentIssue.volume}</p>
            <h3 className="font-serif text-3xl text-obsidian-900 mb-4 group-hover:text-gold-600 transition-colors">
              {currentIssue.featured_article.title}
            </h3>
            <p className="text-sm font-bold text-slate-600 mb-6 uppercase tracking-wide">
              By {currentIssue.featured_article.author}
            </p>
            <p className="text-slate-600 leading-relaxed mb-8 text-sm">
              {currentIssue.featured_article.abstract}
            </p>
            
            <Link href="/journal/current" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-obsidian-900 border-b-2 border-gold-500 pb-1 hover:text-gold-600 transition-colors">
              Read Full Article <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right: Why Publish (Value Prop) */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-slate-300"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Why Publish With JoPSA</span>
            <div className="h-px flex-1 bg-slate-300"></div>
          </div>

          <div className="space-y-8">
            {meta.why_publish.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-obsidian-50 flex items-center justify-center text-gold-600 shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-obsidian-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-obsidian-900 text-white rounded-xl text-center">
            <p className="font-serif text-lg mb-4">Ready to contribute to the discourse?</p>
            <Link href="/journal/guidelines" className="inline-block px-6 py-2 border border-gold-500 text-gold-500 text-xs font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-obsidian-900 transition-all">
              View Submission Guide
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}
