import React, { useEffect, useState } from 'react';
import Project from './project/Project'
import './Projects.scss';

const Projects = () => {

    const snapshotUrl = 'https://i.ibb.co/4VJTFKJ/home-Background-Image-opt-1.jpg';
    const [render, setrender] = useState(false)
    
    useEffect(() => {
        if((window.pageYOffset)>(window.innerHeight/3)){
            setrender(true);
        }
    }, [window.pageYOffset])

    
    if(render){
        return (
            <section className="projects" name="projects" id="projects">
                <div className="grid-container">
                    <div className="grid">
                        <div className="grid-element">
                            <Project snapshotUrl={snapshotUrl} />
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
                        <div className="grid-element">
                            <Project snapshotUrl={snapshotUrl} />
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
            </section>
        );
    } else {
        return(
            <section className="projects" name="projects" id="projects">

            </section>
        )
    }
}

export default Projects