import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import heroBackground from 'figma:asset/7d38720a420ed43210124dfa9269c105a39ad5c3.png';
import { ChevronRight, MessageCircle, Bike } from 'lucide-react';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title children only if they exist
      if (titleRef.current && titleRef.current.children.length > 0) {
        gsap.from(titleRef.current.children, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.3,
          ease: 'power3.out',
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        {/* Left Side - Text Content */}
        <div className="max-w-2xl space-y-8">
          <div ref={titleRef} className="space-y-2">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none drop-shadow-2xl">
              <span className="block">Burger</span>
              <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Rapa Nui
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white/90 max-w-md leading-relaxed drop-shadow-lg">
            A melhor experiência em hambúrgueres artesanais, pizzas e pastéis. 
            Ingredientes frescos e sabor incomparável desde 1998.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/cardapio"
              className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/60 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Ver Cardápio</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#location"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 text-center"
            >
              Como Chegar
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white drop-shadow-lg">25+</div>
              <div className="text-sm text-white/70">Anos de tradição</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white drop-shadow-lg">280+</div>
              <div className="text-sm text-white/70">Itens no menu</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-orange-500 drop-shadow-lg">★ 4.7</div>
              <div className="text-sm text-white/70">Avaliação</div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="https://wa.me/5547336622373?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20🍔"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full transition-colors duration-300 shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Fazer Pedido pelo WhatsApp</span>
            </a>

            {/* Delivery Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/40 rounded-full text-orange-400 font-semibold">
              <Bike className="w-5 h-5" />
              <span>Fazemos entrega</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
    </div>
  );
}