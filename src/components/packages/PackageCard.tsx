'use client';

import { motion } from 'framer-motion';
import {
  UtensilsCrossed,
  Music2,
  Flower2,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    title: 'Gastronomía & Catering',
    description:
      'Más de 30 años ofreciendo propuestas gastronómicas exclusivas con menús personalizados para cada celebración.',
    icon: UtensilsCrossed,
    image: '/images/catering.jpg',
    items: [
      'Catering premium',
      'Menús personalizados',
      'Barra libre',
      'Opciones de parrilla',
      'Personal especializado',
    ],
  },
  {
    title: 'Música & Entretenimiento',
    description:
      'DJ, sonido profesional, pista LED y show de luces.',
    icon: Music2,
    image:
      '/images/musica.jpg',
    items: [
      'DJ profesional residente',
      'Pista LED',
      'Show de luces',
      'Sonido profesional',
    ],
  },
  {
    title: 'Ambientación & Ceremonias',
    description:
      'Ceremonias al aire libre y ambientaciones elegantes para momentos inolvidables.',
    icon: Flower2,
    image:
      '/images/ambientacion.jpg',
    items: [
      'Ceremonias al aire libre',
      'Jardín de 1200m²',
      'Ambientación personalizada',
      'Gacebo exterior',
      'Decoración integral',
    ],
  },
  {
    title: 'Servicios & Comodidades',
    description:
      'Instalaciones totalmente equipadas para garantizar confort y excelencia.',
    icon: Sparkles,
    image:
      '/images/servicios.jpg',
    items: [
      'Aire acondicionado',
      'Calefacción central',
      'Cochera privada',
      'Suite privada',
    ],
  },
];

export default function PackageCard() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-yellow-700 text-sm mb-4">
            Estilo Coghlan
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Servicios Exclusivos
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Más de 30 años creando eventos únicos con una propuesta integral,
            elegante y personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl min-h-[520px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                />

                <div className="absolute inset-0 bg-black/55" />

                <div className="relative z-10 p-10 flex flex-col justify-between h-full text-white">

                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-3xl font-bold mb-4">
                      {service.title}
                    </h3>

                    <p className="text-white/90 leading-relaxed text-lg mb-8">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-3 text-white/90"
                      >
                        <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2" />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}