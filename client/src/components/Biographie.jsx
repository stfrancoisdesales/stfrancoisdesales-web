import React, { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar';
import saintFrancoisImg from '../../assets/saint-francois-de-sales.jpeg';

const Biographie = ({ navLinks }) => {
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

  const citations = [
    "Il faut soigner le corps pour que l’âme s’y plaise.",
    "Le bruit fait peu de bien, le bien fait peu de bruit.",
    "Une grande misère parmi les hommes, c’est qu’ils savent si bien ce qui leur est dû et qu’ils sentent si peu ce qu’ils doivent aux autres.",
    "Il faut tout faire par amour, rien par la force."
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#faf8f5', fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif", color: '#2c2420', overflowX: 'hidden' }}>
      
      <NavBar navLinks={navLinks} scrolled={scrolled}/>

      {/* Hero */}
      <header style={{
        position: 'relative', minHeight: '60vh',
        background: 'linear-gradient(160deg, #1a0e08 0%, #2e1a0e 40%, #4a2e18 70%, #3a2012 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '6rem 2rem 4rem',
        overflow: 'hidden',
      }}>
        {/* Decorative cross pattern */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.04 }} viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="cross" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect x="35" y="10" width="10" height="60" fill="white" />
              <rect x="15" y="28" width="50" height="10" fill="white" />
            </pattern>
          </defs>
          <rect width="800" height="800" fill="url(#cross)" />
        </svg>

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
          Biographie<br />
          <span style={{ color: '#d4a850', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}>
            de Saint François de Sales
          </span>
        </h1>

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

      <main style={{ maxWidth: '1080px', margin: '0 auto', padding: '4rem 1.5rem' }}>

        {/* Introduction */}
        <section
          ref={reg('intro')}
          {...fadeIn('intro', 0)}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ width: '48px', height: '2px', background: '#c8a04a', margin: '0 auto 2rem' }} />
          <p style={{ maxWidth: '800px', margin: '0 auto 1.2rem', fontSize: '1.15rem', lineHeight: 1.9, color: '#4a3520' }}>
            Découvrez la vie, le parcours et l'héritage<br/>
            de Saint François de Sales (1567-1622)
          </p>
        </section>

        {/* Biographie Content Section  */}
        <section
          ref={reg('boxBio')}
          {...fadeIn('boxBio', 0.1)}
          style={{ marginBottom: '5rem', background: '#fff', border: '1px solid rgba(160,120,64,0.18)', borderRadius: '2px', padding: '4rem 3.5rem', boxShadow: '0 2px 24px rgba(80,40,10,0.06)' }}
        >
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#3a2010', marginBottom: '2rem', letterSpacing: '0.02em', borderBottom: '1px solid rgba(160,120,64,0.2)', paddingBottom: '1rem', textAlign: 'center' }}>
            Sa Vie et Son Parcours
          </h2>
          
          <div style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#4a3520', textAlign: 'justify' }}>
            <img 
              src={saintFrancoisImg} 
              alt="Saint François de Sales" 
              style={{
                float: 'left',
                width: '280px',
                margin: '0 2rem 1rem 0',
                borderRadius: '4px',
                boxShadow: '0 8px 24px rgba(80,40,10,0.15)',
                border: '1px solid rgba(160,120,64,0.2)'
              }} 
            />
            <p style={{ marginBottom: '1.5rem' }}>
              Il est né à Thorens, en 1567. Il fait ses études à La Roche-sur-Foron, Annecy, Paris, puis enfin Padoue où il est reçu Docteur en droit civil et canonique. Il abandonne alors la carrière juridique à laquelle le destine son père pour devenir prêtre en 1593.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              L’évêque de Genève, en exil à Annecy, l’envoie en Chablais pour ramener à la foi catholique les habitants récemment convertis au protestantisme. Ces années sont décisives : François parcourt la région à pied, parfois au péril de sa vie. Orateur de talent, il rédige de sa main, article par article, une présentation claire et solidement argumentée de la doctrine catholique qu’il placarde dans les lieux publics ou glisse sous les portes. Il est ordonné évêque en 1602, il a alors 35 ans.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Au cours de son ministère, des visites de son diocèse ou lors de ses voyages et missions à Paris, François rencontre des personnes de tous les milieux. Il prend conscience d’un réel désir de plusieurs d’entre elles de servir Dieu dans leur quotidien. À leur intention, il écrit l’<em>Introduction à la vie dévote</em>, une règle de vie pour vivre en accord avec Dieu dans toutes les situations, suivie du <em>Traité de l’amour de Dieu</em>, un traité spirituel pour entrer dans la vie mystique d’union à Dieu.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Il se rend compte également d’un autre vide à combler : mettre la vie religieuse à la portée de toutes les santés, de toutes les aspirations. En 1604, il rencontre pendant le Carême, à Dijon où elle vit, Jeanne de Chantal, veuve à 29 ans et mère de 4 enfants. L’amitié spirituelle qui les unit leur inspire la fondation à Annecy en 1610, de l’ordre de <strong>La Visitation Sainte-Marie</strong>. François s’épuisera au service de Dieu et de l'Église. Il n’épargne rien pour annoncer l’Évangile : ni visites dans son diocèse, ni catéchèses familiales et des petits enfants, ni visites aux condamnés, ni voyages apostoliques. Diplomate et ambassadeur de la Savoie, au retour d’un voyage en Avignon, il meurt à Lyon en 1622. Canonisé en 1665, il est proclamé <em>'docteur de l'Église'</em> en 1877.
            </p>
            <p style={{ marginBottom: '0' }}>
              Aujourd’hui, en Haute-Savoie, saint François de Sales reste une figure marquante, et de nombreux sites rappellent sa présence. Plus généralement, l'esprit salésien continue d'animer de nombreuses institutions religieuses et groupes, comme les Salésiens de Don Bosco, les Salésiennes missionnaires de Marie Immaculée, les Filles de saint François de Sales, les Fils de saint François de Sales, ou les prêtres de saint François de Sales.
            </p>
          </div>
        </section>

        {/* Citations Section */}
        <section
          ref={reg('boxCitations')}
          {...fadeIn('boxCitations', 0.2)}
          style={{ marginBottom: '2rem', padding: '1rem', background: 'transparent' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
             <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#3a2010', marginBottom: '1rem', letterSpacing: '0.02em' }}>
              Quelques citations célèbres
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, transparent, #c8a04a, transparent)', margin: '0 auto' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {citations.map((citation, index) => (
              <div key={index} style={{
                background: '#fff', border: '1px solid rgba(160,120,64,0.15)', borderRadius: '2px', padding: '2rem', 
                boxShadow: '0 4px 12px rgba(80,40,10,0.03)', position: 'relative'
              }}>
                <span style={{ position: 'absolute', top: '10px', left: '15px', fontSize: '3rem', color: 'rgba(200,160,74,0.2)', fontFamily: 'Georgia, serif', lineHeight: 1 }}>
                  "
                </span>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#4a3520', lineHeight: 1.8, position: 'relative', zIndex: 1, marginTop: '1rem' }}>
                  {citation}
                </p>
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

export default Biographie;