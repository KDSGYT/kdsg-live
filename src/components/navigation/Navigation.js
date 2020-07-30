import React, { useRef } from 'react'
import './Navigation.scss'
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import ToggleNavigation from './ToggleNavigation'
import { ScrollLink } from 'react-scroll'

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
            // nav.current.childNodes.forEach(child => console.log(child.style.display = "hidden"));
            // console.log("un-toggled");
        }

    }

    return (

        <nav style={{ position, animation }} className="navigation" ref={nav}>
            {/* <ul> */}

            <li><ToggleNavigation handleToggle={handleToggle} /></li>
            <li><ScrollLink className="nav-link" to="">Home</ScrollLink></li>
            <li><ScrollLink className="nav-link" to="projects">Projects</ScrollLink></li>
            <li><ScrollLink className="nav-link" to="about">About</ScrollLink></li>
            <li><ScrollLink className="nav-link" to="contact">Contact</ScrollLink></li>
            {/* </ul> */}
            
        </nav>
    )
        
}

export default Navigation;


