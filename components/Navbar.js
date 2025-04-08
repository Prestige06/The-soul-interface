// components/Navbar.js
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Arkadia</div>
      <ul className={styles.menu}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/explore">Explore</Link></li>
        <li><Link href="/music">Resonance</Link></li>
        <li><Link href="/library">Codex</Link></li>
        <li><Link href="/connect">Unity</Link></li>
      </ul>
    </nav>
  );
}
