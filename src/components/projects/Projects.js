import React, { useEffect, useState } from 'react';
import ProjectGrid from './ProjectGrid';
import './Projects.scss';

const Projects = () => {

    const [render, setrender] = useState(false)
    
    useEffect(() => {
        if((window.pageYOffset)>(window.innerHeight/3)){
            setrender(true);
        }
    }, [window.pageYOffset])

    
    if(render){
        return (
            <section className="projects" name="projects" id="projects">
                <ProjectGrid />
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