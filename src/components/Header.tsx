"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className="container" style={{ width: '100%' }}>
        <nav className={styles.nav}>
          <div className={styles.brandContainer}>
            <Image src="/assets/logo.png" alt="Bimalingua" width={40} height={40} className={styles.headerLogoIcon} priority />
            <Link href="/" onClick={closeMenu}><div className={styles.logo}>Bimalingua</div></Link>
          </div>
          <ul className={styles.navLinks}>
            <li><Link href="/#metodo">Clases</Link></li>
            <li><Link href="/cambridge">Cambridge</Link></li>
            <li><Link href="/sobre-mi">Sobre mí</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
          <button
            className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú de navegación"
            aria-expanded={menuOpen}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </nav>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          <li><Link href="/#metodo" onClick={closeMenu}>Clases</Link></li>
          <li><Link href="/cambridge" onClick={closeMenu}>Cambridge</Link></li>
          <li><Link href="/sobre-mi" onClick={closeMenu}>Sobre mí</Link></li>
          <li><Link href="/blog" onClick={closeMenu}>Blog</Link></li>
        </ul>
      </div>
    </header>
  );
}
