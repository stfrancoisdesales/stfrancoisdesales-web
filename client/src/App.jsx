import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChurchHomePage from './components/ChurchHomePage';
import Biographie from './components/Biographie';
import Histoire from './components/Histoire';
import Gallery from './components/Gallery';

const App = () => {

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'biographie', label: 'Biographie' },
    { id: 'histoire', label: 'Histoire' },
    { id: 'galerie', label: 'Galerie' },
  ]

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChurchHomePage navLinks={navLinks} />} />
        <Route path="/accueil" element={<ChurchHomePage navLinks={navLinks} />} />
        <Route path="/biographie" element={<Biographie navLinks={navLinks} />} />
        <Route path="/histoire" element={<Histoire navLinks={navLinks} />} />
        <Route path="/galerie" element={<Gallery navLinks={navLinks} />} />
        {/* <Route path="/a-propos" element={<Apropos />} />
        <Route path="/archives" element={<Archives />} /> */}
      </Routes>
    </Router>
  );
};

export default App;