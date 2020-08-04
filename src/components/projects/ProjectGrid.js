import React from 'react'
import Project from './project/Project'

function ProjectGrid () {

    const snapshotUrl = 'https://i.ibb.co/4VJTFKJ/home-Background-Image-opt-1.jpg';


    return(
        <div className="grid-container">
                    <div className="grid">
                        <div className="grid-element">
                            <Project snapshotUrl={'https://i.ibb.co/m9ShMMt/subCount.png'} projectName={"SubsCount"} url={'http://subscount.kdsg.live'} />
                        </div>
                        <div className="grid-element">
                            <Project snapshotUrl={snapshotUrl} />
                        </div>
                        <div className="grid-element">
                            <Project snapshotUrl={snapshotUrl} />
                        </div>
                        <div className="grid-element">
                            <Project snapshotUrl={snapshotUrl} />
                        </div>
                    </div>
                </div>
    );

}

export default ProjectGrid;