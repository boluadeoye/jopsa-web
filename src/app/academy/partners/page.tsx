"use client";
import { motion } from "framer-motion";
import { Globe, Users } from "lucide-react";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#F9F8F4] pb-24">
      <section className="py-24 px-6 bg-obsidian-900 text-white text-center">
        <h1 className="font-serif text-4xl md:text-6xl mb-6">Strategic Alliances</h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-lg">
          Collaborating with global institutions to advocate for peace infrastructures.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid gap-12">
          {/* Partner 1 */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col md:flex-row items-center gap-8 bg-white p-10 rounded-3xl shadow-lg border border-slate-200">
            <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center text-blue-900 shrink-0">
              <Globe size={48} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl text-obsidian-900 mb-2">GAMIP</h3>
              <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-4">Global Alliance for Ministries & Infrastructures for Peace</p>
              <p className="text-slate-600 leading-relaxed">
                We work in partnership with GAMIP to advocate, campaign, and promote the concept of ministries for peace and other peace infrastructures globally.
              </p>
            </div>
          </motion.div>

          {/* Partner 2 */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col md:flex-row items-center gap-8 bg-white p-10 rounded-3xl shadow-lg border border-slate-200">
            <div className="w-32 h-32 bg-green-50 rounded-full flex items-center justify-center text-green-900 shrink-0">
              <Users size={48} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl text-obsidian-900 mb-2">CePReDiP</h3>
              <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-4">Centre for Peace and Rehabilitation of Displaced Persons</p>
              <p className="text-slate-600 leading-relaxed">
                A strategic partnership focused on rehabilitation frameworks, informal peace committees, and community-based conflict transformation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
