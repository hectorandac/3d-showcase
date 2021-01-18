import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Greetings from '../components/index/sections/greetings'
import Steps from '../components/index/sections/steps'
import Product from '../components/index/sections/product'
import Pricing from '../components/index/sections/pricing'
import Solutions from '../components/index/sections/solutions'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Greetings/>
      <Product />
      <Solutions />
      <Pricing />
      <Steps />
    </Layout>
  )
}

export default IndexPage
