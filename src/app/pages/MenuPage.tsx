import { useState } from 'react';
import { MenuCard } from '../components/MenuCard';
import { menuItems, MenuItem } from '../data/menuData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Pizza, UtensilsCrossed, Coffee, Search, ArrowLeft, MessageCircle, Bike, LucideProps } from 'lucide-react';
import { Link } from 'react-router';
import { PageTransition } from '../components/PageTransition';

const PastelIcon = (props: LucideProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 13c0 5 4 9 9 9h9a1 1 0 0 0 1-1v-2c0-5-4-9-9-9H3a1 1 0 0 0-1 1v2z" />
    <path d="M6 13v2" />
    <path d="M10 13v4" />
    <path d="M14 13v6" />
    <path d="M18 13v6" />
  </svg>
);

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('hamburgers');
  const [searchTerm, setSearchTerm] = useState('');

  const getFilteredItems = (category: string): MenuItem[] => {
    let filtered = menuItems.filter(item => item.category === category);
    
    // Apply search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ingredients.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  const categories = [
    { id: 'hamburgers', label: 'Hambúrgueres', icon: UtensilsCrossed },
    { id: 'pastries', label: 'Pastéis', icon: PastelIcon },
    { id: 'pizza', label: 'Pizza 🚀', icon: Pizza },
    { id: 'drinks', label: 'Bebidas', icon: Coffee },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-12 relative overflow-hidden">
        {/* Brasas Background */}
        <div className="fixed inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1773039163026-1d622779fd71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBnbG93aW5nJTIwY2hhcmNvYWwlMjBlbWJlcnMlMjBmaXJlfGVufDF8fHx8MTc3MzU4NTEwMXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Brasas" 
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay para escurecer e dar profundidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        </div>

        {/* Particles de faíscas */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5,
              }}
            />
          ))}
        </div>

        <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Voltar para Home</span>
          </Link>

          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Nosso <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Cardápio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6">
              Descubra nossa deliciosa seleção de lanches, petiscos e bebidas
            </p>

            {/* CTA WhatsApp - Fazer Pedido */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              <a
                href="https://wa.me/5547997078484?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20🍔"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full transition-colors duration-300"
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

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nome ou ingrediente..."
                value={searchTerm}
                onChange={(e: any) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Tabs Navigation */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-12">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:border-transparent data-[state=active]:scale-105 data-[state=active]:shadow-lg data-[state=active]:shadow-orange-500/50 text-gray-300"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-semibold">{category.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* Menu Items Grid */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  {getFilteredItems(category.id).map((item, index) => (
                    <MenuCard
                      name={item.name}
                      price={item.price}
                      ingredients={item.ingredients}
                      isNew={item.isNew}
                      index={index}
                    />
                  ))}
                </div>
                {getFilteredItems(category.id).length === 0 && (
                  <div className="text-center py-20">
                    <p className="text-xl text-gray-400">
                      Nenhum item encontrado para "{searchTerm}"
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </div>
    </PageTransition>
  );
}