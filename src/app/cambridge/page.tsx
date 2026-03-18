"use client";

import { motion } from "framer-motion";
import styles from "../page.module.css";
import cambridgeStyles from "./cambridge.module.css";
import Link from 'next/link';

export default function CambridgePage() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.cambridge} style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.sectionHeader}
            >
              <h1 className={`accent ${cambridgeStyles.pageTitle}`}>Exámenes de Cambridge</h1>
              <p className={cambridgeStyles.pageSubtitle}>Supera tu examen oficial con una preparación estratégica, simulacros reales y material actualizado. Elige tu nivel y empecemos.</p>
            </motion.div>

            <div className={cambridgeStyles.cardsGrid}>
              <motion.div className={cambridgeStyles.levelCard}>
                <div className={cambridgeStyles.badge}>B1</div>
                <h3 className={cambridgeStyles.cardTitle}>B1 Preliminary (PET)</h3>
                <p className={cambridgeStyles.cardDesc}>Nivel intermedio. Ideal para empezar a comunicarte con confianza en entornos reales.</p>
                <Link href="/b1" className={`${cambridgeStyles.btnFull} btn btn-secondary`}>Ver programa completo →</Link>
              </motion.div>

              <motion.div className={`${cambridgeStyles.levelCard} ${cambridgeStyles.featuredCard}`}>
                <div className={cambridgeStyles.popularTag}>Más Popular</div>
                <div className={cambridgeStyles.badge}>B2</div>
                <h3 className={cambridgeStyles.cardTitle}>B2 First (FCE)</h3>
                <p className={cambridgeStyles.cardDesc}>Nivel intermedio alto. El certificado más demandado por empresas y universidades.</p>
                <Link href="/b2" className={`${cambridgeStyles.btnFull} ${cambridgeStyles.whiteBtn} btn btn-primary`}>Descubrir el curso →</Link>
              </motion.div>

              <motion.div className={cambridgeStyles.levelCard}>
                <div className={cambridgeStyles.badge}>C1</div>
                <h3 className={cambridgeStyles.cardTitle}>C1 Advanced (CAE)</h3>
                <p className={cambridgeStyles.cardDesc}>Nivel avanzado. Demuestra un dominio excepcional y fluido del inglés.</p>
                <Link href="/c1" className={`${cambridgeStyles.btnFull} btn btn-secondary`}>Ver detalles del nivel →</Link>
              </motion.div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
