import React from 'react';
import HTML5 from '../../img/SVG/html-5.svg';
import CSS3 from '../../img/SVG/css-3.svg';
import ReactJS from '../../img/SVG/reactjs.svg';
import JavaScript from '../../img/SVG/javascript.svg';
import NodeJs from '../../img/SVG/nodejs.svg';
// import from '../../';
import './Card.scss';
import CSSTransitionGroup from 'react-transition-group/CSSTransition';


function Card({ render }) {


    React.useEffect(() => {
        setAnimate(true)
        return () => {
            //cleanup
        }
    }, [render])


    const [animate, setAnimate] = React.useState(false)

    return (

        <CSSTransitionGroup
            classNames="fade"
            timeout={2000}
            in={animate}
        >

            <div className="my-skillset">
                <div id="skills">
                    <img src={HTML5} alt="" />
                    <img src={CSS3} alt="" />
                    <img src={ReactJS} alt="" />
                    <img src={JavaScript} alt="" />
                    <img src={NodeJs} alt="" />
                </div>


            </div>

        </CSSTransitionGroup>
    )
}
export default Card;