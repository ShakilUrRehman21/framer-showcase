export type ComponentCategory = 
  | 'All'
  | '3D & WebGL'
  | 'Shader Effects'
  | 'Interactive UI'
  | 'Kinetic Typography';

export interface FramerComponentItem {
  id: string;
  order: number;
  title: string;
  category: ComponentCategory;
  url: string;
  tagline: string;
  description: string;
  architecture: string[];
  techStack: string[];
  metrics: {
    frameRate: string;
    bundleSize: string;
    engine: string;
    framerVersion: string;
  };
  imageUrl: string;
  directPhotoUrl: string;
  accentColor: string;
  canvasVisualType: 
    | 'bloom'
    | 'drift'
    | 'chat'
    | 'ghost'
    | 'bookscape'
    | 'pixel'
    | 'mesh'
    | 'ocean'
    | 'spinning'
    | 'ai';
  featured?: boolean;
}
