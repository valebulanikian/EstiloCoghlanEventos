# Los Girasoles - Landing Page

Landing page elegante y moderna para el salón de eventos Los Girasoles, especializado en quinceañeras.

## 🌟 Características

- ✅ **Diseño Responsive**: 100% adaptable a móviles, tablets y escritorio
- ✅ **Animaciones Elegantes**: Efectos suaves con Framer Motion
- ✅ **Carrusel de Hero**: Banner principal con múltiples slides
- ✅ **6 Paquetes de Eventos**: Desde Regular hasta Top Platinum
- ✅ **Páginas de Detalle**: Cada paquete tiene su página dedicada
- ✅ **Formulario de Contacto**: Para recibir consultas de clientes
- ✅ **Botón de WhatsApp Flotante**: Contacto directo y rápido
- ✅ **Navbar Responsive**: Menú móvil con pantalla completa y animación
- ✅ **Arquitectura Hexagonal**: Código organizado y mantenible
- ✅ **SEO Optimizado**: Metadatos configurados para mejor posicionamiento

## 📋 Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

## 🚀 Instalación

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

## 🎨 Personalización

### Agregar Imágenes

1. **Logo del Salón**:
   - Ya está configurado en: `public/images/logo/girasoles_logo.jpg`
   - Puedes reemplazar esta imagen manteniendo el mismo nombre

2. **Imágenes de la Galería**:
   - Crear carpeta: `public/images/gallery/`
   - Agregar imágenes: `evento1.jpg`, `evento2.jpg`, etc.
   - Actualizar `GallerySection.tsx` para mostrar las imágenes reales

3. **Imágenes de Paquetes**:
   - Crear carpeta: `public/images/packages/`
   - Agregar imágenes específicas para cada paquete
   - Actualizar `PackageCard.tsx` para mostrar las imágenes

### Modificar Información de Contacto

Los datos de contacto están en varios lugares:

1. **Navbar.tsx** (src/components/layout/Navbar.tsx):
   - Números de teléfono en el botón "Llamar Ahora"

2. **Footer.tsx** (src/components/layout/Footer.tsx):
   - Dirección
   - Teléfonos
   - Email
   - Horarios
   - Enlaces a redes sociales

3. **WhatsAppButton.tsx** (src/components/common/WhatsAppButton.tsx):
   - Número de WhatsApp: línea 7
   - Mensaje predefinido: línea 8

### Modificar Paquetes

Los paquetes están definidos en:
`src/modules/web/infrastructure/repositories/InMemoryPackageRepository.ts`

Para agregar, editar o eliminar paquetes, modifica el array `packages` en este archivo.

### Cambiar Colores del Tema

Los colores principales están basados en amarillo (yellow) y naranja (orange). Para cambiarlos:

1. Busca y reemplaza en todos los archivos:
   - `yellow-` por tu color preferido
   - `orange-` por tu color de acento

2. Los gradientes principales:
   - `from-yellow-500 to-yellow-600`
   - `from-yellow-400 to-yellow-600`

## 📱 Secciones de la Landing Page

1. **Hero Carousel**: Banner principal con 3 slides automáticos
2. **Sobre Nosotros**: Información del salón con estadísticas
3. **Nuestros Paquetes**: Grid con los 6 paquetes disponibles
4. **¿Por Qué Elegirnos?**: 6 razones principales
5. **Galería**: Muestra de eventos (placeholder)
6. **Contacto**: Formulario de contacto
7. **Ubicación**: Mapa del salón (placeholder)

## 🔗 Rutas del Sitio

- `/` - Página principal
- `/paquete/regular` - Detalle del Paquete Regular
- `/paquete/intermedio` - Detalle del Paquete Intermedio
- `/paquete/premium` - Detalle del Paquete Premium
- `/paquete/top-golden` - Detalle del Paquete Top Golden
- `/paquete/top-platinum` - Detalle del Paquete Top Platinum
- `/paquete/basico-top-xv` - Detalle del Paquete Básico Top XV

## 🌐 Despliegue

### Vercel (Recomendado para Next.js)

1. Crear cuenta en [Vercel](https://vercel.com)
2. Conectar tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Next.js
4. Click en "Deploy"

### Build para Producción

```bash
npm run build
npm start
```

## 📝 Próximas Mejoras Sugeridas

1. **Integrar Google Maps**: Reemplazar el placeholder de ubicación con un mapa real
2. **Agregar Imágenes Reales**: Subir fotos profesionales de eventos
3. **Backend para Formulario**: Conectar el formulario a un servicio de email (SendGrid, Resend, etc.)
4. **Sistema de Reservas**: Agregar calendario de disponibilidad
5. **Panel de Administración**: Para gestionar paquetes desde una interfaz
6. **Blog/Testimonios**: Sección de reseñas de clientes
7. **Galería Dinámica**: Sistema para subir fotos desde un CMS
8. **Chat en Vivo**: Integración con Tawk.to o similar
9. **Analytics**: Google Analytics o similar para métricas

## 🎯 Mejoras de SEO Recomendadas

1. Agregar imágenes con alt text descriptivo
2. Crear sitemap.xml
3. Agregar robots.txt
4. Implementar Open Graph tags para redes sociales
5. Agregar Schema.org markup para eventos
6. Optimizar imágenes (WebP, lazy loading)

## 📞 Soporte

Para soporte técnico o consultas sobre la página:
- Contactar al desarrollador
- Revisar la documentación de Next.js: [https://nextjs.org/docs](https://nextjs.org/docs)

---
}
