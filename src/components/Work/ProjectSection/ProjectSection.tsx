import * as React from 'react';
import { FC } from 'react';
import './ProjectSection.scss';
import GithubIcon from '../../../images/github.svg';
import LinkIcon from '../../../images/external-link-symbol.svg';

interface props {
    projectTitle: string,
    projectImage: any,
    projectDiscription: string,
    projectSkills: any
    projectLinks:any
}

const ProjectSection: FC<props> = (props) => {

    const {
        projectTitle,
        projectImage, 
        projectDiscription,
        projectSkills = [],
        projectLinks
    } = props;

    return (
        <div className="project-card">

            <div className="left-section">
                <img src={projectImage} />
            </div>

            <div className="right-section display-flex" >

                <h4 className="featured display-flex">Featured</h4>

                <h3 className="project-name display-flex">{projectTitle}</h3>

                <p className="project-discription display-flex">
                    {projectDiscription}
                </p>

                <ol className="project-techs display-flex">
                    {projectSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ol>
                <ul className="project-links display-flex">
                    <li><a target="_blank" href={projectLinks.github}><img src={GithubIcon}/></a></li>
                    <li><a target="_blank" href={projectLinks.website}><img src={LinkIcon}/></a></li>
                </ul>

            </div>
        </div>
    )
}

export default ProjectSection;