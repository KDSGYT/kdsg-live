import React from 'react';
import HTML5 from '../../img/SVG/html-5.svg';
import CSS3 from '../../img/SVG/css-3.svg';
import ReactJS from '../../img/SVG/reactjs.svg';
import JavaScript from '../../img/SVG/javascript.svg';
import NodeJs from '../../img/SVG/nodejs.svg';
// import from '../../';
import './Card.scss';

function Card() {
    return (
        <React.Fragment>

            <div className="my-skillset">
                <img src={HTML5} alt="" />
                <img src={CSS3} alt="" />
                <img src={ReactJS} alt="" />
                <img src={JavaScript} alt="" />
                <img src={NodeJs} alt="" />


            </div>

        </React.Fragment>
    )
}
export default Card;