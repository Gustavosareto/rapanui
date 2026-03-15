import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { Sparkles, X, Pizza } from 'lucide-react';
import { useState } from 'react';

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && bannerRef.current) {
      gsap.from(bannerRef.current, {
        x: -1000,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      });

      // Sparkle animation
      gsap.to('.sparkle-icon', {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: 'linear',
      });
    }
  }, [isVisible]);

  const handleClose = () => {
    gsap.to(bannerRef.current, {
      x: 1000,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.in',
      onComplete: () => setIsVisible(false),
    });
  };

  if (!isVisible) return null;

  return (
    <div className="relative w-full overflow-hidden py-16 z-20">
      <div
        ref={bannerRef}
        className="relative w-[120%] -left-[10%] bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-6 px-8 shadow-2xl shadow-red-500/50 -rotate-3 transform"
      >
        <div className="flex items-center justify-center gap-3 md:gap-4 relative">
          <Pizza className="w-5 h-5 md:w-6 md:h-6 sparkle-icon flex-shrink-0" />
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 sparkle-icon flex-shrink-0" />
          <p className="text-sm md:text-lg font-bold text-center uppercase tracking-wide px-4">
            🚀 <span className="font-black text-yellow-300">NOVIDADE!</span> Experimente nosso incrível cardápio de pizzas - Fresquinhas do forno!
          </p>
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 sparkle-icon flex-shrink-0" />
          <Pizza className="w-5 h-5 md:w-6 md:h-6 sparkle-icon flex-shrink-0" />
          <button
            onClick={handleClose}
            className="absolute -right-2 md:right-4 p-1.5 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
            aria-label="Fechar banner"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}