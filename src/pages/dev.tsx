import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the development branch page</h1>
    <p>Welcome to development branch</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
