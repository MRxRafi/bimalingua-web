import HomeClient from "@/components/HomeClient";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bimalingua",
    "url": "https://bimalingua.com",
    "logo": "https://bimalingua.com/assets/logo.png",
    "description": "Academia de inglés online especializada en certificaciones de Cambridge. Clases personalizadas con Angie.",
    "founder": {
      "@type": "Person",
      "name": "Angie"
    },
    "sameAs": [
      "https://www.instagram.com/bimalingua/"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
