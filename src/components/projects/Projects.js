import React, { useEffect, useState } from 'react';
import ProjectGrid from './ProjectGrid';
import './Projects.scss';

const Projects = () => {

    const [render, setrender] = useState(false)
    
    useEffect(() => {
        document.addEventListener( 'scroll', () => {
            if ((window.pageYOffset) > (window.innerHeight /3)) {
                setrender(true);
            }
        })        
    }, [])

    // function showProject(id) {
        
    // }

    
    if(render){
        return (
            <section className="projects" name="projects" id="projects">
                <h1>This is master branch</h1>
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