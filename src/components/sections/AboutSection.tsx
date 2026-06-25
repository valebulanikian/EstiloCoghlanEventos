'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Eventos soñados',
    description: 'Más de 30 años creando momentos inolvidables.',
  },
  {
    icon: Heart,
    title: 'Atención Personalizada',
    description:
      'Cada evento es único. Por eso acompañamos y asesoramos a nuestros clientes en cada detalle para lograr una celebración a medida.',
  },
  {
    icon: Sparkles,
    title: 'Instalaciones',
    description:
      'Nuestro espacio cuenta con mobiliario de alta calidad, iluminación profesional, sonido, proyección y todas las comodidades necesarias para garantizar un ambiente elegante, cálido y funcional.',
  },
  {
    icon: Users,
    title: 'Personal Profesional',
    description:
      'Equipo capacitado y comprometido con hacer tu sueño realidad.',
  },
];

export default function AboutSection() {
  return (
    <section
      id="sobre-nosotros"
      className="py-20 bg-gradient-to-br from-[#f8faf7] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5b6d55] mb-4">
            Sobre Nosotros
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos Estilo Coghlan, una empresa familiar con más de 30 años de
            experiencia en el área de eventos. Ofrecemos una propuesta integral
            y acompañamos cada detalle para que tu celebración sea única e
            inolvidable.
            <br />
            <br />
            Contamos con un jardín de 1200 m² ideal para ceremonias al aire
            libre, además de espacios elegantes y totalmente equipados para
            crear momentos especiales en cada evento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group hover:-translate-y-2"
            >
              <div
                className="w-14 h-14 bg-gradient-to-br from-[#728d69] to-[#5b6d55] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Eventos Realizados' },
            { number: '30+', label: 'Años de Experiencia' },
            { number: '100%', label: 'Clientes Satisfechos' },
            { number: '200', label: 'Capacidad Máxima' },
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