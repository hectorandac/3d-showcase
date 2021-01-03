import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import LogoBase from '../images/logo-base.svg'
import { main, dark, soft_85 } from './colors'

const HeaderContainer = styled.header`
backdrop-filter: ${props => props.translusent ? 'blur(8px)' : 'none'};
background-color: ${props => props.translusent ? soft_85 : 'transparent'};
display: flex;
position: fixed;
top: 0;
left: 0;
right: 0;
width: 100%;
box-shadow: ${props => props.translusent ? '0px 1px 26px 0px rgba(0, 0, 0, 0.20)' : 'none'};
transition: .5s;
z-index: 100;
`

const ItemsContainer = styled.div`
margin: 0 auto;
max-width: 1100px;
width: 100%;
display: flex;
justify-content: space-between;
`

const Logo = styled.img`
width: 100px;
height: 100%;
margin-left: 8px;
user-select: none;
`

const Menu = styled.div`
display: flex;
justify-content: center;
justify-items: center;
align-content: center;
align-items: center;
`

const MenuItem = styled.div`
user-select: none;
margin-right: 8px;
margin-left: 8px;
transition: .5s;
cursor: pointer;
:hover {
  color: ${main};
}
`

const MenuAccentButton = styled(MenuItem)`
background-color: ${main};
color: white;
padding: 8px 8px;
border-radius: 6px;
:hover {
  background-color: ${dark};
  color: white;
}
`

const OnlyDesktop = styled.div`
@media only screen and (max-width: 480px){
  display: none;
}
`

const Header = () => {
  const [translusent, setTranslusent] = useState(false);

  window.addEventListener('scroll', (_event) => {
    if (document.scrollingElement.scrollTop >= 50) {
      setTranslusent(true)
    } else {
      setTranslusent(false)
    }
  }, false)

  return (
    <HeaderContainer translusent={translusent}>
      <ItemsContainer>
        <Logo src={LogoBase} />
        <Menu>
          <OnlyDesktop><MenuItem>Product</MenuItem></OnlyDesktop>
          <OnlyDesktop><MenuItem>Solutions</MenuItem></OnlyDesktop>
          <OnlyDesktop><MenuItem>Princing</MenuItem></OnlyDesktop>
          <OnlyDesktop><MenuItem>Sign In</MenuItem></OnlyDesktop>
          <MenuAccentButton>Get Started</MenuAccentButton>
        </Menu>
      </ItemsContainer>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
