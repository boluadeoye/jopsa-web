"use client";
import archives from "@/data/journal/archives.json";
import { motion } from "framer-motion";
import { Book, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ArchivesPage() {
  return (
    <main className="min-h-screen bg-[#F9F8F4] pb-24">
      {/* Hero */}
      <section className="py-24 px-6 bg-obsidian-900 text-white text-center">
        <h1 className="font-serif text-4xl md:text-6xl mb-4">Journal Archives</h1>
        <p className="font-sans text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">Scholarly History</p>
      </section>

      {/* Archives Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {archives.map((issue, i) => (
            <motion.div 
              key={issue.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-gold-500/50 transition-all flex gap-6 items-center"
            >
              <div className="w-20 h-28 bg-obsidian-900 rounded-md flex flex-col items-center justify-center text-gold-500 shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <span className="text-[10px] font-bold uppercase">{issue.year}</span>
                <Book size={24} className="my-2" />
                <span className="text-[10px] font-bold uppercase">{issue.volume}</span>
              </div>
              
              <div className="flex-1">
                <p className="text-xs font-mono text-slate-400 mb-1">{issue.volume}, {issue.number}</p>
                <h3 className="font-serif text-xl text-obsidian-900 mb-4 leading-tight group-hover:text-gold-600 transition-colors">
                  {issue.title}
                </h3>
                <Link href={issue.link} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold-600 hover:text-obsidian-900 transition-colors">
                  View Issue <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
