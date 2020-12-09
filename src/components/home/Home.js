import React, { useEffect } from 'react';
import '../Transition.scss'
import SVG from '../SVG'
import Links from './Links';
import CSSTransitionGroup from 'react-transition-group/CSSTransition';
import './Home.scss';
import { Link } from 'react-scroll';

const Home = () => {
    // This will determine that will the animation 
    const [fadeInLinks, setfadeInLinks] = React.useState(false);

    //When links mount into the DOM
    useEffect(() => {
        setfadeInLinks(true);
    },[setfadeInLinks])

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
                {/* <div > */}
                <Link
                    className="downArrow"
                    // className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={800}
                    to={'projects'}
                >
                    <SVG />
                </Link>
                {/* </div> */}
        </section>

    )
}

export default Home;