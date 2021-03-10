import * as React from 'react';
import { FC } from 'react';
import './Project.scss';

interface props {
    projectTitle?: string,
    projectImage: any,
    projectDiscription?: string,
    projectSkills?: any
    projectLinks?: any
}

const Project: FC<props> = (props) => {

    const {
        projectTitle,
        projectImage,
        projectDiscription,
        projectSkills = [],
        projectLinks
    } = props;

    function handleClick(){
        window.open(projectLinks.website, '_blank')
    }

    return (
        <div className="project-card" onClick={handleClick}>
                <div className="project-image">
                    <img src={projectImage} />
                </div>
                <div className="project-discription">
                    <h2>{projectTitle}</h2>
                    <p>{projectDiscription}</p>
                </div>
        </div>
    )
}

export default Project;