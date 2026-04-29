/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Copy, 
  RefreshCcw, 
  Check,
  ChevronRight,
  X
} from 'lucide-react';
import { PRESETS, GALLERY_IMAGES } from './constants';
import * as GeminiService from './lib/gemini';
import TemplatesPage from './TemplatesPage';

type GalleryImage = (typeof GALLERY_IMAGES)[number];
type Page = 'studio' | 'templates';

export default function App() {
  const [idea, setIdea] = useState('');
  const [selectedCategory] = useState('all');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GeminiService.PromptResult | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const [page, setPage] = useState<Page>('studio');

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const onGenerate = async () => {
    if (!idea.trim()) return;
    setIsGenerating(true);
    const res = await GeminiService.enhancePrompt(idea, selectedCategory);
    setResult(res);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500/30 bg-zinc-950 text-zinc-100">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(#3f3f46 1px, transparent 1px), linear-gradient(90deg, #3f3f46 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-sm rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <div className="w-4 h-4 bg-zinc-950 rotate-45" />
              </div>
              <h1 className="text-xl font-bold tracking-tighter uppercase">PromptAid AI</h1>
            </div>
            <nav className="flex items-center gap-3 sm:gap-4 md:gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              <button
                onClick={() => { setPage('studio'); setResult(null); }}
                className={`transition-colors ${page === 'studio' ? 'text-zinc-100 hover:text-emerald-400' : 'hover:text-zinc-100'}`}
              >
                Library
              </button>
              <button
                onClick={() => setPage('templates')}
                className={`transition-colors ${page === 'templates' ? 'text-zinc-100 hover:text-emerald-400' : 'hover:text-zinc-100'}`}
              >
                Templates
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden sm:block px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] uppercase tracking-tighter text-emerald-500 font-mono">
                System: Stable
             </div>
             <button className="bg-zinc-100 text-zinc-950 px-5 py-2 font-black uppercase tracking-widest text-[10px] hover:bg-emerald-400 transition-colors">
                Go Pro
             </button>
          </div>
        </div>
      </header>

      {page === 'templates' ? (
        <TemplatesPage />
      ) : (
      <>
      <main className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {result ? (
            <motion.div
              key="workspace"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-12 gap-12"
            >
              {/* Left Side: Editor/Re-generator */}
              <div className="lg:col-span-5 space-y-6">
                <button 
                  onClick={() => setResult(null)}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-4"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to Library
                </button>

                <div className="relative group">
                  <textarea
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    placeholder="Refine weights or add details..."
                    className="w-full h-64 bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-xs font-mono text-zinc-300 placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 transition-all resize-none shadow-xl"
                  />
                  <div className="absolute top-0 right-0 px-2 py-1 bg-zinc-800 text-[8px] uppercase font-bold text-zinc-500 tracking-widest border-b border-l border-zinc-700">
                    BLUEPRINT EDITOR
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {PRESETS.map((p, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setIdea(prev => prev + ", " + p.value)}
                      className="p-3 text-left border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-all group"
                    >
                      <div className="text-[9px] text-zinc-600 uppercase font-bold mb-1 tracking-widest group-hover:text-emerald-500 transition-colors">Modifier</div>
                      <div className="text-[11px] font-medium text-zinc-400 font-mono truncate">{p.label}</div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={onGenerate}
                  disabled={isGenerating || !idea.trim()}
                  className="w-full h-14 bg-emerald-500 text-zinc-950 hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-600 rounded-sm font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all"
                >
                  {isGenerating ? (
                    <RefreshCcw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                  {isGenerating ? "RE-SYNTHESIZING..." : "RE-ENGINEER PROMPT"}
                </button>
              </div>

              {/* Right Side: Result Output */}
              <div className="lg:col-span-7">
                <div className="bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] h-fit sticky top-28">
                  <div className="px-6 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500" />
                      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400">Synthesis Ready</span>
                    </div>
                    <button 
                      onClick={() => handleCopy(result.enhancedPrompt, 'main')}
                      className="text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors"
                    >
                      {copied === 'main' ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                      {copied === 'main' ? 'Copied' : 'Export Payload'}
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex flex-col gap-1 mb-8">
                      <span className="text-[10px] text-emerald-500 font-mono tracking-widest uppercase">Engine Outcome</span>
                      <h2 className="text-3xl font-light italic tracking-tight text-white underline decoration-emerald-500/20 underline-offset-[12px]">
                        {result.title}
                      </h2>
                    </div>
                    
                    <div className="space-y-8">
                      <section>
                        <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3 ml-1">Processed Blueprint</p>
                        <div className="p-5 bg-zinc-900 border border-zinc-800 text-xs font-mono leading-relaxed text-zinc-300 italic group relative">
                          "{result.enhancedPrompt}"
                          <button 
                            onClick={() => handleCopy(result.enhancedPrompt, 'main')}
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-zinc-800"
                          >
                            <Copy className="w-3 h-3" />
                          </button>
                        </div>
                      </section>

                      <div className="grid md:grid-cols-2 gap-4">
                        <section className="p-5 border border-zinc-800 bg-zinc-900/50 space-y-3">
                          <p className="text-[10px] uppercase tracking-widest text-zinc-500">Geometric Layout</p>
                          <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                            {result.layoutDescription}
                          </p>
                        </section>

                        <section className="p-5 border border-zinc-800 bg-zinc-900/50 space-y-3">
                          <p className="text-[10px] uppercase tracking-widest text-zinc-500">Technical Specs</p>
                          <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                            {result.technicalSpecs}
                          </p>
                        </section>
                      </div>
                    </div>
                  </div>

                  <div className="px-8 py-5 border-t border-zinc-800 flex items-center justify-between bg-zinc-900/30">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Optimized for Advanced Models
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="library"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {/* Image Showcase Gallery */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-emerald-500" />
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Precision Showcase</h3>
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Archive_v4.02</div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {GALLERY_IMAGES.map((img, idx) => (
                    <motion.button
                      type="button"
                      onClick={() => setActiveImage(img)}
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-800 rounded-sm cursor-zoom-in text-left focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    >
                      <img 
                        src={img.url} 
                        alt={img.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                        <div className="text-[8px] text-emerald-400 font-bold uppercase tracking-widest mb-1">{img.category}</div>
                        <div className="text-[10px] text-white font-bold tracking-tight uppercase truncate">{img.title}</div>
                      </div>
                      {/* Decorative corner */}
                      <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20" />
                    </motion.button>
                  ))}
                </div>
              </section>

            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            key="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[60] bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
            >
              <button
                onClick={() => setActiveImage(null)}
                aria-label="Close"
                className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-zinc-950/70 border border-zinc-800 hover:border-emerald-500/40 hover:text-emerald-400 text-zinc-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-full aspect-[16/10] bg-zinc-900 overflow-hidden">
                <img
                  src={activeImage.url}
                  alt={activeImage.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-[9px] text-emerald-400 font-bold uppercase tracking-[0.3em]">
                      {activeImage.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                      {activeImage.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleCopy(activeImage.prompt, 'modal')}
                    className="shrink-0 text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors"
                  >
                    {copied === 'modal' ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    {copied === 'modal' ? 'Copied' : 'Copy Prompt'}
                  </button>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Engineered Prompt</p>
                  <div className="p-5 bg-zinc-900 border border-zinc-800 text-xs font-mono leading-relaxed text-zinc-300 italic">
                    "{activeImage.prompt}"
                  </div>
                </div>

                <button
                  onClick={() =>
                    handleCopy(
                      'Large educational {TOPIC} infographic poster mounted in a modern gallery, titled "{MAIN_TITLE}", premium museum-style scientific wall chart design, detailed {MAIN_DIAGRAM} with labeled {ELEMENTS}, {SECTION_1}, {SECTION_2}, {SECTION_3}, {SECTION_4}, {SECTION_5}, {SECTION_6}, {SECTION_7}, realistic educational infographic layout, clean editorial typography, balanced grid composition, white background with black framing, high-detail {ILLUSTRATION_STYLE}, warm gallery spotlights, polished concrete museum floor, cinematic interior lighting, ultra realistic, sharp focus, professional exhibition photography, symmetrical front view, 8k.',
                      'template',
                    )
                  }
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/70 transition-all text-[10px] uppercase font-bold tracking-[0.25em] rounded-sm"
                >
                  {copied === 'template' ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  {copied === 'template' ? 'Template Copied' : 'Copy Template'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
          &copy; 2026 PromptAid AI Studio. Powered by Gemini Pro. Advanced Creative Labs.
        </p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500" />
            <span className="text-[9px] uppercase tracking-widest text-zinc-500">System Ready: 2025 Model</span>
          </div>
        </div>
      </footer>
      </>
      )}
    </div>
  );
}
