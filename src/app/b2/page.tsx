import { Metadata } from "next";
import LevelPageClient from "@/components/LevelPageClient";

export const metadata: Metadata = {
  title: "B2 First (FCE) | Preparación Cambridge Online",
  description: "Consigue tu certificado B2 First (FCE) de Cambridge. Clases de inglés online enfocadas en resultados para subir tu nivel y mejorar tu futuro laboral.",
  alternates: {
    canonical: "https://bimalingua.com/b2",
  },
};

export default function B2First() {
  const content = {
    level: "B2",
    fullName: "B2 First (FCE)",
    description: "Clases grupales de nivel intermedio alto enfocadas en obtener la certificación Cambridge FIRST. Las clases grupales son con grupos reducidos de máximo 6 alumnos.",
    info: [
      { label: 'Horario', value: 'Mañana o Tarde' },
      { label: 'Precio', value: '75 € / mes' },
      { label: 'Horas', value: '2 horas semanales' },
      { label: 'Lugar', value: 'Online (Google Meet)' }
    ],
    requirements: [
      "Participar en conversaciones con fluidez sobre temas cotidianos y conocidos.",
      "Utilizar estructuras gramaticales complejas y vocabulario variado.",
      "Entender frases y expresiones sobre trabajo, educación y ocio.",
      "Captar significados implícitos en conversaciones.",
      "Entender discursos largos, conferencias y programas de televisión.",
      "Leer y comprender artículos, informes y prosa literaria contemporánea.",
      "Expresar opiniones y puntos de vista en contextos formales.",
      "Escribir ensayos, informes y correos electrónicos formales e informales.",
      "Utilizar el idioma de manera flexible y adaptarse a diferentes contextos."
    ],
    program: [
      { title: "Estructura del Test", desc: "Descripción detallada de Reading, Writing, Listening y Speaking." },
      { title: "Gramática Avanzada", desc: "Revisión profunda de los temas gramaticales clave para el nivel B2." },
      { title: "Vocabulario Complejo", desc: "Ampliación del vocabulario y phrasal verbs relevantes para el First." },
      { title: "Escritura Superior", desc: "Cohesión, coherencia, organización de párrafos y argumentos sólidos." },
      { title: "Estrategias de Tiempo", desc: "Aprenda a gestionar el tiempo durante el examen real de Cambridge." },
      { title: "Mock Exams", desc: "Realización de The First Practice Tests bajo condiciones de tiempo real." }
    ]
  };

  return <LevelPageClient {...content} />;
}
