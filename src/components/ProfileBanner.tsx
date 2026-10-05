import React from 'react';
import { ExternalLink, Sparkles, CheckCircle2, Layers, Cpu, Code2 } from 'lucide-react';
import { FRAMER_PROFILE_URL, CREATOR_NAME, CREATOR_TITLE, CREATOR_PROFILE_PHOTO } from '../data/components';

export const ProfileBanner: React.FC = () => {
  return (
    <section className="profile-banner-section" id="creator-profile">
      <div className="profile-banner-card">
        <div className="profile-grid">
          {/* Left Avatar / Identifier */}
          <div className="profile-info-block">
            <div className="profile-avatar-box">
              <img src={CREATOR_PROFILE_PHOTO} alt={CREATOR_NAME} className="creator-profile-img" />
              <div className="verified-framer-dot" title="Verified Framer Creator">
                <CheckCircle2 size={16} />
              </div>
            </div>

            <div className="profile-meta">
              <div className="creator-name-row">
                <h3 className="creator-name">{CREATOR_NAME}</h3>
                <span className="creator-handle">@shakil-ur-rehman</span>
              </div>
              <p className="creator-role">{CREATOR_TITLE}</p>
            </div>
          </div>

          {/* Middle Bio */}
          <div className="profile-bio-block">
            <p className="bio-paragraph">
              Specializing in high-performance creative engineering, Three.js spatial interfaces, GLSL shader synthesis, and custom Framer components. Creating production-grade components engineered for zero-compromise framerates and tactile micro-interactions.
            </p>

            <div className="profile-specialties">
              <span className="spec-badge">
                <Cpu size={13} />
                <span>WebGL & GLSL Shaders</span>
              </span>
              <span className="spec-badge">
                <Layers size={13} />
                <span>Three.js Spatial Graphics</span>
              </span>
              <span className="spec-badge">
                <Code2 size={13} />
                <span>Zero-Dependency Framer Smart Components</span>
              </span>
            </div>
          </div>

          {/* Right Action */}
          <div className="profile-action-block">
            <a
              href={FRAMER_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-framer-btn"
            >
              <Sparkles size={15} />
              <span>Explore Framer Profile</span>
              <ExternalLink size={14} />
            </a>
            <span className="profile-action-note">
              10 Published Smart Components & Modules
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
