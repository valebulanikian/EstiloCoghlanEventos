import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  MessageCircle,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#728d69] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Descripción */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Estilo Coghlan
            </h3>

            <p className="text-white/80 leading-relaxed text-sm">
              Estilo Coghlan es un salón de eventos en Buenos Aires con más de
              1200 m² de jardín, espacios exclusivos y más de 30 años de
              experiencia creando celebraciones inolvidables.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Navegación
            </h4>

            <ul className="space-y-3 text-white/80">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>

              <li>
                <Link
                  href="#sobre-nosotros"
                  className="hover:text-white transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>

              <li>
                <Link
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Servicios Exclusivos
                </Link>
              </li>

              <li>
                <Link
                  href="#galeria"
                  className="hover:text-white transition-colors"
                >
                  Galería de Eventos
                </Link>
              </li>

              <li>
                <Link
                  href="#testimonios"
                  className="hover:text-white transition-colors"
                >
                  Testimonios
                </Link>
              </li>

              <li>
                <Link
                  href="#contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contacto
            </h4>

            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Dr. Pedro Ignacio Rivera 3804
                  <br />
                  Coghlan, CABA
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />

                <a
                  href="tel:+541128079523"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  11 2807-9523
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />

                <a
                  href="mailto:estilocoghlan.eventos@gmail.com"
                  className="text-white/80 hover:text-white transition-colors text-sm break-all"
                >
                  estilocoghlan.eventos@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios y Redes */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Atención
            </h4>

            <div className="flex items-start gap-3 mb-6">
              <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />

              <div className="text-sm">
                <p className="text-white">
                  Lunes a Sábado
                </p>

                <p className="text-white/80">
                  18:00 a 22:00 hs
                </p>

                <p className="text-white/60 text-xs mt-1">
                  Con cita previa
                </p>
              </div>
            </div>

            <div className="flex gap-4">

              <a
                href="https://instagram.com/estilocoghlan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 transition-all flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/541128079523"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 transition-all flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Valeria Bulanikian. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}