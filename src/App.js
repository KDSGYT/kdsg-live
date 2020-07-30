import React, { useState } from 'react';
import './App.scss';

import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App() {

  const [offset, setoffset] = useState(window.pageYOffset);

  window.addEventListener('scroll', () => {

    setoffset(window.pageYOffset);

  })



  return [
    <Navigation key="navigation" position={offset > 50 ? "sticky" : null} animation={offset > 50 ? "appear 0.5s ease-in" : null} />,
    <Home key="homeComponent" />,
    <Projects key="projectsComponent" />,
    <About key="aboutComponent" />,
    <Footer key="footerComponent" />,
  ];
}

export default App;
