import React, { useState, useEffect } from 'react';

const NavBar = ({ navLinks, scrolled }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    return (
        <>
            <nav style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                background: scrolled || drawerOpen ? 'rgba(250,248,245,0.96)' : 'transparent',
                backdropFilter: scrolled || drawerOpen ? 'blur(12px)' : 'none',
                borderBottom: scrolled || drawerOpen ? '1px solid rgba(160,130,90,0.18)' : 'none',
                transition: 'all 0.4s ease',
                padding: '0 2rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                height: '64px',
            }}>
                <span style={{ 
                    fontFamily: "'Palatino Linotype', serif", fontSize: '1rem', letterSpacing: '0.08em', 
                    color: scrolled || drawerOpen ? '#6b4c2a' : '#fff', opacity: scrolled || drawerOpen ? 1 : 0, 
                    transition: 'all 0.4s ease', zIndex: 102 
                }}>
                    Saint-François-de-Sales
                </span>
                
                {isMobile ? (
                    <div 
                        onClick={toggleDrawer} 
                        style={{
                            cursor: 'pointer', zIndex: 102, display: 'flex', flexDirection: 'column', gap: '5px',
                        }}
                    >
                        <div style={{ width: '25px', height: '2px', background: scrolled || drawerOpen ? '#6b4c2a' : '#fff', transition: 'all 0.3s', transform: drawerOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                        <div style={{ width: '25px', height: '2px', background: scrolled || drawerOpen ? '#6b4c2a' : '#fff', transition: 'all 0.3s', opacity: drawerOpen ? 0 : 1 }} />
                        <div style={{ width: '25px', height: '2px', background: scrolled || drawerOpen ? '#6b4c2a' : '#fff', transition: 'all 0.3s', transform: drawerOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
                    </div>
                ) : (
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        {navLinks && navLinks.map((item) => (
                            <a key={item.id} href={item.id} style={{
                                fontFamily: 'Garamond, Georgia, serif', fontSize: '0.85rem', letterSpacing: '0.12em',
                                textTransform: 'uppercase', textDecoration: 'none',
                                color: scrolled ? '#6b4c2a' : 'rgba(255,255,255,0.85)',
                                transition: 'color 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                if (scrolled) {
                                    e.target.style.color = '#3a2010';
                                } else {
                                    e.target.style.color = '#fff';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (scrolled) {
                                    e.target.style.color = '#6b4c2a';
                                } else {
                                    e.target.style.color = 'rgba(255,255,255,0.85)';
                                }
                            }}
                            >{item.label}</a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Mobile Drawer Overlay */}
            {isMobile && (
                <div 
                    onClick={() => setDrawerOpen(false)}
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        opacity: drawerOpen ? 1 : 0,
                        pointerEvents: drawerOpen ? 'auto' : 'none',
                        transition: 'opacity 0.3s ease',
                        zIndex: 99
                    }} 
                />
            )}

            {/* Mobile Drawer */}
            {isMobile && (
                <div style={{
                    position: 'fixed', top: 0, right: 0, bottom: 0, width: '250px',
                    background: '#faf8f5', zIndex: 101,
                    transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.4s ease',
                    boxShadow: drawerOpen ? '-4px 0 15px rgba(0,0,0,0.1)' : 'none',
                    display: 'flex', flexDirection: 'column',
                    padding: '5rem 2rem 2rem 2rem', gap: '2rem'
                }}>
                    {navLinks && navLinks.map((item) => (
                        <a key={item.id} href={item.id} 
                           onClick={() => setDrawerOpen(false)}
                           style={{
                            fontFamily: 'Garamond, Georgia, serif', fontSize: '1.2rem', letterSpacing: '0.12em',
                            textTransform: 'uppercase', textDecoration: 'none',
                            color: '#6b4c2a',
                            borderBottom: '1px solid rgba(160,130,90,0.2)', paddingBottom: '0.5rem',
                            transition: 'color 0.3s ease',
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#3a2010'}
                        onMouseLeave={(e) => e.target.style.color = '#6b4c2a'}
                        >{item.label}</a>
                    ))}
                </div>
            )}
        </>
    );
}

export default NavBar;
