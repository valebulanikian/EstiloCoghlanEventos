'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: 'Estilo Coghlan',
    subtitle: 'Un oasis en la ciudad',
    description:
      'Más de 1200m² de jardín y un salón pensado para celebraciones únicas en Buenos Aires.',
    cta: 'Contactanos',
    image: '/salon_01.jpg',
    position: 'object-center',
  },
  {
    title: 'Casamientos',
    subtitle: 'Celebraciones inolvidables',
    description:
      'Ceremonias al aire libre, gastronomía exclusiva y una noche diseñada a tu medida.',
    cta: 'Contactanos',
    image: '/salon_02.jpg',
    position: 'object-center',
  },
  {
    title: 'Cumpleaños & Sociales',
    subtitle: 'Cada detalle importa',
    description:
      'Creamos eventos cálidos, elegantes y personalizados para disfrutar con quienes más querés.',
    cta: 'Contactanos',
    image: '/salon_03.jpg',
    position: 'object-center',
  },
  {
    title: 'Eventos Corporativos',
    subtitle: 'Experiencias profesionales',
    description:
      'Un espacio versátil para presentaciones, fiestas empresariales y encuentros exclusivos.',
    cta: 'Contactanos',
    image: '/salon_04.jpg',
    position: 'object-center',
  },
];

export default function HeroCarousel() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        pagination={{
          clickable: true,
          bulletActiveClass:
            'swiper-pagination-bullet-active bg-white',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full flex items-center justify-center">

              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  className={`object-cover ${slide.position}`}
                  priority={index === 0}
                  quality={75}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                >

                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-8"
                  >
                    <Sparkles className="w-4 h-4 text-white" />

                    <span className="text-white font-medium tracking-[0.25em] uppercase text-xs">
                      Buenos Aires
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl text-white mb-5 font-medium tracking-tight"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontStyle: 'italic',
                      textShadow: '0 6px 24px rgba(0,0,0,0.45)',
                    }}
                  >
                    {slide.title}
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-5 tracking-wide"
                    style={{
                      textShadow:
                        '0 4px 18px rgba(0,0,0,0.4)',
                    }}
                  >
                    {slide.subtitle}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10"
                    style={{
                      textShadow:
                        '0 2px 12px rgba(0,0,0,0.35)',
                    }}
                  >
                    {slide.description}
                  </motion.p>

                  {/* Button */}
                  <motion.button
                    onClick={scrollToContact}
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm uppercase tracking-[0.18em] font-semibold hover:bg-[#f5f5f5] transition-all duration-300 shadow-2xl"
                  >
                    <span>{slide.cta}</span>

                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 34px;
          border-radius: 999px;
          background: white;
        }
      `}</style>
    </div>
  );
}