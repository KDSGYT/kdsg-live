import React, { useState, useRef } from 'react';
import './About.scss';
import DP from '../../img/dp.PNG';
import { Button } from '@material-ui/core'
const Contact = () => {
    return (
        <section id="contact">

            {/* Display flex is the global styling class */}
            <div id="about-card" className="flex-display">
                <div id="main-section" className="flex-display">
                    <img src={DP} />
                    <h1>Karan Pal Singh</h1>
                </div>

                <p>Hi there 👋, <br />I am a self-taught web developer.</p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => window.location.href= "mailto:kdsgyt@gmail.com"}
                >
                    Hire Me!
                </Button>
            </div>

        </section>
    )
}

export default Contact