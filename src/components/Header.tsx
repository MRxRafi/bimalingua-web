import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container" style={{ width: '100%' }}>
        <nav className={styles.nav}>
          <div className={styles.brandContainer}>
            <Image src="/assets/logo.png" alt="Bimalingua" width={40} height={40} className={styles.headerLogoIcon} priority />
            <Link href="/"><div className={styles.logo}>Bimalingua</div></Link>
          </div>
          <ul className={styles.navLinks}>
            <li><Link href="/#metodo">Clases</Link></li>
            <li><Link href="/cambridge">Cambridge</Link></li>
            <li><Link href="/sobre-mi">Sobre mí</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
