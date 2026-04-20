import React, { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar';
import churchFront from '../../assets/church-front.jpg';

const ChurchHomePage = ({ navLinks }) => {
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

  const scheduleData = [
    { day: 'Mardi au vendredi', time: '09 h 00', highlight: false },
    { day: '1er vendredi du mois', time: '19 h 30', highlight: false },
    { day: 'Samedi', time: '17 h 00', highlight: false },
    { day: 'Dimanche', time: '10 h 00', highlight: true },
  ];

  const adorationData = [
    { day: 'Jeudi (après la messe)', time: '09 h 30 – 10 h 00' },
    { day: '1er vendredi du mois', time: '19 h 00' },
  ];

  const viechretienneData = [
    { image: "../assets/vie-chretienne/image1.jpeg", description: "bapteme" },
    { image: "../assets/vie-chretienne/image2.jpeg", description: "marriage" },
    { image: "../assets/vie-chretienne/image3.jpeg", description: "pardon" },
    { image: "../assets/vie-chretienne/image4.jpeg", description: "communion" },
    { image: "../assets/vie-chretienne/image5.jpeg", description: "confirmation" },
    { image: "../assets/vie-chretienne/image6.jpeg", description: "confirmation" },
    { image: "../assets/vie-chretienne/image7.jpeg", description: "confirmation" },
    { image: "../assets/vie-chretienne/image8.jpeg", description: "funérailles" },
    { image: "../assets/vie-chretienne/image9.jpeg", description: "confirmation" },
  ]


  return (
    <div style={{ minHeight: '100vh', background: '#faf8f5', fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif", color: '#2c2420', overflowX: 'hidden' }}>

      <NavBar navLinks={navLinks} scrolled={scrolled} />

      {/* Hero */}
      <header style={{
        position: 'relative', minHeight: '100vh',
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
          Paroisse<br />
          <span style={{ color: '#d4a850', fontStyle: 'italic' }}>Saint-François-de-Sales</span>
        </h1>

        <div style={{
          width: '80px', height: '1px', background: 'linear-gradient(90deg, transparent, #c8a04a, transparent)',
          margin: '1.5rem auto', animation: 'fadeIn 1s ease 0.8s both',
        }} />

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontStyle: 'italic',
          color: 'rgba(212,168,80,0.9)', maxWidth: '620px', lineHeight: 1.8,
          animation: 'fadeInDown 1s ease 1s both',
        }}>
          « Seigneur, ta Parole est la lumière de mes pas,<br />la lampe de ma route. »
        </p>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.5rem', letterSpacing: '0.15em', animation: 'fadeIn 1s ease 1.3s both' }}>
          PS 118, 105
        </p>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          animation: 'bounce 2s infinite',
        }}>
          <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(200,160,74,0.6), transparent)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c8a04a' }} />
        </div>

        {/* Image credit */}
        <div style={{
          position: 'absolute', bottom: '1rem', right: '1rem',
          fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.4)',
          letterSpacing: '0.05em', animation: 'fadeIn 1s ease 1.3s both'
        }}>
          Photo : TourismeLaval.com
        </div>
      </header>

      <main style={{ maxWidth: '1080px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        {/* Welcome section */}
        <section
          ref={reg('welcome')}
          {...fadeIn('welcome', 0)}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#a07840', marginBottom: '1rem' }}>
            Bienvenue
          </p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#2c1a08', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Une communauté de foi<br />vieille de plus de trois siècles
          </h2>
          <div style={{ width: '48px', height: '2px', background: '#c8a04a', margin: '0 auto 2rem' }} />
          <p style={{ maxWidth: '640px', margin: '0 auto 1.2rem', fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520' }}>
            Il y a trois siècles, nos pères et mères dans la foi se rassemblaient déjà, sous le patronage de{' '}
            <em style={{ color: '#6b4020' }}>saint François de Sales</em>, pour célébrer les événements de leur vie à la lumière de l'Évangile.
          </p>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520' }}>
            C'est cette même lumière qui, depuis près de{' '}
            <strong style={{ color: '#6b4020', fontWeight: 700 }}>trois cent vingt-cinq ans</strong>,
            guide encore notre communauté chrétienne.
          </p>
        </section>

        {/* Actualités */}
        <section
          ref={reg('news')}
          {...fadeIn('news', 0.1)}
          style={{ marginBottom: '5rem' }}
        >
          <div style={{
            border: '1px solid rgba(160,120,64,0.25)',
            borderRadius: '2px',
            background: '#fff9f2',
            padding: '3rem 2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Corner ornaments */}
            {['topleft', 'topright', 'bottomleft', 'bottomright'].map((pos) => (
              <span key={pos} style={{
                position: 'absolute',
                fontSize: '1.2rem', color: '#c8a04a', opacity: 0.5,
                top: pos.startsWith('top') ? '0.8rem' : 'auto',
                bottom: pos.startsWith('bottom') ? '0.8rem' : 'auto',
                left: pos.endsWith('left') ? '1rem' : 'auto',
                right: pos.endsWith('right') ? '1rem' : 'auto',
              }}>✦</span>
            ))}
            <h2 style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, color: '#3a2010', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>
              Actualités &amp; Événements
            </h2>
            <p style={{ textAlign: 'center', color: '#a07840', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2rem' }}>
              Annonces paroissiales
            </p>
            <div className="announcement-container" style={{
              textAlign: 'left',
              border: '1px solid rgba(160,120,64,0.15)',
              borderRadius: '4px',
              padding: '2.5rem',
              background: '#fff',
              boxShadow: '0 4px 20px rgba(80,40,10,0.04)',
              position: 'relative',
            }}>
              {/* Add image to go with the announcement on the left src/assets/images/concert.jpg */}
              <img src="assets/pub/publicité.png" alt="Concert" className="announcement-image" />
              <div className="announcement-content">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#3a2010', marginBottom: '0.8rem', lineHeight: 1.4, textAlign: 'center' }}>
                  Concert de l'Harmonie à vent des finissants du Collège Laval
                </h3>
                <p style={{ color: '#6b4020', fontSize: '0.95rem', marginBottom: '1.5rem', fontStyle: 'italic', textAlign: 'center' }}>
                  Sous la direction de Mme Vanessa Coderre
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.8rem', fontSize: '1rem', color: '#4a3520', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <strong style={{ color: '#a07030' }}>Quand :</strong>
                    <span>Vendredi le 24 avril 2026 à 19 h 30</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <strong style={{ color: '#a07030' }}>Où :</strong>
                    <span>Église Saint-François-de-Sales</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <strong style={{ color: '#a07030' }}>Prix :</strong>
                    <span style={{ textDecoration: 'underline' }}>Contribution volontaire</span>
                  </div>
                </div>

                <p style={{ color: '#a07840', fontSize: '1.05rem', fontWeight: 600, textAlign: 'center', marginBottom: '1.8rem' }}>
                  Nous vous attendons en grand nombre !
                </p>

                <div style={{
                  background: 'rgba(200,160,74,0.06)',
                  padding: '1.2rem',
                  borderRadius: '4px',
                  borderLeft: '4px solid #c8a04a',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  color: '#5a3d24'
                }}>
                  <strong>N.B.</strong> Les contributions seront partagées entre le comité social de la paroisse et la Fondation du Collège Laval qui fournit des bourses d'études pour des élèves.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule + Contact grid */}
        <section
          ref={reg('info')}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}
        >
          {/* Horaires */}
          <div
            {...fadeIn('info', 0)}
            style={{
              background: '#fff',
              border: '1px solid rgba(160,120,64,0.18)',
              borderRadius: '2px',
              padding: '2.5rem',
              boxShadow: '0 2px 24px rgba(80,40,10,0.06)',
            }}
          >
            <SectionLabel>Horaires des messes</SectionLabel>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
              <tbody>
                {scheduleData.map(({ day, time, highlight }) => (
                  <tr key={day} style={{
                    background: highlight ? 'rgba(200,160,74,0.08)' : 'transparent',
                    borderBottom: '1px solid rgba(160,120,64,0.1)',
                  }}>
                    <td style={{ padding: '0.75rem 0.5rem 0.75rem 0', fontSize: '0.95rem', color: highlight ? '#6b4020' : '#4a3520', fontWeight: highlight ? 700 : 400 }}>{day}</td>
                    <td style={{ padding: '0.75rem 0 0.75rem 0.5rem', textAlign: 'right', fontWeight: 700, fontSize: '0.95rem', color: highlight ? '#a07030' : '#2c1a08', letterSpacing: '0.05em' }}>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <SectionLabel>Adoration au Saint-Sacrement</SectionLabel>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
              <tbody>
                {adorationData.map(({ day, time }) => (
                  <tr key={day} style={{ borderBottom: '1px solid rgba(160,120,64,0.1)' }}>
                    <td style={{ padding: '0.75rem 0.5rem 0.75rem 0', fontSize: '0.95rem', color: '#4a3520' }}>{day}</td>
                    <td style={{ padding: '0.75rem 0 0.75rem 0.5rem', textAlign: 'right', fontWeight: 700, fontSize: '0.95rem', color: '#2c1a08', letterSpacing: '0.05em' }}>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <SectionLabel>Sacrement du Pardon</SectionLabel>
            <p style={{ fontSize: '0.95rem', color: '#4a3520', lineHeight: 1.8 }}>
              Dimanche avant les messes.<br />
              N'importe quand sur rendez-vous.
            </p>
          </div>

          {/* Coordonnées */}
          <div
            {...fadeIn('info', 0.15)}
            style={{
              background: '#fff',
              border: '1px solid rgba(160,120,64,0.18)',
              borderRadius: '2px',
              padding: '2.5rem',
              boxShadow: '0 2px 24px rgba(80,40,10,0.06)',
            }}
          >
            <SectionLabel>Nos coordonnées</SectionLabel>

            <div style={{ marginBottom: '2rem', lineHeight: 1.9, fontSize: '0.95rem', color: '#4a3520' }}>
              <ContactRow label="Adresse">7070, boulevard des Mille-Îles<br />Laval (QC) H7A 4B3</ContactRow>
              <ContactRow label="Téléphone">450 666-3563</ContactRow>
              <ContactRow label="Télécopieur">450 666-2761</ContactRow>
              <ContactRow label="Courriel">
                <a href="mailto:stfrancoisdesales@videotron.ca" style={{ color: '#a07030', textDecoration: 'none', fontSize: '0.88rem' }}>
                  stfrancoisdesales@videotron.ca
                </a>
              </ContactRow>
              <ContactRow label="Diocèse">Montréal</ContactRow>
            </div>

            <SectionLabel>Heures d'ouverture du bureau</SectionLabel>

            <div style={{
              background: '#faf6ee', border: '1px solid rgba(160,120,64,0.15)',
              borderRadius: '2px', padding: '1rem 1.25rem', marginBottom: '1.5rem',
              fontSize: '0.88rem', color: '#6b4c2a', lineHeight: 1.8,
            }}>
              <strong>Abbé Bernard Kanayoge</strong>, prêtre administrateur<br />
              <strong>Mme Diane Imbeault</strong>, secrétaire
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(160,120,64,0.1)' }}>
                  <td style={{ padding: '0.75rem 0', fontSize: '0.9rem', color: '#4a3520', fontWeight: 700 }}>Lundi au jeudi</td>
                  <td style={{ padding: '0.75rem 0', textAlign: 'right', fontSize: '0.88rem', color: '#4a3520', lineHeight: 1.7 }}>9 h 30 – 12 h 00<br />13 h 30 – 16 h 00</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem 0', fontSize: '0.9rem', color: '#4a3520', fontWeight: 700 }}>Vendredi</td>
                  <td style={{ padding: '0.75rem 0', textAlign: 'right', fontSize: '0.88rem', color: '#4a3520', lineHeight: 1.7 }}>
                    9 h 30 – 12 h 00<br />
                    <em style={{ color: '#b05030', fontSize: '0.82rem' }}>Fermé en après-midi</em>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Semainier CTA */}
        <section
          ref={reg('cta')}
          {...fadeIn('cta', 0)}
          style={{
            marginBottom: '5rem', textAlign: 'center',
            padding: '4.5rem 2rem',
            background: 'linear-gradient(135deg, #2a1608 0%, #3d2210 50%, #2a1608 100%)',
            borderRadius: '2px',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.06,
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '12px 12px',
            pointerEvents: 'none',
          }} />
          <p style={{ color: '#c8a04a', fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            À consulter chaque semaine
          </p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem', lineHeight: 1.3 }}>
            Semainier Paroissial
          </h2>
          <p style={{ color: 'rgba(212,168,80,0.75)', fontSize: '1rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            Restez informés de la vie de notre église<br />et consultez les dernières annonces.
          </p>
          <a href="https://semainierparoissial.com/semainiers/193.pdf"
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'inline-block',
              padding: '0.85rem 2.5rem',
              background: 'transparent',
              border: '1px solid rgba(200,160,74,0.6)',
              color: '#c8a04a',
              textDecoration: 'none',
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              fontFamily: "'Palatino Linotype', serif",
            }}
            onMouseEnter={(e) => { e.target.style.background = 'rgba(200,160,74,0.12)'; e.target.style.borderColor = '#c8a04a'; }}
            onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'rgba(200,160,74,0.6)'; }}
          >
            Consulter le semainier
          </a>
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
        .announcement-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
        }
        .announcement-image {
          width: 100%;
          max-width: 400px;
          border-radius: 4px;
          object-fit: cover;
        }
        .announcement-content {
          flex: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .announcement-container {
            flex-direction: row;
            align-items: stretch;
            gap: 2.5rem;
          }
          .announcement-image {
            flex: 0 0 35%;
            max-width: 35%;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

const SectionLabel = ({ children }) => (
  <h3 style={{
    fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase',
    color: '#a07840', marginBottom: '1rem', paddingBottom: '0.5rem',
    borderBottom: '1px solid rgba(160,120,64,0.2)',
    fontFamily: 'Garamond, Georgia, serif', fontWeight: 400,
  }}>
    {children}
  </h3>
);

const ContactRow = ({ label, children }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '5rem 1fr', gap: '0.5rem', padding: '0.4rem 0', borderBottom: '1px solid rgba(160,120,64,0.08)', alignItems: 'start' }}>
    <span style={{ fontSize: '0.8rem', color: '#a07840', textTransform: 'uppercase', letterSpacing: '0.1em', paddingTop: '0.1rem' }}>{label}</span>
    <span style={{ fontSize: '0.95rem', color: '#3a2010', justifySelf: "end" }}>{children}</span>
  </div>
);

export default ChurchHomePage;
