import React, { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar';
import churchFront from '../../assets/church-front.jpg';

const Dons = ({ navLinks }) => {
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
          Dons &amp;<br />
          <span style={{ color: '#d4a850', fontStyle: 'italic' }}>Soutien à la paroisse</span>
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
          Votre générosité fait vivre notre communauté depuis plus de trois siècles
        </p>
      </header>

      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        {/* Intro */}
        <section
          ref={reg('intro')}
          {...fadeIn('intro', 0)}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#a07840', marginBottom: '1rem' }}>
            Campagne 2026
          </p>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#2c1a08', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Campagne Dîme Annuelle 2026
          </h2>
          <div style={{ width: '48px', height: '2px', background: '#c8a04a', margin: '0 auto 2rem' }} />
          <p style={{ maxWidth: '640px', margin: '0 auto 1.2rem', fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520' }}>
            Les sources de revenus les plus importantes de notre paroisse sont <strong style={{ color: '#6b4020' }}>la dîme</strong> et les <strong style={{ color: '#6b4020' }}>quêtes dominicales</strong>,
            qui nous permettent d'assumer les dépenses courantes et de poursuivre nos activités pastorales et communautaires.
          </p>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520' }}>
            Ensemble, nous soutenons nos infrastructures — église, presbytère et cimetière — pour les générations futures.
            Votre don, <em style={{ color: '#6b4020' }}>quel que soit son montant</em>, aura un impact significatif sur notre communauté.
          </p>
        </section>

        {/* Stat cards */}
        <section
          ref={reg('stats')}
          {...fadeIn('stats', 0.1)}
          style={{ marginBottom: '5rem' }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{
              background: '#fff', border: '1px solid rgba(200,160,74,0.35)',
              borderRadius: '2px', padding: '2rem 2.5rem', textAlign: 'center', minWidth: '180px',
              boxShadow: '0 2px 24px rgba(80,40,10,0.06)',
            }}>
              <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#a07840', marginBottom: '0.5rem' }}>Montant suggéré</p>
              <p style={{ fontSize: '2.4rem', fontWeight: 700, color: '#3a2010', margin: '0 0 0.3rem' }}>75 $</p>
              <p style={{ fontSize: '0.82rem', color: '#6b4c2a', margin: 0 }}>par personne</p>
            </div>
            <div style={{
              background: '#fff', border: '1px solid rgba(200,160,74,0.35)',
              borderRadius: '2px', padding: '2rem 2.5rem', textAlign: 'center', minWidth: '180px',
              boxShadow: '0 2px 24px rgba(80,40,10,0.06)',
            }}>
              <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#a07840', marginBottom: '0.5rem' }}>Reçu d'impôt</p>
              <p style={{ fontSize: '2.4rem', fontWeight: 700, color: '#3a2010', margin: '0 0 0.3rem' }}>20 $+</p>
              <p style={{ fontSize: '0.82rem', color: '#6b4c2a', margin: 0 }}>pour tout don de 20 $ et plus</p>
            </div>
          </div>
        </section>

        {/* Payment methods */}
        <section
          ref={reg('payment')}
          {...fadeIn('payment', 0.1)}
          style={{ marginBottom: '5rem' }}
        >
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#a07840', marginBottom: '1rem', textAlign: 'center' }}>
            Comment contribuer
          </p>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#2c1a08', marginBottom: '2.5rem', lineHeight: 1.3, textAlign: 'center' }}>
            Modes de paiement
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                title: 'Argent comptant ou enveloppes',
                body: 'Déposez votre don au presbytère.',
              },
              {
                title: 'Chèque par la poste',
                body: '7070, boul. des Mille-Îles, Laval (QC) H7A 4B3',
              },
              {
                title: 'Virement Interac',
                body: null,
                interac: true,
              },
            ].map(({ title, body, interac }) => (
              <div key={title} style={{
                background: '#fff', border: '1px solid rgba(160,120,64,0.18)',
                borderRadius: '2px', padding: '1.4rem 1.8rem',
                boxShadow: '0 2px 12px rgba(80,40,10,0.04)',
                borderLeft: '4px solid #c8a04a',
              }}>
                <p style={{ fontSize: '1rem', fontWeight: 700, color: '#2c1a08', margin: '0 0 0.35rem' }}>{title}</p>
                {interac ? (
                  <div style={{ fontSize: '0.92rem', color: '#4a3520', lineHeight: 1.8 }}>
                    <span>Courriel : </span>
                    <a href="mailto:stfrancoisdesales@videotron.ca" style={{ color: '#a07030', textDecoration: 'none' }}>
                      stfrancoisdesales@videotron.ca
                    </a>
                    <br />
                    <span>Raison : <em>dîmes et votre nom</em> · Mot de passe : <em>aucun</em></span>
                    <br />
                    <span style={{ fontSize: '0.84rem', color: '#7a5c3a' }}>
                      Premier don ? Appelez la secrétaire, Mme Diane Imbeault, au 450 666-3563 pour lui donner votre adresse.
                    </span>
                  </div>
                ) : (
                  <p style={{ fontSize: '0.92rem', color: '#4a3520', lineHeight: 1.8, margin: 0 }}>{body}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Location de la salle paroissiale */}
        <section
          ref={reg('salle')}
          {...fadeIn('salle', 0.1)}
          style={{ marginBottom: '5rem' }}
        >
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#a07840', marginBottom: '1rem', textAlign: 'center' }}>
            Services
          </p>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#2c1a08', marginBottom: '0.5rem', lineHeight: 1.3, textAlign: 'center' }}>
            Location de la salle paroissiale
          </h2>
          <p style={{ textAlign: 'center', color: '#6b4020', fontStyle: 'italic', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
            Mariages · Baptêmes · Funérailles · Réunions familiales · Fêtes de bureau
          </p>

          <p style={{ fontSize: '0.95rem', color: '#4a3520', lineHeight: 1.8, marginBottom: '2rem', textAlign: 'center' }}>
            Notre paroisse dispose d'une salle de réception bien équipée pouvant accueillir <strong>jusqu'à 85 personnes</strong>,
            située au deuxième étage (en haut des garages), juste à côté du presbytère au 7070, boul. des Mille-Îles, Laval.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div style={{
              background: '#fff', border: '1px solid rgba(200,160,74,0.35)',
              borderRadius: '2px', padding: '2rem 2.5rem', textAlign: 'center', minWidth: '180px',
              boxShadow: '0 2px 24px rgba(80,40,10,0.06)',
            }}>
              <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#a07840', marginBottom: '0.5rem' }}>Prix de location</p>
              <p style={{ fontSize: '2.4rem', fontWeight: 700, color: '#3a2010', margin: 0 }}>250 $</p>
            </div>
            <div style={{
              background: '#fff', border: '1px solid rgba(200,160,74,0.35)',
              borderRadius: '2px', padding: '2rem 2.5rem', textAlign: 'center', minWidth: '180px',
              boxShadow: '0 2px 24px rgba(80,40,10,0.06)',
            }}>
              <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#a07840', marginBottom: '0.5rem' }}>Capacité</p>
              <p style={{ fontSize: '2.4rem', fontWeight: 700, color: '#3a2010', margin: '0 0 0.3rem' }}>85</p>
              <p style={{ fontSize: '0.82rem', color: '#6b4c2a', margin: 0 }}>personnes</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              background: '#fff', border: '1px solid rgba(160,120,64,0.18)',
              borderRadius: '2px', padding: '1.4rem 1.8rem',
              boxShadow: '0 2px 12px rgba(80,40,10,0.04)',
              borderLeft: '4px solid #c8a04a',
            }}>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: '#2c1a08', margin: '0 0 0.35rem' }}>Équipements</p>
              <p style={{ fontSize: '0.92rem', color: '#4a3520', lineHeight: 1.8, margin: 0 }}>
                Cuisinière, micro-ondes, réfrigérateur, tables, chaises, toilette, climatisation
              </p>
            </div>
            <div style={{
              background: '#fff', border: '1px solid rgba(160,120,64,0.18)',
              borderRadius: '2px', padding: '1.4rem 1.8rem',
              boxShadow: '0 2px 12px rgba(80,40,10,0.04)',
              borderLeft: '4px solid #c8a04a',
            }}>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: '#2c1a08', margin: '0 0 0.35rem' }}>Pour réserver</p>
              <div style={{ fontSize: '0.92rem', color: '#4a3520', lineHeight: 1.9 }}>
                <span>Mme Diane Imbeault · 450 666-3563 · </span>
                <a href="mailto:stfrancoisdesales@videotron.ca" style={{ color: '#a07030', textDecoration: 'none' }}>
                  stfrancoisdesales@videotron.ca
                </a>
                <br />
                <span style={{ fontSize: '0.84rem', color: '#7a5c3a' }}>
                  Lun.–jeu. : 9 h 30 – 12 h 00 et 13 h 30 – 16 h 00 · Ven. : 9 h 30 – 12 h 00 (fermé en après-midi)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / merci */}
        <section
          ref={reg('merci')}
          {...fadeIn('merci', 0.1)}
          style={{ marginBottom: '5rem' }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #2a1608 0%, #3d2210 50%, #2a1608 100%)',
            borderRadius: '2px', padding: '3.5rem 2.5rem', textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0, opacity: 0.06,
              backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
              backgroundSize: '12px 12px', pointerEvents: 'none',
            }} />
            <div style={{ color: '#c8a04a', fontSize: '1.4rem', letterSpacing: '0.3em', marginBottom: '1.2rem' }}>✦</div>
            <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontStyle: 'italic', color: '#fff', lineHeight: 1.7, maxWidth: '580px', margin: '0 auto 1.5rem', fontWeight: 300 }}>
              « Merci de continuer à soutenir votre paroisse avec toute la générosité et l'attachement que vous démontrez envers votre communauté chrétienne. »
            </p>
            <p style={{ color: 'rgba(212,168,80,0.7)', fontSize: '0.85rem', letterSpacing: '0.12em' }}>
              — Abbé Bernard Kanayoge, prêtre administrateur, et les marguilliers
            </p>
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

export default Dons;
