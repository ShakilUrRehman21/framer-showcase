import React from 'react';
import { Search, X, LayoutGrid, List } from 'lucide-react';
import type { ComponentCategory } from '../types';

interface FilterControlsProps {
  categories: ComponentCategory[];
  activeCategory: ComponentCategory;
  onSelectCategory: (category: ComponentCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  categoryCounts: Record<ComponentCategory, number>;
  totalResults: number;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  categoryCounts,
  totalResults
}) => {
  return (
    <div className="filter-controls-wrapper" id="components-section">
      <div className="filter-controls-header">
        <div className="filter-section-title-group">
          <h2 className="section-title">Component Catalog</h2>
          <span className="results-count-pill">
            Showing {totalResults} of 10 components
          </span>
        </div>

        {/* Search Input */}
        <div className="search-input-wrapper">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search by component name, Three.js, shader, typography..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => onSearchChange('')}
              title="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Tabs and View Switcher */}
      <div className="filter-bottom-bar">
        <div className="category-tabs-scroll">
          {categories.map((cat) => {
            const count = categoryCounts[cat] || 0;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                className={`category-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat)}
              >
                <span>{cat}</span>
                <span className={`cat-count-badge ${isActive ? 'active' : ''}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* View Mode Toggle */}
        <div className="view-mode-toggle">
          <button
            type="button"
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => onViewModeChange('grid')}
            title="Grid Cards"
          >
            <LayoutGrid size={16} />
            <span>Grid</span>
          </button>
          <button
            type="button"
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => onViewModeChange('list')}
            title="Detailed List"
          >
            <List size={16} />
            <span>List</span>
          </button>
        </div>
      </div>
    </div>
  );
};
