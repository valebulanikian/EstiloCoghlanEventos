'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, Users } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Eventos a Medida',
    description:
      'Cada celebración se diseña junto a nuestros clientes. Trabajamos con propuestas únicas pensadas para cada historia.',
  },
  {
    icon: Users,
    title: 'Acompañamiento Personal',
    description:
      'Te acompañamos desde la primera reunión hasta el gran día, cuidando cada detalle para que disfrutes el proceso con tranquilidad.',
  },
  {
    icon: Sparkles,
    title: 'Espacios Únicos',
    description:
      'Un jardín de 1200 m² y un salón elegante que se adaptan a ceremonias, recepciones y celebraciones de todo tipo.',
  },
  {
    icon: Award,
    title: 'Más de 30 Años',
    description:
      'Tres décadas creando eventos inolvidables con una atención cercana, experiencia y compromiso en cada celebración.',
  },
];

export default function AboutSection() {
  return (
    <section
      id="sobre-nosotros"
      className="py-20 bg-gradient-to-br from-[#f8faf7] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5b6d55] mb-6">
            Sobre Nosotros
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En <strong>Estilo Coghlan</strong> creemos que ningún evento debería
            sentirse igual a otro. Cada celebración se crea junto a nuestros
            clientes, adaptándonos a sus gustos, necesidades y estilo para
            lograr una experiencia completamente personalizada.
            <br />
            <br />
            Con más de <strong>30 años de trayectoria</strong> y un jardín de
            <strong> 1200 m²</strong> en el corazón de Coghlan, transformamos
            cada idea en un evento único e inolvidable.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-7 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#728d69] to-[#5b6d55] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Números */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            {
              number: '30+',
              label: 'Años de experiencia',
            },
            {
              number: '1000+',
              label: 'Eventos realizados',
            },
            {
              number: '1200 m²',
              label: 'Jardín para ceremonias',
            },
            {
              number: '200',
              label: 'Invitados',
            },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#5b6d55] mb-2">
                {stat.number}
              </div>

              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}