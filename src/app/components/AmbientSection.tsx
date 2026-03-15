/// <reference path="../../types.d.ts" />
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import pastel from '../../assets/4a56b1827a7354bfafa389c7c86162afa469d634.png';
import beverage from '../../assets/a14e25d72f2753a6e35725b8d531c23b0a3bfab8.png';
import burgerPlate from '../../assets/49f7a80834c02a10613b597209efd0a82b59c370.png';
import interior1 from '../../assets/9f51012b0f31fcf402463718fc51527d8a543e45.png';

gsap.registerPlugin(ScrollTrigger);

export function AmbientSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftImageRef.current) {
        gsap.from(leftImageRef.current, {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (rightImageRef.current) {
        gsap.from(rightImageRef.current, {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (textRef.current) {
        gsap.from(textRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#111] overflow-hidden relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div ref={leftImageRef} className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                  <img
                    src={interior1}
                    alt="Cozy interior"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                  <img
                    src={pastel}
                    alt="Coffee"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div
                ref={rightImageRef}
                className="space-y-4 pt-8"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                  <img
                    src={burgerPlate}
                    alt="Restaurant ambiance"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                  <img
                    src={beverage}
                    alt="Beverages"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div ref={textRef} className="lg:pl-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Um lugar que você{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Vai adorar visitar
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
              Em Rapa Nui criamos mais do que um lanche
              bar - construímos um centro comunitário onde amigos
              se reúnem, as famílias comemoram e lembranças deliciosas
              são feitas.
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              Desde os nossos pastéis crocantes, hambúrgueres suculentos e
              nossas pizzas artesanais, todos os itens do nosso
              menu é elaborado com cuidado e servido com um sorriso.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <span className="text-2xl">🍻</span>
                </div>
                <div>
                  <div className="font-bold text-white">
                    Bebidas geladas
                  </div>
                  <div className="text-sm text-gray-500">
                    Para fechar a noite
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <span className="text-2xl">🍕</span>
                </div>
                <div>
                  <div className="font-bold text-white">
                    Pizza no forno a lenha
                  </div>
                  <div className="text-sm text-gray-500">
                    Autentico e quente
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50">
                  <span className="text-2xl">🥐</span>
                </div>
                <div>
                  <div className="font-bold text-white">
                    Lanches artesanais
                  </div>
                  <div className="text-sm text-gray-500">
                    Feitos na hora
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}