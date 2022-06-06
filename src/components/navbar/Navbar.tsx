import * as React from 'react';
import { useState } from 'react';
import ToggleButton from './ToggleButton/ToggleButton'
import './Navbar.scss';
import Links from './Links/Links';
import DarkModeButton from '../DarkMode/darkMode';
import DarKModeContext, { DarkmodeContextInterface } from '../assets/context';

export default function Navbar() {

    const [toggle, setToggle] = useState("");
    const DarkModeContext: DarkmodeContextInterface = React.useContext(DarKModeContext)
    const [darkModeClass, setDarkModeClass] = useState<string>('')
    // const darkMode = () => {
    //     if (DarkModeContext.isDark) {
    //         return {
    //             backgroundColor: "black",

    //         }
    //     } else if (DarkModeContext.isDark) {
    //         return;
    //     }
    // }

    // add or remove the dark mode class when the isDark state is changed
    React.useEffect(() => {
        setDarkModeClass(() => DarkModeContext.isDark ? 'dark-mode':'' )
    }, [DarkModeContext.isDark])

    return (
        <nav id="navigation" className={`display-flex ${darkModeClass}`}>
            <h1>KDSG.LIVE</h1>
            <div id="nav-dark-mode-button-container">
               
               {/* Uncomment the line below to enable the darkmode button in the navbar */}
                {/* <DarkModeButton /> */}
               

                <ToggleButton
                    toggle={toggle}
                    setToggle={setToggle}
                />
            </div>

            <Links
                toggle={toggle}
                setToggle={setToggle}
            />
        </nav>
    )
}