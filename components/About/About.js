import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      className={styles.about} 
      ref={sectionRef}
    >
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Why choose Decipher?</h2>
          <p className={styles.subtitle}>Because we take ownership of work!</p>
        </div>

        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <p className={styles.description}>
            Our team of experienced CFAs, CPAs and Post Grads collaborate closely with 
            asset management companies across the United States, providing insightful & 
            accurate financial analysis and support. We fully understand the critical need 
            for timely execution and flexibility in today's fast-paced business environment. 
            As such, we ensure that any and all assigned tasks during your operational hours 
            is completed and delivered before the start of your following workday, thus your 
            operations proceed without interruption.
          </p>
          <p className={styles.description}>
            This approach enables us to integrate seamlessly into your workflow thereby 
            running a ~24-hour workday. Our flexibility allows us to work within all time 
            zones, offering an unmatched level of service and ensuring that your business 
            needs are consistently met without delay.
          </p>
        </div>

        <div className={styles.visionMissionGrid}>
          <div className={`${styles.card} ${styles.visionCard} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M30 15C20 15 12 23 12 33C12 43 20 48 30 48C40 48 48 43 48 33C48 23 40 15 30 15Z" 
                        stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="30" cy="33" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="30" cy="33" r="3" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Vision</h3>
            <div className={styles.cardContent}>
              <p>Transforming financial operations through innovative solutions and dedicated partnership.</p>
            </div>
          </div>

          <div className={`${styles.card} ${styles.missionCard} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M30 10L35 25H50L38 35L43 50L30 40L17 50L22 35L10 25H25L30 10Z" 
                        stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Mission</h3>
            <div className={styles.cardContent}>
              <p>Fostering a collaborative partnership with our clients through consistent focus on 
                 delivering outstanding work with integrity and precision.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
