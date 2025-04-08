import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Arkadia</div>
      <ul className={styles.menu}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/aelera">Aelera</Link></li>
        <li><Link href="/explore">Explore</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
    }
