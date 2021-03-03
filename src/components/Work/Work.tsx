import * as React from 'react';
import ProjectSection from './ProjectSection/ProjectSection';
import './Work.scss';

import projectImage from '../../images/way2way.jpg'

export default function Work() {

    const projectDiscription = "    A website to help international students and immigrants to find their first job and accomodation in Canada";
    const projectSkills = [
        'HTML'
    ]
    return (
        <section id="work">
            <h2>WORK</h2>
            <div id="projects" >
                <ProjectSection
                    projectTitle="Way2Way"
                    projectImage={projectImage}
                    projectDiscription={projectDiscription}
                    projectSkills={projectSkills}
                />
            </div>
        </section>
    )
}