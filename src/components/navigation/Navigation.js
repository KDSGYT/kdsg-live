import React from 'react'
import './Navigation.scss'
// import Projects from '../projects/Projects'
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom'

const Navigation = ({ position, animation }) => {

    return (
        <Router>
            <nav style={{ position, animation }} className="navigation">
                {/* <ul> */}
                <li><Link className="nav-link" to="">Home</Link></li>
                <li><Link className="nav-link" to="projects">Projects</Link></li>
                <li><Link className="nav-link" to="about">About</Link></li>
                <li><Link className="nav-link" to="contact">Contact</Link></li>
                {/* </ul> */}
            </nav>
            <Switch>
                <Route></Route>
                <Route path="/projects" component={null}>
                    {() => {
                        window.scrollTo(0, window.innerHeight)
                        return null;
                    }}
                </Route>
            </Switch>
        </Router>
    )
}

export default Navigation;