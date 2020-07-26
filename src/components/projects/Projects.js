import React from 'react';
import Project from './project/Project'
import './Projects.scss';

const Projects = () => {

    const url = '../../../img/subCount.png';

    return (
        <section className="projects" id="projects">
            <div className="grid">
                <div className="grid-element">
                    <Project url={url} />
                </div>

                <div className="grid-element">
                    <Project url={url} />
                </div>

                <div className="grid-element">
                    <Project url={url} />
                </div>
                <div className="grid-element">
                    <Project url={url} />
                </div>
                <div className="grid-element">
                    <Project url={url} />
                </div>

                <div className="grid-element">
                    <Project url={url} />
                </div>
            </div>
        </section>
    );
}

export default Projects