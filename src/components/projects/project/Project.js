import React, { useEffect, useRef } from 'react'
// import Card from './card/Card'
import './Project.scss'


const Project = ({ projectName = "SubsCount", githubLink, url, snapshotUrl }) => {
    
    const bottom = useRef(null)
    useEffect(() => {
        bottom.current.style.backgroundImage = `url(${snapshotUrl})`;
    }, [])

    
    return (
        <div className="Project" >
            <div className="bottom"  ref={bottom}>

            </div>


        </div>
    )
}

export default Project;