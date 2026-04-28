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
    category: 'Artistic',
    prompt: 'Abstract organic synthesis, swirling translucent emerald and obsidian fluids suspended in zero-gravity, soft volumetric light, depth of field, ultra-detailed macro render, cinematic 4k.'
  },
  {
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    title: 'Cyberpunk District',
    category: 'Cinematic',
    prompt: 'Rain-soaked cyberpunk alley at night, towering neon billboards in violet and teal, holographic signage, reflective puddles, dense atmospheric fog, shot on 35mm anamorphic, f/1.4, Blade Runner aesthetic.'
  },
  {
    url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    title: 'Neural Finance UI',
    category: 'UI/UX',
    prompt: 'High-fidelity dashboard UI for an AI-driven finance platform, dark mode zinc background, emerald data accents, modular bento grid layout, crisp Inter typography, soft glass cards, 8k Figma-style render.'
  },
  {
    url: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800',
    title: 'Organic Architecture',
    category: 'Photo',
    prompt: 'Editorial architectural photography of a flowing organic concrete pavilion at golden hour, sweeping curves, dramatic shadows, brutalist meets biomorphic, shot on Phase One XF, neutral color grading.'
  },
  {
    url: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=800',
    title: 'Isometric Lab',
    category: 'Isometric',
    prompt: 'Isometric 3D illustration of a futuristic research laboratory, holographic displays, glowing emerald accents, modular workstations, soft global illumination, low-poly clay aesthetic, render at 8k.'
  },
  {
    url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800',
    title: 'Chromatic Flow',
    category: 'Branding',
    prompt: 'Sweeping gradient brand poster, smooth chromatic transitions of magenta, cyan and lime, layered depth, subtle film grain, oversized geometric type, Swiss design influence, ultra-clean composition.'
  },
  {
    url: 'https://images.unsplash.com/photo-1635776062764-e025521e3df3?auto=format&fit=crop&q=80&w=800',
    title: 'Liquid Metal',
    category: 'Artistic',
    prompt: 'Macro shot of liquid mercury forming an abstract sculpture, mirror-finish reflections of an emerald studio HDRI, ultra-glossy specular highlights, shallow depth of field, octane render quality.'
  },
  {
    url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800',
    title: 'Code Matrix',
    category: 'Tech',
    prompt: 'Over-the-shoulder cinematic shot of a developer workstation at night, cascading code on multiple monitors, soft bokeh of city lights through window, dark moody color grading, 35mm lens.'
  },
  {
    url: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800',
    title: 'Orbital Launch',
    category: 'Cinematic',
    prompt: 'Heroic launch of a heavy rocket clearing the gantry tower, billowing exhaust plumes, sun lens flare, low telephoto compression, hyperreal NASA documentary style, ultra-high dynamic range.'
  },
  {
    url: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&fit=crop&q=80&w=800',
    title: 'Fractured Earth',
    category: 'Texture',
    prompt: 'Tight macro of cracked desert earth with mineral pigments running through fissures, painterly textures, high contrast natural lighting, organic abstract composition, 8k photographic detail.'
  },
  {
    url: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&q=80&w=800',
    title: 'Vapor Field',
    category: 'Atmospheric',
    prompt: 'Vast misty mountain valley at dawn, dense low-lying vapor diffusing soft sunlight, layered silhouettes of distant ridges, muted monochrome palette, fine art landscape photography.'
  },
  {
    url: 'https://images.unsplash.com/photo-1614849286521-4c58b2f0ff15?auto=format&fit=crop&q=80&w=800',
    title: 'Geometric Pulse',
    category: 'Abstract',
    prompt: 'Looping geometric abstract animation frame, concentric emerald rings pulsing on obsidian, perfect radial symmetry, sharp vector edges, subtle motion blur, suprematist influence.'
  },
  {
    url: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80&w=800',
    title: 'Studio Portrait',
    category: 'Photo',
    prompt: 'Editorial studio portrait, single key light from camera left, Rembrandt lighting, charcoal seamless backdrop, sharp catchlights, shot on 85mm f/1.4, neutral skin grading, Vogue aesthetic.'
  },
  {
    url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    title: 'Retro Console',
    category: 'Game',
    prompt: 'Top-down product photography of a retro gaming console with cartridge inserted, soft rim lighting, deep navy backdrop, 90s color palette, nostalgic editorial styling, sharp macro detail.'
  },
  {
    url: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=800',
    title: 'Liquid Chrome',
    category: 'Branding',
    prompt: 'Hyperreal 3D rendering of a chrome typographic logotype, liquid metal flowing into letterforms, studio softbox reflections, glossy emerald floor, octane render, oversized hero composition.'
  },
  {
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    title: 'Neon Circuit',
    category: 'Tech',
    prompt: 'Macro photograph of a printed circuit board glowing under neon UV light, intricate copper traces and emerald solder mask, microchips with reflective contacts, ultra-sharp detail, futuristic tech aesthetic.'
  },
  {
    url: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800',
    title: 'Aurora Drift',
    category: 'Atmospheric',
    prompt: 'Long exposure of an aurora borealis dancing above a snow-covered mountain range, vivid emerald and magenta ribbons, mirrored reflection in a frozen lake, astrophotography, 14mm wide lens.'
  },
  {
    url: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800',
    title: 'Pastel Gradient',
    category: 'Abstract',
    prompt: 'Soft pastel gradient composition, peach blending into mint and lavender, gentle gaussian falloff, faint film grain, minimalist editorial poster style, balanced negative space.'
  }
];

export const PRESETS = [
  { label: 'Cinematic Lighting', value: '8k resolution, dramatic shadows, volumetric lighting' },
  { label: 'Bento Grid', value: 'organized modular layout, geometric precision, clean UI' },
  { label: 'Editorial Photo', value: 'grainy film texture, neutral palette, candid' },
];
