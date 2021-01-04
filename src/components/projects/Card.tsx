import React, { FC } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import './Card.scss'

interface props {
    projectName: string,
    projectImage: any,
    links: any
}

const Card:FC<props> = ({ projectName, projectImage, links }) => {

    const { github, website } = links;

    return (
        <div className="card">
            <div className="upper-part">
                <img className="project-image" src={projectImage} alt="projectImage" />

            </div>
            <span className="project-name">{projectName}</span>
            <div className="usefulLinks lower-part">

                <button className="github" onClick={() => window.open(github)}>
                    <GitHubIcon
                        className="icon"
                        key="github"
                        style={{ fontSize: "3em" }}

                    />
                </button>
                <button className="website" onClick={() => window.open(website)}>
                    <VisibilityRoundedIcon
                        className="icon"

                        key="website"
                        style={{ fontSize: "3.7em" }}
                    />
                </button>
            </div>
        </div>
    )
}

export default Card;