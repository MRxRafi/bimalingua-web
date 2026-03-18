import { Metadata } from "next";
import LegalPageClient from "@/components/LegalPageClient";

export const metadata: Metadata = {
  title: "Política de Cookies | Bimalingua",
  description: "Información sobre el uso de cookies en el sitio web de Bimalingua.",
  robots: { index: false, follow: true },
};

export default function PoliticaCookies() {
  return (
    <LegalPageClient title="Política de Cookies">
      <p>
        Este sitio web utiliza cookies para mejorar tu experiencia de navegación y analizar nuestro tráfico. 
        A continuación, te informamos sobre qué son las cookies, cuáles utilizamos y cómo puedes gestionarlas.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web que visitas envían a tu navegador y que 
        se almacenan en tu dispositivo (ordenador, tableta o smartphone). Se utilizan para que el sitio web 
        funcione correctamente, sea más seguro y te ofrezca una mejor experiencia de usuario.
      </p>

      <h2>2. Tipos de cookies que utilizamos</h2>
      <ul>
        <li><strong>Cookies Técnicas (Necesarias):</strong> Son esenciales para el funcionamiento básico del sitio. Permiten funciones como la navegación por las páginas y el acceso a áreas seguras. El sitio no puede funcionar correctamente sin estas cookies.</li>
        <li><strong>Cookies Funcionales:</strong> Ayudan a realizar ciertas funcionalidades, como recordar tus preferencias de consentimiento.</li>
      </ul>

      <h2>3. ¿Cómo puedes gestionar las cookies?</h2>
      <p>
        Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración 
        de las opciones de tu navegador. Si bloqueas las cookies necesarias, es posible que algunas 
        funcionalidades del sitio dejen de estar disponibles.
      </p>
      <p>
        Para más información sobre cómo gestionar las cookies en los principales navegadores, puedes consultar 
        los siguientes enlaces:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>4. Actualizaciones de la Política de Cookies</h2>
      <p>
        Es posible que actualicemos esta Política de Cookies en el futuro para reflejar cambios en las 
        cookies que utilizamos o por motivos legales/regulatorios. Te recomendamos revisar esta página 
        periódicamente.
      </p>
    </LegalPageClient>
  );
}
