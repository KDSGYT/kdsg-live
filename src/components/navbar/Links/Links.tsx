import * as React from 'react';
import './Links.scss';

export default function Links({toggle}) {
    
    const [appear, setAppear] = React.useState(toggle)
    React.useEffect(() =>{
        setAppear(toggle === "toggle" ? "appear": "")
    },[toggle])
    React.useEffect(() => {
        console.log(appear)
    },[appear])

    return (
        <ul id={appear} className={`links`}>
            <li id="link-1">Home</li>
            <li id="link-2">Work</li>
            <li id="link-3">Contact Me</li>
            <li id="link-4">Resume</li>
        </ul>
    )
}