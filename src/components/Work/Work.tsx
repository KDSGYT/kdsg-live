import React, { Suspense, useEffect, useState } from 'react';
import './Work.scss';
import firebase from "gatsby-plugin-firebase";
import Project from './Project/Project';
import Parallax from '../Animate/Parallax';
import { getFinishedProjects } from './functions';


export default function Work({getData}) {

    const [values, setValues]:any = useState(null)
    const workTrigger:any = React.useRef("");
    const project = React.useRef("")
    useEffect(() => {
            getData(setValues)
    }, []);

    return (
        <section id="work">
            <h2 ref={workTrigger}>WORK</h2>
            <div id="projects" className="">
                {values ? values.map((item, index) => {
                    const {
                        name,
                        projectImage,
                        skills,
                        disc,
                        links
                    } = item;

                    return (
                        <Parallax
                            triggerRef={workTrigger}
                            compRef={project}
                            duration={1}
                            animationDelay={1.5}
                            key={index}
                        >
                            <Project
                                projectRef={project}
                                projectTitle={name}
                                projectImage={projectImage}
                                projectSkills={skills}
                                projectDiscription={disc}
                                projectLinks={links}
                            />
                        </Parallax>
                    )
                }) : ""}
            </div>
        </section>
    )
}