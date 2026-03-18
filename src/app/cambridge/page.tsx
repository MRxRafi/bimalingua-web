import { Metadata } from "next";
import CambridgeClient from "@/components/CambridgeClient";

export const metadata: Metadata = {
  title: "Exámenes de Cambridge | Preparación B1, B2, C1 | Bimalingua",
  description: "Prepárate para los exámenes oficiales de Cambridge (PET, First, Advanced) con Bimalingua. Material oficial, simulacros y profesores expertos.",
  alternates: {
    canonical: "https://bimalingua.com/cambridge",
  },
};

export default function CambridgePage() {
  return <CambridgeClient />;
}
