"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./page.module.css";
import FadeIn from "./FadeIn";

export default function PricingSection() {
  const [activePlan, setActivePlan] = useState("individual");

  return (
    <section id="precios" className={styles.pricing}>
      <div className="container">
        <FadeIn className={styles.sectionHeader}>
          <h2 className="heading">Elige tu plan perfecto</h2>
        </FadeIn>

        <div className={styles.pricingToggle}>
          <button
            className={`${styles.toggleButton} ${activePlan === "individual" ? styles.active : ""}`}
            onClick={() => setActivePlan("individual")}
          >
            Clases Particulares
          </button>
          <button
            className={`${styles.toggleButton} ${activePlan === "group" ? styles.active : ""}`}
            onClick={() => setActivePlan("group")}
          >
            Clases Grupales
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activePlan === "individual" && (
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

          {activePlan === "group" && (
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
  );
}
