import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
function App() {
  return [
    <Navigation />,
    <Home />,
    <Projects />
  ];
}

export default App;
