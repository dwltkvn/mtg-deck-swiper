import React from "react"
import { Link } from "gatsby"
import { x } from "@xstyled/styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MTGDeck from "../components/deck"
import MTGCard from "../components/card"
import TmpCard from "../images/template.png"
const urls = [
  TmpCard,
  "https://c1.scryfall.com/file/scryfall-cards/large/front/f/5/f56861a7-b664-468f-bad7-838c02530827.jpg?1541002783",
  "https://c1.scryfall.com/file/scryfall-cards/large/front/5/5/553ac818-f476-43fd-841c-c91d78c2506e.jpg?1608917532",
  "https://c1.scryfall.com/file/scryfall-cards/large/front/6/0/605ad738-1f3e-47c2-b6cb-f79d2f6c16f1.jpg?1562704939"
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MTGDeck />
  </Layout>
)

export default IndexPage
