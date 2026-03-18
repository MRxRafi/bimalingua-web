"use client";

import { motion } from "framer-motion";
import styles from "./legal.module.css";

interface LegalPageClientProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalPageClient({ title, children }: LegalPageClientProps) {
  return (
    <div className={styles.legalWrapper}>
      <main className="container">
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={styles.legalTitle}>{title}</h1>
            <div className={styles.legalContent}>
              {children}
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
