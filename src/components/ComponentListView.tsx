import React, { useState } from 'react';
import { Copy, Check, Eye, Activity, ArrowUpRight } from 'lucide-react';
import type { FramerComponentItem } from '../types';

interface ComponentListViewProps {
  components: FramerComponentItem[];
  onSelect: (component: FramerComponentItem) => void;
}

export const ComponentListView: React.FC<ComponentListViewProps> = ({
  components,
  onSelect
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExternal = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="list-view-container">
      <div className="list-table">
        <div className="list-table-header">
          <div className="col-idx">#</div>
          <div className="col-component">Component</div>
          <div className="col-category">Category</div>
          <div className="col-tech">Tech Stack</div>
          <div className="col-metrics">Performance</div>
          <div className="col-actions">Actions</div>
        </div>

        <div className="list-table-body">
          {components.map((item) => (
            <div
              key={item.id}
              className="list-table-row"
              onClick={() => onSelect(item)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelect(item);
                }
              }}
            >
              <div className="col-idx">
                <span className="row-order-pill">
                  {item.order < 10 ? `0${item.order}` : item.order}
                </span>
              </div>

              <div className="col-component">
                <div className="list-comp-cell">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="list-comp-thumb" 
                    loading="lazy" 
                  />
                  <div className="list-comp-title-group">
                    <span className="list-comp-name">{item.title}</span>
                    <span className="list-comp-tagline">{item.tagline}</span>
                  </div>
                </div>
              </div>

              <div className="col-category">
                <span className="list-category-badge">{item.category}</span>
              </div>

              <div className="col-tech">
                <div className="list-tech-tags">
                  {item.techStack.map((tech, i) => (
                    <span key={i} className="list-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-metrics">
                <div className="list-metric-badge">
                  <Activity size={12} className="metric-icon" />
                  <span>{item.metrics.frameRate}</span>
                </div>
              </div>

              <div className="col-actions">
                <div className="list-action-btns">
                  <button
                    type="button"
                    className="list-action-btn primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelect(item);
                    }}
                    title="Interactive Simulator"
                  >
                    <Eye size={14} />
                    <span>Preview</span>
                  </button>

                  <button
                    type="button"
                    className="list-action-btn"
                    onClick={(e) => handleCopy(item.id, item.url, e)}
                    title="Copy URL"
                  >
                    {copiedId === item.id ? (
                      <Check size={14} className="text-emerald" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>

                  <button
                    type="button"
                    className="list-action-btn"
                    onClick={(e) => handleExternal(item.url, e)}
                    title="Open in Framer"
                  >
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
