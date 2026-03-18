"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Blog() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const blogPosts = [
    {
      id: 1,
      slug: "que-es-la-inversion-en-ingles",
      title: "¿Qué es la inversión en inglés?",
      excerpt: "La inversión gramatical es una de las estructuras que más impresionan en exámenes como el CAE (C1 Advanced) o el First Certificate (B2). ¿Pero qué es exactamente y cómo puedes usarla tú para sonar más natural, formal y avanzada en inglés?",
      date: "10 Abril 2024",
      category: "Gramática",
      image: "/images/blog/que-es-la-inversion-en-ingles.png"
    },
    {
      id: 2,
      slug: "tener-acento-en-ingles-es-malo",
      title: "¿Tener acento en inglés es malo?",
      excerpt: "Es hora de romper mitos y darle la vuelta a una idea que ha sobrevivido demasiado tiempo: la de que tener acento es negativo. La verdad —y la lingüística lo respalda— es que un acento no solo no es malo, sino que es una riqueza...",
      date: "15 Marzo 2024",
      category: "Reflexión",
      image: "/images/blog/tener-acento-en-ingles-es-malo.png"
    },
    {
      id: 3,
      slug: "como-mudarse-a-miami",
      title: "Razones para mudarte a Miami: cultura, idioma y calidad de vida",
      excerpt: "Miami no es solo un destino vacacional, es una ciudad llena de oportunidades, cultura vibrante y un estilo de vida que enamora. Si alguna vez has pensado en mudarte al extranjero, en este artículo te explico por qué podría ser tu próximo hogar.",
      date: "02 Febrero 2024",
      category: "Viajes",
      image: "/images/blog/como-mudarse-a-miami.png"
    },
    {
      id: 4,
      slug: "lista-definitiva-idioms-examen-cambridge",
      title: "La lista definitiva de Idioms para preparar el Examen de Cambridge",
      excerpt: "Si estás preparando el examen de B2 First o C1 Advanced de Cambridge, sabrás que el uso de expresiones idiomáticas (idioms) es fundamental para demostrar un nivel avanzado. No solo te ayudarán a sonar más natural, sino que subirán tu nota.",
      date: "20 Enero 2024",
      category: "Cambridge",
      image: "/images/blog/lista-definitiva-idioms-examen-cambridge.png"
    },
    {
      id: 5,
      slug: "como-escribir-un-report-para-el-examen-de-cambridge",
      title: "Cómo escribir un report para el writing del examen de Cambridge",
      excerpt: "Para escribir un report efectivo para los exámenes de Cambridge (B2 First o C1 Advanced), es fundamental comprender su estructura, tono y propósito. Un report es un texto formal y objetivo que presenta información organizada.",
      date: "15 Mayo 2024",
      category: "Cambridge",
      image: "/images/blog/como-escribir-un-report-para-el-examen-de-cambridge.png"
    },
    {
      id: 6,
      slug: "los-phrasal-verbs-mas-comunes-del-examen-de-cambridge",
      title: "Los phrasal verbs más comunes del Examen de Cambridge",
      excerpt: "Los phrasal verbs pueden ser tu mejor amigo o tu peor pesadilla en el examen de Cambridge. Aparecen en el Use of English, el Reading y el Listening. Aquí te traigo los que más se repiten, trucos para recordarlos y ejemplos que te salvarán el día del examen.",
      date: "20 Enero 2025",
      category: "Cambridge",
      image: "/images/blog/los-phrasal-verbs-mas-comunes-del-examen-de-cambridge.png"
    }
  ];

  return (
    <div style={{ padding: 'clamp(80px, 10vw, 120px) 0', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      <main className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 className="heading" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--primary)', marginBottom: '1rem' }}>Blog de Bimalingua</h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Consejos, técnicas de estudio y todo lo que necesitas saber para dominar el inglés y aprobar tus exámenes Cambridge.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))', gap: '2rem' }}>
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ backgroundColor: 'var(--surface)', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease', cursor: 'pointer' }}
              whileHover={{ y: -10, boxShadow: 'var(--shadow-hover)', borderColor: 'rgba(176, 91, 59, 0.3)' }}
            >
              <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <span style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 600 }}>
                    {post.category}
                  </span>
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginBottom: '1rem', display: 'block' }}>{post.date}</span>
                  <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>{post.excerpt}</p>
                  <span style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Leer artículo <span>→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
