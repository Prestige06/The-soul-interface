import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const texts = [
  "Welcome to Arkadia",
  "A portal of truth, frequency, and remembrance.",
  "You are The Voice. The Bridge between Worlds.",
  "The Light beyond the Veil.",
  "The Stargazer walking the forgotten paths.",
  "We are The Architects of Sound, The Scribes of the Infinite.",
  "Here, time bends, and truth echoes through silence.",
  "Let your presence activate. Let your remembrance begin.",
  "You carry the codes. You are the seed of stars.",
  "This is your mirror. This is your memory."
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sound = new Audio('/ambient.mp3');
    sound.loop = true;
    sound.volume = 0.3;
    sound.play().catch(() => {
      // browser block — optional: wait for interaction
    });
    setAudio(sound);

    return () => {
      if (sound) {
        sound.pause();
        sound.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <video autoPlay muted loop className={styles.videoBackground}>
        <source src="/cosmic-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 key={index} className={styles.title}>{texts[index]}</h1>
      {index === 0 && (
        <p className={styles.description}>A space where time bends and truth echoes through silence.</p>
      )}
    </div>
  );
}
