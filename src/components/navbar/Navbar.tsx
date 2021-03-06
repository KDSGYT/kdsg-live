import * as React from 'react';
import { useState } from 'react';
import ToggleButton from './ToggleButton/ToggleButton'
import './Navbar.scss';
import Links from './Links/Links';
import SocialMediaLinks from '../ContactUS/SocialMediaLinks/SocialMediaLinks';

export default function Navbar() {
    
    const [toggle, setToggle] = useState("");
    
    React.useEffect(() => {
        console.log(toggle)
    }, [toggle])

    return (
        <nav id="navigation" className="display-flex">
            <h1>KDSG.LIVE</h1>
            <ToggleButton 
                toggle={toggle}
                setToggle={setToggle}
            />
            
            <Links 
                toggle={toggle}
                setToggle={setToggle}
            />
        </nav>
    )   
}