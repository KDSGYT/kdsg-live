import React, { useRef, useState } from 'react';
import Links from '../Links';
import './Navigation.scss';
import './mobileNavigation.scss';

const Navigation = ({ position, togglePosition, animation }) => {

    const nav = useRef(null);
    const links = useRef(null)
    const [toggle, setToggle] = useState(false)

    React.useEffect(() => {
        if (toggle) {
            links.current.style.left = "0%"
            // lines.current.style.
        } else {
            links.current.style.left = "-100%"
        }
    }, [toggle, links])

    return (
        <>
            <nav
                style={{ position, animation }}
                className="navigation"
                ref={nav}
            >
                <button id="toggle-button" onClick={() => toggle ? setToggle(false) : setToggle(true)}>
                    <span className="button-line" id="line-1"><hr /></span>
                    <span className="button-line" id="line-2"><hr /></span>
                    <span className="button-line" id="line-3"><hr /></span>
                </button>
                <li id="website-name"><h1>KDSG.LIVE</h1></li>

                <div ref={links} id="links">
                    <Links setToggle={setToggle}/>

                </div>
            </nav>
        </>
    )

}



export default Navigation;
// export link

