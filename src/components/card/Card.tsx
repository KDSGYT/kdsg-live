import React, { FC } from 'react';
import './Card.scss';
import CSSTransitionGroup from 'react-transition-group/CSSTransition';

interface props {
    render:boolean,
    id:string,
    sectionName: string,
    SVG: any,
    content: any
}

const Card: FC<props> = ({ render, id, sectionName, SVG, content }) => {


    React.useEffect(() => {
        setAnimate(true)
    }, [render])


    const [animate, setAnimate] = React.useState(false)
    const skills = content.map((skill:string, index:number) => <li key={index}>{skill}</li>)
    React.useEffect(() => {
        // console.log(content)
    })
    return (

        <CSSTransitionGroup
            id={id}
            classNames="fade"
            timeout={2000}
            in={animate}
        >

            <div className="skill-card">
                <div className="overlay-flap">
                    <img className="inner-container" src={SVG} alt={sectionName} />
                </div>
                <h1 className="section-name">{sectionName}</h1>
                <ul className="skills">
                    {skills}
                </ul>
            </div>



        </CSSTransitionGroup>
    )
}
export default Card;