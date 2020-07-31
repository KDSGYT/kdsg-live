import React, { useState } from 'react';
import './Home.scss';
import github from '../../img/github/GitHub-Mark-Light-32px.png';
import linkedIn from '../../img/linkedin/linkedin-3-32.png';
import SVG from '../SVG'

const Home = () => {

    const name = "Karan Pal Singh"
    const [nameState] = useState(name);

    return (
        <section id="home">
            <div className="name">
                <h1>{nameState}</h1>
                <hr />
                <div className="links">
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/KDSGYT/kdsg-live"><img src={github} id="github" alt="github" /></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/karan-pal-singh-55b0a5178/"><img src={linkedIn} className="linkedin" alt="linkedin" /></a>
                </div>
            </div>
            <div className="downArrow"><SVG /></div>
        </section>

    )
}

export default Home;