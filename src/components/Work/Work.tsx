import React, { Suspense, useEffect, useState } from 'react';
import './Work.scss';
import firebase from "gatsby-plugin-firebase";
import Project from './Project/Project';


export default function Work() {

    const [values, setValues] = useState(null)

    useEffect(() => {
        firebase
            .firestore()
            .collection("/projects")
            .get()
            .then(res => {
                setValues(() => {
                    const newState = [];
                    res.forEach(item => newState.push(item.data()));
                    return newState;
                })
            });

    }, []);

    return (
        <section id="work">
            <h2>WORK</h2>
            <div id="projects" className="display-flex">
                    {values ? values.map((item, index) => {
                        const {
                            name,
                            projectImage,
                            skills,
                            disc,
                            links
                        } = item;

                        return <Project
                            key={index}
                            projectTitle={name}
                            projectImage={projectImage}
                            projectSkills={skills}
                            projectDiscription={disc}
                            projectLinks={links}
                        />
                    }) : ""}
            </div>
        </section>
    )
}