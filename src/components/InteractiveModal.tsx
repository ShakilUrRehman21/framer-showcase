import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  RotateCw, 
  Copy, 
  Check, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Layers, 
  Cpu, 
  Activity, 
  Code2, 
  Maximize2,
  Sparkles
} from 'lucide-react';
import type { FramerComponentItem } from '../types';

interface InteractiveModalProps {
  component: FramerComponentItem | null;
  onClose: () => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const InteractiveModal: React.FC<InteractiveModalProps> = ({
  component,
  onClose
}) => {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [copied, setCopied] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [activeTab, setActiveTab] = useState<'preview' | 'spec'>('preview');

  if (!component) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(component.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  const getViewportWidth = () => {
    switch (deviceMode) {
      case 'mobile':
        return '390px';
      case 'tablet':
        return '768px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top Bar */}
          <div className="modal-header">
            <div className="modal-header-left">
              <span className="modal-category-tag">{component.category}</span>
              <h2 className="modal-title">{component.title}</h2>
              <span className="modal-badge-fps">
                <Activity size={13} />
                {component.metrics.frameRate}
              </span>
            </div>

            {/* Viewport Toggles (only on preview tab) */}
            {activeTab === 'preview' && (
              <div className="viewport-toggle-group">
                <button
                  type="button"
                  className={`viewport-btn ${deviceMode === 'desktop' ? 'active' : ''}`}
                  onClick={() => setDeviceMode('desktop')}
                  title="Desktop View (100%)"
                >
                  <Monitor size={15} />
                  <span>Desktop</span>
                </button>
                <button
                  type="button"
                  className={`viewport-btn ${deviceMode === 'tablet' ? 'active' : ''}`}
                  onClick={() => setDeviceMode('tablet')}
                  title="Tablet View (768px)"
                >
                  <Tablet size={15} />
                  <span>Tablet</span>
                </button>
                <button
                  type="button"
                  className={`viewport-btn ${deviceMode === 'mobile' ? 'active' : ''}`}
                  onClick={() => setDeviceMode('mobile')}
                  title="Mobile View (390px)"
                >
                  <Smartphone size={15} />
                  <span>Mobile</span>
                </button>
              </div>
            )}

            {/* Actions */}
            <div className="modal-header-actions">
              <div className="modal-nav-tabs">
                <button
                  type="button"
                  className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('preview')}
                >
                  <Maximize2 size={14} />
                  <span>Interactive Frame</span>
                </button>
                <button
                  type="button"
                  className={`tab-btn ${activeTab === 'spec' ? 'active' : ''}`}
                  onClick={() => setActiveTab('spec')}
                >
                  <Code2 size={14} />
                  <span>Architecture</span>
                </button>
              </div>

              {activeTab === 'preview' && (
                <button
                  type="button"
                  className="icon-action-btn"
                  onClick={handleReload}
                  title="Reload Live Component"
                >
                  <RotateCw size={15} />
                </button>
              )}

              <button
                type="button"
                className="icon-action-btn"
                onClick={handleCopy}
                title="Copy Framer URL"
              >
                {copied ? <Check size={15} className="text-emerald" /> : <Copy size={15} />}
              </button>

              <a
                href={component.url}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-external-btn"
                title="Open Direct in Framer"
              >
                <span>Launch App</span>
                <ExternalLink size={14} />
              </a>

              <button
                type="button"
                className="modal-close-btn"
                onClick={onClose}
                title="Close Modal (Esc)"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="modal-body">
            {activeTab === 'preview' ? (
              <div className="frame-wrapper">
                <div
                  className="frame-simulator"
                  style={{
                    width: getViewportWidth(),
                    maxWidth: '100%',
                    height: '100%',
                    margin: '0 auto',
                    transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div className="simulator-browser-bar">
                    <div className="browser-dots">
                      <span className="dot red" />
                      <span className="dot yellow" />
                      <span className="dot green" />
                    </div>
                    <div className="browser-url-pill">
                      <span className="url-protocol">https://</span>
                      <span className="url-address">{component.url.replace('https://', '')}</span>
                    </div>
                    <div className="browser-status">
                      <span className="live-indicator" />
                      <span>Framer Live</span>
                    </div>
                  </div>

                  <div className="iframe-container">
                    <iframe
                      key={iframeKey}
                      src={component.url}
                      title={component.title}
                      className="interactive-iframe"
                      loading="eager"
                      allow="accelerometer; camera; gyroscope; microphone; xr-spatial-tracking"
                      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="spec-view-container">
                <div className="spec-grid">
                  {/* Left Column: Details & Architecture */}
                  <div className="spec-column-left">
                    <div className="spec-section">
                      <h3 className="spec-section-title">
                        <Layers size={16} />
                        <span>Component Specification</span>
                      </h3>
                      <p className="spec-tagline">{component.tagline}</p>
                      <p className="spec-description">{component.description}</p>
                    </div>

                    <div className="spec-section">
                      <h3 className="spec-section-title">
                        <Cpu size={16} />
                        <span>Engineering & Shader Architecture</span>
                      </h3>
                      <ul className="spec-feature-list">
                        {component.architecture.map((item, index) => (
                          <li key={index} className="spec-feature-item">
                            <span className="feature-bullet" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="spec-section">
                      <h3 className="spec-section-title">
                        <Sparkles size={16} />
                        <span>Technology Stack</span>
                      </h3>
                      <div className="tech-badge-container">
                        {component.techStack.map((tech, idx) => (
                          <span key={idx} className="tech-pill-large">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Telemetry & Framer Integration */}
                  <div className="spec-column-right">
                    <div className="telemetry-box">
                      <h4 className="telemetry-title">Performance Metrics</h4>
                      <div className="telemetry-stats">
                        <div className="stat-card">
                          <span className="stat-label">Frame Budget</span>
                          <span className="stat-value highlight-cyan">{component.metrics.frameRate}</span>
                        </div>
                        <div className="stat-card">
                          <span className="stat-label">Package Size</span>
                          <span className="stat-value">{component.metrics.bundleSize}</span>
                        </div>
                        <div className="stat-card">
                          <span className="stat-label">Runtime Engine</span>
                          <span className="stat-value">{component.metrics.engine}</span>
                        </div>
                        <div className="stat-card">
                          <span className="stat-label">Architecture</span>
                          <span className="stat-value">{component.metrics.framerVersion}</span>
                        </div>
                      </div>
                    </div>

                    <div className="integration-box">
                      <h4 className="integration-title">How to Remixed in Framer</h4>
                      <p className="integration-text">
                        This component is compiled as a zero-dependency Framer Smart Component. You can preview it directly or duplicate it into your own Framer workspace canvas.
                      </p>
                      <div className="integration-code-block">
                        <code>
                          {`// Open the live Framer instance:\n`}
                          {`window.open("${component.url}", "_blank");\n`}
                          {`// Or copy and paste component into your Framer project.`}
                        </code>
                      </div>
                      <a
                        href={component.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="integration-launch-btn"
                      >
                        <span>Open Standalone Framer Canvas</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
