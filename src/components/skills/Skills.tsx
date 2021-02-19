import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import './Skills.scss';
import '../Transition.scss';
import frontEnd from '../../img/SVG/web-design.svg';
import backEnd from '../../img/SVG/backend.svg';
import software from '../../img/SVG/computer.svg';
import { getSkillData } from '../../assets/Functions';

const Skills = () => {

    const initialState: any = [
        {skills:[]}, {skills:[]}, {skills:[]}
    ];

    const [skillData, setSkillData] = useState(initialState)

    // i think this code is unnecessary and can be removed
    // this code is supposed to display render animation
    const [render, setrender] = useState(false)

    useEffect(() => {
        const handler = () => {
            if ((window.pageYOffset) > (window.innerHeight * 1)) {
                setrender(true);
            }
        }

        document.addEventListener('scroll', handler)

        /**
         * Get skills from the DB and set the state
         */
        getSkillData(setSkillData)

        return () => {
            document.removeEventListener('scroll', handler)
        }

    }, [])

    return (
        <section id="skills" className="flex-display">
           
            <h2>SKILLS</h2>
            <div id="skills-section">
                <Card
                    key="front-end"
                    id="front-end"
                    sectionName="Front-End"
                    content={skillData[1].skills}
                    render={render}
                    SVG={frontEnd}
                />
                <Card
                    key="backend"
                    id="backend"
                    sectionName="Back-End"
                    content={skillData[0].skills}
                    render={render}
                    SVG={backEnd}

                /><Card
                    key="software"
                    id="software"
                    sectionName="Software"
                    content={skillData[2].skills}
                    render={render}
                    SVG={software}

                />
                {/* {content}/ */}
            </div>

        </section>
    )
}

export default Skills;