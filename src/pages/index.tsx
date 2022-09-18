import * as React from "react"
import AboutMe from "../components/AboutMe/AboutMe";
import ContactUs from "../components/ContactUS/ContactUs";
import IntroText from "../components/IntroText/IntroText";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../components/Work/Work";
import CNTower from '../images/cn-tower.svg';
import './styles/index.scss'
import firebase from 'gatsby-plugin-firebase';
import { getFinishedProjects } from "../components/Work/functions";
import { SearchTextProvider } from "../components/assets/SearchContext";

const IndexPage = () => {

  const Tower = React.useRef(null)

  const [searchTerm, setSearchTerm] = React.useState<String>('')

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
      {/* <Work getData={getUnderDevelopmentProjects} /> */}
      <SearchTextProvider value={{searchTerm, setSearchTerm}}>
        <Work getData={getFinishedProjects} />

      </SearchTextProvider>
      <ContactUs />
    </Layout>
  )
}

export default IndexPage
