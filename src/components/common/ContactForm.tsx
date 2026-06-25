'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  Instagram,
} from 'lucide-react';

type SubmitStatus = 'idle' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guests: '',
    howDidYouKnow: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'No se pudo enviar el formulario.');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        guests: '',
        howDidYouKnow: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Ocurrió un error al enviar el formulario.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-3xl mx-auto"
    >
      <div className="text-center mb-6">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Reservá tu Fecha
        </h3>

        <p className="text-gray-600">
          Contanos sobre tu evento y te enviaremos una propuesta personalizada.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nombre Completo
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Juan Pérez"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#728d69] outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Teléfono
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="11 1234-5678"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#728d69] outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Correo Electrónico
          </label>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="nombre@email.com"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#728d69] outline-none"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="eventDate"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Fecha del Evento
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>

              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#728d69] outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="eventType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Tipo de Evento
            </label>

            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#728d69] outline-none"
            >
              <option value="">Seleccionar</option>
              <option>Casamiento</option>
              <option>15 Años</option>
              <option>Cumpleaños</option>
              <option>Evento Corporativo</option>
              <option>Bar/Bat Mitzvá</option>
              <option>Otro</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="guests"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Cantidad de Invitados
            </label>

            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              placeholder="150"
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#728d69] outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="howDidYouKnow"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              ¿Cómo nos conociste?
            </label>

            <input
              type="text"
              id="howDidYouKnow"
              name="howDidYouKnow"
              value={formData.howDidYouKnow}
              onChange={handleChange}
              placeholder="Instagram, Google, recomendación..."
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#728d69] outline-none"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Mensaje
          </label>

          <div className="relative">
            <div className="absolute top-3 left-0 pl-4 pointer-events-none">
              <MessageSquare className="h-5 w-5 text-gray-400" />
            </div>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              required
              placeholder="Contanos sobre tu evento..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#728d69] outline-none resize-none"
            />
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-xl font-semibold text-white transition-all ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#728d69] to-[#5b6d55] hover:shadow-xl'
          }`}
        >
          {isSubmitting ? 'Enviando...' : 'Solicitar Información'}
        </motion.button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-green-50 border border-green-200 text-green-800 p-3 rounded-lg text-center"
          >
            ¡Mensaje enviado con éxito! Nos contactaremos pronto.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-center"
          >
            {errorMessage || 'Hubo un error al enviar la consulta.'}
          </motion.div>
        )}

        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <a
            href="https://wa.me/5491128079523"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-[#728d69] text-white hover:bg-[#5b6d55] transition"
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com/estilocoghlan"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full border border-[#728d69] text-[#728d69] hover:bg-[#728d69] hover:text-white transition flex items-center gap-2"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
        </div>
      </form>
    </motion.div>
  );
}