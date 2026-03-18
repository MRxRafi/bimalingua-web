"use client";

import Link from "next/link";
import { motion } from 'framer-motion';
import styles from "../cambridge/level.module.css";

export default function B1Preliminary() {
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

          <h1 className={`${styles.levelTitle} heading`}>B1 Preliminary (PET)</h1>
          <p className={styles.levelDesc}>
            Clases grupales de nivel intermedio bajo enfocadas en obtener la certificación Cambridge PET. Las clases grupales son con grupos reducidos de máximo 6 alumnos.
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
                  "Habilidades básicas de comunicación.",
                  "Comprensión de frases y expresiones comunes.",
                  "Capacidad para describir aspectos del entorno de forma simple.",
                  "Entender información personal básica, compras y empleo.",
                  "Comprender textos breves como menús, folletos y horarios.",
                  "Comunicarse en situaciones simples y cotidianas.",
                  "Escribir notas, mensajes cortos y cartas personales breves."
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
                  { title: "Gramática Clave", desc: "Revisión profunda de los temas gramaticales exigidos en el nivel B1." },
                  { title: "Vocabulario Efectivo", desc: "Ampliación del glosario con palabras y expresiones relevantes para el PET." },
                  { title: "Expresión Escrita", desc: "Técnicas de cohesión, coherencia y organización estructurada de párrafos." },
                  { title: "Estrategias de Tiempo", desc: "Aprende a gestionar el reloj durante el examen oficial." },
                  { title: "Simulacros Reales", desc: "Realización de mock exams bajo condiciones de tiempo real con corrección." }
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
