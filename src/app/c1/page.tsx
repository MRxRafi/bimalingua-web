"use client";

import Link from "next/link";
import { motion } from 'framer-motion';

export default function C1Advanced() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div style={{ padding: '120px 0', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      <main className="container" style={{ maxWidth: '900px' }}>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Link href="/cambridge" style={{ color: 'var(--primary)', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem', fontWeight: 600 }}>
            ← Volver a Cambridge
          </Link>

          <h1 className="heading" style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>C1 Advanced (CAE)</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
            Clases grupales de nivel avanzado enfocadas en obtener la certificación Cambridge CAE. Las clases grupales son con grupos reducidos de máximo 6 alumnos.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              { label: 'Horario', value: 'Mañana o Tarde' },
              { label: 'Precio', value: '75 € / mes' },
              { label: 'Horas', value: '2 horas semanales' },
              { label: 'Lugar', value: 'Online (Google Meet)' }
            ].map((info, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, borderColor: 'var(--primary)' }}
                style={{ 
                  backgroundColor: 'var(--surface)', 
                  padding: '1.5rem', 
                  borderRadius: '20px', 
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease'
                }}
              >
                <strong style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>{info.label}</strong>
                <span style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 600 }}>{info.value}</span>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <Link href="#contacto" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem', boxShadow: '0 10px 30px rgba(176,91,59,0.3)' }}>
              ¡Quiero matricularme!
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ padding: '3rem', borderRadius: '32px', background: 'linear-gradient(145deg, var(--surface) 0%, var(--surface-light) 100%)', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}
            >
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '2rem' }}>Requisitos Previos <span style={{ color: 'var(--primary)' }}>.</span></h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {[
                  "Participar en conversaciones complejas y fluidas sobre una amplia gama de temas.",
                  "Utilizar estructuras gramaticales avanzadas y un vocabulario extenso y preciso.",
                  "Entender frases y expresiones sobre temas técnicos y especializados.",
                  "Captar significados implícitos, matices y sutilezas en conversaciones.",
                  "Entender discursos largos y complejos, y conferencias especializadas.",
                  "Leer y comprender artículos académicos y literatura compleja.",
                  "Expresar opiniones con precisión y coherencia en diversos contextos.",
                  "Escribir ensayos y reportes con alto nivel de coherencia, cohesión y estilo."
                ].map((req, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ minWidth: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(176,91,59,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>✓</div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{req}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '2rem', textAlign: 'center' }}>Programa de Estudio <span style={{ color: 'var(--primary)' }}>.</span></h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {[
                  { title: "Dominio Global", desc: "Análisis detallado de cada una de las rigurosas partes del examen CAE." },
                  { title: "Gramática Experta", desc: "Perfeccionamiento y fluidez en tiempos y reglas gramaticales complejas (C1)." },
                  { title: "Vocabulario de Alto Vuelo", desc: "Idioms, phrasal verbs y tecnicismos necesarios para destacar en Speaking y Reading." },
                  { title: "Excelencia Escrita", desc: "Cohesión, coherencia, tono y estilo avanzado en escritura de reportes y ensayos." },
                  { title: "Tácticas de Precisión", desc: "Cómo analizar críticamente y responder el Use of English y Reading." },
                  { title: "Simulacros Reales", desc: "Aplicación de conocimientos bajo la gran presión de tiempo del Advanced CAE." }
                ].map((mod, i) => (
                  <div key={i} style={{ backgroundColor: 'var(--background)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '6rem', color: 'var(--surface-light)', fontWeight: 900, zIndex: 0, opacity: 0.5 }}>{i+1}</div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{mod.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{mod.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
