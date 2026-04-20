import React, { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar';
import churchFront from '../../assets/church-front.jpg';

const Histoire = ({ navLinks }) => {
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
          Histoire<br />
          <span style={{ color: '#d4a850', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}>
            de la Paroisse Saint-François-de-Sales<br/>
            (1702-1815)
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

        {/* Introduction Ancienne */}
        <section
          ref={reg('intro')}
          {...fadeIn('intro', 0)}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ width: '48px', height: '2px', background: '#c8a04a', margin: '0 auto 2rem' }} />
          <p style={{ maxWidth: '800px', margin: '0 auto 1.2rem', fontSize: '1.15rem', lineHeight: 1.9, color: '#4a3520' }}>
            L’histoire ancienne (1702-1815)<br/>
            de la Paroisse Saint-François-de-Sales
          </p>
        </section>

        {/* Content Section Ancienne */}
        <section
          ref={reg('boxAncienne')}
          {...fadeIn('boxAncienne', 0.1)}
          style={{ marginBottom: '5rem', background: '#fff', border: '1px solid rgba(160,120,64,0.18)', borderRadius: '2px', padding: '3rem 2.5rem', boxShadow: '0 2px 24px rgba(80,40,10,0.06)' }}
        >
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#3a2010', marginBottom: '1.5rem', letterSpacing: '0.02em', borderBottom: '1px solid rgba(160,120,64,0.2)', paddingBottom: '0.8rem' }}>
              Mise en place de la paroisse en 1702 et érection canonique en 1721
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520', marginBottom: '1rem' }}>
              Détachée de Lachenaie, la paroisse Saint-François-de-Sales a été mise en place en 1702, par la création de ses propres registres pour l’inscription des naissances, mariages et sépultures.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520', marginBottom: '1rem' }}>
              C’est le curé Pierre Volant de Repentigny, aidé de missionnaires, qui vient célébrer les offices religieux et signer les registres de la paroisse, jusqu’à son érection canonique en 1721.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520' }}>
              Le décret d’érection canonique est émis le 18 septembre 1721 par Mgr de St-Valier. Cette sanction de l’évêque permettait la reconnaissance civile du territoire et son étendue et la désignation d’une cure fixe. C’est Pierre Auclair-Desnoyers qui fut le premier curé désigné à la paroisse Saint-François-de-Sales. Celle-ci couvrait tout le territoire de l’Île Jésus en 1721 jusqu’à la mise en place des paroisses de Sainte-Rose en 1740 et Saint-Vincent-de-Paul en 1743.
            </p>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#3a2010', marginBottom: '1.5rem', letterSpacing: '0.02em', borderBottom: '1px solid rgba(160,120,64,0.2)', paddingBottom: '0.8rem' }}>
              Construction de la première église dédiée à Saint François de Sales en 1706
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520' }}>
              La première église dédiée à Saint François de Sales est construite en 1706, sur un emplacement localisé à la pointe Nord-Est de l’Île Jésus. Celle-ci a remplacé la chapelle Enfant Jésus devenue vétuste. Cette dernière avait été construite en 1685, sur l’Île Jésus, pour desservir principalement les paroissiens des seigneuries de Lachenaie (plus populeux à cette époque) et ceux des seigneuries des Mille-Îles (Terrebonne) et de l’Île Jésus.
            </p>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#3a2010', marginBottom: '1.5rem', letterSpacing: '0.02em', borderBottom: '1px solid rgba(160,120,64,0.2)', paddingBottom: '0.8rem' }}>
              Changement aux limites du territoire de Saint-François-de-Sales
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520', marginBottom: '1rem' }}>
              En 1740, le territoire de la paroisse de Saint-François-de-Sales est réduit lorsque les paroisses de Sainte-Rose et de Saint-Vincent-de-Paul sont mises en place.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520' }}>
              Les limites des paroisses de Sainte-Rose et de Saint-Vincent-de-Paul sont établies à trois lieues marines (16km) de la pointe nord-est de l’Île Jésus, l’une mesurée sur la côte nord et l’autre mesurée sur la côte sud de l’île. Plus tard, en 1774, la paroisse de Saint-Martin fut créée en détachant une partie des paroisses nouvellement créées.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#3a2010', marginBottom: '1.5rem', letterSpacing: '0.02em', borderBottom: '1px solid rgba(160,120,64,0.2)', paddingBottom: '0.8rem' }}>
              Rattachement des paroissiens de Saint-François-de-Sales aux paroisses avoisinantes en 1815
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520' }}>
              En 1806, l’administration de la paroisse et les activités religieuses dans la paroisse sont suspendues par Mgr Plessis, car l’église Saint-François-de-Sales est devenue vétuste et doit être reconstruite sur un nouvel emplacement. Finalement, en 1815, à la demande des curés de Terrebonne et Lachenaie, et en l’absence d’un consensus sur l’emplacement de l’église, les paroissiens de Saint-François-de-Sales sont rattachés aux paroisses de Terrebonne, Lachenaie et Rivière-des-Prairies.
            </p>
          </div>
        </section>

        {/* Introduction Contemporaine */}
        <section
          ref={reg('introContempo')}
          {...fadeIn('introContempo', 0.2)}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ width: '48px', height: '2px', background: '#c8a04a', margin: '0 auto 2rem' }} />
          <p style={{ maxWidth: '800px', margin: '0 auto 1.2rem', fontSize: '1.15rem', lineHeight: 1.9, color: '#4a3520' }}>
            L’histoire contemporaine (1847 à aujourd’hui)<br/>
            de la Paroisse Saint-François-de-Sales
          </p>
        </section>

        {/* Content Section Contemporaine */}
        <section
          ref={reg('boxContempo')}
          {...fadeIn('boxContempo', 0.3)}
          style={{ marginBottom: '2rem', background: '#fff', border: '1px solid rgba(160,120,64,0.18)', borderRadius: '2px', padding: '3rem 2.5rem', boxShadow: '0 2px 24px rgba(80,40,10,0.06)' }}
        >
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#3a2010', marginBottom: '1.5rem', letterSpacing: '0.02em', borderBottom: '1px solid rgba(160,120,64,0.2)', paddingBottom: '0.8rem' }}>
              Rétablissement de la paroisse et construction de l’église actuelle
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520', marginBottom: '1rem' }}>
              En 1845, la création des municipalités de paroisse incite Mgr Bourget à rétablir la paroisse de Saint-François-de-Sales.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520', marginBottom: '1rem' }}>
              Le Séminaire de Québec, seigneur de l’Île Jésus, délègue le curé Louis Gingras pour déterminer un emplacement et procéder à la construction d’une nouvelle église que l’on retrouve aujourd’hui avec les maisons y faisant face.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520', marginBottom: '1rem' }}>
              La construction de l’église actuelle, la plus vieille sur le territoire de la municipalité de Laval, est terminée en 1847.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520', marginBottom: '1rem' }}>
              La bénédiction de l’église a lieu le 1er mars 1847 en présence de Mgr Charles Prince, coadjuteur de Mgr Bourget, d’Adrien Théberge, curé de Terrebonne et Joseph Duquet, prêtre du séminaire de Sainte-Thérèse. C’est le curé de Terrebonne, Adrien Théberge, qui vient célébrer les offices religieux dans la nouvelle église. Dès 1848, c’est le curé Antoine Olivier Giroux qui vient prendre charge de la paroisse. Il est le premier curé à venir habiter le presbytère, construit en même temps que l’église. Un 2e étage sera ajouté au presbytère en 1901. Quant au cimetière, celui-ci est béni le 5 juin 1851.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520', marginBottom: '1rem' }}>
              En 1894, notre église est agrandie pour y installer un nouveau clocher.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520', marginBottom: '1rem' }}>
              En 1917, la décoration de l’église et les vitraux, que l’on retrouve aujourd’hui, ont été réalisés sous la direction de l’artiste Toussaint-Xénophon Renaud. Un orgue Casavant est installé en 1918 en même temps que le jubé actuel.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520' }}>
              La salle paroissiale et les bâtiments abritant les garages sont également construits en 1918. En 1931, on agrandit le presbytère pour aménager une cuisine.
            </p>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#3a2010', marginBottom: '1.5rem', letterSpacing: '0.02em', borderBottom: '1px solid rgba(160,120,64,0.2)', paddingBottom: '0.8rem' }}>
              Nouvelles chapelles dans la paroisse entre les années 1950 et la fin des années 1980
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520' }}>
              À la fin des années 1940, l’augmentation de la population durant la saison estivale justifie les administrateurs de la paroisse à construire deux chapelles aux extrémités de la paroisse. La chapelle Sainte-Marie du côté ouest et la chapelle Saint-Mathieu du côté est. Celles-ci sont opérationnelles jusqu’à la fin des années 1980.
            </p>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#3a2010', marginBottom: '1.5rem', letterSpacing: '0.02em', borderBottom: '1px solid rgba(160,120,64,0.2)', paddingBottom: '0.8rem' }}>
              Détachement en 1956 d’une partie du territoire de Saint-François-de-Sales pour fonder la paroisse Saint-Noël-Chabanel
            </h2>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#3a2010', marginBottom: '1.5rem', letterSpacing: '0.02em', borderBottom: '1px solid rgba(160,120,64,0.2)', paddingBottom: '0.8rem' }}>
              Adoption de la nouvelle liturgie en 1967
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520' }}>
              En 1967, on réaménage le mobilier dans l’église pour adopter la nouvelle liturgie qui amène les curés à regarder l’assemblée et à célébrer les offices religieux en français.
            </p>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#3a2010', marginBottom: '1.5rem', letterSpacing: '0.02em', borderBottom: '1px solid rgba(160,120,64,0.2)', paddingBottom: '0.8rem' }}>
              À ses 140 ans, en 1987, l’église est consacrée par Mgr Gérard Tremblay
            </h2>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#3a2010', marginBottom: '1.5rem', letterSpacing: '0.02em', borderBottom: '1px solid rgba(160,120,64,0.2)', paddingBottom: '0.8rem' }}>
              En 2002, fête du tricentenaire de la première paroisse de l’Île Jésus
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#4a3520' }}>
              Saint-François-de-Sales, mère et grand-mère des paroisses pionnières de Laval.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#3a2010', marginBottom: '1.5rem', letterSpacing: '0.02em', borderBottom: '1px solid rgba(160,120,64,0.2)', paddingBottom: '0.8rem' }}>
              En 2027 nous soulignerons les 325 ans de la paroisse et les 180 ans de l’église actuelle
            </h2>
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

export default Histoire;