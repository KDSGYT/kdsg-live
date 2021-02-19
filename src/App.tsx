import React, { useState } from 'react';
import './App.scss';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Contact from './components/about/About';
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
    window.document.title="Karan Pal Singh | Portfolio";
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
          <Skills key="aboutComponent" />
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
