import React,{ useState } from 'react'
import Card from './card/Card'
import './Project.scss'


const Project = () => {
    return (
        <div className="Project">
            <Card name={"subscount"} projectSnapShot={"../"} githubLink={"https://github.com/KDSGYT/subsCount-react"} link={""} />            
        </div>
    )
}

export default Project;