import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import './About.scss';

const About = () => {

    const [render, setrender] = useState(false)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if ((window.pageYOffset) > (window.innerHeight * 1)) {
                setrender(true);
            }
        })
    }, [])




    const content = render ? ( <Card /> ) : <div></div>;

    return (
        <section className="about">
            <div className="content">
                <h1>ABOUT</h1>
                <p id="me">I am self-taught web developer located in Brampton, ON. I love making new stuff and problem solving. I like to push myself to think out of the box.</p>
                {content}
            </div>

        </section>
    )
}

export default About