import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hey guys!</h1>
    <p>Welcome to my demo.</p>
    <p>
      <Link to="/dev/">Go to main branch</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
