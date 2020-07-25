import React from 'react'
// import Card from './card/Card'
import './Project.scss'


const Project = ({ projectName = "SubsCount", githubLink, url, snapshotUrl }) => {
    return (
        <div className="Project">
            <div className="bottom">
                <img src={url} alt="Subscount Project" />
                <div className="top">

                    <span>{projectName}</span>
                    <span>
                        <a href="https://github.com/KDSGYT/subsCount-react" rel="noopener noreferrer" target="_blank">Github</a>
                        <a href="https://kdsgyt.github.io/subsCount-react/" rel="noopener noreferrer" target="_blank">Wesite</a>
                    </span>

                </div>
            </div>


        </div>
    )
}

export default Project;