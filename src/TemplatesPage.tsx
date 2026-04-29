import { useState, type ComponentType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Video,
  Share2,
  Briefcase,
  ChevronRight,
  ChevronDown,
  FileText,
  Image as ImageIcon,
  FileImage,
  Mail,
  Hexagon,
  Instagram,
  Film,
  MailOpen,
  Smartphone,
  Package,
  BookOpen,
  Newspaper,
  Plus,
  X,
} from 'lucide-react';

const FILTERS = [
  { id: 'video', label: 'Video', icon: Video },
  { id: 'social', label: 'Social media', icon: Share2 },
  { id: 'business', label: 'Business', icon: Briefcase },
];

type Sample = { title: string; subtitle: string; gradient: string; image?: string };

type Template = {
  label: string;
  Icon: ComponentType<{ className?: string }>;
  code: string;
  samples: Sample[];
};

const TEMPLATES: Template[] = [
  {
    label: 'Presentation',
    Icon: FileText,
    code: 'TPL_001',
    samples: [
      { title: 'Graphic Design', subtitle: 'Portfolio · Jamie Chastain', gradient: 'from-blue-900 via-orange-700 to-rose-900' },
      { title: 'Quarterly Review', subtitle: 'Strategy Deck · 24 slides', gradient: 'from-emerald-900 via-zinc-800 to-zinc-900' },
      { title: 'Pitch Master', subtitle: 'Startup Investor Round', gradient: 'from-violet-900 via-fuchsia-800 to-zinc-900' },
      { title: 'Brand Story', subtitle: 'Visual Identity Walkthrough', gradient: 'from-amber-800 via-rose-900 to-zinc-900' },
      { title: 'Product Launch', subtitle: 'Keynote Edition', gradient: 'from-cyan-900 via-teal-800 to-emerald-900' },
      { title: 'Annual Report', subtitle: 'Financial Highlights 2026', gradient: 'from-zinc-800 via-zinc-700 to-zinc-900' },
      { title: 'Workshop Slides', subtitle: 'Training Module 04', gradient: 'from-orange-800 via-amber-700 to-rose-900' },
    ],
  },
  {
    label: 'Poster',
    Icon: FileImage,
    code: 'TPL_002',
    samples: [
      { title: 'Astronomy & Solar System', subtitle: 'Educational · Museum Print', gradient: 'from-zinc-800 via-zinc-700 to-zinc-900', image: '/gallery/astronomy-solar-system.png' },
      { title: 'Festival Night', subtitle: 'Music Event · 18+', gradient: 'from-fuchsia-900 via-purple-800 to-zinc-900' },
      { title: 'Gallery Opening', subtitle: 'Modern Art · Spring', gradient: 'from-zinc-700 via-zinc-800 to-zinc-900' },
      { title: 'Conference 2026', subtitle: 'Tech & Culture Summit', gradient: 'from-blue-900 via-indigo-800 to-violet-900' },
    ],
  },
  {
    label: 'CV',
    Icon: ImageIcon,
    code: 'TPL_003',
    samples: [
      { title: 'Minimal Resume', subtitle: 'Single page · A4', gradient: 'from-zinc-800 via-zinc-700 to-zinc-900' },
      { title: 'Designer CV', subtitle: 'Portfolio + Experience', gradient: 'from-emerald-900 via-zinc-800 to-zinc-900' },
      { title: 'Executive Profile', subtitle: 'Two column layout', gradient: 'from-amber-900 via-zinc-800 to-zinc-900' },
    ],
  },
  {
    label: 'Email',
    Icon: Mail,
    code: 'TPL_004',
    samples: [
      { title: 'Newsletter', subtitle: 'Weekly digest format', gradient: 'from-indigo-900 via-zinc-800 to-zinc-900' },
      { title: 'Promo Blast', subtitle: 'Sale announcement', gradient: 'from-rose-900 via-amber-800 to-zinc-900' },
    ],
  },
  {
    label: 'Logo',
    Icon: Hexagon,
    code: 'TPL_005',
    samples: [
      { title: 'Embroidered Patch', subtitle: 'Fabric Brand Mark', gradient: 'from-zinc-800 via-zinc-700 to-zinc-900', image: '/gallery/chatgpt-patch.png' },
      { title: 'Geometric Mark', subtitle: 'Hexagonal monogram', gradient: 'from-amber-800 via-zinc-800 to-zinc-900' },
      { title: 'Wordmark', subtitle: 'Custom typography', gradient: 'from-zinc-800 via-zinc-700 to-zinc-900' },
    ],
  },
  {
    label: 'Instagram Post',
    Icon: Instagram,
    code: 'TPL_006',
    samples: [
      { title: 'Sunset Vibes', subtitle: 'Lifestyle · Square', gradient: 'from-pink-900 via-orange-800 to-rose-900' },
      { title: 'Quote Card', subtitle: 'Typography post', gradient: 'from-violet-900 via-fuchsia-800 to-pink-900' },
    ],
  },
  {
    label: 'Instagram Story',
    Icon: Instagram,
    code: 'TPL_007',
    samples: [
      { title: 'Behind The Scenes', subtitle: '9:16 Vertical', gradient: 'from-fuchsia-900 via-pink-800 to-rose-900' },
      { title: 'Poll Story', subtitle: 'Engagement template', gradient: 'from-purple-900 via-violet-800 to-fuchsia-900' },
    ],
  },
  {
    label: 'Landscape Video',
    Icon: Film,
    code: 'TPL_008',
    samples: [
      { title: 'Cinematic Intro', subtitle: '16:9 · 15s', gradient: 'from-rose-900 via-orange-800 to-amber-900' },
      { title: 'Brand Story', subtitle: 'Documentary style', gradient: 'from-zinc-800 via-rose-900 to-zinc-900' },
    ],
  },
  {
    label: 'Invitation',
    Icon: MailOpen,
    code: 'TPL_009',
    samples: [
      { title: 'Wedding Card', subtitle: 'Elegant minimalist', gradient: 'from-purple-900 via-violet-800 to-zinc-900' },
      { title: 'Birthday Bash', subtitle: 'Playful & bright', gradient: 'from-amber-800 via-rose-900 to-purple-900' },
    ],
  },
  {
    label: 'Mobile Video',
    Icon: Smartphone,
    code: 'TPL_010',
    samples: [
      { title: 'Reel Template', subtitle: '9:16 · 30s', gradient: 'from-violet-900 via-purple-800 to-fuchsia-900' },
      { title: 'TikTok Short', subtitle: 'Vertical format', gradient: 'from-cyan-900 via-blue-800 to-indigo-900' },
    ],
  },
  {
    label: 'Editorial Spread',
    Icon: Newspaper,
    code: 'TPL_013',
    samples: [
      { title: 'Coastal Elegance', subtitle: 'Travel Feature · Page 7/8', gradient: 'from-zinc-800 via-zinc-700 to-zinc-900', image: '/gallery/lumiere-spread.png' },
      { title: 'The Beauty Edit', subtitle: 'Skincare Feature · 12pp', gradient: 'from-rose-900 via-pink-800 to-zinc-900' },
      { title: 'Founder Profile', subtitle: 'Long-form Q&A', gradient: 'from-zinc-800 via-amber-900 to-zinc-900' },
      { title: 'Interior Story', subtitle: 'Architecture · Photo essay', gradient: 'from-emerald-900 via-zinc-800 to-zinc-900' },
    ],
  },
  {
    label: 'Magazine Cover',
    Icon: BookOpen,
    code: 'TPL_012',
    samples: [
      { title: 'Lumière Summer Issue', subtitle: 'Fashion · Cover 01/8', gradient: 'from-zinc-800 via-zinc-700 to-zinc-900', image: '/gallery/lumiere-magazine.png' },
      { title: 'Tech Quarterly', subtitle: 'Future of AI · Q3', gradient: 'from-cyan-900 via-blue-800 to-indigo-900' },
      { title: 'Wanderlust', subtitle: 'Travel Issue · Spring', gradient: 'from-amber-800 via-orange-700 to-rose-900' },
      { title: 'Aperture', subtitle: 'Photography Edit · Mono', gradient: 'from-zinc-700 via-zinc-800 to-zinc-900' },
    ],
  },
  {
    label: 'Packaging',
    Icon: Package,
    code: 'TPL_011',
    samples: [
      { title: 'Senbei Snack Pouch', subtitle: 'Japanese · Stand-up Bag', gradient: 'from-zinc-800 via-zinc-700 to-zinc-900', image: '/gallery/japanese-snack-pouch.png' },
      { title: 'Cosmetic Tube', subtitle: 'Skincare · Minimal', gradient: 'from-rose-900 via-pink-800 to-zinc-900' },
      { title: 'Coffee Bag', subtitle: 'Specialty roast · Kraft', gradient: 'from-amber-900 via-orange-800 to-zinc-900' },
      { title: 'Beverage Can', subtitle: 'Craft soda · 330ml', gradient: 'from-emerald-900 via-teal-800 to-zinc-900' },
    ],
  },
];

export default function TemplatesPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [activeTemplate, setActiveTemplate] = useState<Template | null>(null);

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

          {/* Filter chips: when a template is active, show its chip + Style/Language */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {activeTemplate ? (
              <>
                <button
                  onClick={() => setActiveTemplate(null)}
                  aria-label="Clear template filter"
                  className="w-8 h-8 flex items-center justify-center border border-zinc-800 rounded-sm text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/50 transition"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-emerald-500/60 bg-emerald-500/10 text-emerald-400 rounded-sm text-[10px] uppercase font-bold tracking-[0.2em]">
                  <activeTemplate.Icon className="w-3.5 h-3.5" />
                  {activeTemplate.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:text-zinc-200 hover:border-zinc-700 rounded-sm text-[10px] uppercase font-bold tracking-[0.2em] transition">
                  Style
                  <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:text-zinc-200 hover:border-zinc-700 rounded-sm text-[10px] uppercase font-bold tracking-[0.2em] transition">
                  Language
                  <ChevronDown className="w-3 h-3" />
                </button>
              </>
            ) : (
              FILTERS.map((f) => {
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
              })
            )}
          </div>
        </motion.div>
      </section>

      {/* Body: either category grid or template detail */}
      <AnimatePresence mode="wait">
        {activeTemplate ? (
          <motion.section
            key="detail"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-16 space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-emerald-500" />
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
                  {activeTemplate.label} Templates
                </h3>
              </div>
              <div className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">
                {activeTemplate.code} · {activeTemplate.samples.length.toString().padStart(2, '0')} Variants
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Create a blank tile */}
              <button
                className="group relative aspect-[16/10] bg-zinc-900 border border-dashed border-zinc-700 rounded-sm flex flex-col items-center justify-center gap-3 hover:border-emerald-500/60 hover:bg-zinc-900/80 transition-all"
              >
                <div className="w-12 h-12 border border-zinc-700 group-hover:border-emerald-500/60 rounded-sm flex items-center justify-center transition-colors">
                  <Plus className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-emerald-400 transition-colors">
                  Create a blank {activeTemplate.label}
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20" />
              </button>

              {/* Sample tiles */}
              {activeTemplate.samples.map((s, idx) => (
                <motion.button
                  key={s.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.04 }}
                  className="group relative aspect-[16/10] rounded-sm overflow-hidden border border-zinc-800 hover:border-emerald-500/40 transition-all text-left"
                >
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`} />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/30 to-transparent" />

                  {/* Decorative elements mimicking a poster */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400/80" />
                  <div className="absolute top-4 left-4 text-white/80">
                    <div className="text-[8px] uppercase tracking-[0.3em] font-bold opacity-70">
                      {activeTemplate.code}_{(idx + 1).toString().padStart(2, '0')}
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.25em] font-bold text-emerald-400 mb-1">
                        {activeTemplate.label}
                      </div>
                      <div className="text-sm font-black uppercase tracking-tight text-white leading-tight">
                        {s.title}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-300/80 mt-1">
                        {s.subtitle}
                      </div>
                    </div>
                    <div className="w-9 h-9 bg-zinc-950/70 border border-white/10 group-hover:border-emerald-500/50 rounded-sm flex items-center justify-center text-white/80 group-hover:text-emerald-400 transition">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.section>
        ) : (
          <motion.section
            key="grid"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-16 space-y-6"
          >
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
                    onClick={() => setActiveTemplate(t)}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    className="group relative aspect-[4/3] bg-zinc-900 border border-zinc-800 rounded-sm p-4 flex flex-col justify-between text-left overflow-hidden hover:border-emerald-500/40 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-tight text-zinc-200 leading-tight max-w-[70%] group-hover:text-emerald-400 transition-colors">
                        {t.label}
                      </span>
                      <div className="text-[8px] uppercase font-mono text-zinc-600 tracking-widest">
                        {t.code}
                      </div>
                    </div>

                    <div className="self-end w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-sm flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
                      <t.Icon className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                    </div>

                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20" />
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </motion.button>
                ))}
              </div>

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
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
