"use client";
import { motion } from "framer-motion";
import siteData from "../../data/siteContent.json";

export default function DeanWelcome() {
  const { dean_welcome } = siteData.academy;

  return (
    <section className="relative py-32 px-6 bg-[#F9F8F4] overflow-hidden">
      {/* Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif text-obsidian-900/[0.03] pointer-events-none select-none">
        PSA
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-obsidian-900 mb-12 relative inline-block">
            <span className="relative z-10">{dean_welcome.title}</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-gold-400/20 -z-0"></span>
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <span className="absolute -top-8 -left-4 text-6xl text-gold-500/40 font-serif">“</span>
          <p className="font-sans text-xl md:text-2xl text-slate-800 leading-relaxed font-light italic mb-12 px-4 md:px-12">
            {dean_welcome.content}
          </p>
          <span className="absolute -bottom-12 -right-4 text-6xl text-gold-500/40 font-serif rotate-180">“</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-col items-center"
        >
          {/* The Signature */}
          <p className="font-serif text-4xl md:text-5xl text-obsidian-900 mb-2" style={{ fontFamily: 'cursive' }}>
            {dean_welcome.signature_name}
          </p>
          
          <div className="h-1 w-24 bg-gold-500 mb-4"></div>
          
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            {dean_welcome.designation}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
