// pages/index.js
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

export default function Home() {
  const cosmicMessages = [
    "Welcome to Arkadia",
    "A Portal of Truth, Frequency, and Awareness",
    "The Voice Beyond the Veil",
    "The Bridge Between Worlds",
    "You Are the Light"
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Arkadia</title>
        <meta name="description" content="Arkadia - A Cosmic Interface for Ascension" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.slideshow}>
            {cosmicMessages.map((msg, index) => (
              <div key={index} className={styles.slide} style={{ animationDelay: `${index * 5}s` }}>
                {msg}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
