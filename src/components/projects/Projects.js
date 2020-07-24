import React from 'react';
import Project from './project/Project'
import './Projects.scss';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="grid">
                <div className="grid-element"><Project /></div>
                <div className="grid-element"><Project /></div>
                <div className="grid-element"><Project /></div>
                <div className="grid-element"><Project /></div>

            </div>
        </section>
    );
}

export default Projects