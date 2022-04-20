import * as React from 'react';
import './Links.scss';
import scrollTo from 'gatsby-plugin-smoothscroll';
import resume from '../../assets/Resume.pdf';
import { CSSTransition } from 'react-transition-group';
import DarKModeContext, { DarkmodeContextInterface } from '../../assets/context';


export default function Links({ toggle, setToggle }) {

    const [appear, setAppear] = React.useState(toggle);
    const DarkModeContext: DarkmodeContextInterface = React.useContext(DarKModeContext)
    const [darkModeClass, setDarkModeClass] = React.useState<string>('')


    React.useEffect(() => {
        setAppear(toggle === "toggle" ? "appear" : "")
    }, [toggle])

    function handleClick(where) {
        scrollTo('#' + where)
        setToggle("")
    }
    React.useEffect(() => {
        setDarkModeClass(() => DarkModeContext.isDark ? 'dark-mode' : '')
    }, [DarkModeContext.isDark])

    return (
        <ul id={appear} className={`links ${darkModeClass} `}>
            <li onClick={() => handleClick('home')} id="link-1">
                Home
            </li>
            <li onClick={() => handleClick('about-me')} id="link-2">About Me</li>
            <li onClick={() => handleClick('work')} id="link-3">Work</li>
            <li onClick={() => handleClick('contact-us')} id="link-4">Contact Me</li>
            <li id="link-5"><a href={resume} target="_blank">Resume</a></li>
        </ul>
    )
}