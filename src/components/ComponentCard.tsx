import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Copy, Check, Eye, Activity, ArrowUpRight } from 'lucide-react';
import type { FramerComponentItem } from '../types';

interface ComponentCardProps {
  component: FramerComponentItem;
  onSelect: (component: FramerComponentItem) => void;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
  component,
  onSelect
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(component.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExternal = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(component.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="component-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(component)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      tabIndex={0}
      role="button"
      aria-label={`View ${component.title} component details`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(component);
        }
      }}
    >
      {/* Component Photo Media Box */}
      <div className="card-media-box">
        {/* Real Component Photo */}
        <div className="card-image-wrapper">
          <img
            src={imgError ? component.directPhotoUrl : component.imageUrl}
            alt={component.title}
            className={`card-component-photo ${imgLoaded ? 'loaded' : 'loading'}`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => {
              if (!imgError) {
                setImgError(true);
              }
            }}
          />
        </div>

        {/* Top Badges */}
        <div className="card-floating-badges">
          <span className="card-order-badge">
            #{component.order < 10 ? `0${component.order}` : component.order}
          </span>
          <span className="card-category-badge">{component.category}</span>
        </div>

        {/* Hover Quick Action Overlay */}
        <div className={`card-hover-overlay ${isHovered ? 'visible' : ''}`}>
          <button
            type="button"
            className="hover-action-primary"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(component);
            }}
          >
            <Eye size={15} />
            <span>Interactive Simulator</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="card-content">
        <div className="card-header-row">
          <h3 className="card-title">{component.title}</h3>
          <div className="card-actions-row">
            <button
              type="button"
              className="card-icon-btn"
              onClick={handleCopy}
              title="Copy component link"
              aria-label="Copy component link"
            >
              {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
            </button>
            <button
              type="button"
              className="card-icon-btn"
              onClick={handleExternal}
              title="Open direct in Framer"
              aria-label="Open direct in Framer"
            >
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        <p className="card-tagline">{component.tagline}</p>

        {/* Tech Stack Chips */}
        <div className="card-tech-chips">
          {component.techStack.slice(0, 3).map((tech, i) => (
            <span key={i} className="tech-chip">
              {tech}
            </span>
          ))}
          {component.techStack.length > 3 && (
            <span className="tech-chip tech-chip-more">
              +{component.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Card Footer Telemetry */}
        <div className="card-footer">
          <div className="footer-metric">
            <Activity size={12} className="metric-icon" />
            <span>{component.metrics.frameRate}</span>
          </div>
          <div className="footer-metric">
            <span className="metric-engine">{component.metrics.engine}</span>
          </div>
          <div className="footer-view-link">
            <span>Live Demo</span>
            <ExternalLink size={12} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
