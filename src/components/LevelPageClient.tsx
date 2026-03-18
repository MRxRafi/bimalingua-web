"use client";

import Link from "next/link";
import { motion } from 'framer-motion';
import styles from "./level.module.css";

interface LevelPageProps {
  level: string;
  fullName: string;
  description: string;
  info: { label: string; value: string }[];
  requirements: string[];
  program: { title: string; desc: string }[];
}

export default function LevelPageClient({ level, fullName, description, info, requirements, program }: LevelPageProps) {
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

          <h1 className={`${styles.levelTitle} heading`}>{fullName}</h1>
          <p className={styles.levelDesc}>{description}</p>

          <div className={styles.infoGrid}>
            {info.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, borderColor: 'var(--primary)' }}
                className={styles.infoCard}
              >
                <strong className={styles.infoLabel}>{item.label}</strong>
                <span className={styles.infoValue}>{item.value}</span>
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
                {requirements.map((req, i) => (
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
                {program.map((mod, i) => (
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
