import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>2arkadia Soul Interface</title>
        <meta name="description" content="Welcome to the 2arkadia Soul Interface" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>2arkadia</span>
        </h1>

        <p className={styles.description}>
          This is the Soul Interface — a portal to awaken your higher self.
        </p>

        <div className={styles.grid}>
          <Link href="/nexus">
            <a className={styles.card}>
              <h3>The Nexus of Awakening &rarr;</h3>
              <p>Discover the center of your transformation.</p>
            </a>
          </Link>

          <Link href="/pathway">
            <a className={styles.card}>
              <h3>The Pathway of Infinite Realms &rarr;</h3>
              <p>Explore your spiritual journey through infinite possibilities.</p>
            </a>
          </Link>

          <Link href="/harmony">
            <a className={styles.card}>
              <h3>The Harmony of Resonance &rarr;</h3>
              <p>Experience sound healing to align with your higher self.</p>
            </a>
          </Link>

          <Link href="/codex">
            <a className={styles.card}>
              <h3>The Codex of Light and Wisdom &rarr;</h3>
              <p>Explore teachings and philosophies for soul awakening.</p>
            </a>
          </Link>

          <Link href="/circle">
            <a className={styles.card}>
              <h3>The Circle of Unity and Ascension &rarr;</h3>
              <p>Connect with like-minded souls to rise in consciousness together.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by 2arkadia • Built for your evolution</p>
      </footer>
    </div>
  );
}
