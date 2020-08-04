import React from 'react';
import './Home.scss';
import SVG from '../SVG'
import Links from './Links';

const Home = () => {


    return (
        <section id="home">
            <div className="name" >
                <h1>Karan Pal Singh</h1>
                <hr />
            </div>
            <Links />

            <div className="downArrow">
                <SVG />
            </div>
        </section>

    )
}

export default Home;