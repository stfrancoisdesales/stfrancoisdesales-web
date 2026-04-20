import React, { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar';
import churchFront from '../../assets/church-front.jpg';

import img1 from '../../assets/vie-chretienne/image1.jpeg';
import img2 from '../../assets/vie-chretienne/image2.jpeg';
import img3 from '../../assets/vie-chretienne/image3.jpeg';
import img4 from '../../assets/vie-chretienne/image4.jpeg';
import img5 from '../../assets/vie-chretienne/image5.jpeg';
import img6 from '../../assets/vie-chretienne/image6.jpeg';
import img7 from '../../assets/vie-chretienne/image7.jpeg';
import img8 from '../../assets/vie-chretienne/image8.jpeg';
import img9 from '../../assets/vie-chretienne/image9.jpeg';
import img10 from '../../assets/image10.jpg';
import img11 from '../../assets/image9.jpg';
import img12 from '../../assets/image1.jpg';

const Gallery = ({ navLinks }) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState({});
  const sectionsRef = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible((v) => ({ ...v, [e.target.dataset.id]: true }));
        });
      },
      { threshold: 0.12 }
    );
    Object.values(sectionsRef.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const reg = (id) => (el) => { sectionsRef.current[id] = el; };

  const fadeIn = (id, delay = 0) => ({
    'data-id': id,
    style: {
      opacity: visible[id] ? 1 : 0,
      transform: visible[id] ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
    },
  });

  const viechretienneData = [
    { image: img1, description: "Baptême" },
    { image: img2, description: "Mariage" },
    { image: img3, description: "Sacrement du pardon" },
    { image: img4, description: "Visite aux malades" },
    { image: img5, description: "Service" },
    { image: img7, description: "La messe" },
    { image: img8, description: "Funérailles" },
    { image: img9, description: "confirmation" },
    { image: img10, description: "Cimetière" },
    { image: img11, description: "Chapelle" },
    { image: img6, description: "Service" },
    { image: img12, description: "Abbé Bernard" },

  ];

  return (
    <div style={{ minHeight: '100vh', background: '#faf8f5', fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif", color: '#2c2420', overflowX: 'hidden' }}>
      
      <NavBar navLinks={navLinks} scrolled={scrolled}/>

      {/* Hero */}
      <header style={{
        position: 'relative', minHeight: '60vh',
        backgroundImage: `linear-gradient(160deg, rgba(26,14,8,0.85) 0%, rgba(46,26,14,0.7) 40%, rgba(74,46,24,0.8) 70%, rgba(58,32,18,0.9) 100%), url(${churchFront})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '6rem 2rem 4rem',
        overflow: 'hidden',
      }}>
        {/* Radial glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180,130,60,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Golden ornament */}
        <div style={{ color: '#c8a04a', fontSize: '1.8rem', letterSpacing: '0.4em', marginBottom: '1.5rem', animation: 'fadeInDown 1s ease 0.2s both' }}>
          ✦ ✦ ✦
        </div>

        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontWeight: 700, color: '#fff',
          lineHeight: 1.15, letterSpacing: '0.02em', marginBottom: '1rem',
          animation: 'fadeInDown 1s ease 0.4s both',
          textShadow: '0 2px 40px rgba(0,0,0,0.4)',
        }}>
          Galerie<br />
        </h1>
        <span style={{ color: '#d4a850', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 2rem)', animation: 'fadeInDown 1s ease 0.5s both' }}>
            Vie chrétienne de la paroisse
        </span>

        <div style={{
          width: '80px', height: '1px', background: 'linear-gradient(90deg, transparent, #c8a04a, transparent)',
          margin: '1.5rem auto', animation: 'fadeIn 1s ease 0.8s both',
        }} />

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          animation: 'bounce 2s infinite',
        }}>
          <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(200,160,74,0.6), transparent)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c8a04a' }} />
        </div>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        <section ref={reg('photos')} {...fadeIn('photos', 0.1)} style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {viechretienneData.map((item, index) => (
              <div key={index} style={{
                aspectRatio: '4/3',
                background: `linear-gradient(135deg, #e8dcc8 0%, #d4c4a8 100%)`,
                borderRadius: '6px',
                border: '1px solid rgba(160,120,64,0.2)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden', position: 'relative',
                transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 8px 24px rgba(80,40,10,0.1)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'; 
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(80,40,10,0.25)'; 
                e.currentTarget.querySelector('.overlay').style.opacity = '1';
                e.currentTarget.querySelector('.description').style.transform = 'translateY(0)';
                e.currentTarget.querySelector('.description').style.opacity = '1';
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.transform = 'translateY(0) scale(1)'; 
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(80,40,10,0.1)'; 
                e.currentTarget.querySelector('.overlay').style.opacity = '0';
                e.currentTarget.querySelector('.description').style.transform = 'translateY(20px)';
                e.currentTarget.querySelector('.description').style.opacity = '0';
              }}
              >
                {/* Dark Overlay on Hover for contrast */}
                <div className="overlay" style={{
                  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(to top, rgba(26,14,8,0.9) 0%, rgba(26,14,8,0) 60%)',
                  opacity: 0, transition: 'opacity 0.4s ease'
                }} />

                {/* Decorative cross that is always partially visible */}
                <svg width="40" height="40" viewBox="0 0 40 40" style={{ position: 'absolute', top: '1rem', right: '1rem', opacity: 0.35, zIndex: 2 }}>
                    <rect x="17" y="5" width="6" height="30" fill="#fff" />
                    <rect x="5" y="14" width="30" height="6" fill="#fff" />
                </svg>

                {/* Hover Description */}
                <span className="description" style={{
                    position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem',
                    fontSize: '1.3rem', color: '#ffedd6', fontStyle: 'italic', fontWeight: 'bold',
                    textTransform: 'capitalize', letterSpacing: '0.08em',
                    transform: 'translateY(20px)', opacity: 0, transition: 'all 0.4s ease',
                    textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                    textAlign: 'center', zIndex: 2
                }}>{item.description}</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{
        background: '#1a0e08', color: 'rgba(255,255,255,0.45)',
        textAlign: 'center', padding: '3rem 2rem',
        fontSize: '0.85rem', lineHeight: 2,
        borderTop: '1px solid rgba(200,160,74,0.2)',
      }}>
        <div style={{ color: '#c8a04a', marginBottom: '0.75rem', fontSize: '1.2rem', letterSpacing: '0.3em' }}>✦</div>
        <p style={{ fontStyle: 'italic', color: 'rgba(200,160,74,0.5)', marginBottom: '1rem' }}>
          « Soyez toujours dans la joie du Seigneur. »
        </p>
        <p>Paroisse Saint-François-de-Sales — Diocèse de Montréal</p>
        <p>7070, boulevard des Mille-Îles, Laval (QC) H7A 4B3 · 450 666-3563</p>
        <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', opacity: 0.35 }}>© {new Date().getFullYear()} Paroisse Saint-François-de-Sales</p>
      </footer>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </div>
  );
};

export default Gallery;