import React from 'react'
// import { SvgIcon } from '@material-ui/core/SvgIcon';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import './Card.scss'

function Card({ projectName, projectImage, links }) {

    const { github, website } = links;

    return (
        <div className="card">
            <div className="upper-part">
                <img className="project-image" src={projectImage} alt="projectImage" />

            </div>
            <span>{projectName}</span>
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
                {/* <li key="github"><a href={github} rel="noopener noreferrer" target="_blank">Github</a> </li> */}
                {/* <li key="website"><a href={website} rel="noopener noreferrer" target="_blank">Website</a> </li> */}
            </div>
        </div>
    )
}

export default Card;