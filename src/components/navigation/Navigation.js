import React, { useRef } from 'react';
import './Navigation.scss';
import Links from '../Links';
import './mobileNavigation.scss';

const Navigation = ({ position, togglePosition, animation }) => {

    const nav = useRef(null);

    return (
        <>
            <nav
                style={{ position, animation }}
                className="navigation"
                ref={nav}
            >
                <button id="toggle-button">
                    <span className="button-line" id="line-1"><hr /></span>
                    <span className="button-line" id="line-2"><hr /></span>
                    <span className="button-line" id="line-3"><hr /></span>
                </button>
                <li id="website-name"><h1>KDSG.LIVE</h1></li>

                <div id="links">
                    <Links />

                </div>
                {/* <div id="mobileLinks">
                    <Links />
                </div> */}
            </nav>
        </>
    )

}



export default Navigation;
// export link

