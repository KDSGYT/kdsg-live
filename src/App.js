import React, { useState } from 'react';
import './App.scss';

import Navigation from './components/navigation/Navigation';
import Mobile from './components/mobileNavigation/mobileNavigation'
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Social from './views/Social/Social';
function App() {

  const [offset, setoffset] = useState(window.pageYOffset);

  window.addEventListener('scroll', () => {

    setoffset(window.pageYOffset);

  })

  const navigation = window.innerWidth > 600 ?
    <Navigation
      key="navigation"
      position={
        offset > 50 ? "sticky"
          : null
      }
      animation={
        offset > 50 ? "appear 0.5s ease-in"
          : null
      }
    />
    : <Mobile />

  return (
    <>
      <Router>
        {/* Navigations */
          navigation
        }
        <Home key="homeComponent" />
        <Projects key="projectsComponent" />
        <About key="aboutComponent" />
        <Contact key="contactComponent" />
        <Footer key="footerComponent" />

        <Switch>
          <Route exact path="/social">
            <Social />
          </Route>
        </Switch>
      </Router>
    </>
  );


}

export default App;
