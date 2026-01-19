"use client";
import issues from "@/data/journal/issues.json";
import { FileText, Download } from "lucide-react";

export default function CurrentIssue() {
  const current = issues[0];

  return (
    <main className="min-h-screen bg-[#F9F8F4] pb-24">
      <section className="py-24 px-6 bg-obsidian-900 text-white text-center">
        <span className="inline-block py-1 px-3 border border-gold-500/50 rounded text-[10px] font-bold uppercase tracking-widest text-gold-400 mb-4">Current Issue</span>
        <h1 className="font-serif text-3xl md:text-5xl mb-4">{current.title}</h1>
        <p className="text-slate-400 font-mono text-sm">{current.volume}, {current.number} • {current.date}</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200">
          <h2 className="font-serif text-2xl text-obsidian-900 mb-8 border-b border-slate-100 pb-4">Table of Contents</h2>
          <div className="space-y-6">
            {current.articles.map((art, i) => (
              <div key={i} className="flex justify-between items-start group cursor-pointer">
                <div>
                  <h3 className="font-serif text-xl text-slate-800 group-hover:text-gold-600 transition-colors">{art.title}</h3>
                  <p className="text-sm text-slate-500 italic mt-1">{art.author}</p>
                </div>
                <span className="text-xs font-mono text-slate-400">pp. {art.pages}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100 text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-obsidian-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-obsidian-900 transition-all">
              <Download size={16} /> Download Full Issue (PDF)
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
