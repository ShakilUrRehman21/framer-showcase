import React from 'react';
import { ExternalLink, Layers, Sparkles } from 'lucide-react';
import { FRAMER_PROFILE_URL } from '../data/components';

interface NavbarProps {
  totalCount: number;
}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand / Logo */}
        <div className="brand-group">
          <div className="brand-mark">
            <Layers size={18} className="brand-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Shakil Ur Rehman</span>
            <span className="brand-label">Framer Component Lab</span>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="header-actions">
          <a
            href="#components-section"
            className="header-nav-link"
          >
            Components
          </a>
          <a
            href="#creator-profile"
            className="header-nav-link"
          >
            About Creator
          </a>
          <a
            href={FRAMER_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="framer-profile-btn"
          >
            <Sparkles size={14} />
            <span>Framer Profile</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </header>
  );
};
