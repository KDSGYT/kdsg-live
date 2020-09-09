import React, { useState } from 'react';
import './Navigation.scss';

const ToggleNavigation = ({ handleToggle }) => {

    const [toggle, setToggle] = useState(false);

    return (
        <div id="toggle-button" onClick={() => console.log("clicked")} >
            <span
                className={`line ${toggle ? "toggle" : "un-toggle"}`}
                onClick={(e) => {
                    setToggle(toggle ? false : true)
                }}
            >
                <hr />
                <hr />
                <hr />
            </span>

        </div>
    );

}
export default ToggleNavigation;