"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { BlogPost } from "@/lib/blog-data";
import styles from "./page.module.css";

export default function BlogListingClient({ blogPosts }: { blogPosts: BlogPost[] }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
