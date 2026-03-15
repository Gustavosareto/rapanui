import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function ParticleEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles = containerRef.current.querySelectorAll('.particle');

    particles.forEach((particle) => {
      // Posição aleatória
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      gsap.set(particle, { x, y });

      // Animação de movimento
      gsap.to(particle, {
        y: `-=${Math.random() * 200 + 100}`,
        x: `+=${(Math.random() - 0.5) * 100}`,
        opacity: 0,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        delay: Math.random() * 2,
        ease: 'power1.out',
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="particle absolute w-1 h-1 bg-orange-500 rounded-full"
          style={{
            boxShadow: '0 0 10px rgba(249, 115, 22, 0.8), 0 0 20px rgba(249, 115, 22, 0.4)',
          }}
        />
      ))}
    </div>
  );
}
