import { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";
import BlogListingClient from "@/components/BlogListingClient";

export const metadata: Metadata = {
  title: "Blog | Consejos para Aprender Inglés | Bimalingua",
  description: "Descubre los mejores consejos, técnicas de estudio y recursos para aprobar tus exámenes de Cambridge y mejorar tu inglés con Bimalingua.",
  alternates: {
    canonical: "https://bimalingua.com/blog",
  },
  openGraph: {
    title: "Blog | Consejos para Aprender Inglés | Bimalingua",
    description: "Descubre los mejores consejos, técnicas de estudio y recursos para aprobar tus exámenes de Cambridge.",
    url: "https://bimalingua.com/blog",
    siteName: "Bimalingua",
    images: [
      {
        url: "/assets/angie.png",
        width: 1200,
        height: 630,
        alt: "Blog Bimalingua",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function Blog() {
  return <BlogListingClient blogPosts={blogPosts} />;
}
