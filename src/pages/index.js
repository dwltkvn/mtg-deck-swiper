import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MTGDeck from "../components/deck"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MTGDeck />
  </Layout>
)

export default IndexPage
