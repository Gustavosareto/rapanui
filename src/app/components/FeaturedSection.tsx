import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, MapPin, Users, Flame, Pizza, Award, Heart, Smartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate number counters
      statsRef.current.forEach((stat) => {
        if (!stat) return;
        const target = stat.getAttribute("data-count");
        const suffix = stat.getAttribute("data-suffix") || "";
        const prefix = stat.getAttribute("data-prefix") || "";
        
        if (target) {
          gsap.from(stat, {
            textContent: 0,
            duration: 2.5,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top bottom-=100",
            },
            onUpdate: function() {
              const current = Math.ceil(this.targets()[0].textContent);
              stat.textContent = prefix + current.toLocaleString('pt-BR') + suffix;
            }
          });
        }
      });

      // Animate cards entrance
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.from(card, {
          scale: 0.8,
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=80",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: Clock,
      value: "15",
      suffix: "+",
      label: "Anos de Tradição",
      gradient: "from-orange-500 to-red-500",
      glow: "orange-500",
    },
    {
      icon: Users,
      value: "50000",
      suffix: "+",
      label: "Clientes Satisfeitos",
      gradient: "from-purple-500 to-pink-500",
      glow: "purple-500",
    },
    {
      icon: Flame,
      value: "280",
      suffix: "+",
      label: "Opções no Cardápio",
      gradient: "from-red-500 to-orange-500",
      glow: "red-500",
    },
    {
      icon: Pizza,
      value: "1000",
      suffix: "+",
      label: "Pedidos por Semana",
      gradient: "from-green-500 to-emerald-500",
      glow: "green-500",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Ingredientes frescos e selecionados todos os dias",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada lanche é preparado com dedicação e carinho",
      gradient: "from-pink-500 to-red-500",
    },
    {
      icon: Smartphone,
      title: "Atendimento Rápido",
      description: "Seu pedido pronto no menor tempo possível",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Localização Privilegiada",
      description: "Fácil acesso e estacionamento disponível",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      
    </section>
  );
}