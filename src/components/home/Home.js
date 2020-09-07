import React, { useEffect } from 'react';
import '../Transition.scss'
import './Home.scss';
import SVG from '../SVG'
import Links from './Links';
import CSSTransitionGroup from 'react-transition-group/CSSTransition';

const Home = () => {

    const [animate, setAnimate] = React.useState(false);
    useEffect(() => {
        setAnimate(true)
    }, [])

    // const enter = css({ opacity: 0.01 });

    // const enterActive = css({
    //     opacity: 1,
    //     transition: 'opacity 500ms ease-in',
    // });

    // const leave = css({ opacity: 1 });

    // const leaveActive = css({
    //     opacity: 0.01,
    //     transition: 'opacity 300ms ease-in',
    // });



    return (
        <section id="home">
            <div className="name" >
                <h1>Karan Pal Singh</h1>
                <hr />
            </div>
            <CSSTransitionGroup
                classNames="fade"
                timeout={2000}
                in={animate}
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