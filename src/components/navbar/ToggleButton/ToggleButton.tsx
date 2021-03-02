import React, { FC } from 'react';
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

    return (
        <div id="button-container" className="display-as-flex">
            <button id="toggle-button" className={toggle} onClick={handleToggle}>
                <div className={"line line1"}></div>
                <div className={"line line2 "}></div>
                <div className={"line line3"}></div>
            </button>
        </div>
    )
}
export default ToggleButton;