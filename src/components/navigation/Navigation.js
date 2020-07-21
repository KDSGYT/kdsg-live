import React from 'react'
import './Navigation.scss'
import { BrowserRouter as Router ,Link, Route, Switch} from 'react-router-dom'

const Navigation = () => {
    return (
        <Router>
            <nav>
                {/* <ul> */}
                    <li><Link className="nav-link" to="#">Home</Link></li>
                    <li><Link className="nav-link" to="#projects">Projects</Link></li>
                    <li><Link className="nav-link" to="#about">About</Link></li>
                    <li><Link className="nav-link" to="#contact">Contact</Link></li>
                {/* </ul> */}
            </nav>
            {/* <Switch> */}
                {/* <Route  path="/"   /> */}
            {/* </Switch> */}
        </Router>
    )
}

export default Navigation;