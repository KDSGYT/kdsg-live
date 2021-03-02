import * as React from 'react';
import projectImage from '../../../images/way2way.jpg'
import './ProjectSection.scss';


export default function ProjectSection() {

    const projectName ="Way2Way";

    return (
        <div className="project-card">
            
            <div className="left-section">
                <img src={projectImage} />
            </div>

            <div className="right-section display-flex" >

                <h4 className="featured display-flex">Featured</h4>
            
                <h3 className="project-name display-flex">{projectName}</h3>
            
                <p className="project-discription display-flex">
                    A website to help international students and immigrants to find their first job and accomodation in Canada
                </p>
            
                <ol className="project-techs display-flex">
                    <li>ReactJS</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                </ol>
            
            </div>
        </div>
    )
}