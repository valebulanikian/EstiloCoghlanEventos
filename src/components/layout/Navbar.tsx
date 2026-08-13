'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre Nosotros', href: '/#sobre-nosotros' },
  { name: 'Servicios Exclusivos', href: '/#servicios' },
  { name: 'Galería de Eventos', href: '/#galeria' },
  { name: 'Testimonios', href: '/#testimonios' },
  { name: 'Contacto', href: '/#contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-[#728d69]/10'
          : 'bg-white/80 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-32">

      {/* Logo */}
      <Link href="/" className="group flex flex-col">
        <span
          className="text-4xl md:text-5xl text-[#3f503b] transition-all duration-300 group-hover:text-[#5b6d55]"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            lineHeight: 1,
          }}
        >
          Estilo Coghlan
        </span>
            <div className="w-20 h-[2px] bg-[#728d69] mt-2 mb-2 transition-all duration-300 group-hover:w-28" />

            <span className="text-xs uppercase tracking-[0.35em] text-gray-500">
              Salón de Eventos
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium tracking-wide text-gray-700 hover:text-[#728d69] transition-all duration-300 hover:-translate-y-0.5"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Botón Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden"
            aria-label="Abrir menú"
          >
            {isOpen ? (
              <X className="w-7 h-7 text-[#5b6d55]" />
            ) : (
              <Menu className="w-7 h-7 text-[#5b6d55]" />
            )}
          </button>

        </div>
      </div>

      {/* Menú Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: '100vh',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="lg:hidden bg-white"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-medium text-gray-800 hover:text-[#728d69] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}