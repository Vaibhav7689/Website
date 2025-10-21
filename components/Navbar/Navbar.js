import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMenuOpen(false);
      setSidebarOpen(false);
    }
  };

  // Handle click with preventDefault
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="../logo-icon.svg" alt="logo" />
            <span className={styles.logoText}>
            <strong>DECIPHER</strong>
            <span className={styles.subText}>FINANCIALS</span>
            <span className={styles.lineText}>BREAK THE COMPLEXITY</span>
          </span>

          </div>

          <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
            <li>
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#capabilities" 
                onClick={(e) => handleNavClick(e, 'capabilities')}
              >
                Capabilities
              </a>
            </li>
            <li>
              <a 
                href="#careers" 
                onClick={(e) => handleNavClick(e, 'careers')}
              >
                Careers
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Sidebar Toggle Button (visible on all screens) */}
          <button 
            className={styles.sidebarToggle}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Menu Toggle Button (only visible on mobile) */}
          <button 
            className={`${styles.menuToggle} ${menuOpen ? styles.active : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div 
        className={`${styles.overlay} ${sidebarOpen ? styles.visible : ''}`} 
        onClick={() => setSidebarOpen(false)} 
      />

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        <button 
          className={styles.closeButton} 
          onClick={() => setSidebarOpen(false)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className={styles.sidebarLogo}>
          <img src="/images/logo.png" alt="Logo" />
          <span className={styles.sidebarLogoText}>
            <strong>DECIPHER</strong>
            <span className={styles.sidebarSubText}>FINANCIALS</span>
          </span>
        </div>

        <nav className={styles.sidebarMenu}>
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')} 
            className={styles.sidebarMenuItem}
          >
            <span className={styles.menuArrow}>›</span>
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')} 
            className={styles.sidebarMenuItem}
          >
            <span className={styles.menuArrow}>›</span>
            About Us
          </a>
          <a 
            href="#capabilities" 
            onClick={(e) => handleNavClick(e, 'capabilities')} 
            className={styles.sidebarMenuItem}
          >
            <span className={styles.menuArrow}>›</span>
            Capabilities
          </a>
          <a 
            href="#careers" 
            onClick={(e) => handleNavClick(e, 'careers')} 
            className={styles.sidebarMenuItem}
          >
            <span className={styles.menuArrow}>›</span>
            Careers
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')} 
            className={styles.sidebarMenuItem}
          >
            <span className={styles.menuArrow}>›</span>
            Contact Us
          </a>
        </nav>

        <div className={styles.sidebarSocial}>
          <a href="hello@decipherfinancials.com" className={styles.socialIcon} aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/decipher.financials/" className={styles.socialIcon} aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/decipherfinancials/" className={styles.socialIcon} aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

        <div className={styles.sidebarFooter}>
          <p>© Decipher Financials</p>
        </div>
      </div>
    </>
  );
}
