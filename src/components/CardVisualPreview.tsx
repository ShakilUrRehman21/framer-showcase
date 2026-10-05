import React, { useEffect, useRef } from 'react';

interface CardVisualPreviewProps {
  type: string;
  accentColor: string;
  isHovered: boolean;
}

export const CardVisualPreview: React.FC<CardVisualPreviewProps> = ({
  type,
  accentColor,
  isHovered
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hoverRef = useRef(isHovered);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    hoverRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 240);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    let time = 0;
    let particles: { x: number; y: number; originX: number; originY: number; vx: number; vy: number; size: number }[] = [];

    // Initialize particles for ghost text or pixel burst
    if (type === 'ghost' || type === 'pixel') {
      const count = type === 'ghost' ? 90 : 80;
      for (let i = 0; i < count; i++) {
        const x = width * 0.2 + Math.random() * (width * 0.6);
        const y = height * 0.25 + Math.random() * (height * 0.5);
        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: type === 'pixel' ? Math.random() * 4 + 2 : Math.random() * 2 + 1
        });
      }
    }

    const render = () => {
      time += 0.025;
      const speed = hoverRef.current ? 2.2 : 1.0;
      ctx.clearRect(0, 0, width, height);

      // Light background grid lines
      ctx.strokeStyle = 'rgba(226, 232, 240, 0.55)';
      ctx.lineWidth = 1;
      const gridSize = 24;
      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      const cx = width / 2;
      const cy = height / 2;

      switch (type) {
        case 'bloom': {
          // Mathematical floral bloom curves
          const petals = 8;
          const expansion = hoverRef.current ? 1.35 : 1.0;
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(time * 0.2);

          for (let i = 0; i < petals; i++) {
            const angle = (i * Math.PI * 2) / petals;
            const length = (65 + Math.sin(time * speed + i) * 12) * expansion;
            const petalWidth = (30 + Math.cos(time * speed * 0.8 + i) * 8) * expansion;

            ctx.save();
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(petalWidth, length * 0.4, petalWidth * 0.5, length, 0, length);
            ctx.bezierCurveTo(-petalWidth * 0.5, length, -petalWidth, length * 0.4, 0, 0);
            
            const grad = ctx.createLinearGradient(0, 0, 0, length);
            grad.addColorStop(0, 'rgba(14, 165, 233, 0.08)');
            grad.addColorStop(1, 'rgba(14, 165, 233, 0.35)');
            ctx.fillStyle = grad;
            ctx.fill();

            ctx.strokeStyle = 'rgba(14, 165, 233, 0.7)';
            ctx.lineWidth = 1.2;
            ctx.stroke();
            ctx.restore();
          }

          // Center core
          ctx.beginPath();
          ctx.arc(0, 0, 10 + Math.sin(time * 2) * 2, 0, Math.PI * 2);
          ctx.fillStyle = '#0ea5e9';
          ctx.fill();
          ctx.restore();
          break;
        }

        case 'drift': {
          // Layered drifting cards
          const numCards = 3;
          for (let i = 0; i < numCards; i++) {
            const driftX = Math.sin(time * 0.8 + i * 1.5) * (hoverRef.current ? 22 : 12);
            const driftY = Math.cos(time * 0.7 + i * 1.2) * (hoverRef.current ? 14 : 8);
            const cardW = 160 - i * 15;
            const cardH = 95 - i * 10;
            const x = cx - cardW / 2 + driftX + (i - 1) * 25;
            const y = cy - cardH / 2 + driftY + (i - 1) * 15;

            ctx.save();
            ctx.shadowColor = 'rgba(99, 102, 241, 0.12)';
            ctx.shadowBlur = 16;
            ctx.shadowOffsetY = 8;

            ctx.fillStyle = i === 2 ? '#ffffff' : `rgba(248, 250, 252, ${0.85 - i * 0.2})`;
            ctx.strokeStyle = i === 2 ? '#6366f1' : 'rgba(99, 102, 241, 0.25)';
            ctx.lineWidth = i === 2 ? 1.6 : 1;

            ctx.beginPath();
            ctx.roundRect(x, y, cardW, cardH, 8);
            ctx.fill();
            ctx.stroke();

            // Card internal wireframe lines
            ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
            ctx.fillRect(x + 12, y + 14, 30, 6);
            ctx.fillStyle = 'rgba(148, 163, 184, 0.35)';
            ctx.fillRect(x + 12, y + 26, cardW - 35, 4);
            ctx.fillRect(x + 12, y + 36, cardW - 55, 4);
            ctx.restore();
          }
          break;
        }

        case 'chat': {
          // Interactive conversational bubble & morphing drawer
          const boxW = 190;
          const boxH = hoverRef.current ? 130 : 105;
          const boxX = cx - boxW / 2;
          const boxY = cy - boxH / 2;

          ctx.save();
          ctx.shadowColor = 'rgba(16, 185, 129, 0.14)';
          ctx.shadowBlur = 20;
          ctx.shadowOffsetY = 6;
          ctx.fillStyle = '#ffffff';
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(boxX, boxY, boxW, boxH, 12);
          ctx.fill();
          ctx.stroke();

          // Header pill
          ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
          ctx.beginPath();
          ctx.roundRect(boxX + 12, boxY + 12, 60, 10, 5);
          ctx.fill();

          // Incoming message bubble
          ctx.fillStyle = 'rgba(241, 245, 249, 0.9)';
          ctx.beginPath();
          ctx.roundRect(boxX + 12, boxY + 32, boxW - 50, 24, 6);
          ctx.fill();
          ctx.fillStyle = 'rgba(100, 116, 139, 0.6)';
          ctx.fillRect(boxX + 20, boxY + 41, 75, 4);

          // Outgoing message bubble
          ctx.fillStyle = '#10b981';
          ctx.beginPath();
          ctx.roundRect(boxX + 45, boxY + 62, boxW - 57, 24, 6);
          ctx.fill();
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(boxX + 55, boxY + 72, 60, 4);

          if (hoverRef.current) {
            // Typing dots indicator
            const dotY = boxY + 98;
            for (let d = 0; d < 3; d++) {
              const pulse = Math.sin(time * 5 + d * 0.8) * 2;
              ctx.beginPath();
              ctx.arc(boxX + 22 + d * 10, dotY + pulse, 2.5, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(16, 185, 129, 0.8)';
              ctx.fill();
            }
          }
          ctx.restore();
          break;
        }

        case 'ghost': {
          // Particulate typographic dispersion
          const disperse = hoverRef.current;
          particles.forEach((p, idx) => {
            if (disperse) {
              p.x += p.vx * 2 + Math.sin(time + idx) * 0.8;
              p.y += p.vy * 2 + Math.cos(time + idx) * 0.8;
            } else {
              p.x += (p.originX - p.x) * 0.12;
              p.y += (p.originY - p.y) * 0.12;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = disperse 
              ? `rgba(100, 116, 139, ${Math.max(0.15, 0.7 - Math.abs(p.x - p.originX) / 80)})` 
              : 'rgba(51, 65, 85, 0.75)';
            ctx.fill();
          });

          // Central faint typographic outline
          ctx.save();
          ctx.font = '700 24px "Space Grotesk", sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = disperse ? 'rgba(100, 116, 139, 0.25)' : 'rgba(15, 23, 42, 0.85)';
          ctx.fillText('G H O S T', cx, cy);
          ctx.restore();
          break;
        }

        case 'bookscape': {
          // Tactile 3D editorial folio simulation
          const tilt = Math.sin(time * 0.8) * 0.15;
          const bookW = 100;
          const bookH = 130;
          const bX = cx - bookW / 2;
          const bY = cy - bookH / 2;

          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(tilt);
          ctx.translate(-cx, -cy);

          // Folio cover
          ctx.fillStyle = '#ffffff';
          ctx.strokeStyle = '#d97706';
          ctx.lineWidth = 1.8;
          ctx.shadowColor = 'rgba(217, 119, 6, 0.15)';
          ctx.shadowBlur = 24;
          ctx.shadowOffsetY = 12;

          ctx.beginPath();
          ctx.roundRect(bX, bY, bookW, bookH, [3, 8, 8, 3]);
          ctx.fill();
          ctx.stroke();

          // Spine spine crease & foil line
          ctx.fillStyle = '#fef3c7';
          ctx.fillRect(bX, bY, 14, bookH);
          ctx.strokeStyle = 'rgba(217, 119, 6, 0.5)';
          ctx.lineWidth = 1;
          ctx.strokeRect(bX, bY, 14, bookH);

          // Spine gold accent
          ctx.fillStyle = '#d97706';
          ctx.fillRect(bX + 4, bY + 16, 6, bookH - 32);

          // Cover typographic emboss
          ctx.fillStyle = 'rgba(217, 119, 6, 0.2)';
          ctx.fillRect(bX + 26, bY + 30, bookW - 38, 5);
          ctx.fillRect(bX + 26, bY + 42, bookW - 48, 4);

          // Interactive open-page effect on hover
          if (hoverRef.current) {
            ctx.beginPath();
            ctx.moveTo(bX + bookW, bY + bookH);
            ctx.lineTo(bX + bookW - 25, bY + bookH - 25);
            ctx.lineTo(bX + bookW, bY + bookH - 35);
            ctx.fillStyle = '#fef3c7';
            ctx.fill();
            ctx.stroke();
          }

          ctx.restore();
          break;
        }

        case 'pixel': {
          // Procedural voxel grid & dispersal
          const cols = 12;
          const rows = 8;
          const cellW = 16;
          const cellH = 14;
          const startX = cx - (cols * cellW) / 2;
          const startY = cy - (rows * cellH) / 2;

          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const dist = Math.hypot(c - cols / 2, r - rows / 2);
              const jitterX = hoverRef.current ? Math.sin(time * 4 + r * c) * 6 : 0;
              const jitterY = hoverRef.current ? Math.cos(time * 4 + r * c) * 6 : 0;

              const x = startX + c * cellW + jitterX;
              const y = startY + r * cellH + jitterY;
              const alpha = Math.max(0.1, 0.2 + 0.6 * Math.sin(time * speed + dist * 0.6));

              ctx.fillStyle = `rgba(139, 92, 246, ${alpha})`;
              ctx.strokeStyle = 'rgba(139, 92, 246, 0.4)';
              ctx.lineWidth = 1;
              ctx.fillRect(x + 1, y + 1, cellW - 2, cellH - 2);
              ctx.strokeRect(x + 1, y + 1, cellW - 2, cellH - 2);
            }
          }
          break;
        }

        case 'mesh': {
          // Undulating topological wireframe terrain
          const cols = 14;
          const rows = 9;
          const spacingX = width / (cols + 1);
          const spacingY = height / (rows + 1);

          ctx.save();
          ctx.strokeStyle = 'rgba(2, 132, 199, 0.7)';
          ctx.lineWidth = 1.2;

          const points: { x: number; y: number }[][] = [];
          for (let r = 0; r < rows; r++) {
            points[r] = [];
            for (let c = 0; c < cols; c++) {
              const nx = (c - cols / 2) * 0.4;
              const ny = (r - rows / 2) * 0.4;
              const elevation = Math.sin(nx + time * speed) * Math.cos(ny + time * speed) * (hoverRef.current ? 26 : 14);
              points[r][c] = {
                x: (c + 1) * spacingX + Math.sin(time + r) * 3,
                y: (r + 1) * spacingY + elevation
              };
            }
          }

          // Horizontal wireframe lines
          for (let r = 0; r < rows; r++) {
            ctx.beginPath();
            ctx.moveTo(points[r][0].x, points[r][0].y);
            for (let c = 1; c < cols; c++) {
              ctx.lineTo(points[r][c].x, points[r][c].y);
            }
            ctx.stroke();
          }

          // Vertical wireframe lines
          for (let c = 0; c < cols; c++) {
            ctx.beginPath();
            ctx.moveTo(points[0][c].x, points[0][c].y);
            for (let r = 1; r < rows; r++) {
              ctx.lineTo(points[r][c].x, points[r][c].y);
            }
            ctx.stroke();
          }

          // Vertex nodes
          for (let r = 0; r < rows; r += 2) {
            for (let c = 0; c < cols; c += 2) {
              ctx.beginPath();
              ctx.arc(points[r][c].x, points[r][c].y, 2.5, 0, Math.PI * 2);
              ctx.fillStyle = '#0284c7';
              ctx.fill();
            }
          }
          ctx.restore();
          break;
        }

        case 'ocean': {
          // Luminous Gerstner wave rippling caustics
          const waveCount = 5;
          ctx.save();
          for (let w = 0; w < waveCount; w++) {
            ctx.beginPath();
            const yBase = cy + (w - 2) * 16;
            ctx.moveTo(0, yBase);

            for (let x = 0; x <= width; x += 8) {
              const wave1 = Math.sin(x * 0.02 + time * 1.5 + w * 0.8) * (10 + (hoverRef.current ? 6 : 0));
              const wave2 = Math.cos(x * 0.04 - time * 1.1 + w) * 5;
              ctx.lineTo(x, yBase + wave1 + wave2);
            }

            const alpha = 0.25 + (w / waveCount) * 0.45;
            ctx.strokeStyle = `rgba(8, 145, 178, ${alpha})`;
            ctx.lineWidth = 1.8;
            ctx.stroke();
          }

          // Caustic light particles
          for (let i = 0; i < 12; i++) {
            const px = (width * 0.2 + (i * 28 + Math.sin(time + i) * 20)) % width;
            const py = cy + Math.cos(time * 2 + i) * 35;
            ctx.beginPath();
            ctx.arc(px, py, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(6, 182, 212, 0.8)';
            ctx.fill();
          }
          ctx.restore();
          break;
        }

        case 'spinning': {
          // Rotating typographic ring with focal emblem
          const radius = hoverRef.current ? 62 : 54;
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(time * (hoverRef.current ? 1.4 : 0.6));

          // Circular track
          ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);

          // Orbiting glyph markers
          const numMarks = 8;
          for (let m = 0; m < numMarks; m++) {
            const theta = (m * Math.PI * 2) / numMarks;
            const mx = Math.cos(theta) * radius;
            const my = Math.sin(theta) * radius;
            ctx.beginPath();
            ctx.arc(mx, my, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#f59e0b';
            ctx.fill();
          }

          // Center precision emblem
          ctx.beginPath();
          ctx.arc(0, 0, 16, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 2;
          ctx.fill();
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(-6, 0);
          ctx.lineTo(6, 0);
          ctx.moveTo(0, -6);
          ctx.lineTo(0, 6);
          ctx.strokeStyle = '#d97706';
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.restore();
          break;
        }

        case 'ai': {
          // Pulsing neural network node orb
          const orbR = (hoverRef.current ? 28 : 22) + Math.sin(time * 3) * 3;
          ctx.save();
          ctx.translate(cx, cy);

          // Radiating energy waves
          for (let ring = 1; ring <= 3; ring++) {
            const ringRadius = orbR + ring * 18 + Math.sin(time * 2 + ring) * 4;
            ctx.beginPath();
            ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.35 / ring})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }

          // Orbital synaptic nodes
          const synapticNodes = 6;
          for (let s = 0; s < synapticNodes; s++) {
            const theta = (s * Math.PI * 2) / synapticNodes + time;
            const dist = orbR + 25;
            const sx = Math.cos(theta) * dist;
            const sy = Math.sin(theta) * dist;

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(sx, sy);
            ctx.strokeStyle = 'rgba(99, 102, 241, 0.25)';
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(sx, sy, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#6366f1';
            ctx.fill();
          }

          // Central glowing orb
          const grad = ctx.createRadialGradient(0, 0, 2, 0, 0, orbR);
          grad.addColorStop(0, '#ffffff');
          grad.addColorStop(0.6, '#818cf8');
          grad.addColorStop(1, '#4f46e5');

          ctx.beginPath();
          ctx.arc(0, 0, orbR, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.shadowColor = 'rgba(99, 102, 241, 0.4)';
          ctx.shadowBlur = 18;
          ctx.fill();

          ctx.restore();
          break;
        }

        default:
          break;
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [type, accentColor]);

  return (
    <div className="card-visual-wrapper">
      <canvas ref={canvasRef} className="card-visual-canvas" />
    </div>
  );
};
