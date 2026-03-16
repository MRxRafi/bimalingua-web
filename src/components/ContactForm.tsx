"use client";

import { useState } from "react";
import { sendEmail } from "@/lib/actions/contact";
import styles from "./ContactForm.module.css";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<{ success?: string; error?: string } | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    if (result.error) {
      setStatus({ error: result.error });
    } else {
      setStatus({ success: result.success });
      (e.target as HTMLFormElement).reset();
    }
    setIsPending(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${styles.contactContainer} glass`}
    >
      <h3 className={styles.title}>Contacta conmigo</h3>
      <p className={styles.subtitle}>Escríbeme y resolveré todas tus dudas.</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Nombre Completo</label>
          <input 
            id="name"
            name="name"
            required
            placeholder="Tu nombre"
            type="text" 
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Correo Electrónico</label>
          <input 
            id="email"
            name="email"
            required
            placeholder="ejemplo@correo.com"
            type="email" 
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message">Tu mensaje</label>
          <textarea 
            id="message"
            name="message"
            required
            rows={4}
            placeholder="¿En qué puedo ayudarte?"
          ></textarea>
        </div>

        <div className={styles.checkboxGroup}>
          <input 
            id="consent" 
            name="consent" 
            type="checkbox" 
            required
          />
          <header />
          <label htmlFor="consent">
            Acepto que mis datos se utilicen para contactarme.
          </label>
        </div>

        {status?.error && (
          <div className={styles.error}>
            {status.error}
          </div>
        )}

        {status?.success && (
          <div className={styles.success}>
            {status.success}
          </div>
        )}

        <button 
          type="submit" 
          disabled={isPending}
          className="btn btn-primary"
          style={{ width: '100%' }}
        >
          {isPending ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </motion.div>
  );
}
