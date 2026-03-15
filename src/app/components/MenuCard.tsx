import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Badge } from './ui/badge';

interface MenuCardProps {
  name: string;
  price: string;
  ingredients: string;
  isNew?: boolean;
  index: number;
}

export function MenuCard({ name, price, ingredients, isNew, index }: MenuCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.4,
        delay: index * 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom-=50',
          toggleActions: 'play none none none',
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-orange-500/30 p-6"
    >
      {/* NEW Badge */}
      {isNew && (
        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 font-bold px-3 py-1 text-sm shadow-lg">
          🚀 NEW
        </Badge>
      )}

      {/* Content */}
      <div className="space-y-4">
        {/* Item Name */}
        <h3 className="text-lg md:text-xl font-black text-white group-hover:text-orange-500 transition-colors pr-20">
          {name}
        </h3>

        {/* Ingredients */}
        <p className="text-sm text-gray-400 leading-relaxed min-h-[60px]">
          {ingredients}
        </p>

        {/* Price */}
        <div className="pt-3 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 font-medium">Preço:</span>
            <span className="text-2xl font-black text-orange-500">
              {price.includes('Consultar') ? price : `R$ ${price}`}
            </span>
          </div>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none rounded-2xl"></div>
    </div>
  );
}
