'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Gastronomía & Catering',
    description:
      'Más de 25 años ofreciendo propuestas gastronómicas exclusivas con menús personalizados para cada celebración.',
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
      'Tecnología y ambientación para crear una experiencia inolvidable.',
    items: [
      'Disc Jockey residente',
      'Show de luces',
      'Pista LED',
      'Pantallas gigantes',
      'Sonido profesional',
    ],
  },
  {
    title: 'Ceremonias & Ambientación',
    description:
      'Espacios elegantes y naturales para celebrar momentos únicos.',
    items: [
      'Ceremonias al aire libre',
      'Jardín de 1200m²',
      'Ambientación personalizada',
      'Gacebo exterior',
      'Decoración integral',
    ],
  },
  {
    title: 'Comodidades & Servicios',
    description:
      'Instalaciones pensadas para que tus invitados disfruten cada momento.',
    items: [
      'Aire acondicionado',
      'Calefacción central',
      'Grupo electrógeno',
      'Cochera privada',
      'Suite privada',
    ],
  },
];

export default function PackageDetail() {
  return (
    <section className="py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-yellow-700 uppercase tracking-[0.3em] text-sm mb-4">
            Estilo Coghlan
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Servicios
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Una propuesta integral con más de 30 años de experiencia,
            pensada para que cada celebración sea única, elegante e inolvidable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>

              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}