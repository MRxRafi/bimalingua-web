import { Metadata } from "next";
import LegalPageClient from "@/components/LegalPageClient";

export const metadata: Metadata = {
  title: "Aviso Legal | Bimalingua",
  description: "Aviso legal y datos identificativos de Academia Bimalingua.",
  robots: { index: false, follow: true }, // Usually legal pages don't need to be prioritized in index
};

export default function AvisoLegal() {
  return (
    <LegalPageClient title="Aviso Legal">
      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, 
        de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se detallan 
        los datos identificativos de la entidad:
      </p>
      <ul>
        <li><strong>Titular:</strong> Angie (Academia Bimalingua)</li>
        <li><strong>Email:</strong> angie@bimalingua.com</li>
        <li><strong>Sitio Web:</strong> bimalingua.com</li>
      </ul>

      <h2>2. Usuarios</h2>
      <p>
        El acceso y/o uso de este portal de Bimalingua atribuye la condición de USUARIO, que acepta, desde dicho 
        acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
      </p>

      <h2>3. Uso del portal</h2>
      <p>
        bimalingua.com proporciona el acceso a multitud de informaciones, servicios, programas o datos en 
        Internet pertenecientes a Bimalingua a los que el USUARIO pueda tener acceso. El USUARIO asume la 
        responsabilidad del uso del portal.
      </p>

      <h2>4. Propiedad Intelectual e Industrial</h2>
      <p>
        Bimalingua por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e 
        industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, 
        imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, 
        estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su 
        funcionamiento, acceso y uso, etc.).
      </p>

      <h2>5. Exclusión de garantías y responsabilidad</h2>
      <p>
        Bimalingua no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza 
        que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de 
        disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los 
        contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
      </p>

      <h2>6. Modificaciones</h2>
      <p>
        Bimalingua se reserva el derecho de efectuar sin previo aviso las modificaciones que considere 
        oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se 
        presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su 
        portal.
      </p>
    </LegalPageClient>
  );
}
