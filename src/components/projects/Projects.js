import React from 'react';
import "./Projects.scss";
import Card from './Card';
import SubsCount from '../../img/subCount.png'
import Way2Way from '../../img/way2way.png'
import firebaselogin from '../../img/firebase-login.png';

function Projects() {

    const cards = [
        {
            name: "SubsCount",
            projectImage: SubsCount,
            links: {
                github: "https://github.com/KDSGYT/subsCount-react",
                website: "https://kdsgyt.github.io/subsCount-react/"
            }
        },
        {
            name:"Way2Way",
            projectImage: Way2Way,
            links:{
                github: "https://github.com/KDSGYT/way2way-react",
                website: "http://way2way.in"
            }

        },
        {
            name:"Firebase Authentication",
            projectImage: firebaselogin,
            links:{
                github: "https://github.com/KDSGYT/firebase-login",
                website: "http://firebase-login.kdsg.live"
            }
        }
    ]

    const cardData = cards.map(({ name, projectImage, technologies, links }, index) => {
        return <Card
            projectName={name}
            projectImage={projectImage}
            technologiesUsed={technologies}
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