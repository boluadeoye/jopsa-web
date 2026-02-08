"use client";
import issues from "@/data/journal/issues.json";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CurrentIssue() {
  const current = issues[0];

  return (
    <main className="min-h-screen bg-[#F9F8F4] pb-24">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-obsidian-900 text-white text-center">
        <span className="inline-block py-1 px-3 border border-gold-500/50 rounded text-[10px] font-bold uppercase tracking-widest text-gold-400 mb-4">
          Current Issue
        </span>
        <h1 className="font-serif text-3xl md:text-5xl mb-4 tracking-tight">{current.title}</h1>
        <p className="text-slate-400 font-mono text-sm uppercase tracking-widest">
          {current.volume}, {current.number} • {current.date}
        </p>
      </section>

      {/* Table of Contents */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
            <BookOpen size={20} className="text-gold-600" />
            <h2 className="font-serif text-2xl text-obsidian-900">In This Issue</h2>
          </div>
          
          <div className="space-y-0 divide-y divide-slate-100">
            {current.articles.map((art, i) => (
              <div key={i} className="py-6 group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-lg md:text-xl text-slate-800 group-hover:text-gold-600 transition-colors pr-8">
                    {art.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 whitespace-nowrap">
                    pp. {art.pages}
                  </span>
                </div>
                <p className="text-sm text-slate-500 italic mb-4">{art.author}</p>
                
                {/* Link to the Reader */}
                <Link 
                  href={`/journal/article/${art.slug}`} 
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-obsidian-900 hover:text-gold-600 transition-colors"
                >
                  Read Full Text <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
