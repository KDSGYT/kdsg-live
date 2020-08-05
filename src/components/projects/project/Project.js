import React, { useRef } from 'react'
// import Card from './card/Card'
import './Project.scss'


const Project = ({ projectName="placeholderText" , githubLink, url, snapshotUrl }) => {
    
    const bottom = useRef(null)
    // bottom.current.style.backgroundImage = `url(${snapshotUrl})`;
    // useEffect(() => {
        // 
    // }, [])

    
    return (
        <div className="Project" onClick={() => window.location.href = url} >
            <div className="bottom" style={{backgroundImage: `url(${snapshotUrl})` }} ref={bottom}>
                <span class="project-name">{projectName}</span>
            </div>


        </div>
    )
}

export default Project;