import type { FramerComponentItem } from '../types';

export const FRAMER_PROFILE_URL = 'https://www.framer.com/@shakil-ur-rehman/';
export const CREATOR_NAME = 'Shakil Ur Rehman';
export const CREATOR_TITLE = 'Freelancer';
export const CREATOR_PROFILE_PHOTO = '/images/profile-photo.webp';

export const FRAMER_COMPONENTS: FramerComponentItem[] = [
  {
    id: 'scroll-bloom',
    order: 1,
    title: 'Scroll Bloom',
    category: '3D & WebGL',
    url: 'https://sparkly-guardrails-519488.framer.app/',
    tagline: 'Procedural botanical bloom mapped to vertical scroll velocity',
    description: 'An organic 3D floral mesh that procedurally blooms and contracts based on scroll dynamics. Features custom vertex displacement shaders, spring-damped petal unfolding, and light-reactive subsurface scattering.',
    imageUrl: '/images/components/scroll-bloom.webp',
    directPhotoUrl: 'https://y4pdgnepgswqffpt.public.blob.vercel-storage.com/components/gHWF6u6C30MFv61qJVzG/scroll-bloom-h2gCAhyMQK8P3XVyNgHQ3CzJp9dNhn',
    architecture: [
      'Custom vertex displacement GLSL shader',
      'Scroll momentum observer with inertial smoothing',
      'Subsurface light scattering simulation',
      'Zero-dependency runtime compiled for Framer'
    ],
    techStack: ['Three.js', 'WebGL', 'GLSL Shaders', 'Scroll Physics'],
    metrics: {
      frameRate: '60 FPS',
      bundleSize: '14.2 KB',
      engine: 'WebGL 2.0',
      framerVersion: 'Native Component'
    },
    accentColor: '#0ea5e9',
    canvasVisualType: 'bloom',
    featured: true
  },
  {
    id: 'cascade-drift',
    order: 2,
    title: 'Cascade Drift',
    category: 'Interactive UI',
    url: 'https://just-answers-330126.framer.app/',
    tagline: 'Momentum-driven spatial card cascades with physics deflection',
    description: 'A multi-layer kinetic carousel where cards glide with natural aerodynamic drift and inertia. Responds dynamically to mouse velocity vectors and pointer gestures with tactile magnetic settling.',
    imageUrl: '/images/components/cascade-drift.webp',
    directPhotoUrl: 'https://y4pdgnepgswqffpt.public.blob.vercel-storage.com/components/Z5L66zswDNCU0Fz0jmMu/cascade-drift-pro-e1lgmWLctxlLtonFrT4MZjZS5BNXND',
    architecture: [
      'Multi-axis spring physics solver',
      'Vector deflection based on cursor velocity',
      'Dynamic layer depth & ambient shadow occlusion',
      'Responsive touch & wheel gesture listeners'
    ],
    techStack: ['Framer Motion', 'Spring Physics', 'Vector Velocity', 'Spatial UI'],
    metrics: {
      frameRate: '60 FPS',
      bundleSize: '8.4 KB',
      engine: 'DOM + Hardware GPU',
      framerVersion: 'Native Component'
    },
    accentColor: '#6366f1',
    canvasVisualType: 'drift',
    featured: true
  },
  {
    id: 'chat-popup',
    order: 3,
    title: 'Chat Popup',
    category: 'Interactive UI',
    url: 'https://friendly-words-866774.framer.app/',
    tagline: 'Polished conversational trigger with fluid layout morphing',
    description: 'A minimal, production-grade conversational drawer. Features seamless height morphing, tactile trigger pill expansion, smooth keyboard accessibility, and state persistence.',
    imageUrl: '/images/components/chat-popup.webp',
    directPhotoUrl: 'https://y4pdgnepgswqffpt.public.blob.vercel-storage.com/components/2fTKkQgRaZ0nSRo0y8TR/multichat-popup-pULAuPG1kY4QzOAHU8NJCjrTJoXgKz',
    architecture: [
      'FLIP layout morphing for seamless dimension transitions',
      'Spring-tuned drawer reveal with backdrop blur filter',
      'Keyboard trap & ARIA accessibility bindings',
      'Custom Framer property controls for instant theming'
    ],
    techStack: ['Micro-Interactions', 'Layout Morphing', 'Accessible UI', 'Frosted Glass'],
    metrics: {
      frameRate: '60 FPS',
      bundleSize: '6.1 KB',
      engine: 'CSS Transitions + React',
      framerVersion: 'Native Component'
    },
    accentColor: '#10b981',
    canvasVisualType: 'chat'
  },
  {
    id: 'quantum-mesh',
    order: 4,
    title: 'Quantum Mesh',
    category: '3D & WebGL',
    url: 'https://innocent-audience-567796.framer.app/',
    tagline: 'Undulating topological wireframe terrain driven by Simplex noise',
    description: 'A mathematical wireframe terrain that ripples across a continuous Simplex noise field. Features interactive cursor wave amplification, geometric vertex normal recalculations, and clean ceramic wireframes.',
    imageUrl: '/images/components/quantum-mesh.webp',
    directPhotoUrl: 'https://y4pdgnepgswqffpt.public.blob.vercel-storage.com/components/lYnUEap5JIzTtzYidcFA/quantum-mesh-F9NrsCR5SMyOJbpHB9CdB51m7xPYta',
    architecture: [
      'Custom Three.js BufferGeometry with 4,000+ dynamic vertices',
      'Realtime Simplex noise elevation calculation in requestAnimationFrame',
      'Dynamic normal recalculation for crisp wireframe rendering',
      'Pointer proximity elevation ripple effect'
    ],
    techStack: ['Three.js', 'Simplex Noise', 'BufferGeometry', 'Mathematical UI'],
    metrics: {
      frameRate: '60 FPS',
      bundleSize: '12.7 KB',
      engine: 'Three.js / WebGL',
      framerVersion: 'Native Component'
    },
    accentColor: '#0284c7',
    canvasVisualType: 'mesh',
    featured: true
  },
  {
    id: 'bookscape-gallery',
    order: 5,
    title: 'Bookscape Gallery',
    category: '3D & WebGL',
    url: 'https://communicative-badger-693044.framer.app/',
    tagline: 'Tactile 3D editorial folio showcase with perspective depth',
    description: 'An architectural 3D gallery simulating physical hardcover volumes in an editorial space. Features realistic spine lighting, subtle book-opening gestures on hover, and smooth spatial panning.',
    imageUrl: '/images/components/bookscape-gallery.webp',
    directPhotoUrl: 'https://y4pdgnepgswqffpt.public.blob.vercel-storage.com/components/dhC5ubOIfPIqGy9krJpR/bookscape-gallery-EjQE67m2vCFXFqc8pBfa4I7EMUJgHo',
    architecture: [
      'Perspective camera with interactive tilt parallax',
      'Dynamic shadow casting & directional key lighting',
      'Subtle cover angle deformation on hover hover state',
      'Optimized mesh geometry for low draw call overhead'
    ],
    techStack: ['Three.js', 'Perspective Camera', '3D Spatial Mesh', 'Lighting FX'],
    metrics: {
      frameRate: '60 FPS',
      bundleSize: '16.5 KB',
      engine: 'WebGL 2.0',
      framerVersion: 'Native Component'
    },
    accentColor: '#d97706',
    canvasVisualType: 'bookscape',
    featured: true
  },
  {
    id: 'pixel-burst-slider',
    order: 6,
    title: 'Pixel-Burst Slider',
    category: 'Shader Effects',
    url: 'https://serious-artboard-538422.framer.app/',
    tagline: 'Fragment shader digital voxel dissolution carousel',
    description: 'A high-impact carousel transition powered by a custom GLSL fragment shader. Images shatter into shimmering digital voxels that scatter and reconstitute into the next slide.',
    imageUrl: '/images/components/pixel-burst-slider.webp',
    directPhotoUrl: 'https://y4pdgnepgswqffpt.public.blob.vercel-storage.com/components/DFZXeRcEA4mp14AvAijp/pixel-burst-slider-XoZzdRWPyBDz1Els1Y7tUdgkVOXtkJ',
    architecture: [
      'Custom fragment shader with grid dispersion algorithm',
      'Hardware-accelerated pixelation UV coordinate offsets',
      'Configurable voxel grid dimensions and burst speed',
      'Automatic fallback for non-WebGL environments'
    ],
    techStack: ['GLSL Shaders', 'WebGL', 'UV Mapping', 'Slide Transitions'],
    metrics: {
      frameRate: '60 FPS',
      bundleSize: '11.3 KB',
      engine: 'WebGL Fragment Shaders',
      framerVersion: 'Native Component'
    },
    accentColor: '#8b5cf6',
    canvasVisualType: 'pixel'
  },
  {
    id: 'ghost-text',
    order: 7,
    title: 'Ghost Text',
    category: 'Kinetic Typography',
    url: 'https://cooperative-daffodil-879209.framer.app/',
    tagline: 'Particulate typographic dissipation with cursor repulsion',
    description: 'Interactive typography that dissolves into microscopic particulate smoke upon pointer interaction. Particles drift organically through a Perlin noise field before smoothly re-converging.',
    imageUrl: '/images/components/ghost-text.webp',
    directPhotoUrl: 'https://y4pdgnepgswqffpt.public.blob.vercel-storage.com/components/rIn4sls0KBqVg7l1awFb/ghost-text-VzWN0FQLOmblOr0XGnyeWTHJHyGZLk',
    architecture: [
      'Offscreen Canvas 2D font glyph rasterization',
      'Perlin noise vector flow field simulation',
      'Pointer repulsion and elasticity convergence logic',
      'Dynamic particle density scaling for mobile displays'
    ],
    techStack: ['Canvas 2D', 'Perlin Noise', 'Kinetic Typography', 'Flow Field'],
    metrics: {
      frameRate: '60 FPS',
      bundleSize: '9.8 KB',
      engine: 'Canvas 2D Context',
      framerVersion: 'Native Component'
    },
    accentColor: '#64748b',
    canvasVisualType: 'ghost',
    featured: true
  },
  {
    id: 'ocean-scroll-shader',
    order: 8,
    title: 'Ocean Scroll Shader',
    category: 'Shader Effects',
    url: 'https://serene-project-438662.framer.app/',
    tagline: 'Physically-modelled hydrodynamics responsive to scroll rates',
    description: 'A luminous fluid surface simulation driven by multi-octave Gerstner wave algorithms. Caustic light refractions, foam generation, and wave amplitudes react directly to page scroll speeds.',
    imageUrl: '/images/components/ocean-scroll-shader.webp',
    directPhotoUrl: 'https://y4pdgnepgswqffpt.public.blob.vercel-storage.com/components/CUp1gOo80mdV6Qj6FMwR/ocean-scroll-shader-NcNeugdAImzIX3qJafyZ5qyZ6RkHv9',
    architecture: [
      'Multi-octave Gerstner wave trigonometric summation',
      'Fresnel reflectance and subsurface light attenuation',
      'Scroll velocity integration for wave chop and foam generation',
      'Float32Array buffer streams for maximum pipeline throughput'
    ],
    techStack: ['GLSL Gerstner Waves', 'Fresnel Shader', 'Three.js', 'Fluid Physics'],
    metrics: {
      frameRate: '60 FPS',
      bundleSize: '15.9 KB',
      engine: 'WebGL Custom Shader',
      framerVersion: 'Native Component'
    },
    accentColor: '#0891b2',
    canvasVisualType: 'ocean'
  },
  {
    id: 'spinning-text',
    order: 9,
    title: 'Spinning Text',
    category: 'Kinetic Typography',
    url: 'https://optimistic-branding-983989.framer.app/',
    tagline: 'Precision circular typographic ring with continuous rotational inertia',
    description: 'A Swiss-style rotating typographic emblem. Maintains continuous smooth rotational momentum, responds to pointer dragging with simulated rotational friction, and expands gently on hover.',
    imageUrl: '/images/components/spinning-text.webp',
    directPhotoUrl: 'https://y4pdgnepgswqffpt.public.blob.vercel-storage.com/components/nfyeY41SNlbyvWBPXRgT/spinningtext-KTnScyhX3ub3ZeQYEbAXSNmJhTIslQ',
    architecture: [
      'SVG textPath vector interpolation with zero pixel distortion',
      'Inertial angular velocity conservation and drag-to-spin physics',
      'Dynamic typography scale on cursor hover',
      'Configurable radius, character tracking, and speed controls'
    ],
    techStack: ['Kinetic Typography', 'SVG textPath', 'Angular Momentum', 'Micro-Interactions'],
    metrics: {
      frameRate: '60 FPS',
      bundleSize: '5.2 KB',
      engine: 'SVG + Web Animations API',
      framerVersion: 'Native Component'
    },
    accentColor: '#f59e0b',
    canvasVisualType: 'spinning'
  },
  {
    id: 'smart-ai-support',
    order: 10,
    title: 'Smart AI Support',
    category: 'Interactive UI',
    url: 'https://organic-llama-152507.framer.app/',
    tagline: 'Next-generation assistant interface with pulsing neural orb',
    description: 'An intelligent conversational widget featuring an interactive neural pulsing status orb, fluid quick-prompt pills, simulated streaming responses, and an ultra-clean architectural light theme.',
    imageUrl: '/images/components/smart-ai-support.webp',
    directPhotoUrl: 'https://y4pdgnepgswqffpt.public.blob.vercel-storage.com/components/K6fciVPCOj2N1XhyN1de/chatflow-R0kJnwLwHdbAynogfIVpq2IEs1NKa4',
    architecture: [
      'Organic canvas pulsing neural mesh core',
      'Staggered quick-prompt suggestion interaction engine',
      'Multi-level glass panel layering with refined borders',
      'Configurable API endpoints & streaming state handlers'
    ],
    techStack: ['AI Interface', 'Neural Animation', 'Interactive State', 'Framer Component'],
    metrics: {
      frameRate: '60 FPS',
      bundleSize: '7.9 KB',
      engine: 'React + Canvas Neural Orb',
      framerVersion: 'Native Component'
    },
    accentColor: '#6366f1',
    canvasVisualType: 'ai',
    featured: true
  }
];
