import React, { useEffect, useState } from 'react';
import './App.css';

import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';

function App() {

  // const [ offsetValue, setOffsetValue ] = useState(window.pageYOffset);
  // const offset = window.pageYOffset

  useEffect(() => {
    ;
  }, [])

  return [
    // console.log(offsetValue),
    <Navigation key="navigation" position={window.pageYOffset >= 0 ? "sticky" : "absolute"} />,
    <Home key="homeComponent" />,
    <Projects key="projectsComponent" />
  ];
}

export default App;
