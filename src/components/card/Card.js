import React from 'react';
import './Card.scss';
import CSSTransitionGroup from 'react-transition-group/CSSTransition';


function Card({ render, id, sectionName, SVG, content }) {


    React.useEffect(() => {
        setAnimate(true)
    }, [render])


    const [animate, setAnimate] = React.useState(false)
    const skills = content.map((skill, index) => <li key={index}>{skill}</li>)
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