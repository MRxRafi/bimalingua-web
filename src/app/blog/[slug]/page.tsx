"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    slug: "que-es-la-inversion-en-ingles",
    title: "¿Qué es la inversión en inglés?",
    excerpt: "La inversión gramatical es una de las estructuras que más impresionan en exámenes como el CAE (C1 Advanced) o el First Certificate (B2). ¿Pero qué es exactamente y cómo puedes usarla tú para sonar más natural, formal y avanzada en inglés?",
    date: "10 Abril 2024",
    category: "Gramática",
    image: "https://bimalingua.com/wp-content/uploads/2025/04/Mejora-tu-listening-1024x576.png",
    content: "La inversión gramatical es una de las estructuras que más impresionan en exámenes como el CAE (C1 Advanced) o el First Certificate (B2). ¿Pero qué es exactamente y cómo puedes usarla tú para sonar más natural, formal y avanzada en inglés?\n\nEn este artículo repasaremos las reglas fundamentales de la inversión, ejemplos prácticos que puedes usar en tus redacciones (writings) o en la prueba oral (speaking), y algunos trucos para no cometer errores básicos.\n\n### 1. ¿Cuándo usar la inversión?\nLa inversión se usa principalmente para dar énfasis. Suele aparecer después de expresiones negativas o limitantes al principio de una oración (por ejemplo: Never, Rarely, Seldom, Hardly, No sooner)."
  },
  {
    id: 2,
    slug: "tener-acento-en-ingles-es-malo",
    title: "¿Tener acento en inglés es malo?",
    excerpt: "Es hora de romper mitos y darle la vuelta a una idea que ha sobrevivido demasiado tiempo: la de que tener acento es negativo. La verdad —y la lingüística lo respalda— es que un acento no solo no es malo, sino que es una riqueza...",
    date: "15 Marzo 2024",
    category: "Reflexión",
    image: "https://bimalingua.com/wp-content/uploads/2025/03/Mejora-tu-listening-5-1024x576.png",
    content: "Es hora de romper mitos y darle la vuelta a una idea que ha sobrevivido demasiado tiempo: la de que tener acento es negativo. La verdad —y la lingüística lo respalda— es que un acento no solo no es malo, sino que es una riqueza que habla de ti, de tu historia y del mundo en el que vivimos.\n\nMucha gente se obsesiona con conseguir un acento nativo, pero lo más importante a la hora de hablar otro idioma es la inteligibilidad, es decir, que te entiendan correctamente. Tu acento es tu seña de identidad."
  },
  {
    id: 3,
    slug: "como-mudarse-a-miami",
    title: "Razones para mudarte a Miami: cultura, idioma y calidad de vida",
    excerpt: "Miami no es solo un destino vacacional, es una ciudad llena de oportunidades, cultura vibrante y un estilo de vida que enamora. Si alguna vez has pensado en mudarte al extranjero, en este artículo te explico por qué podría ser tu próximo hogar.",
    date: "02 Febrero 2024",
    category: "Viajes",
    image: "https://bimalingua.com/wp-content/uploads/2025/03/Mejora-tu-listening-1-1024x576.png",
    content: "Miami no es solo un destino vacacional, es una ciudad llena de oportunidades, cultura vibrante y un estilo de vida que enamora. Si alguna vez has pensado en mudarte al extranjero, en este artículo te explico cómo mudarte a Miami y por qué podría ser tu próximo hogar.\n\nDesde las hermosas playas de South Beach hasta el ambiente artístico de Wynwood, Miami te ofrece una mezcla perfecta entre lo relajado y lo dinámico. Además, es un punto de encuentro ideal para hispanohablantes que quieren mejorar su inglés en un entorno bilingüe."
  },
  {
    id: 4,
    slug: "lista-definitiva-idioms-examen-cambridge",
    title: "La lista definitiva de Idioms para preparar el Examen de Cambridge",
    excerpt: "Si estás preparando el examen de B2 First o C1 Advanced de Cambridge, sabrás que el uso de expresiones idiomáticas (idioms) es fundamental para demostrar un nivel avanzado. No solo te ayudarán a sonar más natural, sino que subirán tu nota.",
    date: "20 Enero 2024",
    category: "Cambridge",
    image: "https://bimalingua.com/wp-content/uploads/2025/01/Idioms-1-1024x576.png",
    content: "Si estás preparando el examen de B2 First o C1 Advanced de Cambridge, sabrás que el uso de expresiones idiomáticas (idioms) es fundamental para demostrar un nivel avanzado. No solo te ayudarán a sonar más natural, sino que subirán tu nota en el Speaking y Writing.\n\n1. **A blessing in disguise:** Algo bueno que al principio parecía malo.\n2. **Beat around the bush:** Evitar llegar al punto, irse por las ramas.\n3. **Bite the bullet:** Afrontar una situación difícil con valentía.\n4. **Call it a day:** Terminar de hacer algo por hoy."
  }
];

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: '150px 0', textAlign: 'center', minHeight: '80vh', backgroundColor: 'var(--background)' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Artículo no encontrado</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Lo sentimos, no pudimos encontrar el artículo que estabas buscando.</p>
        <Link href="/blog" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>Volver al Blog</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '120px 0 80px', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      <main className="container" style={{ maxWidth: '800px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/blog" style={{ color: 'var(--primary)', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem', fontWeight: 600 }}>
              ← Volver al blog
          </Link>

          <div>
            <span style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 600, display: 'inline-block', marginBottom: '1.5rem' }}>
              {post.category}
            </span>
          </div>
          
          <h1 className="heading" style={{ fontSize: '3rem', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.2 }}>
            {post.title}
          </h1>
          
          <div style={{ color: 'var(--text-tertiary)', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Publicado el {post.date}</span>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '24px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
          </div>

          <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>{paragraph.replace('### ', '')}</h3>
              }
              if (paragraph.match(/^\d\./)) {
                return (
                  <ul key={index} style={{ listStylePosition: 'inside', padding: 0 }}>
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    ))}
                  </ul>
                )
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
          
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '4rem 0' }} />
          
          <div style={{ textAlign: 'center', backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>¿Quieres preparar tu examen de Cambridge con nosotros?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>Únete a Bimalingua y aprueba tu examen a la primera con el método que estabas esperando.</p>
            <Link href="/#contacto" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
              Contactar Ahora
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
