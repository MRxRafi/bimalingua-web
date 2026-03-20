"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useState } from 'react';
import styles from "./page.module.css";
import cambridgeStyles from "./cambridge.module.css";
import ContactForm from "@/components/ContactForm";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function HomeClient() {
  const [activePlan, setActivePlan] = useState('individual'); // State for pricing toggle

  return (
    <div className={styles.page}>
      <main>
        <section className={styles.hero}>
          <div className={`${styles.blob} ${styles.blob1}`} />
          <div className={`${styles.blob} ${styles.blob2}`} />
          
          <div className={`${styles.heroContent} container`}>
            <motion.div
              className={styles.heroText}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 className="heading" variants={fadeInUp}>
                Clases de inglés online para <span className={styles.highlight}>preparar el examen de Cambridge</span>.
              </motion.h1>
              <motion.h2 variants={fadeInUp}>Certifica tu nivel de inglés para conseguir más oportunidades.</motion.h2>
              <motion.div className={styles.ctaGroup} variants={fadeInUp}>
                <Link href="#contacto" className="btn btn-primary">Empezar ahora</Link>
                <Link href="#precios" className="btn btn-secondary">Ver precios</Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroImageWrapper}
            >
              <div className={styles.imageGlassEffect} />
              <Image
                src="https://bimalingua.com/wp-content/uploads/2025/03/Mejora-tu-listening-7-1024x576.png"
                alt="Clases de inglés online en Academia Bimalingua"
                width={900}
                height={506}
                className={styles.heroImage}
                priority
              />
            </motion.div>
          </div>
        </section>

        <section className={styles.heroDetails}>
          <div className="container">
            <motion.div 
              className={styles.heroIntro}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className={styles.introParagraphs} variants={fadeInUp}>
                <p>
                  Con las <strong>clases de inglés online</strong> de Academia Bimalingua, romperás la barrera del idioma y conseguirás el certificado de inglés que necesitas.
                </p>
                <p>
                  Ya sea para conseguir un trabajo mejor, sentirte más segura en entrevistas o dar el salto a vivir en el extranjero, aquí encontrarás lo que necesitas.
                </p>
                <p>
                  En <strong>Academia Bimalingua</strong>, las clases de inglés online son en vivo a través de Google Meet. Son personalizadas y enfocadas en resultados reales. Sin métodos aburridos, sin perder el tiempo.
                </p>
                <p>
                  Aprenderás el inglés de verdad de forma práctica, con un enfoque pensado para mujeres como tú.
                </p>
              </motion.div>

              <motion.div 
                className={styles.seoHighlightBox}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, rotate: 1 }}
              >
                <span className={styles.seoLabel}>Academia Bimalingua</span>
                <h3>¿Tu nivel de inglés te está frenando?</h3>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="metodo" className={styles.method}>
          <div className="container">
            <div className={styles.methodContent}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
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
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={styles.methodText}
              >
                <h2 className="accent">¿Cómo vas a aprender inglés?</h2>
                <div className={styles.features}>
                  {[
                    { title: "Lecciones entretenidas", desc: "Mis clases están pensadas para que nunca pierdas la motivación y la ilusión de aprender inglés." },
                    { title: "Clases personalizadas", desc: "Después de la primera entrevista organizaré las clases de inglés para que estén enfocadas en tus objetivos." },
                    { title: "Flexibilidad", desc: "Organízate como quieras en clases grupales o particulares en el horario que prefieras y a tu ritmo." },
                    { title: "Material descargable", desc: "Material propio pensado y personalizada para cada una de mis alumnas." },
                    { title: "Ejercicios personalizados", desc: "Recibirás cada semana ejercicios prácticos adaptados a tu nivel de inglés." },
                    { title: "Resultados asegurados", desc: "Con el método de estudio personalizado a tu nivel conseguirás el certificado de Cambridge que necesitas y aprenderás inglés ¡por fin!" }
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

        <section id="clases-grupales" className={styles.cambridge}>
          <div className="container">
            {/* Centred title block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.sectionHeader}
            >
              <h2 className="heading">Clases grupales por niveles</h2>
              <h3>Aprender inglés en compañía de estudiantes con tus mismos objetivos</h3>
            </motion.div>

            {/* Intro text — left aligned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.sectionIntroCopy}
            >
              <p>
                Las <strong>clases grupales</strong> están diseñadas para personas que quieran mejorar su <strong>nivel de inglés</strong> y obtener un certificado de Cambridge que les abra puertas en el ámbito laboral. Aquí, el aprendizaje es dinámico, práctico y enfocado en resultados.
              </p>
              <p>
                Cada grupo se organiza por niveles para que avances junto a compañeras con objetivos similares. Aprenderás no solo a comunicarte con fluidez, sino también a dominar las técnicas necesarias para aprobar tu <strong>examen de inglés</strong> con confianza.
              </p>
            </motion.div>

            {/* Chips + steps — centred below the text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.sectionIntroCenter}
            >
              <div className={styles.groupFeatures}>
                <span>Preparación de exámenes Cambridge</span>
                <span>Enfoque práctico en inglés para trabajar</span>
                <span>Grupos reducidos para un aprendizaje más efectivo</span>
              </div>
              <h4 className={styles.stepsLabel}>1. Elige tu nivel &bull; 2. Elige tu horario &bull; 3. Consigue tus objetivos</h4>
            </motion.div>

            
            <div className={cambridgeStyles.cardsGrid}>
              {[
                {
                  tag: 'B1', name: 'Preliminary (PET)',
                  desc: 'Nivel intermedio. Evalúa si puedes comunicarte en situaciones cotidianas y trabajar o estudiar en un entorno de habla inglesa básico.',
                  href: '/b1', cta: 'Ver programa B1 →', featured: false, popular: false,
                },
                {
                  tag: 'B2', name: 'First (FCE)',
                  desc: 'Nivel intermedio-alto. El certificado más demandado por empresas y universidades de todo el mundo. Demuestra que puedes desenvolverte con fluidez.',
                  href: '/b2', cta: 'Descubrir el curso →', featured: true, popular: true,
                },
                {
                  tag: 'C1', name: 'Advanced (CAE)',
                  desc: 'Nivel avanzado. Demuestra un dominio excepcional del inglés, ideal para entornos profesionales y universitarios exigentes.',
                  href: '/c1', cta: 'Ver detalles del nivel →', featured: false, popular: false,
                },
              ].map((level, i) => (
                <motion.div
                  key={level.tag}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className={`${cambridgeStyles.levelCard} ${level.featured ? cambridgeStyles.featuredCard : ''}`}
                >
                  {level.popular && (
                    <div className={cambridgeStyles.popularTag}>Más Popular</div>
                  )}
                  <div className={cambridgeStyles.badge}>{level.tag}</div>
                  <h3 className={cambridgeStyles.cardTitle}>{level.name}</h3>
                  <p className={cambridgeStyles.cardDesc}>{level.desc}</p>
                  <Link
                    href={level.href}
                    className={`${cambridgeStyles.btnFull} btn ${level.featured ? `btn-primary ${cambridgeStyles.whiteBtn}` : 'btn-secondary'}`}
                  >
                    {level.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <Link href="/cambridge" className="btn btn-secondary">No lo tengo claro</Link>
            </div>

            <div className={styles.faqSectionCard}>
              <div className={styles.faqList}>
                <h3 className="accent" style={{ marginBottom: '2rem', textAlign: 'center' }}><strong>FAQ</strong> Clases grupales</h3>
                {[
                  { q: "¿Se puede recuperar una clase si no asisto un día?", a: "En el caso de que un alumno no pueda asistir a una clase, ésta se dejará grabada para que pueda visualizarla y no pierda el ritmo de la clase." },
                  { q: "¿Es necesario comprar algún libro?", a: "No es necesario. Todo el material está incluido y se proyectará en la pantalla durante la clase. La teoría, junto con los ejercicios, se mandarán a los alumnos por e-mail." },
                  { q: "¿Cuánto tiempo tardaré en prepararme el certificado de Cambridge?", a: "Si bien el tiempo varía dependiendo de cada alumno. Las clases están pensadas para presentarse a un examen oficial tras nueve meses de clases (lo que sería un curso lectivo). Si por ejemplo, el alumno se apuntara en septiembre, en junio estaría preparado para presentarse al examen oficial. Todo esto dependerá del compromiso de alumno con las clases." },
                  { q: "¿Es obligatorio hacer los deberes?", a: "Aunque nunca es obligatorio realizar la tarea, siempre es recomendable para poder evaluar el progreso del alumno y asegurar que se asienten los conocimientos." },
                  { q: "¿Puedo apuntarme solo medio mes o a la mitad de las clases?", a: "No, el pago mensual no puede dividirse. Es obligación del alumno comprometerse con las clases para el correcto funcionamiento de las mismas." },
                ].map((faq, i) => (
                  <motion.details key={i} className={styles.faqItemDetails}>
                    <summary className={styles.faqSummary}>
                      {faq.q}
                      <span className={styles.faqArrow}>&#8595;</span>
                    </summary>
                    <p className={styles.faqContent}>{faq.a}</p>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="clases-particulares" className={styles.about}>
          <div className="container">
            {/* Centred title block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.sectionHeader}
            >
              <h2 className="heading">Clases particulares</h2>
              <h3 className="accent">Una forma de aprender inglés que se adapta a ti</h3>
            </motion.div>

            {/* Content at full container width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.particularesContent}>
                <div className={styles.particularesText}>
                  <p>
                    Conseguir un <Link href="/cambridge"><strong>certificado de Cambridge</strong></Link> puede abrirte las puertas a nuevas oportunidades para conseguir mejores oportunidades laborales, trabajar o vivir en el extranjero.
                  </p>
                  <p>
                    Aquí no hay clases genéricas ni métodos aburridos. Se trata de que consigas resultados reales, aprendiendo de forma personalizada, a tu ritmo y con un enfoque directo en lo que necesitas para <strong>aprender inglés</strong> y aprobar tu <strong>examen de Cambridge</strong>.
                  </p>
                  <p>
                    ¿Te cuesta la gramática? ¿Te bloqueas al hablar? No pasa nada. Adaptaré las clases de inglés online a tus puntos débiles y a lo que más te cueste, para que avances sin frustraciones. Además, trabajaremos juntas para que el inglés deje de ser un obstáculo y se convierta en una herramienta que te abra puertas.
                  </p>
                  <p>
                    Lo que marca la diferencia en mis clases particulares es el enfoque totalmente <strong>personalizado</strong>. Aquí no hay un plan genérico que se aplica a todo el mundo. Cada clase está diseñada para ti, adaptando el ritmo y la intensidad según tus necesidades y objetivos. Primero, empezamos con una <strong>evaluación inicial</strong> para conocer tu <strong>nivel de inglés</strong>, identificar tus puntos fuertes y ver qué áreas necesitan más atención.
                  </p>
                </div>

                <div className={styles.particularesList}>
                  <p className={styles.particularesBenefitsTitle}>Qué trabajamos</p>
                  <ul>
                    <li>Preparación intensiva para exámenes de Cambridge</li>
                    <li>Práctica real para ganar seguridad al hablar</li>
                    <li>Clases diseñadas para que sientas que avanzas de verdad</li>
                    <li>Mejora de la pronunciación con ejercicios prácticos</li>
                    <li>Mejora de la comprensión lectora y auditiva</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <div className={styles.faqSectionCard}>
              <div className={styles.faqList}>
                <h3 className="accent" style={{ marginBottom: '2rem', textAlign: 'center' }}><strong>FAQ</strong> Clases particulares</h3>
                {[
                  { q: "¿Cómo funcionan las clases particulares?", a: "Las clases particulares son 100 % personalizadas y se adaptan a tu nivel, objetivos y ritmo de aprendizaje. Son clases de inglés online en vivo a través de Google Meet." },
                  { q: "¿Puedo preparar un examen Cambridge con clases particulares?", a: "Sí, las clases están diseñadas para ayudarte a aprobar el PET (B1), First (B2) o CAE (C1)." },
                  { q: "¿Qué diferencia hay entre clases particulares y grupales?", a: "Las clases particulares son 100 % personalizadas, por lo que avanzas a tu propio ritmo." },
                  { q: "¿Cuánto tiempo necesito para ver resultados?", a: "Muchas alumnas notan mejoras en pocas semanas y alcanzan su objetivo en tres a nueve meses." },
                  { q: "¿Las clases son grabadas?", a: "No, las clases son en vivo y personalizadas, pero recibirás materiales y ejercicios después de cada sesión." },
                  { q: "¿Puedo elegir el horario de mis clases?", a: "Sí, hay flexibilidad horaria para que puedas organizarte según tu disponibilidad." },
                  { q: "¿Cuántas clases puedo tomar a la semana?", a: "Puedes elegir la frecuencia que mejor se adapte a ti: desde una clase por semana hasta un plan intensivo." },
                  { q: "¿Cómo se realiza el pago de las clases?", a: "Las clases se pagan por adelantado mediante transferencia bancaria y se organizan en bonos de clases." },
                  { q: "¿Qué pasa si no puedo asistir a una clase?", a: "Si avisas con al menos 24 horas de antelación, podrás reprogramar la clase sin problema." },
                  { q: "¿Necesito comprar materiales extra?", a: "No, todo el material está incluido en el curso." },
                ].map((faq, i) => (
                  <motion.details key={i} className={styles.faqItemDetails}>
                    <summary className={styles.faqSummary}>
                      {faq.q}
                      <span className={styles.faqArrow}>&#8595;</span>
                    </summary>
                    <p className={styles.faqContent}>{faq.a}</p>
                  </motion.details>
                ))}
              </div>
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
              <h2 className="heading">Elige tu plan perfecto</h2>
            </motion.div>

            <div className={styles.pricingToggle}>
              <button
                className={`${styles.toggleButton} ${activePlan === 'individual' ? styles.active : ''}`}
                onClick={() => setActivePlan('individual')}
              >
                Clases Particulares
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
                  transition={{ duration: 0.4 }}
                  className={styles.pricingCards}
                >
                  <motion.div className={styles.priceCardModern} whileHover={{ y: -5 }}>
                    <div className={styles.priceCardHeader}>
                      <h3>Clase particular</h3>
                      <p className={styles.price}><span>25€</span> / Clase</p>
                    </div>
                    <div className={styles.priceCardFooter}>
                      <Link href="#contacto" className={`${styles.btnFull} btn btn-primary`}>Pide información</Link>
                    </div>
                  </motion.div>
                  <motion.div className={`${styles.priceCardModern} ${styles.featuredPriceCard}`} whileHover={{ y: -5 }}>
                    <div className={styles.popularBadge}>Mejor valor</div>
                    <div className={styles.priceCardHeader}>
                      <h3>Bono 10 clases</h3>
                      <p className={styles.price}><span>200 €</span></p>
                      <p className={styles.subtitle}>Precio único (20€ / Clase)</p>
                    </div>
                    <div className={styles.priceCardFooter}>
                      <Link href="#contacto" className={`${styles.btnFull} ${styles.darkBtn} btn btn-primary`}>Pide información</Link>
                    </div>
                  </motion.div>
                  <motion.div className={styles.priceCardModern} whileHover={{ y: -5 }}>
                    <div className={styles.priceCardHeader}>
                      <h3>Bono 5 clases</h3>
                      <p className={styles.price}><span>115 €</span></p>
                      <p className={styles.subtitle}>Precio único (23€ / Clase)</p>
                    </div>
                    <div className={styles.priceCardFooter}>
                      <Link href="#contacto" className={`${styles.btnFull} btn btn-primary`}>Pide información</Link>
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
                  transition={{ duration: 0.4 }}
                  className={styles.pricingCards}
                >
                  <motion.div className={`${styles.priceCardModern} ${styles.featuredPriceCard} ${styles.groupPlanFeatured}`} whileHover={{ y: -5 }}>
                    <div className={styles.priceCardHeader}>
                      <h3>Pago mensual</h3>
                      <p className={styles.price}><span>75€</span>/mes</p>
                      <p className={styles.subtitle}>Grupos reducidos por niveles</p>
                    </div>
                    <ul className={styles.pricingFeatures}>
                      <li>2 horas semanales</li>
                      <li>Máximo 6 alumnos</li>
                      <li>Material incluido</li>
                    </ul>
                    <div className={styles.priceCardFooter}>
                      <Link href="#contacto" className={`${styles.btnFull} btn btn-primary`}>Reservar plaza</Link>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
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
                <div style={{ marginTop: '3rem' }}>
                  <Link href="/sobre-mi" className="btn btn-primary">Conóceme mejor</Link>
                </div>
              </motion.div>
              <div className={styles.aboutDecoration}>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className={`${styles.decorationCircle} glass`}
                >
                  <Image
                    src="/assets/home-head.webp"
                    alt="Bimalingua Angie"
                    width={350}
                    height={350}
                    className={styles.tilesDecoration}
                    style={{ borderRadius: '50%', objectFit: 'cover', opacity: 0.8 }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className={styles.contactSection}>
          <div className="container">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
