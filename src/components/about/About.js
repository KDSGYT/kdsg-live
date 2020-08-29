import React, { useState, useEffect } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransition';
import Card from '../card/Card';
import './About.scss';
import '../Transition.scss';

const About = () => {

    const [render, setrender] = useState(false)
    const [animate, setAnimate] = useState(false)
    useEffect(() => {
        const handler = () => {
            if ((window.pageYOffset) > (window.innerHeight * 1)) {
                setrender(true);
            }
        }
        document.addEventListener('scroll', handler)

        return () => {
            document.removeEventListener('scroll', handler)
        }
    }, [])

    useEffect(() => {
        setAnimate(true)
        return () => {
            //cleanup
        }
    }, [render])




    const content = render ? (<Card />) : <div></div>;

    return (
        <section className="about">
            <div className="content">
                <h1>ABOUT</h1>
                <p id="me">I am self-taught web developer located in Brampton, ON. I love problem solving and making new stuff. I like to push myself to think out of the box.</p>
                <CSSTransitionGroup
                    classNames="fade"
                    timeout={5000}
                    in={animate}
                >
                    {content}

                </CSSTransitionGroup>
            </div>

        </section>
    )
}

export default About