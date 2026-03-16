"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from "./page.module.css";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [activePlan, setActivePlan] = useState('individual'); // State for pricing toggle

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className={styles.page}>
      <main>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.hero}
        >
          <div className={`${styles.heroContent} container`}>
            <motion.div
              className={styles.heroText} // Changed from heroContent to heroText to match original structure
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1>
                Clases de inglés online para <span className={styles.highlight}>preparar el examen de Cambridge</span>.
              </h1>
              <p>
                Certifica tu nivel de inglés para conseguir más oportunidades laborales, académicas y personales. Sin métodos aburridos, solo resultados garantizados.
              </p>
              <div className={styles.ctaGroup}>
                <Link href="#contacto" className="btn btn-primary">
                  Reserva tu prueba gratuita
                </Link>
                <Link href="/cambridge" className="btn btn-secondary" style={{ backgroundColor: 'transparent', color: 'var(--primary)', border: '2px solid var(--primary)' }}>
                  Ver niveles
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={styles.heroImageWrapper}
            >
              <Image
                src="https://bimalingua.com/wp-content/uploads/2025/03/Mejora-tu-listening-7-1024x576.png"
                alt="Angie - Academia Bimalingua"
                width={800}
                height={450}
                className={styles.heroImage}
                priority
              />
            </motion.div>
          </div>
        </motion.section>

        <section id="metodo" className={styles.method}>
          <div className="container">
            <div className={styles.methodContent}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={styles.methodImageWrapper}
              >
                <Image
                  src="/assets/clases-particulares.jpg"
                  alt="Método Bimalingua"
                  width={500}
                  height={500}
                  className={styles.methodImage}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={styles.methodText}
              >
                <h2 className="accent">¿Cómo vas a aprender inglés?</h2>
                <p>Mi enfoque es práctico, divertido y orientado a que consigas resultados reales sin perder el tiempo.</p>
                <div className={styles.features}>
                  {[
                    { title: "Lecciones entretenidas", desc: "Mis clases están pensadas para que nunca pierdas la motivación." },
                    { title: "Clases personalizadas", desc: "Organizaré las clases de inglés para que estén enfocadas en tus objetivos." },
                    { title: "Flexibilidad", desc: "Organízate como quieras, nos adaptamos a tu ritmo." },
                    { title: "Resultados asegurados", desc: "Con mi método de estudio personalizado a tu nivel, aprenderás inglés por fin." },
                    { title: "Material descargable", desc: "Material propio pensado y personalizada para cada una de mis alumnas." },
                    { title: "Ejercicios personalizados", desc: "Recibirás cada semana ejercicios prácticos adaptados a tu nivel de inglés." }
                  ].map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className={`${styles.featureCard} glass`}
                    >
                      <h3>{f.title}</h3>
                      <p>{f.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="cambridge" className={styles.cambridge}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.sectionHeader}
            >
              <h2>Certificaciones Cambridge</h2>
              <p>Tu pasaporte al éxito académico y profesional internacional.</p>
            </motion.div>
            <div className={styles.cambridgeGrids}>
              {[
                { name: 'B1 Preliminary', desc: 'Domina lo esencial y comienza a comunicarte con total seguridad.', href: '/b1' },
                { name: 'B2 First', desc: 'Tu pasaporte al mercado laboral y a la fluidez que exigen las empresas.', href: '/b2' },
                { name: 'C1 Advanced', desc: 'Exprésate con naturalidad y precisión en entornos académicos o profesionales.', href: '/c1' },
                { name: 'C2 Proficiency', desc: 'Alcanza la maestría absoluta. El nivel más alto para los que no tienen límites.', href: null }
              ].map((level, i) => {
                const Card = (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`${styles.levelCard} glass`}
                    whileHover={level.href ? { y: -10, transition: { duration: 0.2 } } : {}}
                    style={level.href ? { cursor: 'pointer' } : {}}
                  >
                    <div className={styles.levelBadge}>{level.name.split(' ')[0]}</div>
                    <h3>{level.name}</h3>
                    <p>{level.desc}</p>
                  </motion.div>
                );

                return level.href ? (
                  <Link href={level.href} key={level.name} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {Card}
                  </Link>
                ) : (
                  <div key={level.name}>{Card}</div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="precios" className={styles.pricing}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.sectionHeader}
            >
              <h2>Elige tu plan perfecto</h2>
              <p>Flexibilidad y resultados garantizados para tu preparación Cambridge.</p>
            </motion.div>

            <div className={styles.pricingToggle}>
              <button
                className={`${styles.toggleButton} ${activePlan === 'individual' ? styles.active : ''}`}
                onClick={() => setActivePlan('individual')}
              >
                Clases Individuales
              </button>
              <button
                className={`${styles.toggleButton} ${activePlan === 'group' ? styles.active : ''}`}
                onClick={() => setActivePlan('group')}
              >
                Clases Grupales
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activePlan === 'individual' && (
                <motion.div
                  key="individual"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={styles.pricingCards}
                >
                  <motion.div className={styles.priceCardModern} whileHover={{ y: -5 }}>
                    <div className={styles.priceCardHeader}>
                      <h3>Plan Básico</h3>
                      <p className={styles.price}><span>25€</span>/clase</p>
                      <p className={styles.subtitle}>Clase suelta</p>
                    </div>
                    <ul className={styles.pricingFeatures}>
                      <li>Clases 1 a 1</li>
                      <li>Material de estudio</li>
                      <li>Simulacros de examen</li>
                    </ul>
                    <div className={styles.priceCardFooter}>
                      <Link href="#contacto" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Empezar ahora</Link>
                    </div>
                  </motion.div>
                  <motion.div className={`${styles.priceCardModern} ${styles.featuredPriceCard}`} whileHover={{ y: -5 }}>
                    <div className={styles.popularBadge}>Más Popular</div>
                    <div className={styles.priceCardHeader}>
                      <h3>Plan Premium</h3>
                      <p className={styles.price}><span>22€</span>/clase</p>
                      <p className={styles.subtitle}>Bono de 10 clases (220€)</p>
                    </div>
                    <ul className={styles.pricingFeatures}>
                      <li>Clases 1 a 1 en vivo</li>
                      <li>Material de estudio incluido</li>
                      <li>Simulacros de examen oficiales</li>
                      <li>Flexibilidad horaria</li>
                      <li>Seguimiento personalizado</li>
                    </ul>
                    <div className={styles.priceCardFooter}>
                      <Link href="#contacto" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', background: 'var(--foreground)', color: 'var(--background)' }}>Comprar bono</Link>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {activePlan === 'group' && (
                <motion.div
                  key="group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={styles.pricingCards}
                >
                  <motion.div className={`${styles.priceCardModern} ${styles.featuredPriceCard}`} style={{ maxWidth: '500px', margin: '0 auto' }} whileHover={{ y: -5 }}>
                    <div className={styles.priceCardHeader}>
                      <h3>Mensualidad Grupal</h3>
                      <p className={styles.price}><span>75€</span>/mes</p>
                      <p className={styles.subtitle}>2 horas semanales en grupos reducidos</p>
                    </div>
                    <ul className={styles.pricingFeatures}>
                      <li>Máximo 6 alumnos por grupo</li>
                      <li>Apoyo constante del profesor</li>
                      <li>Aprende al ritmo de tus compañeros</li>
                      <li>Simulacros de examen</li>
                      <li>Material de estudio online incluido</li>
                    </ul>
                    <div className={styles.priceCardFooter}>
                      <Link href="#contacto" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Unirme a un grupo</Link>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <section id="faq" style={{ padding: '6rem 0', backgroundColor: 'var(--surface)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
              <h2 className="heading" style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Preguntas Frecuentes</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Resuelve tus dudas generales de Bimalingua.</p>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { q: "¿Se puede recuperar una clase si no asisto un día?", a: "En el caso de que un alumno no pueda asistir a una clase, ésta se dejará grabada para que pueda visualizarla y no pierda el ritmo de la clase. Si es una clase particular, si avisas con 24h de antelación se puede reprogramar." },
                { q: "¿Es necesario comprar algún libro?", a: "No es necesario. Todo el material está incluido y se proyectará en la pantalla durante la clase. La teoría, junto con los ejercicios, se mandarán a los alumnos por e-mail." },
                { q: "¿Cuánto tiempo tardaré en prepararme el certificado de Cambridge?", a: "Si bien el tiempo varía dependiendo de cada alumno. Las clases están pensadas para presentarse a un examen oficial tras nueve meses de clases (lo que sería un curso lectivo). Todo esto dependerá del compromiso de alumno." },
                { q: "¿Puedo apuntarme solo medio mes o a la mitad de las clases?", a: "No, el pago mensual no puede dividirse. Es obligación del alumno comprometerse con las clases para el correcto funcionamiento de las mismas." },
                { q: "¿Cómo se realiza el pago de las clases?", a: "Las clases se pagan por adelantado a principio de cada mes mediante transferencia bancaria y en caso de individuales se organizan en bonos de clases." },
                { q: "¿Puedo elegir el horario de mis clases particulares?", a: "Sí, hay flexibilidad horaria en las clases 1 a 1 para que puedas organizarte según tu disponibilidad." },
              ].map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ backgroundColor: 'var(--background)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border)', cursor: 'pointer' }}
                >
                  <summary style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', outline: 'none', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                    {faq.q}
                    <span style={{ color: 'var(--primary)' }}>↓</span>
                  </summary>
                  <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre-mi" className={styles.about}>
          <div className="container">
            <div className={styles.aboutContent}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={styles.aboutText}
              >
                <h2 className="accent">¡Hola! Soy Angie</h2>
                <p>Ayudo a estudiantes ambiciosos a conseguir su certificado oficial de inglés para que ninguna oportunidad se les escape.</p>
                <p>En mi academia, no solo aprenderás gramática; aprenderás a comunicarte con confianza y a usar el inglés como una herramienta real para tu futuro.</p>
                <div style={{ marginTop: '2rem' }}>
                  <Link href="/sobre-mi" className="btn btn-primary">Conóceme mejor</Link>
                </div>
              </motion.div>
              <div className={styles.aboutDecoration}>
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className={`${styles.decorationCircle} glass`}
                >
                  <Image
                    src="/assets/home-head.webp"
                    alt="Bimalingua Tiles"
                    width={300}
                    height={300}
                    className={styles.tilesDecoration}
                    style={{ borderRadius: '50%', objectFit: 'cover', opacity: 0.6 }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className={styles.contactSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className="accent">¿Tu nivel de inglés te está frenando?</h2>
              <p>Haz tu test de nivel GRATIS y descubre cómo puedes mejorar hoy mismo.</p>
              <Link href="/test" className="btn btn-secondary">Ir al Test de Nivel</Link>
            </div>
            
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
