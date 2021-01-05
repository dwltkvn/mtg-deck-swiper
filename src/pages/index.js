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
      zIndex={1}
      gridColumn="1 / 1"
      gridRow="1 / 1"
      transform
      rotate={0}
      h={0.5}
      w={0.5}
      //bg="rose-300"
      //borderWidth={5}
      //borderStyle="solid"
      //borderColor="yellow-400"
      backgroundImage="url(https://c1.scryfall.com/file/scryfall-cards/large/front/f/5/f56861a7-b664-468f-bad7-838c02530827.jpg?1541002783)"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="contain"
    ></x.div>
    <x.div
      zIndex={0}
      gridColumn="1 / 1"
      gridRow="1 / 1"
      transform
      translateY={-4}
      transform
      translateX={-4}
      transform
      rotate={0}
      h={0.5}
      w={0.5}
      //bg="rose-300"
      //borderWidth={5}
      //borderStyle="solid"
      //borderColor="yellow-400"
      backgroundImage="url(https://c1.scryfall.com/file/scryfall-cards/large/front/5/5/553ac818-f476-43fd-841c-c91d78c2506e.jpg?1608917532)"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="contain"
    ></x.div>
  </Layout>
)

export default IndexPage
