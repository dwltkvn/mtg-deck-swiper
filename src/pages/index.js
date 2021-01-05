import React from "react"
import { Link } from "gatsby"
import { x } from "@xstyled/styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <x.div
      transform
      rotate={45}
      h={0.9}
      w={0.9}
      //bg="rose-300"
      borderWidth={5}
      borderStyle="solid"
      borderColor="yellow-400"
      backgroundImage="url(https://c1.scryfall.com/file/scryfall-cards/large/front/5/5/553ac818-f476-43fd-841c-c91d78c2506e.jpg?1608917532)"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="contain"
    ></x.div>
  </Layout>
)

export default IndexPage
