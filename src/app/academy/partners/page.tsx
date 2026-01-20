"use client";
import { motion } from "framer-motion";
import { Globe, Users, ExternalLink } from "lucide-react";
import { getTeam } from "@/lib/cms";

export default function PartnersPage() {
  const team = getTeam();
  const partners = team.partners;

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
          {partners.map((partner, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              className="flex flex-col md:flex-row items-center gap-8 bg-white p-10 rounded-3xl shadow-lg border border-slate-200"
            >
              <div className={`w-32 h-32 rounded-full flex items-center justify-center shrink-0 ${i === 0 ? 'bg-blue-50 text-blue-900' : 'bg-green-50 text-green-900'}`}>
                {i === 0 ? <Globe size={48} /> : <Users size={48} />}
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="font-serif text-2xl text-obsidian-900 mb-2">{partner.name}</h3>
                <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-4">{partner.role}</p>
                
                {partner.url && (
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-gold-600 transition-colors border-b border-slate-200 hover:border-gold-600 pb-1"
                  >
                    Visit Official Website <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
