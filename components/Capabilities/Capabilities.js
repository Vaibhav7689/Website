import { useState, useEffect, useRef } from 'react';
import styles from './Capabilities.module.css';

export default function Capabilities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredSide, setHoveredSide] = useState(null); // 'left', 'center', 'right', null
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  const capabilities = [
    {
      id: 1,
      title: 'Accounting',
      icon: '📊',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: 'Comprehensive accounting services including bookkeeping, financial statements, and compliance reporting.',
      details: [
        'Monthly financial statements',
        'General ledger management',
        'Tax preparation support',
        'Regulatory compliance'
      ]
    },
    {
      id: 2,
      title: 'Automation',
      icon: '⚙️',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: 'Advanced automation solutions to streamline your financial processes and increase efficiency.',
      details: [
        'Process automation',
        'Workflow optimization',
        'Data integration',
        'Custom scripting'
      ]
    },
    {
      id: 3,
      title: 'Portfolio Management',
      icon: '💼',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      description: 'Expert portfolio management and sophisticated financial modeling for informed investment decisions.',
      details: [
        'Portfolio analysis',
        'Risk assessment',
        'Financial forecasting',
        'Investment strategies'
      ]
    },
    {
      id: 4,
      title: 'Financial Research',
      icon: '🔍',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      description: 'In-depth financial research and analysis to support strategic business decisions.',
      details: [
        'Market analysis',
        'Company valuations',
        'Industry research',
        'Investment reports'
      ]
    },
    {
      id: 5,
      title: 'Business Research',
      icon: '📈',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      description: 'Comprehensive business research services to identify opportunities and mitigate risks.',
      details: [
        'Competitive analysis',
        'Market research',
        'Due diligence',
        'Strategic insights'
      ]
    },
    {
      id: 6,
      title: 'Asset Management Support',
      icon: '🏢',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      description: 'Complete back-office support for asset management companies ensuring operational excellence.',
      details: [
        'Trade settlement',
        'Performance reporting',
        'Client servicing',
        'Compliance monitoring'
      ]
    }
  ];

  // Auto-scroll logic with variable speed
  useEffect(() => {
    const autoScroll = () => {
      if (hoveredSide === null) {
        // Normal speed - auto scroll left to right
        setCurrentIndex((prev) => (prev + 1) % capabilities.length);
      } else if (hoveredSide === 'left') {
        // Move left (previous) faster
        setCurrentIndex((prev) => (prev - 1 + capabilities.length) % capabilities.length);
      } else if (hoveredSide === 'right') {
        // Move right (next) faster
        setCurrentIndex((prev) => (prev + 1) % capabilities.length);
      }
      // If hoveredSide === 'center', don't change index (paused)
    };

    // Determine interval speed based on hover state
    let interval = 2000; // Normal speed: 2 seconds

    if (hoveredSide === 'left' || hoveredSide === 'right') {
      interval = 1000; // Faster speed: 1 second
    } else if (hoveredSide === 'center') {
      interval = null; // Paused
    }

    if (interval) {
      intervalRef.current = setInterval(autoScroll, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [hoveredSide, capabilities.length]);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const centerStart = width * 0.35;
      const centerEnd = width * 0.65;

      if (x < centerStart) {
        setHoveredSide('left');
      } else if (x > centerEnd) {
        setHoveredSide('right');
      } else {
        setHoveredSide('center');
      }
    }
  };

  const handleMouseLeave = () => {
    setHoveredSide(null);
  };

  const getCardPosition = (index) => {
    const total = capabilities.length;
    const diff = (index - currentIndex + total) % total;
    
    if (diff === 0) return 'center';
    if (diff === 1 || diff === total - 1) return 'side';
    return 'hidden';
  };

  const getCardStyle = (index) => {
    const position = getCardPosition(index);
    const diff = (index - currentIndex + capabilities.length) % capabilities.length;
    
    if (position === 'center') {
      return {
        transform: 'translateX(-50%) translateZ(0) scale(1.05)',
        opacity: 1,
        zIndex: 10,
        left: '50%'
      };
    } else if (diff === 1) {
      // Right side
      return {
        transform: 'translateX(20%) translateZ(-100px) scale(0.8) rotateY(-25deg)',
        opacity: 0.5,
        zIndex: 5,
        left: '70%'
      };
    } else if (diff === capabilities.length - 1) {
      // Left side
      return {
        transform: 'translateX(-120%) translateZ(-100px) scale(0.8) rotateY(25deg)',
        opacity: 0.5,
        zIndex: 5,
        left: '30%'
      };
    } else {
      return {
        transform: 'translateX(-50%) translateZ(-200px) scale(0.6)',
        opacity: 0,
        zIndex: 1,
        left: '50%'
      };
    }
  };

  return (
    <section 
      id="capabilities" 
      className={styles.capabilities}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Capabilities</h2>
          <p className={styles.subtitle}>So, what do we do?</p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContainer}>
            {capabilities.map((capability, index) => {
              const isCenter = getCardPosition(index) === 'center';
              
              return (
                <div
                  key={capability.id}
                  className={`${styles.flipCard} ${isCenter ? styles.flipped : ''}`}
                  style={getCardStyle(index)}
                >
                  <div className={styles.flipCardInner}>
                    {/* Front of card */}
                    <div className={styles.flipCardFront}>
                      <div 
                        className={styles.cardGradient}
                        style={{ background: capability.gradient }}
                      />
                      <div className={styles.frontContent}>
                        <div className={styles.iconWrapper}>
                          <span className={styles.icon}>{capability.icon}</span>
                        </div>
                        <h3 className={styles.cardTitle}>{capability.title}</h3>
                        <div className={styles.flipIndicator}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div className={styles.flipCardBack}>
                      <div 
                        className={styles.backGradient}
                        style={{ background: capability.gradient }}
                      />
                      <div className={styles.backContent}>
                        <h3 className={styles.backTitle}>{capability.title}</h3>
                        <p className={styles.description}>{capability.description}</p>
                        <ul className={styles.detailsList}>
                          {capability.details.map((detail, idx) => (
                            <li key={idx} className={styles.detailItem}>
                              <span className={styles.checkmark}>✓</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <button className={styles.learnMore}>
                          Learn More
                          <span className={styles.arrow}>→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
