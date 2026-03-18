"use client";

import Link from "next/link";
import { motion } from 'framer-motion';
import styles from "../cambridge/level.module.css";

export default function C1Advanced() {
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

          <h1 className={`${styles.levelTitle} heading`}>C1 Advanced (CAE)</h1>
          <p className={styles.levelDesc}>
            Clases grupales de nivel avanzado enfocadas en obtener la certificación Cambridge CAE. Las clases grupales son con grupos reducidos de máximo 6 alumnos.
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
            <Link href="/#contacto" className={`${styles.ctaButton} btn btn-primary`}>
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
                  "Participar en conversaciones complejas y fluidas sobre una amplia gama de temas.",
                  "Utilizar estructuras gramaticales avanzadas y un vocabulario extenso y preciso.",
                  "Entender frases y expresiones sobre temas técnicos y especializados.",
                  "Captar significados implícitos, matices y sutilezas en conversaciones.",
                  "Entender discursos largos y complejos, y conferencias especializadas.",
                  "Leer y comprender artículos académicos y literatura compleja.",
                  "Expresar opiniones con precisión y coherencia en diversos contextos.",
                  "Escribir ensayos y reportes con alto nivel de coherencia, cohesión y estilo."
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
                  { title: "Dominio Global", desc: "Análisis detallado de cada una de las rigurosas partes del examen CAE." },
                  { title: "Gramática Experta", desc: "Perfeccionamiento y fluidez en tiempos y reglas gramaticales complejas (C1)." },
                  { title: "Vocabulario de Alto Vuelo", desc: "Idioms, phrasal verbs y tecnicismos necesarios para destacar en Speaking y Reading." },
                  { title: "Excelencia Escrita", desc: "Cohesión, coherencia, tono y estilo avanzado en escritura de reportes y ensayos." },
                  { title: "Tácticas de Precisión", desc: "Cómo analizar críticamente y responder el Use of English y Reading." },
                  { title: "Simulacros Reales", desc: "Aplicación de conocimientos bajo la gran presión de tiempo del Advanced CAE." }
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
