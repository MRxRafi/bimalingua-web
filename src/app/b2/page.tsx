"use client";

import Link from "next/link";
import { motion } from 'framer-motion';
import styles from "../cambridge/level.module.css";

export default function B2First() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className={styles.pageWrapper}>
      <main className={`${styles.container} container`}>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Link href="/cambridge" className={styles.backLink}>
            ← Volver a Cambridge
          </Link>

          <h1 className={`${styles.levelTitle} heading`}>B2 First (FCE)</h1>
          <p className={styles.levelDesc}>
            Clases grupales de nivel intermedio alto enfocadas en obtener la certificación Cambridge FIRST. Las clases grupales son con grupos reducidos de máximo 6 alumnos.
          </p>

          <div className={styles.infoGrid}>
            {[
              { label: 'Horario', value: 'Mañana o Tarde' },
              { label: 'Precio', value: '75 € / mes' },
              { label: 'Horas', value: '2 horas semanales' },
              { label: 'Lugar', value: 'Online (Google Meet)' }
            ].map((info, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, borderColor: 'var(--primary)' }}
                className={styles.infoCard}
              >
                <strong className={styles.infoLabel}>{info.label}</strong>
                <span className={styles.infoValue}>{info.value}</span>
              </motion.div>
            ))}
          </div>

          <div className={styles.ctaWrapper}>
            <Link href="#contacto" className={`${styles.ctaButton} btn btn-primary`}>
              ¡Quiero matricularme!
            </Link>
          </div>

          <div className={styles.sectionGrid}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.contentBox}
            >
              <h2 className={styles.sectionTitle}>Requisitos Previos <span className={styles.dot}>.</span></h2>
              <div className={styles.listGrid}>
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
                  <div key={i} className={styles.listItem}>
                    <div className={styles.checkIcon}>✓</div>
                    <p>{req}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`${styles.sectionTitle} heading`} style={{ textAlign: 'center' }}>Programa de Estudio <span className={styles.dot}>.</span></h2>
              <div className={styles.programGrid}>
                {[
                  { title: "Estructura del Test", desc: "Descripción detallada de Reading, Writing, Listening y Speaking." },
                  { title: "Gramática Avanzada", desc: "Revisión profunda de los temas gramaticales clave para el nivel B2." },
                  { title: "Vocabulario Complejo", desc: "Ampliación del vocabulario y phrasal verbs relevantes para el First." },
                  { title: "Escritura Superior", desc: "Cohesión, coherencia, organización de párrafos y argumentos sólidos." },
                  { title: "Estrategias de Tiempo", desc: "Aprenda a gestionar el tiempo durante el examen real de Cambridge." },
                  { title: "Mock Exams", desc: "Realización de The First Practice Tests bajo condiciones de tiempo real." }
                ].map((mod, i) => (
                  <div key={i} className={styles.programCard}>
                    <div className={styles.programNumber}>{i+1}</div>
                    <div className={styles.programInner}>
                      <h3>{mod.title}</h3>
                      <p>{mod.desc}</p>
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
