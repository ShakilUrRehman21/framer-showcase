import React from 'react';
import { ExternalLink, Layers, ArrowUp } from 'lucide-react';
import { FRAMER_COMPONENTS, FRAMER_PROFILE_URL, CREATOR_NAME } from '../data/components';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-grid">
        {/* Brand & Manifesto */}
        <div className="footer-brand-col">
          <div className="footer-brand-header">
            <div className="brand-mark-small">
              <Layers size={16} />
            </div>
            <span className="footer-brand-name">{CREATOR_NAME}</span>
          </div>
          <p className="footer-bio-text">
            Architecting interactive components, GLSL shaders, and WebGL experiences for Framer. Designed for seamless integration into production websites.
          </p>
          <a
            href={FRAMER_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-profile-link"
          >
            <span>Framer Creator Page</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Components Quick List 1 */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">3D & WebGL Components</h4>
          <ul className="footer-links-list">
            {FRAMER_COMPONENTS.filter((c) => c.category === '3D & WebGL').map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-comp-link"
                >
                  <span>{item.title}</span>
                  <ExternalLink size={11} className="link-ext-icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Components Quick List 2 */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Shaders & Physics UI</h4>
          <ul className="footer-links-list">
            {FRAMER_COMPONENTS.filter(
              (c) => c.category === 'Shader Effects' || c.category === 'Interactive UI'
            ).map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-comp-link"
                >
                  <span>{item.title}</span>
                  <ExternalLink size={11} className="link-ext-icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Components Quick List 3 */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Kinetic Typography</h4>
          <ul className="footer-links-list">
            {FRAMER_COMPONENTS.filter((c) => c.category === 'Kinetic Typography').map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-comp-link"
                >
                  <span>{item.title}</span>
                  <ExternalLink size={11} className="link-ext-icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-copy">
          © {new Date().getFullYear()} {CREATOR_NAME}. Framer Components & WebGL Creative Lab.
        </div>
        <div className="footer-tech-stack-note">
          Engineered with WebGL 2.0, Three.js, GLSL & Framer Motion
        </div>
        <button
          type="button"
          className="back-to-top-btn"
          onClick={scrollToTop}
          title="Back to top"
        >
          <span>Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
};
