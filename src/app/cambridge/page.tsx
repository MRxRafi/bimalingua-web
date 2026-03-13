import * as motion from "framer-motion/client";
import styles from "../page.module.css";
import Link from 'next/link'; // Added import for Link component

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
              <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }} className="accent">Exámenes de Cambridge</h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>Supera tu examen oficial con una preparación estratégica, simulacros reales y material actualizado. Elige tu nivel y empecemos.</p>
            </motion.div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
              <motion.div 
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(176, 91, 59, 0.15)' }} 
                style={{ 
                  background: 'linear-gradient(180deg, var(--surface) 0%, var(--surface-light) 100%)', 
                  padding: '2.5rem 2rem', 
                  borderRadius: '24px', 
                  textAlign: 'center', 
                  border: '1px solid var(--border)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(176,91,59,0.1), rgba(212,163,115,0.2))', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>B1</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>B1 Preliminary (PET)</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', minHeight: '60px' }}>Nivel intermedio. Ideal para empezar a comunicarte con confianza en entornos reales.</p>
                <Link href="/b1" className="btn btn-secondary" style={{ width: '100%', background: 'transparent', color: 'var(--primary)', border: '2px solid var(--primary)', display: 'block' }}>Ver programa complet0 →</Link>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(176, 91, 59, 0.25)' }} 
                style={{ 
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)', 
                  padding: '2.5rem 2rem', 
                  borderRadius: '24px', 
                  textAlign: 'center', 
                  border: 'none',
                  position: 'relative',
                  boxShadow: '0 15px 35px rgba(176, 91, 59, 0.2)',
                  color: 'white',
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease',
                  zIndex: 2
                }}
              >
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--foreground)', color: 'var(--background)', padding: '0.4rem 1.5rem', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Más Popular</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', marginBottom: '1.5rem', marginTop: '1rem', border: '2px solid rgba(255,255,255,0.3)' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: 'white' }}>B2</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1rem' }}>B2 First (FCE)</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', minHeight: '60px' }}>Nivel intermedio alto. El certificado más demandado por empresas y universidades.</p>
                <Link href="/b2" className="btn btn-primary" style={{ width: '100%', background: 'white', color: 'var(--primary)', display: 'block' }}>Descubrir el curso →</Link>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(176, 91, 59, 0.15)' }} 
                style={{ 
                  background: 'linear-gradient(180deg, var(--surface) 0%, var(--surface-light) 100%)', 
                  padding: '2.5rem 2rem', 
                  borderRadius: '24px', 
                  textAlign: 'center', 
                  border: '1px solid var(--border)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(176,91,59,0.1), rgba(212,163,115,0.2))', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>C1</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>C1 Advanced (CAE)</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', minHeight: '60px' }}>Nivel avanzado. Demuestra un dominio excepcional y fluido del inglés.</p>
                <Link href="/c1" className="btn btn-secondary" style={{ width: '100%', background: 'transparent', color: 'var(--primary)', border: '2px solid var(--primary)', display: 'block' }}>Ver detalles del nivel →</Link>
              </motion.div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <a href="/#test" className="btn btn-primary">No sé qué nivel elegir, ¡haré el test!</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
