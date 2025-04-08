import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Arkadia</div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/explore">Explore</Link></li>
        <li><Link href="/music">Music</Link></li>
        <li><Link href="/library">Library</Link></li>
        <li><Link href="/connect">Connect</Link></li>
      </ul>
    </nav>
  )
    }
