import React, { useRef, useState } from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Canvas, useFrame } from 'react-three-fiber'
import SceneBuilder from '../components/sceneBuilder'
import styled from 'styled-components'
import Greetings from '../components/index/sections/greetings'
import Steps from '../components/index/sections/steps'
import Product from '../components/index/sections/product'


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <Greetings/>
      <Product />
      <Steps />
    </Layout>
  )
}

export default IndexPage
