import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import gsap from 'gsap';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: 'power3.inOut',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
    </button>
  );
}
