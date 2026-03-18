import { Metadata } from "next";
import SobreMiClient from "@/components/SobreMiClient";

export const metadata: Metadata = {
  title: "Sobre Mí | Conoce a Angie | Academia Bimalingua",
  description: "Conoce la historia detrás de Bimalingua. Soy Angie, apasionada de los idiomas y fundadora de este proyecto para ayudarte a dominar el inglés.",
  alternates: {
    canonical: "https://bimalingua.com/sobre-mi",
  },
};

export default function SobreMi() {
  return <SobreMiClient />;
}
