import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import LogoWhite from '../images/logo-base-light.svg'
import { main } from './colors';
import { AiFillTwitterCircle, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const FooterContainer = styled.footer`
margin-top: 64px;
width: 100%;
min-height: 320px;
padding: 32px;
background-color: ${main};
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
color: white;
`

const ContentHolder = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
justify-items: start;
align-content: start;
align-items: start;
margin-bottom: 48px;
@media only screen and (max-width: 870px) {
    flex-wrap: wrap;
    justify-content: start;
}
`

const FooterSection = styled.div`
text-align: left;
height: 100%;
display: flex;
flex-direction: column;
justify-content: start;
justify-items: start;
align-content: start;
align-items: start;
margin-top: 16px;
margin-right: 16px;
`

const ImageHolder = styled.div`
display: flex;
flex-direction: row;
@media only screen and (max-width: 870px) {
    margin-right: 50vw;
}
`

const Image = styled.img`
height: 56px;
margin-right: 8px;
max-width: inherit;
`

const CustomLink = styled(Link)`
opacity: .5;
margin-top: 8px;
cursor: pointer;
transition: .5s;
:hover {
    opacity: 1 !important;
}

* {
    transition: .5s;
}

* :hover {
    opacity: 1 !important;
}
`

export default function Footer() {
    return (
        <FooterContainer>
            <ContentHolder>
                <FooterSection>
                    <ImageHolder>
                        <Image src={LogoWhite}></Image>
                        360<br/>View
                    </ImageHolder>
                </FooterSection>
                <FooterSection>
                    Product
                    <CustomLink>Product</CustomLink>
                    <CustomLink>Features</CustomLink>
                    <CustomLink>Pricing</CustomLink>
                    <CustomLink>Case studies</CustomLink>
                </FooterSection>
                <FooterSection>
                    Solutions
                    <CustomLink>Process management</CustomLink>
                    <CustomLink>Custom domain</CustomLink>
                    <CustomLink>Dedicated support team</CustomLink>
                    <CustomLink>Guided assist</CustomLink>
                    <CustomLink>Premium hosting response time</CustomLink>
                </FooterSection>
                <FooterSection>
                    Be social
                    <CustomLink style={{ opacity: 1 }}><AiFillTwitterCircle/><span style={{opacity: 0.5}}> Twitter</span></CustomLink>
                    <CustomLink style={{ opacity: 1 }}><AiFillFacebook/><span style={{opacity: 0.5}}> Facebook</span></CustomLink>
                    <CustomLink style={{ opacity: 1 }}><AiFillInstagram/><span style={{opacity: 0.5}}> Instagram</span></CustomLink>
                    <CustomLink style={{ opacity: 1 }}><AiFillLinkedin/><span style={{opacity: 0.5}}> LinkedIn</span></CustomLink>
                </FooterSection>
            </ContentHolder>
            © Copyright {(new Date()).getFullYear()} by Hector A. Acosta @hectorandac. All rights reserved
        </FooterContainer>
    )
}