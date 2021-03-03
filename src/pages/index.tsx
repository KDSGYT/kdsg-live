import * as React from "react"
import ContactUs from "../components/ContactUS/ContactUs";
import IntroText from "../components/IntroText/IntroText";
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Work from "../components/Work/Work";
import CNTower from '../images/cn-tower.svg';
import './styles/index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Karan | Front End Developer " />
    <img src={CNTower} id="cn-tower" />
    <IntroText />
    <Work />
    <ContactUs />
  </Layout>
)

export default IndexPage
