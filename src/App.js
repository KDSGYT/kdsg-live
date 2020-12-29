import React, { useState } from 'react';
import './App.scss';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Social from './views/Social/Social';
import Grid from './components/photoGrid/PhotoGrid';
function App() {

  const [offset, setoffset] = useState(window.pageYOffset);
  const [smartphone, setSmartphone] = useState(window.innerWidth > 600)

  window.addEventListener('scroll', () => {

    setoffset(window.pageYOffset);

  })

  React.useEffect(() =>{
    window.document.title="Portfolio | Home";
  })

  React.useEffect(() => {
    setSmartphone(window.innerWidth > 600)
  }, [smartphone])

  return (
    <Router>

      <Switch>
      {/* Normal website */}
        <Route exact path="/">
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

          <Home key="homeComponent" />
          <Projects key="projectsComponent" />
          <About key="aboutComponent" />
          <Contact key="contactComponent" />
          <Footer key="footerComponent" />

        </Route>

        {/* Route when you go to social */}
        <Route exact path="/social">
          <Social />
        </Route>
        <Route exact path="/grid">
          <Grid />
        </Route>
      </Switch>
    </Router>
  );


}

export default App;
