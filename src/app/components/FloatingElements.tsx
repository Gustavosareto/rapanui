import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface FloatingElement {
  id: string;
  image: string;
  size: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  rotate: number;
}

export function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  const elements: FloatingElement[] = [
    // Tomates circulares
    {
      id: 'tomato-1',
      image: 'https://images.unsplash.com/flagged/photo-1579410137851-2f510f2d150f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHRvbWF0byUyMHNsaWNlfGVufDF8fHx8MTc3MzU3MTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      size: 120,
      left: '5%',
      top: '10%',
      delay: 0,
      duration: 4,
      rotate: 360,
    },
    {
      id: 'tomato-2',
      image: 'https://images.unsplash.com/flagged/photo-1579410137851-2f510f2d150f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHRvbWF0byUyMHNsaWNlfGVufDF8fHx8MTc3MzU3MTY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      size: 80,
      left: '90%',
      top: '60%',
      delay: 2,
      duration: 5,
      rotate: -360,
    },
    // Pimentas circulares
    {
      id: 'pepper-1',
      image: 'https://images.unsplash.com/photo-1693082895630-45b223dc2796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBjaGlsaSUyMHBlcHBlcnxlbnwxfHx8fDE3NzM1MDY4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      size: 100,
      left: '85%',
      top: '15%',
      delay: 1,
      duration: 6,
      rotate: 180,
    },
    {
      id: 'pepper-2',
      image: 'https://images.unsplash.com/photo-1693082895630-45b223dc2796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBjaGlsaSUyMHBlcHBlcnxlbnwxfHx8fDE3NzM1MDY4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      size: 70,
      left: '10%',
      top: '70%',
      delay: 3,
      duration: 5.5,
      rotate: -180,
    },
    // Folhas de manjericão circulares
    {
      id: 'basil-1',
      image: 'https://images.unsplash.com/photo-1662422325326-19089df23d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJhc2lsJTIwbGVhdmVzfGVufDF8fHx8MTc3MzUyMTQyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      size: 90,
      left: '15%',
      top: '40%',
      delay: 1.5,
      duration: 4.5,
      rotate: 360,
    },
    {
      id: 'basil-2',
      image: 'https://images.unsplash.com/photo-1662422325326-19089df23d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJhc2lsJTIwbGVhdmVzfGVufDF8fHx8MTc3MzUyMTQyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      size: 110,
      left: '92%',
      top: '45%',
      delay: 2.5,
      duration: 5,
      rotate: -360,
    },
    // Pepino circular
    {
      id: 'cucumber-1',
      image: 'https://images.unsplash.com/flagged/photo-1579410137904-03cda8069b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWN1bWJlciUyMHNsaWNlfGVufDF8fHx8MTc3MzU3MTY2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      size: 85,
      left: '8%',
      top: '85%',
      delay: 0.5,
      duration: 5.5,
      rotate: 360,
    },
    // Cebola roxa circular
    {
      id: 'onion-1',
      image: 'https://images.unsplash.com/photo-1677222646010-ac323833de1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBvbmlvbiUyMHJpbmdzfGVufDF8fHx8MTc3MzU3MTY2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      size: 95,
      left: '3%',
      top: '50%',
      delay: 2,
      duration: 6,
      rotate: 180,
    },
    // Alface circular
    {
      id: 'lettuce-1',
      image: 'https://images.unsplash.com/photo-1657411658219-573d47e402c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0dWNlJTIwbGVhZiUyMGZyZXNofGVufDF8fHx8MTc3MzU3MTY2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      size: 105,
      left: '88%',
      top: '80%',
      delay: 1,
      duration: 5,
      rotate: -360,
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const floatingElements = containerRef.current.querySelectorAll('.floating-element');

    floatingElements.forEach((el, index) => {
      const element = elements[index];
      
      // Animação de flutuação
      gsap.to(el, {
        y: '+=30',
        x: '+=15',
        duration: element.duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: element.delay,
      });

      // Animação de rotação
      gsap.to(el, {
        rotation: element.rotate,
        duration: element.duration * 2,
        repeat: -1,
        ease: 'none',
        delay: element.delay,
      });

      // Animação de fade in inicial
      gsap.from(el, {
        opacity: 0,
        scale: 0,
        duration: 1,
        delay: element.delay,
        ease: 'back.out(1.7)',
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="floating-element absolute opacity-15"
          style={{
            left: element.left,
            top: element.top,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden backdrop-blur-sm border border-white/10 shadow-2xl">
            <img
              src={element.image}
              alt=""
              className="w-full h-full object-cover"
              draggable={false}
            />
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          </div>
        </div>
      ))}
    </div>
  );
}