import React, { useRef } from 'react'
import './Navigation.scss'
import { Link } from 'react-scroll';
import ToggleNavigation from './ToggleNavigation';

const Navigation = ({ position, togglePosition, animation }) => {

    const nav = useRef(null);

    function handleToggle(value) {
        if (!value) {
            nav.current.style.left = "100%";
            console.log();
        } else {
            nav.current.style.left = "100%";
        }
    }

    return (
        <React.Fragment>
            <nav 
                id="toggle-navigation" 
                style={{ togglePosition, animation }}
            >
                <li className="nav-link">
                    <ToggleNavigation handleToggle={handleToggle} />
                </li>
            </nav>
            <nav
                style={{ position, animation }}
                className="navigation"
                ref={nav}
            >
                <li id="website-name"><h1>KDSG.LIVE</h1></li>
                <Links />
            </nav>
        </React.Fragment>
    )

}

const Links = () => {

    const links = [
        "home",
        'projects',
        'about',
        'contact'
    ]

    return (
        <React.Fragment>
            {links.map((item, index) => {
                return (
                    <li key={index}>
                        <Link
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={800}
                            to={item}
                        >
                            {item.toUpperCase()}
                        </Link>
                    </li>
                )
            })}
        </React.Fragment>
    )
}

export default Navigation;


