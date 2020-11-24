import React from 'react'
import './Card.scss'

function Card({ projectName, projectImage, technologiesUsed, links }) {

    const technologiesUsedList = technologiesUsed.map((tech, index) => {
        return (<li key={index}>{tech}</li>);
    })

    const { github, website } = links;

    return (
        <div className="card">
            <img className="project-image" src={projectImage} alt="projectImage" />
            <h1>{projectName}</h1>
            {/* <h3>Tech used</h3> */}
            <ul className="technologies-list">
                {technologiesUsedList}
            </ul>
            <ul className="usefulLinks">
                <li key="github"><a href={github} rel="noopener noreferrer" target="_blank">Github</a> </li>
                <li key="website"><a href={website} rel="noopener noreferrer" target="_blank">Website</a> </li>
            </ul>
        </div>
    )
}

export default Card;