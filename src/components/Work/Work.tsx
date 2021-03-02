import * as React from 'react';
import ProjectSection from './ProjectSection/ProjectSection';
import './Work.scss';
export default function Work() {
    return (
        <section id="work">
            <h2>WORK</h2>
            <div id="projects" >
                <ProjectSection />
            </div>
        </section>
    )
}