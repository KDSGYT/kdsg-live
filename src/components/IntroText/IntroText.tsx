import * as React from 'react';
import './IntroText.scss';
import DP from '../../images/dp.png';

export default function IntroText() {

    return (
        <section id="intro-section" className="display-flex">

            <h1 id="intro-text">
                Hi, 👋<br />
                I am a self-taught <br />
                web developer based in<br />
                Toronto.
            </h1>
            <div id="author-image">
                <img src={DP} alt="Author Picture" />
            </div>
        </section>
    )
}