import React, { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar';
import churchFront from '../../assets/church-front.jpg';

const Cimetiere = ({ navLinks }) => {
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

  const tarifs = [
    {
      prix: '1 750 $',
      description: 'Terrain pour 2 cercueils et 6 urnes, sans monument',
      note: '+ 50 $/an frais d\'entretien',
    },
    {
      prix: 'À partir de 2 800 $',
      description: 'Terrain pour 2 cercueils et 6 urnes avec base et façade de monument',
      note: 'Gravure du monument à vos frais · + 50 $/an frais d\'entretien',
    },
    {
      prix: '2 400 $',
      description: 'Terrain pour 8 urnes avec base et façade de monument',
      note: 'Gravure du monument à vos frais · + 50 $/an frais d\'entretien',
    },
    {
      prix: '1 650 $ – 1 950 $',
      description: 'Columbarium extérieur pour 2 urnes',
      note: 'Gravure incluse pour 35 ans',
    },
    {
      prix: '750 $',
      description: 'Columbarium extérieur tube — par urne',
      note: 'Gravure sur le monument communautaire incluse',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#faf8f5', fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif", color: '#2c2420', overflowX: 'hidden' }}>

      <NavBar navLinks={navLinks} scrolled={scrolled} />

      {/* Hero */}
      <header style={{
        position: 'relative', minHeight: '60vh',
        backgroundImage: `linear-gradient(160deg, rgba(20,12,6,0.88) 0%, rgba(40,22,10,0.75) 50%, rgba(58,32,18,0.9) 100%), url(${churchFront})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '8rem 2rem 4rem',
      }}>
        <div style={{ color: '#c8a04a', fontSize: '1.8rem', letterSpacing: '0.4em', marginBottom: '1.5rem', animation: 'fadeInDown 1s ease 0.2s both' }}>
          ✦ ✦ ✦
        </div>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 700, color: '#fff',
          lineHeight: 1.2, letterSpacing: '0.02em', marginBottom: '1rem',
          animation: 'fadeInDown 1s ease 0.4s both',
          textShadow: '0 2px 40px rgba(0,0,0,0.5)',
        }}>
          Cimetière<br />
          <span style={{ color: '#d4a850', fontStyle: 'italic' }}>Saint-François-de-Sales</span>
        </h1>
        <div style={{
          width: '80px', height: '1px', background: 'linear-gradient(90deg, transparent, #c8a04a, transparent)',
          margin: '1.5rem auto', animation: 'fadeIn 1s ease 0.8s both',
        }} />
        <p style={{
          fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', fontStyle: 'italic',
          color: 'rgba(212,168,80,0.85)', maxWidth: '560px', lineHeight: 1.8,
          animation: 'fadeInDown 1s ease 1s both',
        }}>
          Un lieu de mémoire et de foi depuis 1685
        </p>
      </header>

      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        {/* History */}
        <section
          ref={reg('history')}
          {...fadeIn('history', 0)}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#a07840', marginBottom: '1rem' }}>
            Histoire
          </p>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#2c1a08', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Plus de trois siècles de recueillement
          </h2>
          <div style={{ width: '48px', height: '2px', background: '#c8a04a', margin: '0 auto 2rem' }} />
          <p style={{ maxWidth: '640px', margin: '0 auto 1.2rem', fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520' }}>
            Le cimetière Saint-François-de-Sales a été <strong style={{ color: '#6b4020' }}>fondé en 1685</strong> et a traversé trois phases successives.
            La première (1685–1706), la seconde (1706–1806), et la troisième, débutée en 1806, qui porte le nom des deux premières et demeure <strong style={{ color: '#6b4020' }}>toujours actif</strong> aujourd'hui.
          </p>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520' }}>
            Adjacent à l'église et administré par la <em style={{ color: '#6b4020' }}>Fabrique Saint-François-de-Sales</em>,
            notre cimetière est un lieu important de souvenirs et de commémorations sur l'Île de Laval.
          </p>
        </section>

        {/* Lots disponibles */}
        <section
          ref={reg('lots')}
          {...fadeIn('lots', 0.1)}
          style={{ marginBottom: '5rem' }}
        >
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#a07840', marginBottom: '1rem', textAlign: 'center' }}>
            Inhumation
          </p>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#2c1a08', marginBottom: '0.5rem', lineHeight: 1.3, textAlign: 'center' }}>
            Lots disponibles
          </h2>
          <p style={{ textAlign: 'center', color: '#6b4020', fontStyle: 'italic', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
            Urnes · Cercueils · Columbarium
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {tarifs.map(({ prix, description, note }, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                alignItems: 'center',
                gap: '1rem',
                background: '#fff',
                border: '1px solid rgba(160,120,64,0.18)',
                borderRadius: '2px',
                padding: '1.25rem 1.5rem',
                boxShadow: '0 2px 12px rgba(80,40,10,0.04)',
              }}>
                <div>
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: '#2c1a08', margin: '0 0 0.25rem' }}>{description}</p>
                  <p style={{ fontSize: '0.82rem', color: '#a07840', margin: 0, fontStyle: 'italic' }}>{note}</p>
                </div>
                <div style={{
                  background: 'rgba(200,160,74,0.1)', border: '1px solid rgba(200,160,74,0.35)',
                  borderRadius: '4px', padding: '0.5rem 1rem', textAlign: 'center', whiteSpace: 'nowrap',
                }}>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: '#3a2010' }}>{prix}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Informations générales */}
        <section
          ref={reg('info')}
          {...fadeIn('info', 0.1)}
          style={{ marginBottom: '5rem' }}
        >
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#a07840', marginBottom: '1rem', textAlign: 'center' }}>
            Pratique
          </p>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#2c1a08', marginBottom: '2rem', lineHeight: 1.3, textAlign: 'center' }}>
            Informations générales
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
            {[
              { title: 'Accès', body: 'Le cimetière est accessible en tout temps.' },
              { title: 'Columbarium', body: 'Une niche contient 2 urnes (< 6 po. de circonférence). Dimensions : 14 po. profondeur × 12 po. largeur × 12 po. hauteur.' },
              { title: 'Disponibilité', body: 'Les mises en niche et les mises en terre de cercueils se font toute l\'année. La mise en terre d\'urne est limitée par le gel au sol.' },
            ].map(({ title, body }) => (
              <div key={title} style={{
                background: '#fff', border: '1px solid rgba(160,120,64,0.18)',
                borderRadius: '2px', padding: '1.5rem',
                boxShadow: '0 2px 12px rgba(80,40,10,0.04)',
              }}>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a07840', marginBottom: '0.6rem' }}>{title}</p>
                <p style={{ fontSize: '0.95rem', color: '#4a3520', lineHeight: 1.8, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          ref={reg('contact')}
          {...fadeIn('contact', 0.1)}
          style={{ marginBottom: '5rem' }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #2a1608 0%, #3d2210 50%, #2a1608 100%)',
            borderRadius: '2px', padding: '3rem 2.5rem', textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0, opacity: 0.06,
              backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
              backgroundSize: '12px 12px', pointerEvents: 'none',
            }} />
            <p style={{ color: '#c8a04a', fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Nous rejoindre
            </p>
            <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 700, color: '#fff', marginBottom: '2rem', lineHeight: 1.3 }}>
              Pour information ou rendez-vous
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'center', marginBottom: '2rem', fontSize: '1rem', color: 'rgba(255,255,255,0.85)' }}>
              <span>Mme Diane Imbeault</span>
              <span style={{ color: '#d4a850', fontWeight: 600 }}>450 666-3563</span>
              <a href="mailto:stfrancoisdesales@videotron.ca" style={{ color: '#c8a04a', textDecoration: 'none', fontSize: '0.9rem' }}>
                stfrancoisdesales@videotron.ca
              </a>
            </div>
            <div style={{ color: 'rgba(212,168,80,0.65)', fontSize: '0.85rem', lineHeight: 1.9 }}>
              Lun.–jeu. : 9 h 30 – 12 h 00 et 13 h 30 – 16 h 00<br />
              Ven. : 9 h 30 – 12 h 00 <em>(fermé en après-midi)</em>
            </div>
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
      `}</style>
    </div>
  );
};

export default Cimetiere;
