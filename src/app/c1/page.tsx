import { Metadata } from "next";
import LevelPageClient from "@/components/LevelPageClient";

export const metadata: Metadata = {
  title: "C1 Advanced (CAE) | Preparación Cambridge Online",
  description: "Alcanza el nivel C1 Advanced (CAE). Clases de inglés online de alto nivel para profesionales y estudiantes que buscan la excelencia.",
  alternates: {
    canonical: "https://bimalingua.com/c1",
  },
};

export default function C1Advanced() {
  const content = {
    level: "C1",
    fullName: "C1 Advanced (CAE)",
    description: "Clases grupales de nivel avanzado enfocadas en obtener la certificación Cambridge CAE. Las clases grupales son con grupos reducidos de máximo 6 alumnos.",
    info: [
      { label: 'Horario', value: 'Mañana o Tarde' },
      { label: 'Precio', value: '75 € / mes' },
      { label: 'Horas', value: '2 horas semanales' },
      { label: 'Lugar', value: 'Online (Google Meet)' }
    ],
    requirements: [
      "Participar en conversaciones complejas y fluidas sobre una amplia gama de temas.",
      "Utilizar estructuras gramaticales avanzadas y un vocabulario extenso y preciso.",
      "Entender frases y expresiones sobre temas técnicos y especializados.",
      "Captar significados implícitos, matices y sutilezas en conversaciones.",
      "Entender discursos largos y complejos, y conferencias especializadas.",
      "Leer y comprender artículos académicos y literatura compleja.",
      "Expresar opiniones con precisión y coherencia en diversos contextos.",
      "Escribir ensayos y reportes con alto nivel de coherencia, cohesión y estilo."
    ],
    program: [
      { title: "Dominio Global", desc: "Análisis detallado de cada una de las rigurosas partes del examen CAE." },
      { title: "Gramática Experta", desc: "Perfeccionamiento y fluidez en tiempos y reglas gramaticales complejas (C1)." },
      { title: "Vocabulario de Alto Vuelo", desc: "Idioms, phrasal verbs y tecnicismos necesarios para destacar en Speaking y Reading." },
      { title: "Excelencia Escrita", desc: "Cohesión, coherencia, tono y estilo avanzado en escritura de reportes y ensayos." },
      { title: "Tácticas de Precisión", desc: "Cómo analizar críticamente y responder el Use of English y Reading." },
      { title: "Simulacros Reales", desc: "Aplicación de conocimientos bajo la gran presión de tiempo del Advanced CAE." }
    ]
  };

  return <LevelPageClient {...content} />;
}
