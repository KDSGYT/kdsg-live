import * as React from 'react';
import Parallax from '../Animate/Parallax';
import './AboutMe.scss';
import firebase from 'gatsby-plugin-firebase'
import { bubbleSort } from '../assets/functions';

interface SkillsData {
}

export default function AboutMe() {

    const aboutSection = React.useRef<any>()
    const skills = React.useRef<any>()
    const [aboutText, setAboutText] = React.useState<string>("")
    const [skillsData, setSkillsData] = React.useState<Array<Object>>([{}]);

    // Get about me from DB
    React.useEffect(() => {
        firebase
        .firestore()
        .collection('/about-text')
        .get()
        .then(res => {
            setAboutText(() => {
                let newState;
                res.forEach(item => newState = item.data().data)
                return newState
            })
        })
        .catch((e) => console.error(e.message) )
        return (() => setAboutText(""))
    },[]);

    // Get skills data from DB
    React.useEffect(() => {
        firebase.firestore()
        .collection('/skillset')
        .get()
        .then(res => {
            setSkillsData(() => {
                const data = [];
                res.forEach(item => data.push(item.data()))
                
                // sort the data using bubble sort algorithm and return anArray of objects.
                return bubbleSort(data)
            })
        })
        return(() => setSkillsData([]))
    },[]);

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
                // className='animation'
            >
                {/* create a varible that will represent the serial number of the skills in which they willbe displayed in the skills section of the website */}
                <div ref={skills} id="skills-section" >
                    <h2>SKILLS</h2>
                    <ol className="display-flex">
                        {skillsData.map((item:any) => {
                            return (
                                <li>{item.value}</li>
                            )
                        })}
                    </ol>
                </div>
            </Parallax>
        </section>
    )
}