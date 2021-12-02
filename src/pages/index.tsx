import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export interface IRoute {
  path: string;
  title: string;
}

export const Routes : Record<string,IRoute> ={
  main: {
    path: '/main',
    title: 'Go to main branch',
  },
  dev: {
    path: '/dev',
    title: 'Go back to the development',
  }
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hey guys!</h1>
    <p>Welcome to my demo.</p>
    <p>
    {Object.values(Routes).map((route, index)=>(
      <><Link to={route.path} key={index}>{route.title}</Link><br /></>
    ))}
    </p>
  </Layout>
)

export default IndexPage
