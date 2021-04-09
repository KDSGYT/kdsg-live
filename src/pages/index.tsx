import * as React from "react"

import Layout from "../components/layout"

import './styles/index.scss'
import firebase from 'gatsby-plugin-firebase';
import App from "../App/App";

const IndexPage = () => {


  React.useEffect(() => {
    // Tell google analytics that the website was visited
    // firebase.analytics();
  }, []);

  return (
    <Layout>
      <App />
    </Layout>
  )
}

export default IndexPage
