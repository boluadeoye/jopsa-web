"use client";
import { motion } from "framer-motion";
import siteData from "../../data/siteContent.json";
import { Quote } from "lucide-react";

export default function DeanWelcome() {
  const { dean_welcome } = siteData.academy;

  return (
    <section className="relative py-24 px-4 md:px-8 bg-obsidian-950 overflow-hidden flex justify-center">
      
      {/* === BACKGROUND AMBIENCE === */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#152036_0%,#020408_100%)]"></div>
      
      {/* === THE STATIONERY CARD === */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl w-full bg-[#F9F8F4] text-obsidian-900 p-8 md:p-16 rounded-sm shadow-2xl"
      >
        {/* Decorative Double Border (Certificate Style) */}
        <div className="absolute inset-3 border-2 border-double border-gold-500/20 pointer-events-none"></div>
        
        {/* Watermark Seal */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-serif text-obsidian-900/[0.03] font-bold select-none pointer-events-none">
          JP
        </div>

        {/* Header */}
        <div className="relative text-center mb-12">
          <div className="inline-flex justify-center mb-6">
            <div className="p-3 rounded-full bg-gold-500/10 text-gold-600">
              <Quote size={32} />
            </div>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-obsidian-900 mb-2">
            {dean_welcome.title}
          </h2>
          <div className="h-1 w-24 bg-gold-500 mx-auto mt-4"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-serif text-xl md:text-2xl text-slate-800 leading-relaxed font-light">
            <span className="float-left text-6xl md:text-7xl font-serif text-gold-500 mr-3 mt-[-10px] line-height-none">
              {dean_welcome.content.charAt(0)}
            </span>
            {dean_welcome.content.slice(1)}
          </p>
        </div>

        {/* Signature Block */}
        <div className="mt-16 flex flex-col items-center relative z-10">
          <motion.div
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <p className="font-serif text-4xl md:text-6xl text-obsidian-900 mb-2 transform -rotate-2" style={{ fontFamily: 'cursive' }}>
              {dean_welcome.signature_name}
            </p>
          </motion.div>
          
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mt-4 border-t border-gold-500/30 pt-4 px-8">
            {dean_welcome.designation}
          </p>
        </div>

      </motion.div>
    </section>
  );
}
