import * as React from 'react';
import AboutMe from "../components/AboutMe/AboutMe";
import ContactUs from "../components/ContactUS/ContactUs";
import IntroText from "../components/IntroText/IntroText";

import SEO from "../components/seo"
import Work from "../components/Work/Work";
import CNTower from '../images/cn-tower.svg';

const App = () => {
    const Tower = React.useRef(null)

    return (
        <>
            <SEO title="Karan | Front End Developer" />
            <img
                src={CNTower}
                ref={Tower}
                id="cn-tower"
            />
            <IntroText />
            <AboutMe />
            <Work />
            <ContactUs />
        </>
    )
}
export default App;