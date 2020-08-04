import React, { useEffect, useRef } from 'react'
// import Card from './card/Card'
import './Project.scss'


const Project = ({ projectName , githubLink, url, snapshotUrl }) => {
    
    const bottom = useRef(null)
    useEffect(() => {
        bottom.current.style.backgroundImage = `url(${snapshotUrl})`;
    }, [])

    
    return (
        <div className="Project" onClick={() => window.location.href = url} >
            <div className="bottom"  ref={bottom}>

            </div>


        </div>
    )
}

export default Project;