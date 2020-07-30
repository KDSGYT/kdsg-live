import React from 'react';
import Project from './project/Project'
import './Projects.scss';
// import { Element } from 'react-scroll';
const Projects = () => {

    const snapshotUrl = 'https://i.ibb.co/4VJTFKJ/home-Background-Image-opt-1.jpg';

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
}

export default Projects