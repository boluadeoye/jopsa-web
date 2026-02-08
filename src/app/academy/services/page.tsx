"use client";
import { motion } from "framer-motion";
import { Briefcase, Book, PenTool, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Scholarly Editing",
      icon: <PenTool size={32} />,
      desc: "Comprehensive developmental editing, proofreading, and technical formatting for academic manuscripts to meet international publication standards."
    },
    {
      title: "Book Publication",
      icon: <Book size={32} />,
      desc: "End-to-end publishing services for academic texts, monographs, and educational materials with ISBN registration."
    },
    {
      title: "Educational Sales",
      icon: <Briefcase size={32} />,
      desc: "Distribution and sales of specialized peace and conflict resolution materials to institutions and libraries."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F9F8F4] pb-24">
      {/* Hero */}
      <section className="py-20 px-6 bg-obsidian-900 text-white text-center">
        <h1 className="font-serif text-4xl md:text-6xl mb-4">Business Services</h1>
        <p className="font-sans text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">PSA Commercial Division</p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 group hover:border-gold-500/50 transition-all"
            >
              <div className="w-16 h-16 bg-obsidian-50 rounded-full flex items-center justify-center text-obsidian-900 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="font-serif text-2xl text-obsidian-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-8">{s.desc}</p>
              
              {/* FIXED EMAIL LINK */}
              <a 
                href={`mailto:info_peaceserviceacademy@gamip.org?cc=osereme1@gmail.com&subject=Inquiry about ${s.title}`} 
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600 group-hover:text-obsidian-900"
              >
                Request Service <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
