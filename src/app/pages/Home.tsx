import { HeroSection } from '../components/HeroSection';
import { FeaturedSection } from '../components/FeaturedSection';
import { AmbientSection } from '../components/AmbientSection';
import { AnnouncementBanner } from '../components/AnnouncementBanner';
import { ReviewsSection } from '../components/ReviewsSection';
import { PageTransition } from '../components/PageTransition';

import galleryBurger from '../../assets/bfb90da3e8e047e221a82cff43de07f3c5c66a2e.png';
import galleryPastel from '../../assets/4a56b1827a7354bfafa389c7c86162afa469d634.png';
import galleryBeverage from '../../assets/a14e25d72f2753a6e35725b8d531c23b0a3bfab8.png';
import galleryBurgerPlate from '../../assets/49f7a80834c02a10613b597209efd0a82b59c370.png';
import galleryInterior1 from '../../assets/9f51012b0f31fcf402463718fc51527d8a543e45.png';
import galleryInterior2 from '../../assets/9c084d118d96a2e42e16b4aaf4c96d42fc72d980.png';

export function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* Announcement Banner */}
      <AnnouncementBanner />

      {/* Featured Section */}
      <div id="about">
        <FeaturedSection />
      </div>

      {/* Ambient Section */}
      <AmbientSection />

      {/* Gallery Section */}
      <section id="gallery" className="py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#111] relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Galeria</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Um gostinho do que criamos todos os dias
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-white/10">
              <img
                src={galleryBurger}
                alt="Gourmet Burger"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-white/10">
              <img
                src={galleryPastel}
                alt="Fresh Pastries"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-white/10">
              <img
                src={galleryBurgerPlate}
                alt="Hamburger com Batatas"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-white/10">
              <img
                src={galleryBeverage}
                alt="Tropical Drinks"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-white/10">
              <img
                src={galleryInterior1}
                alt="Restaurant Interior"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-white/10">
              <img
                src={galleryInterior2}
                alt="Food Preparation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-[#111] to-[#0a0a0a] relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3">
              Visite <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Nos</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400">
              Venha aproveitar nosso delicioso cardápio pessoalmente!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Map */}
            <div className="w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
              <iframe className="mx-[0px] my-[6px] p-[0px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4547!2d-48.6360!3d-26.9932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8c9e6f5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sAv.%20do%20Estado%20Dalmo%20Vieira%2C%203317%20-%20Centro%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088330-077!5e0!3m2!1sen!2sbr!4v1234567890!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rapa Nui Location"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl shadow-2xl shadow-black/50 p-6 md:p-8 space-y-6 border border-white/10 flex flex-col justify-between">
              {/* Address */}
              <div className="space-y-2">
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <span className="text-2xl">📍</span>
                  Endereço
                </h3>
                <p className="text-base text-gray-300 leading-relaxed pl-9">
                  Av. do Estado Dalmo Vieira, 3317<br />
                  Centro, Balneário Camboriú - SC<br />
                  CEP: 88330-077
                </p>
              </div>

              {/* Hours */}
              <div className="space-y-2">
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <span className="text-2xl">⏰</span>
                  Horário de Funcionamento
                </h3>
                <div className="pl-9 space-y-1">
                  <p className="text-base text-gray-300">
                    <span className="font-bold text-orange-500">Segunda a Domingo</span>
                  </p>
                  <p className="text-lg font-black text-white">
                    18:00 - 00:00
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Av.+do+Estado+Dalmo+Vieira,+3317+-+Centro,+Balneário+Camboriú+-+SC,+88330-077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 px-6 rounded-full font-bold text-base shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/60 hover:scale-105 transition-all duration-300"
                >
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />
    </PageTransition>
  );
}