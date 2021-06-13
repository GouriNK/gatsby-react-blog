import * as React from "react"

import Layout from "../components/layout";
import CardList from "../components/cardList";
import Seo from "../components/seo";

import '../styles/index.css'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="The Cardboard Shelf" />
      <CardList type="card"/>
    </Layout>
  )
}
  
export default IndexPage;
