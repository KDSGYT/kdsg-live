import React, { FC, useEffect } from 'react';
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
        <div id="button-container">
            <button id="toggle-button" className={toggle} onClick={handleToggle}>
                <hr className={"line line1"}></hr>
                <hr className={"line line2 "}></hr>
                <hr className={"line line3"}></hr>
            </button>
        </div>
    )
}
export default ToggleButton;