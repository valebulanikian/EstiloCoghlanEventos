#    ESTILO COGHLAN


1. Las dependencias ya están instaladas:
   - Next.js 15
   - Tailwind CSS
   - Framer Motion (animaciones)
   - Swiper (carrusel)
   - Lucide React (íconos)

2. Para ejecutar el proyecto en desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en: `http://localhost:3000`

## 📁 Estructura del Proyecto

```
src/
├── app/                          # App Router de Next.js
│   ├── page.tsx                  # Página principal
│   ├── layout.tsx                # Layout global
│   ├── globals.css               # Estilos globales
│   └── paquete/
│       └── [slug]/
│           ├── page.tsx          # Página de detalle de paquete
│           └── not-found.tsx     # Página 404 para paquetes
├── components/
│   ├── common/
│   │   ├── ContactForm.tsx       # Formulario de contacto
│   │   └── WhatsAppButton.tsx    # Botón flotante de WhatsApp
│   ├── layout/
│   │   ├── Navbar.tsx            # Barra de navegación
│   │   └── Footer.tsx            # Pie de página
│   ├── packages/
│   │   └── PackageCard.tsx       # Tarjeta de paquete
│   └── sections/
│       ├── HeroCarousel.tsx      # Carrusel principal
│       ├── AboutSection.tsx      # Sección "Sobre Nosotros"
│       ├── WhyChooseUs.tsx       # Sección "Por Qué Elegirnos"
│       └── GallerySection.tsx    # Galería de eventos
└── modules/
    └── web/
        ├── domain/               # Modelos y repositorios
        ├── application/          # Casos de uso
        └── infrastructure/       # Implementación de repositorios
```

