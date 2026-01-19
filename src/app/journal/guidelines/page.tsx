"use client";
import { getGuidelines } from "@/lib/cms";
import { motion } from "framer-motion";
import { FileText, ShieldAlert, Copyright, Send } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const item = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
};

export default function SubmissionPage() {
  const data = getGuidelines();

  return (
    <main className="min-h-screen bg-[#F9F8F4] text-obsidian-900">
      
      {/* === HERO SECTION (The Desk) === */}
      <section className="relative py-24 px-6 bg-obsidian-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-20 h-20 mx-auto mb-8 border-4 border-gold-500 rounded-full flex items-center justify-center bg-obsidian-950 shadow-2xl"
          >
            <FileText size={32} className="text-gold-500" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl mb-6 tracking-tight"
          >
            Author Guidelines
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-gold-400 text-sm font-bold tracking-[0.2em] uppercase"
          >
            Submission Protocol & Ethics
          </motion.p>
        </div>
      </section>

      {/* === THE GUIDELINES (The Scroll) === */}
      <section className="max-w-5xl mx-auto px-6 py-20 -mt-10">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          
          {/* Header Strip */}
          <div className="bg-slate-50 border-b border-slate-200 px-8 py-4 flex items-center justify-center md:justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Ref: JOPSA-SUB-2026</span>
            <div className="hidden md:flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400"></div>
            </div>
          </div>

          <div className="p-8 md:p-16">
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {data.rules.map((rule: string, index: number) => (
                <motion.div key={index} variants={item} className="flex gap-6 items-start group">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-obsidian-50 border border-obsidian-100 text-obsidian-900 font-serif font-bold flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors mt-1">
                    {index + 1}
                  </span>
                  <p className="font-serif text-lg md:text-xl text-slate-700 leading-relaxed group-hover:text-obsidian-900 transition-colors">
                    {rule}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* === POLICIES (Legal Briefs) === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-slate-100">
              
              {/* Plagiarism */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-red-50/50 rounded-2xl border border-red-100"
              >
                <div className="flex items-center gap-3 mb-4 text-red-900">
                  <ShieldAlert size={24} />
                  <h3 className="font-bold uppercase tracking-widest text-xs">Plagiarism Policy</h3>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm">
                  {data.plagiarism_policy}
                </p>
              </motion.div>

              {/* Copyright */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-blue-50/50 rounded-2xl border border-blue-100"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-900">
                  <Copyright size={24} />
                  <h3 className="font-bold uppercase tracking-widest text-xs">Copyright Policy</h3>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm">
                  {data.copyright_policy}
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* === SUBMISSION CTA (Floating Dock) === */}
      <section className="fixed bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-xl border-t border-slate-200 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left hidden md:block">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Ready to Publish?</p>
            <p className="font-serif text-lg text-obsidian-900">Send your manuscript to the Editorial Board.</p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <a 
              href={`mailto:${data.submission_email}?cc=${data.cc_email}&subject=Manuscript Submission: [Insert Title]`}
              className="flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-obsidian-900 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gold-500 hover:text-obsidian-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <Send size={16} /> Submit Manuscript
            </a>
          </div>
        </div>
      </section>
      
      {/* Spacer for fixed footer */}
      <div className="h-32"></div>

    </main>
  );
}
