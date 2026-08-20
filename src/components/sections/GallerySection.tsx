'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: '/galeria_01.jpg',
    title: 'Ceremonias al aire libre',
    category: 'Jardín & Civil',
    type: 'image',
  },
  {
    src: '/galeria_02.jpg',
    title: 'Recepciones elegantes',
    category: 'Celebraciones',
    type: 'image',
  },
  {
    src: '/video_01.mp4',
    title: 'Una noche inolvidable',
    category: 'Fiesta',
    type: 'video',
  },
  {
    src: '/galeria_03.jpg',
    title: 'Detalles que hacen la diferencia',
    category: 'Ambientación',
    type: 'image',
  },
  {
    src: '/galeria_04.jpg',
    title: 'Mesas y espacios únicos',
    category: 'Salón',
    type: 'image',
  },
  {
    src: '/video_02.mp4',
    title: 'Momentos únicos',
    category: 'Celebraciones',
    type: 'video',
  },
  {
    src: '/galeria_05.jpg',
    title: 'Noches inolvidables',
    category: 'Fiesta',
    type: 'image',
  },
  {
    src: '/galeria_06.jpg',
    title: 'Momentos para recordar',
    category: 'Casamientos',
    type: 'image',
  },
  {
    src: '/galeria_07.jpg',
    title: 'Celebraciones con estilo',
    category: 'Eventos',
    type: 'image',
  },
  {
    src: '/galeria_08.jpg',
    title: 'Un oasis en la ciudad',
    category: 'Estilo Coghlan',
    type: 'image',
  },
  {
  src: '/comida_01.jpg',
  title: 'Gastronomía',
  category: 'Catering',
  type: 'image',
},
{
  src: '/comida_02.jpg',
  title: 'Propuesta gastronómica',
  category: 'Catering',
  type: 'image',
},
{
  src: '/comida_03.jpg',
  title: 'Detalles gastronómicos',
  category: 'Catering',
  type: 'image',
},
];

const TOTAL = galleryImages.length;
const VISIBLE_CARDS = 5;
const HALF = Math.floor(VISIBLE_CARDS / 2);

function wrapIndex(i: number, total: number): number {
  return ((i % total) + total) % total;
}

function getCardStyle(offset: number, isMobile: boolean) {
  const absOffset = Math.abs(offset);

  const cardW = isMobile ? 280 : 520;
  const cardH = isMobile ? 210 : 360;

  const xSpacing = isMobile ? 190 : 350;
  const zBase = isMobile ? 150 : 250;
  const rotateBase = isMobile ? 40 : 45;

  if (absOffset === 0) {
    return {
      x: 0,
      z: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
      cardW,
      cardH,
    };
  }

  const sign = offset > 0 ? 1 : -1;
  const rotateY = -sign * Math.min(absOffset * rotateBase, 70);
  const x = sign * absOffset * xSpacing;
  const z = -absOffset * zBase;
  const scale = Math.max(1 - absOffset * 0.18, 0.4);
  const opacity = Math.max(1 - absOffset * 0.3, 0);
  const zIndex = 10 - absOffset;

  return {
    x,
    z,
    rotateY,
    scale,
    opacity,
    zIndex,
    cardW,
    cardH,
  };
}

export default function GallerySection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isMobileRef = useRef(false);

  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const mouseStartX = useRef(0);
  const mouseDragging = useRef(false);
  const mouseDelta = useRef(0);

  const isAnimating = useRef(false);
  const autoplayTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const check = () => {
      isMobileRef.current = window.innerWidth < 768;
    };

    check();

    window.addEventListener('resize', check);

    return () => {
      window.removeEventListener('resize', check);
    };
  }, []);

  const layoutCards = useCallback(
    (animate = true) => {
      if (isAnimating.current && animate) return;

      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        let offset = i - activeIndex;

        if (offset > TOTAL / 2) offset -= TOTAL;
        if (offset < -TOTAL / 2) offset += TOTAL;

        const absOffset = Math.abs(offset);
        const visible = absOffset <= HALF;

        const style = getCardStyle(offset, isMobileRef.current);

        if (!visible) {
          gsap.set(card, {
            opacity: 0,
            zIndex: 0,
            pointerEvents: 'none',
          });
          return;
        }

        const props = {
          x: style.x,
          z: style.z,
          rotateY: style.rotateY,
          scale: style.scale,
          opacity: style.opacity,
          zIndex: style.zIndex,
          pointerEvents: 'auto' as const,
        };

        if (animate) {
          isAnimating.current = true;

          gsap.to(card, {
            ...props,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
              isAnimating.current = false;
            },
          });
        } else {
          gsap.set(card, props);
        }
      });
    },
    [activeIndex]
  );

  useEffect(() => {
    layoutCards(true);
  }, [layoutCards]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const resetAutoplay = useCallback(() => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }

    autoplayTimer.current = setInterval(() => {
      setActiveIndex((prev) => wrapIndex(prev + 1, TOTAL));
    }, 4000);
  }, []);

  useEffect(() => {
    if (isLightboxOpen) {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }

      return;
    }

    resetAutoplay();

    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [isLightboxOpen, resetAutoplay]);

  const goTo = useCallback(
    (direction: number) => {
      setActiveIndex((prev) => wrapIndex(prev + direction, TOTAL));
      resetAutoplay();
    },
    [resetAutoplay]
  );

  const goToIndex = useCallback(
    (index: number) => {
      setActiveIndex(wrapIndex(index, TOTAL));
      resetAutoplay();
    },
    [resetAutoplay]
  );

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchDeltaX.current =
      e.touches[0].clientX - touchStartX.current;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (Math.abs(touchDeltaX.current) > 50) {
      goTo(touchDeltaX.current < 0 ? 1 : -1);
    }

    touchDeltaX.current = 0;
  }, [goTo]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    mouseDragging.current = true;
    mouseStartX.current = e.clientX;
    mouseDelta.current = 0;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!mouseDragging.current) return;

    mouseDelta.current = e.clientX - mouseStartX.current;
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!mouseDragging.current) return;

    mouseDragging.current = false;

    if (Math.abs(mouseDelta.current) > 50) {
      goTo(mouseDelta.current < 0 ? 1 : -1);
    }

    mouseDelta.current = 0;
  }, [goTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) return;

      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight && rect.bottom > 0;

      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(-1);
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goTo, isLightboxOpen]);

  const handleCardClick = useCallback(
    (index: number) => {
      if (Math.abs(mouseDelta.current) > 10) return;

      if (index === activeIndex) {
        setCurrentIndex(index);
        setIsLightboxOpen(true);
      } else {
        goToIndex(index);
      }
    },
    [activeIndex, goToIndex]
  );

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TOTAL);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? TOTAL - 1 : prev - 1
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }

      if (e.key === 'ArrowLeft') {
        goToPrevious();
      }

      if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, goToPrevious, goToNext]);

  useEffect(() => {
    document.body.style.overflow = isLightboxOpen
      ? 'hidden'
      : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  return (
    <section
      ref={sectionRef}
      id="galeria"
      className="py-16 md:py-24 bg-gradient-to-b from-[#f8f6f1] via-white to-[#f8f6f1] overflow-hidden"
    >
      {/* Header */}
      <div className="gallery-title text-center mb-10 md:mb-16 px-4">
        <p className="uppercase tracking-[0.3em] text-[#8b7355] text-sm mb-4">
          Estilo Coghlan
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Nuestra Galería
        </h2>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Un recorrido por celebraciones, ceremonias y momentos
          inolvidables en nuestro salón y jardín, en el corazón de
          Coghlan.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Flecha izquierda */}
        <button
          onClick={() => goTo(-1)}
          className="hidden md:flex absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 shadow-lg hover:shadow-xl hover:bg-white transition-all border border-[#d8d0c2]"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-[#728d69]" />
        </button>

        {/* Flecha derecha */}
        <button
          onClick={() => goTo(1)}
          className="hidden md:flex absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 shadow-lg hover:shadow-xl hover:bg-white transition-all border border-[#d8d0c2]"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6 text-[#728d69]" />
        </button>

        {/* Carousel container */}
        <div
          ref={carouselRef}
          className="relative mx-auto h-[320px] md:h-[500px] select-none cursor-grab active:cursor-grabbing"
          style={{ perspective: '1000px' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {galleryImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              onClick={() => handleCardClick(index)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity',
                width: isMobileRef.current ? 280 : 520,
                height: isMobileRef.current ? 210 : 360,
              }}
            >
              <div
                className={`relative w-full h-full rounded-[24px] overflow-hidden shadow-2xl transition-shadow duration-300 ${
                  index === activeIndex
                    ? 'ring-2 ring-[#728d69]/40 shadow-[0_20px_60px_rgba(114,141,105,0.18)]'
                    : ''
                }`}
              >
                {image.type === 'video' ? (
                  <video
                    src={image.src}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 520px"
                  />
                )}

                {image.type === 'video' && (
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 pointer-events-none">
                    <span className="text-white text-xs font-medium">
                      ▶ Video
                    </span>
                  </div>
                )}

                {index === activeIndex && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6 flex-wrap px-4">
        {galleryImages.map((image, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            aria-label={`Ir a ${
              image.type === 'video' ? 'video' : 'foto'
            } ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? 'w-8 h-2.5 bg-[#728d69]'
                : 'w-2.5 h-2.5 bg-[#d8d0c2] hover:bg-[#bfb4a3]'
            }`}
          />
        ))}
      </div>

      <p className="text-center text-gray-400 text-xs mt-4 md:hidden">
        Deslizá para ver más fotos y videos
      </p>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Cerrar */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 text-white hover:text-[#d6c3a1] transition-colors p-2"
              aria-label="Cerrar"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Anterior */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-50 text-white hover:text-[#d6c3a1] transition-colors p-2 bg-black/50 rounded-full hover:bg-black/70"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Siguiente */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-50 text-white hover:text-[#d6c3a1] transition-colors p-2 bg-black/50 rounded-full hover:bg-black/70"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div
              className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
              >
                {galleryImages[currentIndex].type === 'video' ? (
                  <video
                    src={galleryImages[currentIndex].src}
                    className="max-w-full max-h-[85vh] object-contain rounded-xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={galleryImages[currentIndex].src}
                      alt={galleryImages[currentIndex].title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}