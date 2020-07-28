import React, { useRef } from 'react'
import './Navigation.scss'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import ToggleNavigation from './ToggleNavigation'

const Navigation = ({ position, animation }) => {

    const nav = useRef(null)



    function handleToggle(value) {
        if (!value) {
            nav.current.style.height = "100vh";
            
            // nav.current.childNodes.map(children => 
            //     children.style.display = "block"  
            // );
        } else {
            nav.current.style.height = null;
            // console.log("un-toggled");
        }

    }

    return (

        <Router>
            <nav style={{ position, animation }} className="navigation" ref={nav}>
                {/* <ul> */}

                <li><ToggleNavigation handleToggle={handleToggle} /></li>
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