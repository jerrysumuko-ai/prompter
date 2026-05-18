import { useState, useRef, type DragEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Share2, Check, ImagePlus } from 'lucide-react';

const CATEGORIES = [
  'Editorial', 'Logo', 'Poster', 'Packaging',
  'Social Media', 'UI Design', 'Illustration',
  'Photography', 'Magazine Cover', 'Other',
];

export interface CommunityEntry {
  url: string;
  title: string;
  category: string;
  prompt: string;
  author: string;
  isCommunity: true;
  sharedAt: number;
}

interface Props {
  prompt: string;
  onClose: () => void;
  onShared: (entry: CommunityEntry) => void;
}

export default function ShareModal({ prompt, onClose, onShared }: Props) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Other');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [shared, setShared] = useState(false);
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

  const handleSubmit = () => {
    if (!title.trim() || !imageUrl || shared) return;
    const entry: CommunityEntry = {
      url: imageUrl,
      title: title.trim(),
      category,
      prompt,
      author: 'Alex Morgan',
      isCommunity: true,
      sharedAt: Date.now(),
    };
    const existing: CommunityEntry[] = JSON.parse(
      localStorage.getItem('promptaid_community') || '[]'
    );
    localStorage.setItem(
      'promptaid_community',
      JSON.stringify([entry, ...existing])
    );
    onShared(entry);
    setShared(true);
    setTimeout(onClose, 1400);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.18 }}
        className="bg-zinc-950 border border-zinc-800 w-full max-w-md shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-5 bg-emerald-500" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-100">
              Share to Library
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-600 hover:text-zinc-100 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Image upload */}
          <div>
            <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-2">
              Output Image <span className="text-rose-500">*</span>
            </p>
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileRef.current?.click()}
              className={`relative border-2 border-dashed cursor-pointer transition-all overflow-hidden flex items-center justify-center
                ${isDragging ? 'border-emerald-500 bg-emerald-500/5' : 'border-zinc-800 hover:border-zinc-600'}
                ${imageUrl ? 'h-52' : 'h-32'}`}
            >
              {imageUrl ? (
                <>
                  <img
                    src={imageUrl}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest">
                      <ImagePlus size={14} /> Replace
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center gap-2 text-zinc-600 pointer-events-none">
                  <Upload size={22} />
                  <span className="text-[10px] uppercase tracking-widest">
                    Drop image or click to upload
                  </span>
                  <span className="text-[9px] text-zinc-700">PNG, JPG, WEBP</span>
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

          {/* Title */}
          <div>
            <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-2">
              Title <span className="text-rose-500">*</span>
            </p>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Coastal Editorial Spread"
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-2.5 text-xs text-zinc-300 font-mono placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>

          {/* Category */}
          <div>
            <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-2">Category</p>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-2.5 text-xs text-zinc-300 font-mono focus:outline-none focus:border-emerald-500/50 transition-colors appearance-none cursor-pointer"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Prompt preview */}
          <div>
            <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-2">Prompt</p>
            <div className="bg-zinc-900 border border-zinc-800 px-4 py-3 text-[10px] font-mono text-zinc-500 leading-relaxed max-h-20 overflow-y-auto italic">
              "{prompt}"
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!title.trim() || !imageUrl || shared}
            className="w-full h-12 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-zinc-950 font-black text-[11px] uppercase tracking-[0.2em] transition-all"
          >
            <AnimatePresence mode="wait">
              {shared ? (
                <motion.span
                  key="done"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2"
                >
                  <Check size={14} /> Shared to Library
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2"
                >
                  <Share2 size={14} /> Share to Library
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
