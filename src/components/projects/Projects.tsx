import React, { useEffect, useState } from 'react';
import "./Projects.scss";
import Card from './Card';
import { getProjects } from '../../assets/Functions';

function Projects() {

    const [projectsData, setProjectsData] = useState([]);
    useEffect(() => {
        getProjects(setProjectsData)
    }, []);

    const cardData = projectsData.map(({ name, projectImage, links }, index) => {

        return (
            <Card
                projectName={name}
                projectImage={projectImage}
                links={links}
                key={index}
            />
        )
    })

    return (
        <section className={"projects"}>
            {cardData}
        </section>
    )
}

export default Projects