import React, { useRef, useState } from 'react'
// import Expo from './Expo';
// import Card from './card/Card'
import './Project.scss'


const Project = ({ projectName = "placeholderText", url, snapshotUrl }) => {

    const bottom = useRef(null)
    // const [showExpo, setShowExpo] = useState(false);
    
    // const expo = showExpo ?
    //     <Expo
    //         skills={["ReactJS", "Something Else"]}
    //         projectName={projectName}
    //         snapshotUrl={snapshotUrl}
    //         url={url}
    //     />
    //     : null;

    return (
        <div className="Project" onClick={() => window.location.href = url}  >
        {/* // <div className="Project" onClick={() => setShowExpo(showExpo ? false : true)}  > */}
            <div className="bottom" style={{ backgroundImage: `url(${snapshotUrl})` }} ref={bottom}>
                <span className="project-name">{projectName}</span>
            </div>


        </div>
    )
}

export default Project;