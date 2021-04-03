import * as React from 'react';
import Parallax from '../Animate/Parallax';
import './AboutMe.scss';

export default function AboutMe() {

    const aboutSection = React.useRef<any>("")
    const skills = React.useRef<any>("")
    return (
        <section ref={aboutSection} id="about-me" className="display-flex">

            {/* Some text about me */}
            <Parallax
                compRef={aboutSection}
                duration={2}
            >
                <div id="about-section" >
                    <h2>ABOUT ME</h2>
                    <p>
                        My name is Karan. I'm a passionate Frontend Web developer using web technologies to build amazing products and focusing on solving problems for different niches and different industries using the power of technology.
                    </p>
                </div>
            </Parallax>

            {/* List of all the skills */}
            <Parallax
                compRef={skills}
                duration={1}
                animationDelay={1}
            >
                <div ref={skills} id="skills-section" >
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
            </Parallax>
        </section>
    )
}