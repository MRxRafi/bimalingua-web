import { Metadata } from "next";
import LevelPageClient from "@/components/LevelPageClient";

export const metadata: Metadata = {
  title: "B1 Preliminary (PET) | Preparación Cambridge Online",
  description: "Aprende inglés y prepárate para el examen B1 Preliminary (PET) de Cambridge con nuestras clases online en grupos reducidos.",
  alternates: {
    canonical: "https://bimalingua.com/b1",
  },
};

export default function B1Preliminary() {
  const content = {
    level: "B1",
    fullName: "B1 Preliminary (PET)",
    description: "Clases grupales de nivel intermedio bajo enfocadas en obtener la certificación Cambridge PET. Las clases grupales son con grupos reducidos de máximo 6 alumnos.",
    info: [
      { label: 'Horario', value: 'Mañana o Tarde' },
      { label: 'Precio', value: '75 € / mes' },
      { label: 'Horas', value: '2 horas semanales' },
      { label: 'Lugar', value: 'Online (Google Meet)' }
    ],
    requirements: [
      "Habilidades básicas de comunicación.",
      "Comprensión de frases y expresiones comunes.",
      "Capacidad para describir aspectos del entorno de forma simple.",
      "Entender información personal básica, compras y empleo.",
      "Comprender textos breves como menús, folletos y horarios.",
      "Comunicarse en situaciones simples y cotidianas.",
      "Escribir notas, mensajes cortos y cartas personales breves."
    ],
    program: [
      { title: "Estructura del Test", desc: "Descripción detallada de Reading, Writing, Listening y Speaking." },
      { title: "Gramática Clave", desc: "Revisión profunda de los temas gramaticales exigidos en el nivel B1." },
      { title: "Vocabulario Efectivo", desc: "Ampliación del glosario con palabras y expresiones relevantes para el PET." },
      { title: "Expresión Escrita", desc: "Técnicas de cohesión, coherencia y organización estructurada de párrafos." },
      { title: "Estrategias de Tiempo", desc: "Aprende a gestionar el reloj durante el examen oficial." },
      { title: "Simulacros Reales", desc: "Realización de mock exams bajo condiciones de tiempo real con corrección." }
    ]
  };

  return <LevelPageClient {...content} />;
}
