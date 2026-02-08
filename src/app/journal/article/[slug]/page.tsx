"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Quote, Calendar, Hash, BookOpen, Share2, Check } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import articleData from "@/data/journal/articles/farmers-herders.json"; // In a real app, we'd fetch based on slug

export default function ArticleReader() {
  const params = useParams();
  // In a real dynamic setup, we would use params.slug to fetch the specific JSON
  // For this demo, we use the imported file directly
  const article = articleData; 

  const [activeSection, setActiveSection] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCite = () => {
    const citation = `${article.authors[0].name} & ${article.authors[1].name} (${article.metadata.year}). ${article.title}. ${article.metadata.journal}, ${article.metadata.volume}(${article.metadata.number}), ${article.metadata.pages}.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F9F8F4] text-obsidian-900 pb-24">
      
      {/* === HEADER === */}
      <header className="bg-obsidian-950 text-white pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/journal" className="inline-flex items-center gap-2 text-gold-500 text-xs font-bold uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Back to Journal
          </Link>
          
          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 mb-6">
            <span className="px-2 py-1 border border-white/10 rounded">{article.metadata.volume}, {article.metadata.number}</span>
            <span className="px-2 py-1 border border-white/10 rounded">{article.metadata.year}</span>
            <span className="px-2 py-1 border border-white/10 rounded">ISSN: {article.metadata.issn}</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-8 text-white">
            {article.title}
          </h1>

          <div className="flex flex-col md:flex-row md:items-center gap-6 text-slate-300">
            {article.authors.map((author, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gold-500 text-obsidian-900 flex items-center justify-center font-serif font-bold text-sm">
                  {author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm text-white">{author.name} <span className="text-gold-500 text-xs font-normal">{author.title}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* === READER LAYOUT === */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* SIDEBAR (Table of Contents) */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-32 space-y-6">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-2">Contents</p>
            <nav className="space-y-1">
              <a href="#abstract" className="block text-sm text-slate-600 hover:text-gold-600 py-1 transition-colors">Abstract</a>
              {article.sections.map((sec) => (
                <a key={sec.id} href={`#${sec.id}`} className="block text-sm text-slate-600 hover:text-gold-600 py-1 transition-colors line-clamp-1">
                  {sec.title}
                </a>
              ))}
              <a href="#references" className="block text-sm text-slate-600 hover:text-gold-600 py-1 transition-colors">References</a>
            </nav>

            <button 
              onClick={handleCite}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-obsidian-900 text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-gold-500 hover:text-obsidian-900 transition-all"
            >
              {copied ? <Check size={14} /> : <Quote size={14} />}
              {copied ? "Copied APA" : "Cite Article"}
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <article className="lg:col-span-7 prose prose-lg prose-slate max-w-none font-serif">
          
          {/* Abstract */}
          <div id="abstract" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-12 not-prose">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-4">Abstract</h3>
            <p className="text-slate-700 leading-relaxed font-sans text-base md:text-lg text-justify">
              {article.abstract}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {article.keywords.map((kw, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-sans font-medium">
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="font-sans text-slate-800 leading-loose text-lg text-justify">
            {article.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="mb-12 scroll-mt-32">
                <h2 className="font-serif text-3xl text-obsidian-900 mb-6 border-l-4 border-gold-500 pl-4">
                  {sec.title}
                </h2>
                <p className="whitespace-pre-wrap">{sec.content}</p>
              </section>
            ))}
          </div>

          {/* References */}
          <section id="references" className="mt-16 pt-10 border-t border-slate-200 not-prose">
            <h2 className="font-serif text-2xl text-obsidian-900 mb-6">References</h2>
            <ul className="space-y-4 font-sans text-sm text-slate-600">
              {article.references.map((ref, i) => (
                <li key={i} className="pl-4 border-l-2 border-slate-200">
                  {ref}
                </li>
              ))}
            </ul>
          </section>

        </article>

        {/* MOBILE FLOATING ACTION */}
        <div className="lg:hidden fixed bottom-6 right-6 z-50">
          <button 
            onClick={handleCite}
            className="p-4 bg-gold-500 text-obsidian-900 rounded-full shadow-2xl"
          >
            <Quote size={24} />
          </button>
        </div>

      </div>
    </main>
  );
}
