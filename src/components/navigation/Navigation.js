import React, { useRef } from 'react'
import './Navigation.scss'
import Links from '../Links'

const Navigation = ({ position, togglePosition, animation }) => {

    const nav = useRef(null);

    return (
        <nav
            style={{ position, animation }}
            className="navigation"
            ref={nav}
        >
            <li id="website-name"><h1>KDSG.LIVE</h1></li>

            <Links />
        </nav>
    )

}



export default Navigation;
// export link

