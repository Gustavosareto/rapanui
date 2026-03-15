import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Review {
  id: number;
  author: string;
  role: string;
  rating: number;
  date: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    author: 'Ana Paula Elibio',
    role: 'Local Guide · 27 avaliações',
    rating: 5,
    date: '4 meses atrás',
    text: 'Um hambúrguer excelente, a combinação de todos os ingredientes é espetacular, adoramos o pão de ciabatta, tínhamos preconceito kkkkk. Mas ele é muito, muito fofinho',
  },
  {
    id: 2,
    author: 'Andreia Pagnan',
    role: '1 avaliação',
    rating: 5,
    date: 'um mês atrás',
    text: 'O lugar é bem legal estilo rústico moderno. Pedimos hambúrguer de costela e sinceramente foi o melhor que comemos até hoje! O pão, a costela tudo bem feito! Quando voltarmos a Balneário Concerteza vai ser parada obrigatória! Top 🔝',
  },
  {
    id: 3,
    author: 'Gislaine Avi',
    role: 'Local Guide · 20 avaliações',
    rating: 5,
    date: 'um ano atrás',
    text: 'Entrega rápida! Esse é o salada, veio bem recheado, saboroso, molho verde à parte muito gostoso 😊 Recomendo! Eu sempre corto ao meio e como a metade, mas tem vezes que a fome é muita e como ele todinho!',
  },
];

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
          y: 60,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.15,
          ease: 'power3.out',
        });
      });
    }
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#111] relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
              <path
                d="M44 24c0 11.05-8.95 20-20 20S4 35.05 4 24 12.95 4 24 4s20 8.95 20 20z"
                fill="#FFC107"
              />
              <path
                d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"
                fill="#FF6D00"
              />
              <path
                d="M35 21.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5zM13 21.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5z"
                fill="#784719"
              />
              <path
                d="M24 36.5c5.52 0 10.23-3.56 11.91-8.5H12.09c1.68 4.94 6.39 8.5 11.91 8.5z"
                fill="#784719"
              />
            </svg>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              Avaliações no{' '}
              <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                Google
              </span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Veja o que nossos clientes estão dizendo sobre nós
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-6 h-6 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/70 text-yellow-400/70'}`} 
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">4.7</span>
            <span className="text-gray-400">· 898+ avaliações no Google</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              ref={addToRefs}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-6 border border-white/10 shadow-2xl shadow-black/50 hover:border-orange-500/50 hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Review Content */}
              <div className="space-y-3">
                {/* Author Info */}
                <div>
                  <h3 className="text-lg font-bold text-white">{review.author}</h3>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>

                {/* Rating & Date */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 leading-relaxed text-sm">{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=rapa+nui+balneario+camboriu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
              <path
                d="M44 24c0 11.05-8.95 20-20 20S4 35.05 4 24 12.95 4 24 4s20 8.95 20 20z"
                fill="#FFC107"
              />
            </svg>
            Ver Todas as Avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}