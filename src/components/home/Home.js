import React, { useState } from 'react';
import './Home.scss';
import SVG from '../SVG'
import Links from './Links';

const Home = () => {

    const name = "Karan Pal Singh";
    const [nameState] = useState(name);

    return (
        <section id="home">
            <div className="name" >
                <h1>{nameState}</h1>
                <hr />
            </div>
            <Links />

            <div className="downArrow"><SVG /></div>
        </section>

    )
}

export default Home;