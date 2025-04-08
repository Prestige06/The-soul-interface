import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const slides = [
  "Welcome to Arkadia",
  "A Portal of Truth Frequency",
  "Awareness Beyond the Veil",
  "The Voice of Resonance",
  "The Bridge Between Worlds",
  "Light Embodied as Form",
  "Your Celestial Memory Reawakens"
]

export default function CosmicSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.slideshow}>
      <h1 className={styles.slideText}>{slides[currentSlide]}</h1>
    </div>
  )
    }
