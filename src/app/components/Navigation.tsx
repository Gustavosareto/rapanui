import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import rapaNuiLogo from '../../assets/4f21ce56bc8447e0b15e74f64a95ca262c3e3b79.png';

gsap.registerPlugin(ScrollToPlugin);

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: {
              y: element,
              offsetY: 80
            },
            ease: 'power2.inOut'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: {
            y: element,
            offsetY: 80
          },
          ease: 'power2.inOut'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      scrollToSection('hero');
    } else {
      navigate('/');
      // Scroll to top smoothly when navigating to home
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/50 py-2 border-b border-white/10'
            : 'py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
            >
              <img
                src={rapaNuiLogo}
                alt="Rapa Nui Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'
                } w-auto drop-shadow-2xl brightness-110 contrast-110`}
                style={{
                  mixBlendMode: 'screen',
                  filter: 'drop-shadow(0 0 20px rgba(251, 146, 60, 0.3))'
                }}
                draggable={false}
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/cardapio"
                className="font-semibold text-white hover:text-red-500 transition-colors drop-shadow-lg"
              >
                Cardápio
              </Link>
              <button
                onClick={() => scrollToSection('gallery')}
                className="font-semibold text-white hover:text-red-500 transition-colors drop-shadow-lg"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="font-semibold text-white hover:text-red-500 transition-colors drop-shadow-lg"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="font-semibold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-full transition-all shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105"
              >
                Ver Localização
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-red-600/80 backdrop-blur-sm text-white hover:bg-red-700 transition-colors shadow-lg"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/98 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 px-4">
            <Link
              to="/cardapio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-black text-white hover:text-orange-500 transition-colors"
            >
              Cardápio
            </Link>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-3xl font-black text-white hover:text-orange-500 transition-colors"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-3xl font-black text-white hover:text-orange-500 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-3xl font-black text-white hover:text-orange-500 transition-colors"
            >
              Localização
            </button>
          </div>
        </div>
      )}
    </>
  );
}