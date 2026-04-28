import { useState, type ComponentType } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  Sparkles,
  Video,
  Share2,
  Briefcase,
  HelpCircle,
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
  { id: 'video', label: 'Video', icon: Video, accent: 'bg-pink-500', text: 'text-pink-600' },
  { id: 'social', label: 'Social media', icon: Share2, accent: 'bg-rose-500', text: 'text-rose-600' },
  { id: 'business', label: 'Business', icon: Briefcase, accent: 'bg-teal-500', text: 'text-teal-600' },
];

type Template = {
  label: string;
  bg: string;
  Icon: ComponentType<{ className?: string }>;
  accent: string;
};

const TEMPLATES: Template[] = [
  { label: 'Presentation', bg: 'bg-orange-100', Icon: FileText, accent: 'text-orange-500' },
  { label: 'Poster', bg: 'bg-purple-100', Icon: FileImage, accent: 'text-purple-500' },
  { label: 'CV', bg: 'bg-violet-100', Icon: ImageIcon, accent: 'text-violet-500' },
  { label: 'Email', bg: 'bg-indigo-100', Icon: Mail, accent: 'text-indigo-500' },
  { label: 'Logo', bg: 'bg-amber-100', Icon: Hexagon, accent: 'text-amber-600' },
  { label: 'Instagram Post', bg: 'bg-pink-100', Icon: Instagram, accent: 'text-pink-500' },
  { label: 'Instagram Story', bg: 'bg-fuchsia-100', Icon: Instagram, accent: 'text-fuchsia-500' },
  { label: 'Landscape Video', bg: 'bg-rose-100', Icon: Film, accent: 'text-rose-500' },
  { label: 'Invitation', bg: 'bg-purple-100', Icon: MailOpen, accent: 'text-purple-500' },
  { label: 'Mobile Video', bg: 'bg-violet-100', Icon: Smartphone, accent: 'text-violet-500' },
];

export default function TemplatesPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  return (
    <div
      className="relative min-h-[calc(100vh-73px)] overflow-hidden text-zinc-900"
      style={{
        background:
          'linear-gradient(120deg, #c8f0e3 0%, #d8e6ff 30%, #e0d4ff 60%, #d6c4f5 100%)',
      }}
    >
      {/* Soft highlights */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(circle at 90% 10%, rgba(255,255,255,0.6), transparent 40%), radial-gradient(circle at 10% 90%, rgba(255,255,255,0.5), transparent 45%)',
        }}
      />

      {/* Top right pills */}
      <div className="absolute top-6 right-6 flex items-center gap-3 z-10">
        <button className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-white text-purple-600 rounded-full text-sm font-medium shadow-sm hover:bg-white transition">
          <Sparkles className="w-4 h-4" />
          Sneak Peek
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-white text-zinc-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition">
          <Sparkles className="w-4 h-4 text-amber-500" />
          Start your trial for <span className="line-through text-zinc-400">$0</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-5xl font-semibold tracking-tight text-zinc-900"
        >
          Templates
        </motion.h1>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search millions of templates"
              className="w-full bg-white rounded-full pl-14 pr-6 py-4 text-zinc-700 placeholder-zinc-400 border-2 border-purple-200 focus:outline-none focus:border-purple-400 shadow-[0_4px_20px_-8px_rgba(124,58,237,0.25)] transition"
            />
          </div>

          {/* Filter pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(isActive ? null : f.id)}
                  className={`flex items-center gap-2 pl-2 pr-5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border text-sm font-medium transition shadow-sm hover:shadow-md ${
                    isActive ? 'border-purple-400 ring-2 ring-purple-200' : 'border-white'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center ${f.accent} text-white`}
                  >
                    <f.icon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-zinc-800">{f.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Explore templates */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Explore templates</h2>

          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {TEMPLATES.map((t, idx) => (
                <motion.button
                  key={t.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + idx * 0.03 }}
                  className={`relative h-24 rounded-2xl ${t.bg} px-4 py-3 flex items-start text-left overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group`}
                >
                  <span className="text-sm font-semibold text-zinc-800 leading-tight max-w-[60%]">
                    {t.label}
                  </span>
                  {/* Decorative illustration corner */}
                  <div className="absolute -right-3 -bottom-3 w-20 h-20 rounded-2xl bg-white/70 rotate-[-8deg] flex items-center justify-center shadow-inner group-hover:rotate-0 transition-transform">
                    <t.Icon className={`w-8 h-8 ${t.accent}`} />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right-side pagination arrow */}
            <button
              aria-label="Next"
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center text-zinc-700 hover:text-purple-600 hover:shadow-lg transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating help button */}
      <button
        aria-label="Help"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition flex items-center justify-center"
      >
        <HelpCircle className="w-5 h-5" />
      </button>
    </div>
  );
}
