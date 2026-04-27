"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blog-data";

const BOLD_REGEX = /\*\*(.*?)\*\*/g;
const ITALIC_REGEX = /_(.*?)_/g;
const LINK_REGEX = /\[([^\]]+)\]\(([^)]+)\)/g;
const NUMBERED_LIST_REGEX = /^\d+\./;
const NUMBERED_LIST_ITEM_REGEX = /^\d+\.\s*/;
const BULLET_LIST_ITEM_REGEX = /^-\s*/;

const toHtml = (text: string) => text
  .replace(BOLD_REGEX, '<strong>$1</strong>')
  .replace(ITALIC_REGEX, '<em>$1</em>')
  .replace(LINK_REGEX, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: var(--primary); text-decoration: underline;">$1</a>');

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <div style={{ padding: '120px 0 80px', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      <main className="container" style={{ maxWidth: '800px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/blog" style={{ color: 'var(--primary)', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem', fontWeight: 600 }}>
            ← Volver al Blog
          </Link>
          
          <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem', display: 'block', marginBottom: '1rem' }}>
            {post.category}
          </span>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            {post.title}
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', color: 'var(--text-tertiary)' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--surface)', overflow: 'hidden' }}>
              <Image src="/assets/angie.png" alt="Angie" width={40} height={40} style={{ objectFit: 'cover' }} />
            </div>
            <span>Angie</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <div style={{ borderRadius: '32px', overflow: 'hidden', marginBottom: '4rem', boxShadow: 'var(--shadow-lg)' }}>
            <Image 
              src={post.image} 
              alt={post.title} 
              width={1200} 
              height={675} 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
              priority 
            />
          </div>

          <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {post.content.split('\n\n').map((paragraph, index) => {
              // H3 headings
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>{paragraph.slice(4)}</h3>;
              }

              const lines = paragraph.split('\n');
              const firstLine = lines[0].trim();

              // Numbered lists
              if (NUMBERED_LIST_REGEX.test(firstLine)) {
                return (
                  <ol key={index} style={{ paddingLeft: '1.5rem' }}>
                    {lines.filter(l => l.trim()).map((item, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: toHtml(item.replace(NUMBERED_LIST_ITEM_REGEX, '')) }} />
                    ))}
                  </ol>
                );
              }
              // Bullet lists (lines starting with "- ")
              if (lines.some(l => l.trim().startsWith('- '))) {
                return (
                  <ul key={index} style={{ paddingLeft: '1.5rem' }}>
                    {lines.filter(l => l.trim()).map((item, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: toHtml(item.replace(BULLET_LIST_ITEM_REGEX, '')) }} />
                    ))}
                  </ul>
                );
              }
              // Regular paragraph with inline bold support
              return <p key={index} dangerouslySetInnerHTML={{ __html: toHtml(paragraph) }} />;
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
