import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    captcha: ''
  });

  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.subtitle}>Let's Experience Excellence!</p>
        </div>

        <div className={styles.contentGrid}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={`${styles.formGroup} ${focused.name ? styles.focused : ''}`}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused({...focused, name: true})}
                  onBlur={() => setFocused({...focused, name: false})}
                  required
                />
                <label>Full Name*</label>
                <span className={styles.bar}></span>
              </div>

              <div className={`${styles.formGroup} ${focused.phone ? styles.focused : ''}`}>
                <div className={styles.phoneGroup}>
                  <span className={styles.countryCode}></span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused({...focused, phone: true})}
                    onBlur={() => setFocused({...focused, phone: false})}
                    required
                  />
                </div>
                <label>Phone*</label>
                <span className={styles.bar}></span>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={`${styles.formGroup} ${focused.email ? styles.focused : ''}`}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused({...focused, email: true})}
                  onBlur={() => setFocused({...focused, email: false})}
                  required
                />
                <label>Email*</label>
                <span className={styles.bar}></span>
              </div>

              <div className={`${styles.formGroup} ${focused.message ? styles.focused : ''}`}>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused({...focused, message: true})}
                  onBlur={() => setFocused({...focused, message: false})}
                />
                <label>Message</label>
                <span className={styles.bar}></span>
              </div>
            </div>

            <div className={styles.captchaRow}>
              <div className={`${styles.formGroup} ${styles.captchaGroup}`}>
                <label className={styles.captchaLabel}></label>
                <span className={styles.equation}>0 - 3 = ?</span>
                <input
                  type="text"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                  className={styles.captchaInput}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                <span>Submit</span>
                <div className={styles.buttonRipple}></div>
              </button>
            </div>
          </form>

          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Reach Us</h3>
            <div className={styles.infoContent}>
              <p className={styles.address}>
                Golf View Towers, Tower B, 4th Floor,<br />
                Golf Course Road, Sector 42, Gurugram,<br />
                Haryana – 122002
              </p>

              <a href="https://www.google.com/maps/place/Smartworks+Golf+View+Towers/@28.4569391,77.0983549,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1960a73c4b73:0xeb5fd926a85a5ca!8m2!3d28.4569391!4d77.0983549!16s%2Fg%2F11srgh49ss?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D" className={styles.directionLink}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2C6.69 2 4 4.69 4 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.31-2.69-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Get Direction
              </a>

              <div className={styles.socialLinks}>
                <a href="hello@decipherfinancials.com" className={styles.socialIcon} aria-label="Email">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/decipher.financials/" className={styles.socialIcon} aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/decipherfinancials/" className={styles.socialIcon} aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
