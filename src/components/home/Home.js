import React, { useEffect } from 'react';
import '../Transition.scss'
import SVG from '../SVG'
import Links from './Links';
import CSSTransitionGroup from 'react-transition-group/CSSTransition';
import './Home.scss';

const Home = () => {
    // This will determine that will the animation 
    const [fadeInLinks, setfadeInLinks] = React.useState(false);

    //When links mount into the DOM
    useEffect(() => {
        setfadeInLinks(true);
    })

    return (
        <section id="home">
            <div className="name" >
                <span>Karan Pal Singh</span>
                <hr />
            </div>
            {/* FadeIN the Links */}
            <CSSTransitionGroup
                classNames="fade"
                timeout={2000}
                in={fadeInLinks}
            >
                <Links />
            </CSSTransitionGroup>
            {/* Floating Arrow */}
            <div className="downArrow">
                <SVG />
            </div>
        </section>

    )
}

export default Home;