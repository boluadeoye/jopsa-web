"use client";
import { motion } from "framer-motion";

export default function DeanWelcome() {
  return (
    <section className="py-32 px-6 bg-[#F9F8F4]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl text-obsidian-900 mb-12"
        >
          Welcome from the Director
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <span className="absolute -top-8 left-0 text-6xl text-gold-500/20 font-serif">“</span>
          <p className="font-sans text-xl md:text-2xl text-slate-700 leading-relaxed italic mb-12 px-8">
            JPSA is committed to fostering a culture of peace through rigorous academic inquiry and practical service. Our mission is to equip leaders with the intellectual tools necessary to navigate the complexities of global conflict and cooperation.
          </p>
          <span className="absolute -bottom-12 right-0 text-6xl text-gold-500/20 font-serif rotate-180">“</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <p className="font-serif text-4xl text-obsidian-900 mb-2" style={{ fontFamily: 'cursive' }}>
            Prof. A. O. Adeoye
          </p>
          <div className="h-px w-16 bg-gold-500 mx-auto mb-3"></div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Director, JPSA
          </p>
        </motion.div>
      </div>
    </section>
  );
}
