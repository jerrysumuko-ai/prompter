/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Sparkles, 
  Layout, 
  Hash, 
  Copy, 
  RefreshCcw, 
  Smartphone, 
  Image as ImageIcon, 
  Layers, 
  Globe, 
  Zap,
  BookOpen,
  ShoppingBag,
  Camera,
  Gamepad2,
  Share2
} from 'lucide-react';

export const CATEGORIES = [
  { id: 'marketing', name: 'Marketing & Ads', icon: ShoppingBag, color: 'text-emerald-500' },
  { id: 'uiux', name: 'UI/UX Design', icon: Smartphone, color: 'text-emerald-500' },
  { id: 'social', name: 'Social Media', icon: Share2, color: 'text-emerald-500' },
  { id: 'learning', name: 'Educational', icon: BookOpen, color: 'text-emerald-500' },
  { id: 'photo', name: 'Photorealistic', icon: Camera, color: 'text-emerald-500' },
  { id: 'game', name: 'Game Assets', icon: Gamepad2, color: 'text-emerald-500' },
  { id: 'comics', name: 'Story & Comics', icon: ImageIcon, color: 'text-emerald-500' },
  { id: 'branding', name: 'Brand Systems', icon: Layers, color: 'text-emerald-500' },
];

export const BLUEPRINTS = [
  {
    id: 'b1',
    title: 'Neomorphic Digital Wallet',
    category: 'uiux',
    preview: 'Emerald glassmorphism UI, mobile app screen, high-fidelity dashboard',
    fullPrompt: 'High-fidelity mobile UI design of a digital wallet application, glassmorphism style with emerald glass accents, dark mode zinc background, precise typography using Inter, clean icons, modular bento grid layout, 8k resolution, centered composition.',
    layout: '9:16 Vertical / Modular Grid',
    tech: 'Figma-style render, soft shadows, 0.5px borders'
  },
  {
    id: 'b2',
    title: 'Cyberpunk Ramen Shop',
    category: 'branding',
    preview: 'Neon cinematic street photography, rain-slicked asphalt',
    fullPrompt: 'Cinematic street level photography of a futuristic cyberpunk ramen shop, neon signs in violet and teal, rain-slicked pavement reflecting lights, volumetric fog, high contrast, shot on 35mm lens, f/1.8, urban dystopia aesthetic.',
    layout: '16:9 Cinematic / Rule of Thirds',
    tech: 'Ray-traced reflections, film grain, anamorphic flare'
  },
  {
    id: 'b3',
    title: 'Educational Biology Chart',
    category: 'learning',
    preview: 'Labeled anatomy diagram, clean scientific illustration',
    fullPrompt: 'Detailed scientific infographic of a plant cell structure, precise labels with lines, minimalist vector illustration style, emerald and white palette, professional textbook aesthetic, high clarity, centered layout.',
    layout: '3:4 Vertical / Structured Infographic',
    tech: 'Flat vector, high-DPI canvas, sans-serif labels'
  },
  {
    id: 'b4',
    title: 'Monospace Tech Poster',
    category: 'marketing',
    preview: 'Swiss-style typography, brutalist grid design',
    fullPrompt: 'Brutalist graphic design poster for a tech conference, heavy use of JetBrains Mono typography, grid-based layout, emerald green on black background, geometric shapes, high-impact visual, Swiss design influence.',
    layout: '1:1 Square / Typographic Grid',
    tech: 'Vector-perfect sharpness, 0-bleed margins'
  },
  {
    id: 'b5',
    title: 'Minimalist Architecture',
    category: 'photo',
    preview: 'Editorial architectural photography, concrete and glass',
    fullPrompt: 'Low angle architectural photography of a minimalist concrete pavilion, floor-to-ceiling glass walls, sunset lighting casting long dramatic shadows, brutalist influence, clean lines, high-end editorial aesthetic, shot on Phase One XF.',
    layout: '4:5 Vertical / Geometric Symmetry',
    tech: 'Natural HDR, sharp depth of field, neutral grading'
  },
  {
    id: 'b6',
    title: 'Pixel Art Adventurer',
    category: 'game',
    preview: 'High-quality 32-bit pixel art character sheet',
    fullPrompt: 'Pixel art character design sheet for a fantasy adventurer, 32-bit style, vibrant color palette, multiple poses, walking animation frames, emerald green armor, clear sprite outlines, white background, retro game aesthetic.',
    layout: '1:1 Canvas / Itemized Sheet',
    tech: 'Point-filtered scaling, limited palette, dithering'
  },
  {
    id: 'b7',
    title: 'Manga Splash Page',
    category: 'comics',
    preview: 'High-contrast ink illustration, detailed action scene',
    fullPrompt: 'Manga-style splash page illustration of a samurai duel, heavy black ink work, dynamic motion lines, screen tone textures, high contrast, cinematic framing, extremely detailed backgrounds, Shonen Jump aesthetic.',
    layout: 'Vertical B4 Paper / Dynamic Diagonal',
    tech: 'G-pen texture, realistic halftones, deep blacks'
  },
  {
    id: 'b8',
    title: 'Smart Home Hub Dashboard',
    category: 'uiux',
    preview: 'Desktop control center, tactile 3D elements',
    fullPrompt: 'Professional desktop UI for a smart home command center, neumorphic 3D icons, clean sans-serif typography, dark mode charcoal background with emerald accents, interactive sliders, data visualization bento boxes.',
    layout: '16:10 Desktop / Quad-Pane Grid',
    tech: 'Skeuomorphic depth, real-time data glow'
  }
];

export const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
    title: 'Abstract Synthesis',
    category: 'Artistic'
  },
  {
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    title: 'Cyberpunk District',
    category: 'Cinematic'
  },
  {
    url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    title: 'Neural Finance UI',
    category: 'UI/UX'
  },
  {
    url: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800',
    title: 'Organic Architecture',
    category: 'Photo'
  },
  {
    url: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=800',
    title: 'Isometric Lab',
    category: 'Isometric'
  },
  {
    url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800',
    title: 'Chromatic Flow',
    category: 'Branding'
  },
  {
    url: 'https://images.unsplash.com/photo-1635776062764-e025521e3df3?auto=format&fit=crop&q=80&w=800',
    title: 'Liquid Metal',
    category: 'Artistic'
  },
  {
    url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800',
    title: 'Code Matrix',
    category: 'Tech'
  },
  {
    url: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800',
    title: 'Orbital Launch',
    category: 'Cinematic'
  },
  {
    url: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&fit=crop&q=80&w=800',
    title: 'Fractured Earth',
    category: 'Texture'
  },
  {
    url: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&q=80&w=800',
    title: 'Vapor Field',
    category: 'Atmospheric'
  },
  {
    url: 'https://images.unsplash.com/photo-1614849286521-4c58b2f0ff15?auto=format&fit=crop&q=80&w=800',
    title: 'Geometric Pulse',
    category: 'Abstract'
  },
  {
    url: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=800',
    title: 'Studio Portrait',
    category: 'Photo'
  },
  {
    url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    title: 'Retro Console',
    category: 'Game'
  },
  {
    url: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=800',
    title: 'Liquid Chrome',
    category: 'Branding'
  },
  {
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    title: 'Neon Circuit',
    category: 'Tech'
  },
  {
    url: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800',
    title: 'Aurora Drift',
    category: 'Atmospheric'
  },
  {
    url: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800',
    title: 'Pastel Gradient',
    category: 'Abstract'
  }
];

export const PRESETS = [
  { label: 'Cinematic Lighting', value: '8k resolution, dramatic shadows, volumetric lighting' },
  { label: 'Bento Grid', value: 'organized modular layout, geometric precision, clean UI' },
  { label: 'Editorial Photo', value: 'grainy film texture, neutral palette, candid' },
];
