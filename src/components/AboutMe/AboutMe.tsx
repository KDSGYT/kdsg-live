import * as React from 'react';
import Parallax from '../Animate/Parallax';
import './AboutMe.scss';
import firebase from 'gatsby-plugin-firebase'


export default function AboutMe() {

    const aboutSection = React.useRef<any>()
    const skills = React.useRef<any>()
    const [aboutText, setAboutText] = React.useState<string>("")
    
    React.useEffect(() => {
        firebase
        .firestore()
        .collection('/about-text')
        .get()
        .then(res => {
            console.log(res)
            setAboutText(() => {
                let newState;
                res.forEach(item => newState = item.data().data)
                return newState
            })
        })
        .catch((e) => console.error(e.message) )
    })

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
                        {aboutText || ""}
                    </p>
                </div>
            </Parallax>

            {/* List of all the skills */}
            <Parallax
                compRef={skills}
                duration={1}
                animationDelay={1}
                className='animation'
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