import React from 'react';

// import from '../../';
import './Card.scss';
import CSSTransitionGroup from 'react-transition-group/CSSTransition';


function Card({ render, transitionClassNames }) {


    React.useEffect(() => {
        setAnimate(true)
        return () => {
            //cleanup
        }
    }, [render])


    const [animate, setAnimate] = React.useState(false)

    return (

        <CSSTransitionGroup
            classNames={transitionClassNames}
            timeout={2000}
            in={animate}
        >

            

        </CSSTransitionGroup>
    )
}
export default Card;