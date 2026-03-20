"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";
import cambridgeStyles from "./cambridge.module.css";
import Link from "next/link";

const examTypes = [
  {
    tag: "B1",
    name: "Preliminary (PET)",
    href: "/b1",
    desc: "Nivel intermedio. Evalúa si puedes comunicarte en situaciones cotidianas y trabajar o estudiar en un entorno de habla inglesa básico.",
    cta: "Ver programa B1 →",
    featured: false,
  },
  {
    tag: "B2",
    name: "First (FCE)",
    href: "/b2",
    desc: "Nivel intermedio-alto. El certificado más demandado por empresas y universidades de todo el mundo. Demuestra que puedes desenvolverte con fluidez.",
    cta: "Descubrir el curso →",
    featured: true,
    popular: true,
  },
  {
    tag: "C1",
    name: "Advanced (CAE)",
    href: "/c1",
    desc: "Nivel avanzado. Demuestra un dominio excepcional del inglés, ideal para entornos profesionales y universitarios exigentes.",
    cta: "Ver detalles del nivel →",
    featured: false,
  },
];

const methodItems = [
  {
    icon: "🔍",
    title: "Diagnóstico personalizado",
    desc: "Antes de empezar, conozco a cada alumno, identifico sus fortalezas y debilidades, y diseño una estrategia adaptada a su punto de partida.",
  },
  {
    icon: "📝",
    title: "Práctica desde el primer día",
    desc: "Materiales de práctica reales: comprensión lectora, gramática, vocabulario y simulacros completos bajo condiciones de examen.",
  },
  {
    icon: "🗣️",
    title: "Inglés en vivo",
    desc: "Debates, discusiones y juegos de rol que mejoran la fluidez y confianza. Feedback constructivo sobre pronunciación y gramática.",
  },
  {
    icon: "🧠",
    title: "Técnicas de examen",
    desc: "Aprenderás a gestionar el tiempo, controlar el estrés y aplicar estrategias específicas para cada sección del examen.",
  },
];

const certBenefits = [
  "Reconocidos por universidades, empresas y organismos en más de 130 países",
  "Los certificados Cambridge no caducan — valen para siempre",
  "Administrados por la Universidad de Cambridge, la institución más prestigiosa del mundo en evaluación de inglés",
  "Evalúan las cuatro habilidades: lectura, escritura, escucha y expresión oral",
];

export default function CambridgeClient() {
  return (
    <div className={styles.page}>
      <main>

        {/* ── NUEVA SECCIÓN PRINCIPAL ──────────────────────────── */}
        <section
          className={`${styles.cambridge} ${cambridgeStyles.infoSection}`}
          style={{ minHeight: "72vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.sectionHeader}
            >
              <h1 className={`accent ${cambridgeStyles.pageTitle}`}>
                Exámenes de Cambridge
              </h1>
              <h2 className={cambridgeStyles.pageSubtitle} style={{ fontWeight: 400, fontSize: "1.45rem" }}>
                El estándar de oro en certificaciones de inglés
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className={cambridgeStyles.introText}
            >
              <p>
                Los <strong>exámenes de Cambridge</strong> son pruebas estandarizadas de inglés <strong>reconocidas a nivel internacional</strong> y administradas por la Universidad de Cambridge. Evalúan las <strong>cuatro habilidades</strong>: lectura, escritura, comprensión auditiva y expresión oral.
              </p>
              <p>
                Son reconocidos por <strong>universidades, empresas y organismos en más de 130 países</strong>. Y a diferencia de otros exámenes, los certificados Cambridge <strong>no caducan</strong> — los obtienes una vez y los usas toda la vida.
              </p>
            </motion.div>

            {/* Benefit chips */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className={cambridgeStyles.benefitList}
            >
              {certBenefits.map((b, i) => (
                <li key={i} className={cambridgeStyles.benefitItem}>
                  <span className={cambridgeStyles.checkIcon}>✓</span>
                  {b}
                </li>
              ))}
            </motion.ul>


          </div>
        </section>

        {/* ── NIVELES QUE PREPARAMOS ───────────────────────────── */}
        <section className={cambridgeStyles.infoSection} style={{ paddingTop: "2rem" }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.sectionHeader}
            >
              <h2 className="heading">Niveles que preparamos</h2>
              <h3 className="accent">Encuentra el examen que mejor se adapta a tu objetivo</h3>
            </motion.div>

            {/* Exam type breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cambridgeStyles.examBreakdown}
            >
              <div className={cambridgeStyles.breakdownGrid}>
                {[
                  { tag: "B1", exam: "Preliminary (PET)", desc: "Nivel intermedio. Ideal para comunicarse en situaciones cotidianas y empezar a demostrar tu inglés profesionalmente." },
                  { tag: "B2", exam: "First (FCE)", desc: "Nivel intermedio-alto. El más solicitado por empresas y universidades. Acredita que puedes trabajar y estudiar en inglés." },
                  { tag: "C1", exam: "Advanced (CAE)", desc: "Nivel avanzado. Para entornos universitarios o profesionales exigentes que requieren dominio real del idioma." },
                  { tag: "C2", exam: "Proficiency (CPE)", desc: "Nivel de experto. El certificado más alto de Cambridge, equivalente a un hablante nativo culto." },
                ].map((item) => (
                  <div key={item.tag} className={cambridgeStyles.breakdownCard}>
                    <span className={cambridgeStyles.breakdownTag}>{item.tag}</span>
                    <div>
                      <strong>{item.exam}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CÓMO PREPARO LOS EXÁMENES ────────────────────────── */}
        <section className={cambridgeStyles.methodSection}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.sectionHeader}
            >
              <h2 className="heading">Cómo preparo los exámenes Cambridge</h2>
              <h3 className="accent">Un método diseñado para que llegues al examen con confianza</h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cambridgeStyles.methodIntro}
            >
              Para el examen de Cambridge, <strong>la práctica constante es la clave</strong>. Mi enfoque se centra en que cada alumno se familiarice a fondo con el formato y el contenido del examen, a la vez que desarrolla las habilidades reales del idioma.
            </motion.p>

            <div className={cambridgeStyles.methodGrid}>
              {methodItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className={cambridgeStyles.methodCard}
                >
                  <div className={cambridgeStyles.methodIcon}>{item.icon}</div>
                  <h4 className={cambridgeStyles.methodTitle}>{item.title}</h4>
                  <p className={cambridgeStyles.methodDesc}>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cambridgeStyles.methodConclusion}
            >
              Mi compromiso es que cada alumno llegue al examen con las habilidades, la confianza y las estrategias necesarias para <strong>aprobar con holgura</strong>. El ambiente de clase es seguro, alentador y siempre personalizado.
            </motion.p>
          </div>
        </section>

        {/* ── CTA FINAL ────────────────────────────────────────── */}
        <section className={cambridgeStyles.ctaSection}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cambridgeStyles.ctaBox}
            >
              <h2>¿No sabes qué nivel elegir?</h2>
              <p>Escríbeme y te ayudo a encontrar el examen y el grupo que mejor se adapta a tu situación y objetivos.</p>
              <Link href="/#contacto" className="btn btn-primary">
                Hablar con Bimalingua →
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
