"use client";

import Link from "next/link";
import { motion } from 'framer-motion';

export default function B2First() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div style={{ padding: 'clamp(80px, 10vw, 120px) 0', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      <main className="container" style={{ maxWidth: '900px' }}>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Link href="/cambridge" style={{ color: 'var(--primary)', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem', fontWeight: 600 }}>
            ← Volver a Cambridge
          </Link>

          <h1 className="heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--primary)', marginBottom: '1rem' }}>B2 First (FCE)</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
            Clases grupales de nivel intermedio alto enfocadas en obtener la certificación Cambridge FIRST. Las clases grupales son con grupos reducidos de máximo 6 alumnos.
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
                  "Participar en conversaciones con fluidez sobre temas cotidianos y conocidos.",
                  "Utilizar estructuras gramaticales complejas y vocabulario variado.",
                  "Entender frases y expresiones sobre trabajo, educación y ocio.",
                  "Captar significados implícitos en conversaciones.",
                  "Entender discursos largos, conferencias y programas de televisión.",
                  "Leer y comprender artículos, informes y prosa literaria contemporánea.",
                  "Expresar opiniones y puntos de vista en contextos formales.",
                  "Escribir ensayos, informes y correos electrónicos formales e informales.",
                  "Utilizar el idioma de manera flexible y adaptarse a diferentes contextos."
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
                  { title: "Estructura del Test", desc: "Descripción detallada de Reading, Writing, Listening y Speaking." },
                  { title: "Gramática Avanzada", desc: "Revisión profunda de los temas gramaticales clave para el nivel B2." },
                  { title: "Vocabulario Complejo", desc: "Ampliación del vocabulario y phrasal verbs relevantes para el First." },
                  { title: "Escritura Superior", desc: "Cohesión, coherencia, organización de párrafos y argumentos sólidos." },
                  { title: "Estrategias de Tiempo", desc: "Aprenda a gestionar el tiempo durante el examen real de Cambridge." },
                  { title: "Mock Exams", desc: "Realización de The First Practice Tests bajo condiciones de tiempo real." }
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
