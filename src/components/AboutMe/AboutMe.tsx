import * as React from 'react';
import './AboutMe.scss';

export default function AboutMe() {

    return (
        <section id="about-me" className="display-flex">
            <div id="about-section" >
                <h2>ABOUT ME</h2>
                <p>
                    My name is Karan. I'm a passionate Frontend Web developer using web technologies to build amazing products and focusing on solving problems for different niches and different industries using the power of technology.
                </p>
            </div>
            <div id="skills-section" >
                <h2>SKILLS</h2>
                <ol className="display-flex">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Angular</li>
                    <li>GraphQL</li>
                    <li>Gatsby</li>
                    <li>Firebase</li>
                    <li>Node.js</li>
                </ol>
            </div>
        </section>
    )
}