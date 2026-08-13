import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import ContactForm from '@/components/common/ContactForm';
import PackageDetail from '@/components/packages/PackageDetail';
import { packageService } from '@/modules/web/application/services/PackageService';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = packageService.getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <WhatsAppButton />

      <PackageDetail />

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Interesado en este Paquete?
            </h2>
            <p className="text-xl text-gray-600">
              Contáctanos y te ayudaremos a planificar tu evento perfecto
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
