import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Activity, ShieldCheck, Box, Code2, ArrowDown } from 'lucide-react';
import { FRAMER_PROFILE_URL } from '../data/components';

export const Hero: React.FC = () => {
  const scrollToComponents = () => {
    const el = document.getElementById('components-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Hero Title */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          WebGL, Three.js & Kinetic{' '}
          <span className="gradient-text">Framer Components</span>
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          A curated suite of 10 production-grade Framer smart components. Built with custom GLSL shaders, 3D perspective geometry, and momentum physics—engineered to bring uncompromising tactile depth to modern web experiences.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          className="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          <button
            type="button"
            className="hero-btn-primary"
            onClick={scrollToComponents}
          >
            <span>Explore 10 Components</span>
            <ArrowDown size={16} />
          </button>

          <a
            href={FRAMER_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-secondary"
          >
            <span>Framer Profile</span>
            <ExternalLink size={15} />
          </a>
        </motion.div>

        {/* Telemetry Highlights Grid */}
        <motion.div
          className="hero-metrics-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
        >
          <div className="metric-cell">
            <div className="metric-header">
              <Box size={16} className="metric-icon-highlight" />
              <span className="metric-num">10</span>
            </div>
            <span className="metric-title">Published Components</span>
            <span className="metric-desc">Tested across viewports</span>
          </div>

          <div className="metric-cell">
            <div className="metric-header">
              <Activity size={16} className="metric-icon-highlight" />
              <span className="metric-num">60 FPS</span>
            </div>
            <span className="metric-title">Hardware Acceleration</span>
            <span className="metric-desc">Sub-pixel rendering pipeline</span>
          </div>

          <div className="metric-cell">
            <div className="metric-header">
              <Code2 size={16} className="metric-icon-highlight" />
              <span className="metric-num">WebGL 2.0</span>
            </div>
            <span className="metric-title">Three.js & GLSL Shaders</span>
            <span className="metric-desc">Custom procedural graphics</span>
          </div>

          <div className="metric-cell">
            <div className="metric-header">
              <ShieldCheck size={16} className="metric-icon-highlight" />
              <span className="metric-num">100%</span>
            </div>
            <span className="metric-title">Framer Native</span>
            <span className="metric-desc">Zero-config embed ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
