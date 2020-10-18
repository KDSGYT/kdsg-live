import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import './About.scss';
import '../Transition.scss';

import HTML5 from '../../img/SVG/html-5.svg';
import CSS3 from '../../img/SVG/css-3.svg';
import ReactJS from '../../img/SVG/reactjs.svg';
import JavaScript from '../../img/SVG/javascript.svg';
import NodeJs from '../../img/SVG/nodejs.svg';

const About = () => {

    const [render, setrender] = useState(false)
    useEffect(() => {
        const handler = () => {
            if ((window.pageYOffset) > (window.innerHeight * 1)) {
                setrender(true);
            }
        }
        document.addEventListener('scroll', handler)

        return () => {
            document.removeEventListener('scroll', handler)
        }
    }, [])





    const content = render ? (
        <Card
            render={render}
            transitionClassNames={"fade"}
            renderComponent={"<SkillIcons > </SkillIcons>"}
        />
    ) : <div></div>;

    return (
        <section className="about">
            <div className="content">
                <h1>ABOUT</h1>
                <p id="me">I am self-taught web developer located in Brampton, ON. I love problem solving and making new stuff. I like to push myself to think out of the box.</p>
                {content}
            </div>

        </section>
    )
}

function SkillIcons() {
    return (
        <div className="my-skillset">
            <div id="skills">
                <img src={HTML5} alt="" />
                <img src={CSS3} alt="" />
                <img src={ReactJS} alt="" />
                <img src={JavaScript} alt="" />
                <img src={NodeJs} alt="" />
            </div>


        </div>
    )
}

export default About