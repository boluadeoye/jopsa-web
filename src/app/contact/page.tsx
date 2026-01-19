"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import { getContactInfo } from "@/lib/cms";

export default function ContactPage() {
  const contact = getContactInfo();

  return (
    <main className="min-h-screen bg-[#F9F8F4] pb-24">
      
      {/* === HERO === */}
      <section className="py-24 px-6 bg-obsidian-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="font-serif text-4xl md:text-6xl mb-4 relative z-10"
        >
          Contact the Academy
        </motion.h1>
        <p className="font-sans text-gold-400 text-xs font-bold tracking-[0.2em] uppercase relative z-10">
          Ibadan, Nigeria
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* === ACADEMY OFFICE === */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-xl border-t-4 border-gold-500"
          >
            <h2 className="font-serif text-3xl text-obsidian-900 mb-6">Academy Wing</h2>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              For inquiries regarding certificate programs, corporate training, partnerships, and business services.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-obsidian-50 rounded-full text-obsidian-900"><MapPin size={20} /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Visit Us</p>
                  <p className="text-slate-800 font-medium">{contact.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-obsidian-50 rounded-full text-obsidian-900"><Phone size={20} /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Call Us</p>
                  <p className="text-slate-800 font-medium">{contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-obsidian-50 rounded-full text-obsidian-900"><Mail size={20} /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</p>
                  <a href={`mailto:${contact.emails.academy}`} className="text-gold-600 font-bold hover:underline">
                    {contact.emails.academy}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* === EDITORIAL OFFICE === */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-obsidian-900 p-10 rounded-3xl shadow-xl text-white"
          >
            <h2 className="font-serif text-3xl text-white mb-6">Editorial Office</h2>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              For manuscript submissions, peer review inquiries, and academic correspondence regarding JoPSA.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full text-gold-400"><Clock size={20} /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Response Time</p>
                  <p className="text-slate-200 font-medium">48 - 72 Hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full text-gold-400"><Globe size={20} /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Submission Portal</p>
                  <p className="text-slate-200 font-medium">Open 24/7</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <a 
                  href={`mailto:${contact.emails.journal}?cc=${contact.emails.cc}`}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gold-500 text-obsidian-900 font-bold uppercase tracking-widest rounded-xl hover:bg-white transition-colors"
                >
                  <Mail size={16} /> Contact Editor
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* === MAP FRAME === */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <div className="w-full h-[400px] bg-slate-200 rounded-3xl overflow-hidden border border-slate-300 shadow-inner flex items-center justify-center">
          {/* Placeholder for Map - In a real scenario, we'd embed Google Maps iframe here */}
          <div className="text-center">
            <MapPin size={48} className="mx-auto text-slate-400 mb-4" />
            <p className="text-slate-500 font-serif text-xl">15 Safori Area, Orogun, Ibadan</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=15+Safori+Area,+Orogun,+Ibadan,+Nigeria" 
              target="_blank"
              className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-gold-600 hover:underline"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
