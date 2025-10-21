import { useState, useRef } from 'react';
import styles from './Careers.module.css';

export default function Careers() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  };

  return (
    <section 
      id="careers" 
      className={styles.careers}
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      <div 
        className={styles.backgroundImage}
        style={{
          transform: `translate(${(mousePosition.x - 50) * 0.05}px, ${(mousePosition.y - 50) * 0.05}px)`
        }}
      />
      
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Make an Impact<br />
            Join us Today!
          </h2>
          
          <p className={styles.description}>
            At Decipher, we value diversity and believe in equal opportunities for everyone. 
            We focus on continuous learning to help people grow as strategic thinkers. Our 
            training programs are designed to guide everyone toward success and encourage 
            them to contribute to our exciting journey together.
          </p>

          <a href="#openings" className={styles.ctaButton}>
            Current openings
            <span className={styles.arrow}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3l7 7-7 7V3z"/>
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Animated particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}
