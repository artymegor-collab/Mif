import { useMemo } from 'react';

/**
 * AnimatedBackground
 * Renders a layered atmospheric backdrop: deep gradient, twinkling stars,
 * drifting fog orbs, and floating golden particles.
 */
export default function AnimatedBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 2,
      })),
    []
  );

  const fogOrbs = useMemo(
    () =>
      Array.from({ length: 5 }, () => ({
        top: Math.random() * 80,
        left: Math.random() * 90,
        size: Math.random() * 200 + 150,
        delay: Math.random() * 4,
        duration: Math.random() * 6 + 8,
      })),
    []
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 25 }, () => ({
        left: Math.random() * 100,
        size: Math.random() * 3 + 2,
        delay: Math.random() * 15,
        duration: Math.random() * 10 + 15,
      })),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, #1a1a2e 0%, #12121e 40%, #0a0a12 100%)',
        }}
      />

      {/* Stars */}
      {stars.map((s, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: '0 0 4px rgba(255,255,255,0.5)',
          }}
        />
      ))}

      {/* Fog orbs */}
      {fogOrbs.map((f, i) => (
        <div
          key={`fog-${i}`}
          className="absolute rounded-full"
          style={{
            top: `${f.top}%`,
            left: `${f.left}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            background:
              'radial-gradient(circle, rgba(139,92,246,0.06) 0%, rgba(212,175,55,0.03) 40%, transparent 70%)',
            filter: 'blur(40px)',
            animation: `drift ${f.duration}s ease-in-out infinite`,
            animationDelay: `${f.delay}s`,
          }}
        />
      ))}

      {/* Floating golden particles */}
      {particles.map((p, i) => (
        <div
          key={`particle-${i}`}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: 'radial-gradient(circle, rgba(212,175,55,0.8), rgba(212,175,55,0))',
            animation: `floatParticle ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
        }}
      />
    </div>
  );
}
