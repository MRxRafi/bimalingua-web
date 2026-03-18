import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import BlogPostClient from "@/components/BlogPostClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artículo no encontrado | Bimalingua",
    };
  }

  const url = `https://bimalingua.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Blog Bimalingua`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      siteName: "Bimalingua",
      images: [
        {
          url: post.image.startsWith('http') ? post.image : `https://bimalingua.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "es_ES",
      type: "article",
      publishedTime: post.date, // Note: post.date is a string like "10 Abril 2024", ideally should be ISO
      authors: ["Angie"],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image.startsWith('http') ? post.image : `https://bimalingua.com${post.image}`],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image.startsWith('http') ? post.image : `https://bimalingua.com${post.image}`,
    "datePublished": "2024-01-01", // Placeholder, since we only have "10 Abril 2024"
    "author": {
      "@type": "Person",
      "name": "Angie",
      "url": "https://bimalingua.com/sobre-mi"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bimalingua",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bimalingua.com/assets/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@id": `https://bimalingua.com/blog/${post.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
