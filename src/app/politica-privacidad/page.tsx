"use client";

import styles from "../sobre-mi/sobre-mi.module.css";
import { motion } from "framer-motion";

export default function PoliticaPrivacidad() {
  return (
    <div className={styles.pageWrapper}>
      <main className="container">
        <section className={styles.contentSection}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading" style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '3rem', textAlign: 'center' }}>
              Política de Privacidad
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <p>
                En Bimalingua, el respeto a tu privacidad es una prioridad. Esta Política de Privacidad describe cómo 
                recopilamos, usamos y protegemos la información personal que nos proporcionas a través de nuestro 
                sitio web bimalingua.com.
              </p>

              <h2>1. Información que recopilamos</h2>
              <p>
                Recopilamos información personal que nos proporcionas voluntariamente a través de nuestro formulario 
                de contacto, que incluye:
              </p>
              <ul>
                <li>Nombre</li>
                <li>Dirección de correo electrónico</li>
                <li>Mensaje y cualquier otra información que decidas compartir</li>
              </ul>

              <h2>2. Finalidad del tratamiento</h2>
              <p>
                La información recopilada se utiliza exclusivamente para:
              </p>
              <ul>
                <li>Responder a tus consultas o peticiones de información.</li>
                <li>Proporcionar y gestionar los servicios solicitados.</li>
                <li>Enviar información relevante sobre nuestras clases y promociones, siempre que nos hayas dado tu consentimiento.</li>
              </ul>

              <h2>3. Legitimación</h2>
              <p>
                La base legal para el tratamiento de tus datos es el consentimiento que nos otorgas al marcar la 
                casilla de aceptación en nuestro formulario de contacto.
              </p>

              <h2>4. Conservación de los datos</h2>
              <p>
                Los datos personales proporcionados se conservarán durante el tiempo necesario para cumplir con la 
                finalidad para la que fueron recabados y para determinar las posibles responsabilidades que se 
                pudieran derivar de dicha finalidad.
              </p>

              <h2>5. Derechos de los usuarios</h2>
              <p>
                Tienes derecho a acceder, rectificar, suprimir sus datos, así como otros derechos, como se explica 
                en la información adicional. Puedes ejercer estos derechos enviando un correo electrónico a 
                angie@bimalingua.com.
              </p>

              <h2>6. Seguridad</h2>
              <p>
                Implementamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus 
                datos de carácter personal y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
