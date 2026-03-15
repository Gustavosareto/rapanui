import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "Qual o horário de funcionamento da Rapa Nui?",
    answer: "Estamos abertos de segunda a domingo, das 18:00 às 00:00."
  },
  {
    question: "Fazem entregas na minha região?",
    answer: "Sim! Fazemos delivery em um raio de 30 km. Acesse a página do nosso cardápio, faça seu pedido e entregamos quentinho na sua casa."
  },
  {
    question: "A pizzaria foca em massa fina ou tradicional?",
    answer: "Nossas pizzas da Rapa Nui são preparadas com a tradição desde 1998, com massa tradicional, crocante e recheada com ingredientes frescos todos os dias."
  }
];

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // JSON-LD para o Google (Schema de FAQ)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section ref={sectionRef} className="py-20 bg-zinc-900 relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Dúvidas <span className="text-orange-500">Frequentes</span>
          </h2>
          <p className="text-zinc-400">
            Respostas rápidas para as principais dúvidas de nossos clientes.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="faq-item bg-zinc-800/50 border border-white/10 rounded-lg px-6 data-[state=open]:bg-zinc-800 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-orange-400 hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-300 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
