"use client";
import { getTeam } from "@/lib/cms";
import { motion } from "framer-motion";

export default function LeadershipPage() {
  const team = getTeam();

  return (
    <main className="min-h-screen bg-[#F9F8F4] pb-24">
      <section className="py-24 px-6 bg-obsidian-900 text-white text-center">
        <h1 className="font-serif text-4xl md:text-6xl mb-4">Leadership & Governance</h1>
        <p className="font-sans text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">The Governing Council</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {team.board.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-40 h-40 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden border-4 border-white shadow-xl">
                {/* Placeholder for real photos */}
                <div className="w-full h-full bg-obsidian-800 flex items-center justify-center text-gold-500 font-serif text-3xl">
                  {member.split(" ")[1][0]}
                </div>
              </div>
              <h3 className="font-serif text-2xl text-obsidian-900 mb-2">{member}</h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                {i === 0 ? "Director / Managing Editor" : "Board Member"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
