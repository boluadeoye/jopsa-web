"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { getTeam } from "@/lib/cms";

export default function ContactPage() {
  const team = getTeam();

  return (
    <main className="min-h-screen bg-[#F9F8F4] pb-24">
      
      <section className="py-24 px-6 bg-obsidian-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-6xl mb-4 relative z-10">
          Contact the Academy
        </motion.h1>
        <p className="font-sans text-gold-400 text-xs font-bold tracking-[0.2em] uppercase relative z-10">
          Global Operations
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* === OFFICE LOCATIONS === */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-10 rounded-3xl shadow-xl border-t-4 border-gold-500">
            <h2 className="font-serif text-3xl text-obsidian-900 mb-8">Our Offices</h2>
            
            <div className="space-y-8">
              {team.addresses.map((addr, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 bg-obsidian-50 rounded-full text-obsidian-900 shrink-0"><MapPin size={20} /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-1">{addr.country}</p>
                    <p className="text-slate-800 font-medium leading-relaxed">{addr.line}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* === DIRECT CONTACT === */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-obsidian-900 p-10 rounded-3xl shadow-xl text-white">
            <h2 className="font-serif text-3xl text-white mb-8">Direct Lines</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full text-gold-400 shrink-0"><Phone size={20} /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Phone Numbers</p>
                  <div className="space-y-1">
                    {team.phones.map((phone, i) => (
                      <p key={i} className="text-slate-200 font-mono text-sm">{phone}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full text-gold-400 shrink-0"><Mail size={20} /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Addresses</p>
                  <div className="space-y-1">
                    {team.emails.map((email, i) => (
                      <a key={i} href={`mailto:${email}`} className="block text-slate-200 hover:text-gold-400 transition-colors font-medium">
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
