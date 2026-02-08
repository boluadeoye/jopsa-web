"use client";
import { motion } from "framer-motion";
import aboutData from "@/data/journal/about.json";

export default function JournalAboutPage() {
  return (
    <main className="min-h-screen bg-[#F9F8F4] pb-24">
      {/* Hero Header */}
      <section className="py-20 px-6 bg-obsidian-900 text-white text-center">
        <h1 className="font-serif text-4xl md:text-6xl mb-4">About the Journal</h1>
        <p className="font-sans text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">JoPSA Institutional Framework</p>
      </section>

      {/* Content Sections */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {aboutData.sections.map((section, i) => (
            <motion.div 
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-obsidian-900 mb-6 border-b border-gold-500/20 pb-2">
                {section.title}
              </h2>
              <p className="font-sans text-slate-700 leading-relaxed text-lg text-justify">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Institutional Note */}
        <div className="mt-20 p-8 bg-obsidian-50 rounded-2xl border border-obsidian-100 text-center">
          <p className="text-sm text-slate-500 italic">
            The Peace Service Academy is the official publisher of the Journal of Peace Service Academy (JoPSA).
          </p>
        </div>
      </section>
    </main>
  );
}
