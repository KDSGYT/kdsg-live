import * as React from 'react';
import './Links.scss';
import scrollTo from 'gatsby-plugin-smoothscroll';
import resume from '../../assets/Resume.pdf';
import { CSSTransition } from 'react-transition-group';


export default function Links({toggle, setToggle}) {
    
    const [appear, setAppear] = React.useState(toggle);

    React.useEffect(() =>{
        setAppear(toggle === "toggle" ? "appear": "")
    },[toggle])

    function handleClick(where) {
        scrollTo('#'+where)
        setToggle("")
    }


    return (
        <ul id={appear} className={`links`}>
            <li onClick={() => handleClick('home')}id="link-1">
                    Home
            </li>
            <li onClick={() => handleClick('work')}id="link-2">Work</li>
            <li onClick={() => handleClick('contact-us')}id="link-3">Contact Me</li>
            <li id="link-4"><a href={resume} target="_blank">Resume</a></li>
        </ul>
    )
}