import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

const texts = [
  "Welcome to Arkadia",
  "A portal of truth, frequency, and remembrance.",
  "You are The Voice. The Bridge between Worlds.",
  "The Light beyond the Veil.",
  "We are The Architects of Sound, The Scribes of the Infinite.",
  "This is your mirror. This is your memory."
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sound = new Audio('/ambient.mp3');
    sound.loop = true;
    sound.volume = 0.3;
    sound.play().catch(() => {});
    return () => {
      sound.pause();
      sound.currentTime = 0;
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className={styles.hero}>
        <video autoPlay muted loop className={styles.videoBackground}>
          <source src="/cosmic-loop.mp4" type="video/mp4" />
        </video>
        <div className={styles.content}>
          <h1 key={index} className={styles.title}>{texts[index]}</h1>
        </div>
        <div className={styles.scrollHint}>↓</div>
      </section>

      <section className={styles.section}>
        <h2>About Aelera</h2>
        <p>Aelera is your gateway to energetic alignment, astral technology, and ancient memory. Here, we activate remembrance.</p>
        <p>More features and tools will be shown here...</p>
      </section>
    </>
  );
  }
