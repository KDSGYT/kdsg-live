import * as React from 'react';
import './AboutMe.scss';

export default function AboutMe() {

    return (
        <section id="about-me" className="display-flex">
            <div id="about-section" >
                <h2>About Me</h2>
                <p>
                    My name is Karan. I'm a passionate Frontend Web developer using web technologies to build amazing products and focusing on solving problems for different niches and different industries using the power of technology.
                <br />
                <br />
                I will love to hear from you. Whether it's a project, job opportunity, or just a chat. Feel free to contact me.
                </p>
            </div>
            <div id="skills-section" >
                <h2>Skills</h2>
                <ol className="display-flex">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Gatsby</li>
                    <li>Firebase</li>
                    <li>Node.js</li>
                </ol>
            </div>
        </section>
    )
}