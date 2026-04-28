import { useState, type ComponentType } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  Video,
  Share2,
  Briefcase,
  ChevronRight,
  FileText,
  Image as ImageIcon,
  FileImage,
  Mail,
  Hexagon,
  Instagram,
  Film,
  MailOpen,
  Smartphone,
} from 'lucide-react';

const FILTERS = [
  { id: 'video', label: 'Video', icon: Video },
  { id: 'social', label: 'Social media', icon: Share2 },
  { id: 'business', label: 'Business', icon: Briefcase },
];

type Template = {
  label: string;
  Icon: ComponentType<{ className?: string }>;
  code: string;
};

const TEMPLATES: Template[] = [
  { label: 'Presentation', Icon: FileText, code: 'TPL_001' },
  { label: 'Poster', Icon: FileImage, code: 'TPL_002' },
  { label: 'CV', Icon: ImageIcon, code: 'TPL_003' },
  { label: 'Email', Icon: Mail, code: 'TPL_004' },
  { label: 'Logo', Icon: Hexagon, code: 'TPL_005' },
  { label: 'Instagram Post', Icon: Instagram, code: 'TPL_006' },
  { label: 'Instagram Story', Icon: Instagram, code: 'TPL_007' },
  { label: 'Landscape Video', Icon: Film, code: 'TPL_008' },
  { label: 'Invitation', Icon: MailOpen, code: 'TPL_009' },
  { label: 'Mobile Video', Icon: Smartphone, code: 'TPL_010' },
];

export default function TemplatesPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const filtered = TEMPLATES.filter((t) =>
    t.label.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 text-zinc-300">
      {/* Hero */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-emerald-500" />
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
              Template Foundry
            </h3>
          </div>
          <div className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">
            Catalog_v1.10
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-5xl md:text-6xl font-black tracking-tighter uppercase text-zinc-100"
        >
          Templates
        </motion.h1>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="max-w-2xl mx-auto w-full"
        >
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-400 transition-colors" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search millions of templates"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-sm pl-12 pr-6 py-4 text-xs font-mono text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-all shadow-xl"
            />
            <div className="absolute top-0 right-0 px-2 py-1 bg-zinc-800 text-[8px] uppercase font-bold text-zinc-500 tracking-widest border-b border-l border-zinc-700">
              QUERY
            </div>
          </div>

          {/* Filter pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(isActive ? null : f.id)}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-sm text-[10px] uppercase font-bold tracking-[0.2em] transition-all ${
                    isActive
                      ? 'border-emerald-500/60 bg-emerald-500/10 text-emerald-400'
                      : 'border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  <f.icon className="w-3.5 h-3.5" />
                  {f.label}
                </button>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Explore templates */}
      <section className="mt-16 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-emerald-500" />
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
              Explore Templates
            </h3>
          </div>
          <div className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">
            {filtered.length.toString().padStart(2, '0')} / {TEMPLATES.length.toString().padStart(2, '0')} Modules
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filtered.map((t, idx) => (
              <motion.button
                key={t.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.04 }}
                className="group relative aspect-[4/3] bg-zinc-900 border border-zinc-800 rounded-sm p-4 flex flex-col justify-between text-left overflow-hidden hover:border-emerald-500/40 transition-all"
              >
                {/* Header label */}
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-tight text-zinc-200 leading-tight max-w-[70%] group-hover:text-emerald-400 transition-colors">
                    {t.label}
                  </span>
                  <div className="text-[8px] uppercase font-mono text-zinc-600 tracking-widest">
                    {t.code}
                  </div>
                </div>

                {/* Icon block */}
                <div className="self-end w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-sm flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
                  <t.Icon className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                </div>

                {/* Decorative corner */}
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20" />
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.button>
            ))}
          </div>

          {/* Right-side pagination arrow */}
          <button
            aria-label="Next"
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-400 text-zinc-400 transition items-center justify-center rounded-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-[10px] uppercase tracking-widest text-zinc-600 font-mono border border-dashed border-zinc-800 rounded-sm">
            No modules match "{query}"
          </div>
        )}
      </section>
    </main>
  );
}
