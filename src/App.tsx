import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FilterControls } from './components/FilterControls';
import { ComponentCard } from './components/ComponentCard';
import { ComponentListView } from './components/ComponentListView';
import { InteractiveModal } from './components/InteractiveModal';
import { ProfileBanner } from './components/ProfileBanner';
import { Footer } from './components/Footer';
import { AmbientBackground } from './components/AmbientBackground';
import { FRAMER_COMPONENTS } from './data/components';
import type { ComponentCategory, FramerComponentItem } from './types';

const CATEGORIES: ComponentCategory[] = [
  'All',
  '3D & WebGL',
  'Shader Effects',
  'Interactive UI',
  'Kinetic Typography'
];

export const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ComponentCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedComponent, setSelectedComponent] = useState<FramerComponentItem | null>(null);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<ComponentCategory, number> = {
      'All': FRAMER_COMPONENTS.length,
      '3D & WebGL': 0,
      'Shader Effects': 0,
      'Interactive UI': 0,
      'Kinetic Typography': 0
    };

    FRAMER_COMPONENTS.forEach((c) => {
      if (counts[c.category] !== undefined) {
        counts[c.category]++;
      }
    });

    return counts;
  }, []);

  // Filter components by active category & search query
  const filteredComponents = useMemo(() => {
    return FRAMER_COMPONENTS.filter((item) => {
      const matchCategory =
        activeCategory === 'All' || item.category === activeCategory;

      if (!matchCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = item.title.toLowerCase().includes(q);
      const inTagline = item.tagline.toLowerCase().includes(q);
      const inDesc = item.description.toLowerCase().includes(q);
      const inTech = item.techStack.some((t) => t.toLowerCase().includes(q));
      const inArch = item.architecture.some((a) => a.toLowerCase().includes(q));

      return inTitle || inTagline || inDesc || inTech || inArch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="app-layout">
      {/* 3D Ambient Reactive Light Background */}
      <AmbientBackground />

      {/* Top Navbar */}
      <Navbar totalCount={FRAMER_COMPONENTS.length} />

      {/* Hero Section */}
      <Hero />

      {/* Main Showcase Section */}
      <main className="main-content">
        <FilterControls
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          categoryCounts={categoryCounts}
          totalResults={filteredComponents.length}
        />

        <section className="components-grid-container">
          {filteredComponents.length === 0 ? (
            <div className="empty-state-card">
              <p className="empty-state-title">No matching components found</p>
              <p className="empty-state-sub">
                Try searching for "Three.js", "shader", or reset your category filter.
              </p>
              <button
                type="button"
                className="reset-filter-btn"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="components-grid">
              {filteredComponents.map((component) => (
                <ComponentCard
                  key={component.id}
                  component={component}
                  onSelect={setSelectedComponent}
                />
              ))}
            </div>
          ) : (
            <ComponentListView
              components={filteredComponents}
              onSelect={setSelectedComponent}
            />
          )}
        </section>

        {/* Creator Profile Section */}
        <ProfileBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Live Interactive Preview Modal */}
      {selectedComponent && (
        <InteractiveModal
          component={selectedComponent}
          onClose={() => setSelectedComponent(null)}
        />
      )}
    </div>
  );
};

export default App;
