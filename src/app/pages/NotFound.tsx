import { Link } from 'react-router';
import { Home, UtensilsCrossed } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              404
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ops! Página Não Encontrada
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12">
            Parece que esta página saiu para buscar ingredientes... 🍔
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/60 hover:scale-105 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Voltar para Home
            </Link>
            
            <Link
              to="/cardapio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Ver Cardápio
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}