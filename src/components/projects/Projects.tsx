import React, { useEffect, useState } from 'react';
import "./Projects.scss";
import Card from './Card';
import SubsCount from '../../img/subCount.png'
import Way2Way from '../../img/way2way.png'
import firebaselogin from '../../img/firebase-login.png';
import { getProjectImage, getProjects } from '../../assets/Functions';

function Projects() {

    const [projectsData, setProjectsData] = useState([]);
    useEffect(() => {
        console.log('runned')
        getProjects(setProjectsData)
    },[]);
    // const cards = [
    //     {
    //         name: "SubsCount",
    //         projectImage: SubsCount,
    //         links: {
    //             github: "https://github.com/KDSGYT/subsCount-react",
    //             website: "https://kdsgyt.github.io/subsCount-react/"
    //         }
    //     },
    //     {
    //         name:"Way2Way",
    //         projectImage: Way2Way,
    //         links:{
    //             github: "https://github.com/KDSGYT/way2way-react",
    //             website: "http://way2way.in"
    //         }

    //     },
    //     {
    //         name:"Firebase Authentication",
    //         projectImage: firebaselogin,
    //         links:{
    //             github: "https://github.com/KDSGYT/firebase-login",
    //             website: "http://firebase-login.kdsg.live"
    //         }
    //     }
    // ]

    const cardData = projectsData.map(({ name, projectImage, links }, index) => {
        // const image = getProjectImage(projectImage);

        return <Card
            projectName={name}
            projectImage={projectImage}
            links={links}
            key={index}
        />
    })

    return (
        <section className={"projects"}>
            {cardData}

        </section>
    )
}

export default Projects