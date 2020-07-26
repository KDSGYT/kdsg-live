import React, { useEffect, useState } from 'react';
import './Navigation.scss';

const ToggleNavigation = () => {

    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        console.log(toggle);
    }, [toggle])

    return (
        <div id="toggle-navigation" >
            <span className={`line ${toggle ? "toggle" : "un-toggle"}`} onClick={(e) => {
            setToggle(toggle ? false : true)
        }} >
                <hr />
                <hr />
                <hr />
            </span>

        </div>
    );

}
export default ToggleNavigation;