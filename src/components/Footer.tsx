import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
             <Image src="/assets/logo.png" alt="Bimalingua" width={100} height={100} className={styles.footerLogoIcon} />
             <span className={styles.footerLogoText}>Bimalingua</span>
          </div>
          <p>&copy; 2026 Bimalingua. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
