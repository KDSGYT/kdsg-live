import React from 'react';
import "./Projects.scss";
import Card from './Card';
import SubsCount from '../../img/subCount.png'

function Projects() {

    const cards = [
        {
            name: "SubsCount",
            projectImage: SubsCount,
            technologies: [
                'HTML',
                'ReactJs',
                'SCSS',
                'Material-UI'
            ],
            links: {
                github: "https://github.com/KDSGYT/subsCount-react",
                website: "https://kdsgyt.github.io/subsCount-react/"
            }
        }
    ]

    const cardData = cards.map(({ name, projectImage, technologies, links }) => {
        return <Card
            projectName={name}
            projectImage={projectImage}
            technologiesUsed={technologies}
            links={links}
        />
    })

    return (
        <section className={"projects"}>
            {cardData}

        </section>
    )
}

export default Projects