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
            Clases One to one
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
                  <h3>Clase one to one</h3>
                  <p className={styles.price}><span>40€</span> / clase</p>
                </div>
                <div className={styles.priceCardFooter}>
                  <Link href="#contacto" className={`${styles.btnFull} btn btn-primary`}>Pide información</Link>
                </div>
              </motion.div>

              <motion.div className={`${styles.priceCardModern} ${styles.featuredPriceCard}`} whileHover={{ y: -5 }}>
                <div className={styles.popularBadge}>Recomendado</div>
                <div className={styles.priceCardHeader}>
                  <h3>Una clase semanal</h3>
                  <p className={styles.price}><span>150€</span> / mes</p>
                </div>
                <ul className={styles.pricingFeatures}>
                  <li>Una clase semanal</li>
                  <li>Plan de estudios</li>
                  <li>Material incluido</li>
                  <li>Tareas para el trabajo autónomo</li>
                  <li>Corrección de Writings</li>
                  <li>Simulacros de Speaking</li>
                </ul>
                <div className={styles.priceCardFooter}>
                  <Link href="#contacto" className={`${styles.btnFull} ${styles.darkBtn} btn btn-primary`}>Pide información</Link>
                </div>
              </motion.div>

              <motion.div className={styles.priceCardModern} whileHover={{ y: -5 }}>
                <div className={styles.priceCardHeader}>
                  <h3>Dos clases semanales</h3>
                  <p className={styles.price}><span>300€</span> / mes</p>
                </div>
                <ul className={styles.pricingFeatures}>
                  <li>Dos clases semanales</li>
                  <li>Plan de estudios</li>
                  <li>Material incluido</li>
                  <li>Tareas para el trabajo autónomo</li>
                  <li>Corrección de Writings</li>
                  <li>Simulacros de Speaking</li>
                </ul>
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
                  <p className={styles.price}><span>90€</span>/mes</p>
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
