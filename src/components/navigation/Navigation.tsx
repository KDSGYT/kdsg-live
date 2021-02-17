import React, { useRef, useState, FC } from 'react';
import Links from '../Links';
import './Navigation.scss';
import './mobileNavigation.scss';
import ToggleButton from '../ToggleButton/ToggleButton';

interface props {
    position: any,
    animation: any
}

const Navigation: FC<props> = ({ position, animation }) => {

    const navBar = useRef(null);
    const links: any = useRef(null)
    const [toggle, setToggle] = useState("")

    React.useEffect(() => {
        if (toggle) {
            links.current.style.left = "0%"
            // lines.current.style.
        } else {
            links.current.style.left = "-100%"
        }
    }, [toggle, links])

    return (
        <nav
            id="navbar"
            style={{ position, animation }}
            className="navigation"
            ref={navBar}
        >
            <ToggleButton
                toggle={toggle}
                setToggle={setToggle}
            />
            <li id="website-name"><h1>KDSG.LIVE</h1></li>

            <div ref={links} id="links">
                <Links setToggle={setToggle} />

            </div>
        </nav>
    )

}



export default Navigation;
// export link

