import * as React from "react"
import AboutMe from "../components/AboutMe/AboutMe";
import ContactUs from "../components/ContactUS/ContactUs";
import IntroText from "../components/IntroText/IntroText";
//NOTE: trying to display all images for skills instead of only text. Need to implement bubble sort to arrrange the components as per will.
import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../components/Work/Work";
import CNTower from '../images/cn-tower.svg';
import './styles/index.scss'
import firebase from 'gatsby-plugin-firebase';

const IndexPage = () => {

  const Tower = React.useRef(null)

  React.useEffect(() => {
    // Tell google analytics that the website was visited
    // firebase.analytics();
  }, []);

  return (
    <Layout>
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
    </Layout>
  )
}

export default IndexPage
