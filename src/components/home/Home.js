import React, { useState, useEffect } from 'react'
import './Home.scss';
import SVG from '../SVG'

const Home = () => {

    const name = "Karan Pal Singh"
    const [nameState, setstate] = useState(name)

    

    return (
        <section>
            <div className="name">
                <h1>{nameState}</h1>
                <hr />
                <div className="links">
                    <a href="#">Github</a>
                    <a href="#">LinkedIn</a>

                </div>
            </div>
            <SVG />
        </section>

    )
}

export default Home;