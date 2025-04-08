// components/Navbar.js
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Arkadia</div>
      <ul className={styles.menu}>
        <li>
          <Link href="/">
            <span>Home</span>
            <small>The Nexus of Awakening</small>
          </Link>
        </li>
        <li>
          <Link href="/explore">
            <span>Explore</span>
            <small>The Pathway of Infinite Realms</small>
          </Link>
        </li>
        <li>
          <Link href="/music">
            <span>Music</span>
            <small>The Harmony of Resonance</small>
          </Link>
        </li>
        <li>
          <Link href="/library">
            <span>Library</span>
            <small>The Codex of Light and Wisdom</small>
          </Link>
        </li>
        <li>
          <Link href="/connect">
            <span>Connect</span>
            <small>The Circle of Unity and Ascension</small>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
