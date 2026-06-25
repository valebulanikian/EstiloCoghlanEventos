import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import HeroCarousel from '@/components/sections/HeroCarousel';
import AboutSection from '@/components/sections/AboutSection';
import {
  GallerySectionDynamic,
  TestimonialsSectionDynamic,
} from '@/components/sections/BelowFoldSections';
import ContactForm from '@/components/common/ContactForm';
import PackageCard from '@/components/packages/PackageCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <HeroCarousel />

      {/* About Section */}
      <AboutSection />

      {/* Servicios Section */}
      <section id="servicios" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Nuestros Servicios
            </h2>
            <p className="text-gray-600 mt-4">
              Todo lo que ofrecemos para tu evento
            </p>
          </div>

          {/* ❗ IMPORTANTE: NO MAP, porque PackageCard no recibe props */}
          <PackageCard />
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySectionDynamic />

      {/* Testimonials Section */}
      <TestimonialsSectionDynamic />

      {/* Contact Section */}
      <section
        id="contacto"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}