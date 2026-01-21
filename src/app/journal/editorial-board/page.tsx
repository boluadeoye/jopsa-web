"use client";
import editorial from "@/data/journal/editorial.json";
import { motion } from "framer-motion";

export default function EditorialPage() {
  return (
    <main className="min-h-screen bg-[#F9F8F4] pb-24">
      <section className="py-24 px-6 bg-obsidian-900 text-white text-center">
        <h1 className="font-serif text-4xl md:text-6xl mb-4">Editorial Board</h1>
        <p className="font-sans text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">Governance & Review</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="mb-16">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Board Chair</h2>
          <p className="font-serif text-3xl text-obsidian-900">{editorial.editor_in_chief}</p>
        </div>

        <div>
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Board Members</h2>
          <div className="space-y-6">
            {editorial.board_members.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-sm border border-slate-100"
              >
                <p className="font-serif text-xl text-obsidian-900">{member.name}</p>
                <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mt-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
