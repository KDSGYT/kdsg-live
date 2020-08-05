import React from 'react';
import Card from '../card/Card';
import './About.scss';

const About = () => {
    return (
        <section className="about">
            <div className="content">
                <h1>ABOUT</h1>
                {/* <div className="container"> */}
                    <p id="me">I am self-taught web developer located in Brampton, ON. I love learning new stuff and making projects. I link to push myself to think out of the box.</p>
                    <Card />
                {/* </div> */}

            </div>
        </section>
    )
}

export default About