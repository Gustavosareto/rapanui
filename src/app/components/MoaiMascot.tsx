import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import moaiImage from '../../assets/e43980ec36d15115ffe244fecd2b9817a1d6cf88.png';

gsap.registerPlugin(ScrollTrigger);

interface MoaiMascotProps {
  position?: 'left' | 'right' | 'center';
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
  className?: string;
}

export function MoaiMascot({ 
  position = 'center', 
  size = 'medium', 
  animated = true,
  className = ''
}: MoaiMascotProps) {
  const moaiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!moaiRef.current || !animated) return;

    // Floating animation
    gsap.to(moaiRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Rotation animation
    gsap.to(moaiRef.current, {
      rotation: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Scale on scroll
    ScrollTrigger.create({
      trigger: moaiRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const scale = 1 + (self.progress * 0.2);
        gsap.to(moaiRef.current, {
          scale: scale,
          duration: 0.3,
        });
      },
    });
  }, [animated]);

  const sizeClasses = {
    small: 'w-16 h-16 md:w-20 md:h-20',
    medium: 'w-24 h-24 md:w-32 md:h-32',
    large: 'w-32 h-32 md:w-48 md:h-48',
  };

  const positionClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  };

  return (
    <div
      ref={moaiRef}
      className={`absolute z-10 ${positionClasses[position]} ${className}`}
      style={{ transformOrigin: 'center center' }}
    >
      <div className={`${sizeClasses[size]} drop-shadow-2xl`}>
        <img
          src={moaiImage}
          alt="Moai Mascot - Rapa Nui"
          className="w-full h-full object-contain filter drop-shadow-lg"
          draggable={false}
          loading="lazy"
        />
      </div>
    </div>
  );
}
