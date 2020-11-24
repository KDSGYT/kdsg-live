import React, { useEffect } from 'react';
import '../Transition.scss'
import SVG from '../SVG'
import Links from './Links';
import CSSTransitionGroup from 'react-transition-group/CSSTransition';
import './Home.scss';

const Home = () => {
    // This will determine that will the animation 
    const [makeNavbarStick, setmakeNavbarSticky] = React.useState(false);

    useEffect(() => {
        setmakeNavbarSticky(true);
        console.log("did")
    }, [])

    return (
        <section id="home">
            <div className="name" >
                <span>Karan Pal Singh</span>
                <hr />
            </div>
            <CSSTransitionGroup
                classNames="fade"
                timeout={2000}
                in={makeNavbarStick}
            >

                <Links />
            </CSSTransitionGroup>
            <div className="downArrow">
                <SVG />
            </div>
        </section>

    )
}

export default Home;