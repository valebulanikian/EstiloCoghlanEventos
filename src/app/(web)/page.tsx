import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import HeroCarousel from '@/components/sections/HeroCarousel';
import AboutSection from '@/components/sections/AboutSection';
import {GallerySectionDynamic, TestimonialsSectionDynamic} from '@/components/sections/BelowFoldSections';
import ContactForm from '@/components/common/ContactForm';
import PackageCard from '@/components/packages/PackageCard';
import MapFacade from '@/components/common/MapFacade';
import {packageService} from '@/modules/web/application/services/PackageService';

export default function Home() {
  const packages = packageService.getAllPackages();

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <HeroCarousel />

      {/* About Section */}
      <AboutSection />

    {/* Servicios Section */}
    <section id="servicios" className="bg-white">
    <PackageCard />
    </section>


      {/* Gallery Section */}
      <GallerySectionDynamic />

      {/* Testimonials Section */}
      <TestimonialsSectionDynamic />

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>


<Footer />
</div>
);
}