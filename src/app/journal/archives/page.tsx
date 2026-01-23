"use client";
import archives from "@/data/journal/archives.json";
import { motion } from "framer-motion";
import { Book, Download, Calendar } from "lucide-react";

export default function ArchivesPage() {
  return (
    <main className="min-h-screen bg-[#F9F8F4] pb-24">
      
      {/* Hero */}
      <section className="py-24 px-6 bg-obsidian-900 text-white text-center">
        <h1 className="font-serif text-4xl md:text-6xl mb-4">Journal Archives</h1>
        <p className="font-sans text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">
          Scholarly Repository • Est. 2020
        </p>
      </section>

      {/* Archive Grid */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        {archives.map((yearGroup, i) => (
          <motion.div 
            key={yearGroup.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-serif text-3xl text-obsidian-900">{yearGroup.year}</h2>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {yearGroup.volumes.map((vol, j) => (
                <div key={j} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-gold-500/30 transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-obsidian-50 rounded-xl text-obsidian-900 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                      <Book size={24} />
                    </div>
                    <span className="text-xs font-mono text-slate-400">{vol.date}</span>
                  </div>
                  
                  <h3 className="font-serif text-2xl text-slate-800 mb-2">{vol.title}</h3>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold mb-8">
                    {vol.theme}
                  </p>

                  <button className="w-full py-3 border border-slate-200 rounded-lg text-xs font-bold uppercase tracking-widest text-slate-600 hover:bg-obsidian-900 hover:text-white hover:border-obsidian-900 transition-all flex items-center justify-center gap-2">
                    <Download size={14} /> Access Volume
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

    </main>
  );
}
