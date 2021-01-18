import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { soft } from "../components/colors"

const Container = styled.div`
min-height: 500px;
padding-top: 70px;
height: 100vh;
width: 100%;
background-color: ${soft};
`

const SignIn = () => (
  <Layout noFooter={true}>
    <SEO title="Sign In" />
    <Container>
    </Container>
  </Layout>
)

export default SignIn
