import React, { FC } from 'react';
import DarKModeContext, { DarkmodeContextInterface } from '../../assets/context';
import './ToggleButton.scss';

interface props {
    toggle: string
    setToggle: any
}

const ToggleButton: FC<props> = ({ toggle, setToggle }) => {


    // Toggle the button
    function handleToggle() {
        if (toggle === "") setToggle("toggle")
        else setToggle("")
    }

    const DarkModeContext: DarkmodeContextInterface = React.useContext(DarKModeContext)
    const [darkModeClass, setDarkModeClass] = React.useState<string>('')

    React.useEffect(() => {
        setDarkModeClass(() => DarkModeContext.isDark ? 'dark-mode' : '')
    }, [DarkModeContext.isDark])


    return (
        <div id="button-container" className={`display-as-flex ${darkModeClass}`}>
            <button id="toggle-button" className={toggle} onClick={handleToggle}>
                <div className={"line line1"}></div>
                <div className={"line line2 "}></div>
                <div className={"line line3"}></div>
            </button>
        </div>
    )
}
export default ToggleButton;