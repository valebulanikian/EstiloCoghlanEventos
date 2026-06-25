'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  name: string;
  event: string;
  rating: number;
  testimonial: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Andre Fontana',
    event: 'Casamiento',
    rating: 5,
    testimonial:
      'Hice mi casamiento ahí y la verdad fue un sueño. Todo salió espectacular y estoy convencido que fue en gran parte por el lugar y la atención que tuvieron con nosotros. Vivimos un momento mágico y todos los invitados estaban encantados con el jardín, el salón y la comida.',
    date: 'Hace 10 meses',
  },
  {
    id: 2,
    name: 'Ariel Marcelo Serafini Ulecia',
    event: 'Casamiento',
    rating: 5,
    testimonial:
      'Hicimos nuestra ceremonia de casamiento y fiesta y el lugar es hermoso, un jardín bellísimo y el salón muy bueno, un verdadero oasis. Todo impecable: la comida, la recepción, la ambientación y la organización general.',
    date: 'Hace 6 meses',
  },
  {
    id: 3,
    name: 'Cecilia Lijteroff',
    event: 'Casamiento',
    rating: 5,
    testimonial:
      'Tuvimos una fiesta soñada. Único salón que vimos y contratamos. La fiesta superó ampliamente mis expectativas. Viví uno de los días más felices de mi vida. Todo fue realmente perfecto. El lugar es hermoso, la decoración divina y la comida 10/10.',
    date: 'Hace 6 meses',
  },
  {
    id: 4,
    name: 'Gluten Freak Argentina',
    event: 'Casamiento',
    rating: 5,
    testimonial:
      'Nos enamoramos del parque y del salón desde el primer momento. Además, como la novia y varios invitados comíamos sin gluten, adaptaron distintos platos para que todos pudiéramos disfrutar de la fiesta. El personal fue súper atento y la noche salió soñada de principio a fin.',
    date: 'Hace 3 años',
  },
  {
    id: 5,
    name: 'Marcela Niejedla',
    event: 'Casamiento',
    rating: 5,
    testimonial:
      'Hicimos nuestra boda el 18 de abril y el lugar es precioso. Me enamoré de ese jardín de ensueño. El servicio fue excelente, muy amables los mozos, y todos mis invitados destacaron la atención. ¡Muchas gracias Estilo Coghlan, Valeria y Gisela!',
    date: 'Hace 1 año',
  },
  {
    id: 6,
    name: 'Carla Sánchez',
    event: 'Casamiento',
    rating: 5,
    testimonial:
      'Hermoso el lugar. Me casé hace unos días y fue todo perfecto. Gracias a Gisela mi evento fue único: siempre estuvo muy atenta a todo e hicieron posible todo lo que pedí. Una boda de ensueño.',
    date: 'Hace 4 meses',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="py-24 bg-[#faf7f2] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#728d69] uppercase tracking-[0.3em] text-sm mb-4">
            Estilo Coghlan
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Cada evento es único y nuestro mayor orgullo es formar parte de
            momentos inolvidables.
          </p>
        </motion.div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          speed={900}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="!pb-14"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-10 h-full flex flex-col relative border border-[#ece6dc]">
                  {/* Quote */}
                  <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-[#728d69] flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#c8a96b] text-[#c8a96b]"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 leading-relaxed flex-grow mb-8">
                    “{testimonial.testimonial}”
                  </p>

                  {/* Footer */}
                  <div className="border-t border-[#ece6dc] pt-5">
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>

                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <p className="text-[#728d69] font-medium text-sm">
                        {testimonial.event}
                      </p>

                      {testimonial.name === 'Gluten Freak Argentina' && (
                        <span className="inline-flex items-center rounded-full bg-[#728d69]/10 px-2.5 py-1 text-[11px] font-medium text-[#728d69]">
                          Opción sin gluten
                        </span>
                      )}
                    </div>

                    <p className="text-gray-400 text-sm mt-2">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#728d69] mb-2">
              +500
            </div>
            <div className="text-gray-600 text-sm">
              Eventos realizados
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-[#728d69] mb-2">
              30+
            </div>
            <div className="text-gray-600 text-sm">
              Años de experiencia
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-[#728d69] mb-2">
              98%
            </div>
            <div className="text-gray-600 text-sm">
              Clientes satisfechos
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-[#728d69] mb-2">
              5★
            </div>
            <div className="text-gray-600 text-sm">
              Calificaciones reales
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 999px;
          background: #728d69;
        }
      `}</style>
    </section>
  );
}