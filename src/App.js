import React, { useState } from 'react';
import './App.css';

import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import About from './components/about/About'
import Footer from './components/footer/Footer'

function App() {

  const [offset, setoffset] = useState(window.pageYOffset);

  window.addEventListener('scroll', () => {

    setoffset(window.pageYOffset);

  })

  // useEffect(() => {
  // console.log("working");
  // window.scrollBy(0, 100);
  // }, [offset])

  return [
      <Navigation key="navigation" position={offset > 100 ? "sticky" : null} opacity={150 > offset > 100 ? "0" : null} />,
      <Home key="homeComponent" />,
      <Projects key="projectsComponent" />,
      <About key="aboutComponent" />,
      <Footer key="footerComponent" />,
  ];
}

export default App;
