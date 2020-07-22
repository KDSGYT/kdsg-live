import React, { useState, useEffect } from 'react'
import './Home.scss';
import SVG from '../SVG'

const Home = () => {

    const name = "Karan Pal Singh"
    const [nameState, setstate] = useState(name);

    

    return (
        <section>
            <div className="name">
                <h1>{nameState}</h1>
                <hr />
                <div className="links">
                    <a  rel="noopener noreferrer" target="_blank" href="https://github.com/KDSGYT"><img id="github" alt="github"/></a>
                    <a  rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/karan-pal-singh-55b0a5178/"><img class="linkedin" alt="linkedin"/></a>
                </div>
            </div>
            <SVG />
        </section>

    )
}

export default Home;