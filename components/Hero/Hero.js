import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(102, 126, 234, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="home" className={styles.hero} onMouseMove={handleMouseMove}>
      <canvas ref={canvasRef} className={styles.canvas}></canvas>
      
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <h2 className={styles.subtitle}>Let us simplify the</h2>
          <h1 className={styles.title}>
            <span className={styles.letter}>I</span>
            <span className={styles.letter}>N</span>
            <span className={styles.letter}>T</span>
            <span className={styles.letter}>R</span>
            <span className={styles.letter}>I</span>
            <span className={styles.letter}>C</span>
            <span className={styles.letter}>A</span>
            <span className={styles.letter}>C</span>
            <span className={styles.letter}>I</span>
            <span className={styles.letter}>E</span>
            <span className={styles.letter}>S</span>
          </h1>
          <p className={styles.description}>
            Seamless Financial Analysis & Support, Tailored to Your Business Needs.
          </p>
          <a href="#capabilities" className={styles.ctaButton}>
            See What We Do
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}
