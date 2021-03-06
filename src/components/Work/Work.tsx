import React, { Suspense, useEffect, useState } from 'react';
const ProjectSection = React.lazy(() => import('./ProjectSection/ProjectSection'));
import './Work.scss';
import firebase from "gatsby-plugin-firebase";


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
            <div id="projects" >
                <Suspense fallback={<div>Loading...</div>}>
                    {values ? values.map((item, index) => {
                        const {
                            name,
                            projectImage,
                            skills,
                            disc,
                            links
                        } = item;

                        return <ProjectSection
                            key={index}
                            projectTitle={name}
                            projectImage={projectImage}
                            projectSkills={skills}
                            projectDiscription={disc}
                            projectLinks={links}
                        />
                    }) : ""}
                </Suspense>
            </div>
        </section>
    )
}