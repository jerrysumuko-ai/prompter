import { useState, useRef, type DragEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Upload,
  ImagePlus,
  Check,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import type { CommunityEntry } from './ShareModal';

const CATEGORIES = [
  'Editorial', 'Logo', 'Poster', 'Packaging',
  'Social Media', 'UI Design', 'Illustration',
  'Photography', 'Magazine Cover', 'Other',
];

interface Props {
  onSubmitted: (entry: CommunityEntry) => void;
  onGoToLibrary: () => void;
}

export default function CommunityPage({ onSubmitted, onGoToLibrary }: Props) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Other');
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => setImageUrl(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const canSubmit = title.trim() && prompt.trim() && imageUrl && !submitted;

  const handleSubmit = () => {
    if (!canSubmit) return;
    const entry: CommunityEntry = {
      url: imageUrl!,
      title: title.trim(),
      category,
      prompt: prompt.trim(),
      author: 'Alex Morgan',
      isCommunity: true,
      sharedAt: Date.now(),
    };
    const existing: CommunityEntry[] = JSON.parse(
      localStorage.getItem('promptaid_community') || '[]'
    );
    localStorage.setItem('promptaid_community', JSON.stringify([entry, ...existing]));
    onSubmitted(entry);
    setSubmitted(true);
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Page header */}
      <div className="mb-10 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-emerald-500" />
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
            Community Submission
          </h2>
        </div>
        <p className="text-3xl font-light tracking-tight text-white ml-4">
          Add your prompt to the Library
        </p>
        <p className="text-xs text-zinc-500 font-mono ml-4 max-w-lg">
          Share your engineered prompt and its AI output image with the community.
          It will appear in the Library for others to copy and build from.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center gap-6 py-24 border border-zinc-800 bg-zinc-900/30"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center">
              <Check className="text-emerald-400" size={28} />
            </div>
            <div className="text-center space-y-2">
              <p className="text-lg font-bold uppercase tracking-widest text-white">
                Prompt Published
              </p>
              <p className="text-xs text-zinc-500 font-mono">
                Your submission is now live in the Library.
              </p>
            </div>
            <button
              onClick={onGoToLibrary}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-[11px] uppercase tracking-[0.2em] transition-colors"
            >
              <ChevronRight size={14} />
              View in Library
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Left — image upload */}
            <div className="space-y-3">
              <p className="text-[9px] uppercase tracking-widest text-zinc-500">
                Output Image <span className="text-rose-500">*</span>
              </p>
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileRef.current?.click()}
                className={`relative border-2 border-dashed cursor-pointer transition-all overflow-hidden flex items-center justify-center
                  ${isDragging ? 'border-emerald-500 bg-emerald-500/5' : 'border-zinc-800 hover:border-zinc-600'}
                  ${imageUrl ? 'aspect-[3/4]' : 'h-72'}`}
              >
                {imageUrl ? (
                  <>
                    <img
                      src={imageUrl}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/50 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest">
                        <ImagePlus size={14} /> Replace Image
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-3 text-zinc-600 pointer-events-none select-none">
                    <Upload size={32} />
                    <div className="text-center">
                      <p className="text-[10px] uppercase tracking-widest mb-1">
                        Drop your image here
                      </p>
                      <p className="text-[9px] text-zinc-700">
                        or click to browse · PNG, JPG, WEBP
                      </p>
                    </div>
                  </div>
                )}
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFile(f);
                  }}
                />
              </div>
            </div>

            {/* Right — form fields */}
            <div className="space-y-5 flex flex-col">
              {/* Title */}
              <div>
                <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-2">
                  Title <span className="text-rose-500">*</span>
                </p>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Coastal Editorial Spread"
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-300 font-mono placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              {/* Category */}
              <div>
                <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-2">
                  Category
                </p>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-300 font-mono focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none cursor-pointer"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Prompt */}
              <div className="flex-1 flex flex-col">
                <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-2">
                  Your Prompt <span className="text-rose-500">*</span>
                </p>
                <div className="relative flex-1 group">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Paste your full prompt here — be as detailed as you like. Others will copy this to recreate your result."
                    className="w-full h-full min-h-[180px] bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-300 font-mono placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none leading-relaxed"
                  />
                  <div className="absolute top-0 right-0 px-2 py-1 bg-zinc-800 text-[8px] uppercase font-bold text-zinc-500 tracking-widest border-b border-l border-zinc-700">
                    Prompt Editor
                  </div>
                </div>
                <p className="text-[9px] text-zinc-700 font-mono mt-1.5">
                  {prompt.length} characters
                </p>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="w-full h-14 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-zinc-950 font-black text-[11px] uppercase tracking-[0.25em] transition-all mt-auto"
              >
                <Sparkles size={14} />
                Publish to Library
              </button>

              <p className="text-[9px] text-zinc-700 font-mono text-center">
                Image and prompt are required to publish
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
