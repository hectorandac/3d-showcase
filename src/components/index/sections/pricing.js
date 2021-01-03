import React from 'react';
import styled from 'styled-components';
import { accent_soft, dark, main, soft, soft_85 } from '../../colors';
import { HiTrendingUp, HiOutlineSupport } from 'react-icons/hi'
import { GrDomain } from 'react-icons/gr'
import { MdPanorama } from 'react-icons/md'

const PricingContainer = styled.div`
display: flex;
flex-direction: row;
margin: 0 auto;
max-width: 840px;
flex-wrap: wrap;
justify-content: space-around;
justify-items: center;
align-content: center;
align-items: center;
`

const PricingOption = styled.div`
border-radius: 8px;
padding: 16px 8px;
background-color: ${soft_85};
width: 240px;
margin: 16px;
display: flex;
flex-direction: column;
justify-content: start;
justify-items: center;
align-content: center;
align-items: center;
height: 380px;
`

const Price = styled.h1`
color: ${main};
padding: 0 8px;
:after {
    color: ${dark};
    font-size: 10px;
    font-weight: 400;
    content: '/ month';
    display: ${props => props.tagged ? 'inline' : 'none'};
}
`

const Perks = styled.div`
width: 100%;

`

const Perk = styled.div`
font-size: 12px;
padding: 8px;
display: flex;
flex-direction: row;
justify-content: start;
justify-items: center;
align-content: center;
align-items: center;
p {
    margin: 0;
    margin-left: 16px;
}
`

const Title = styled.h1`
color: ${main};
position: relative;
font-weight: 400;
:after {
    content:"";
    position: absolute;
    bottom: 0;
    left: 150px;
    width: 50%;
    height: 0.5em;
    border-top: 2px solid ${soft};
    z-index: -1;
}
`

const Container = styled.div`
width: 90%;
margin: 0 auto;
max-width: 1200px;
margin-top: 32px;
`

const AccentButton = styled.div`
user-select: none;
transition: .5s;
cursor: pointer;
background-color: transparent;
border-radius: 6px;
padding: 8px;
border: 2px solid ${dark};
text-align: center;
margin: 8px;
:hover {
    background-color: ${dark}72;
}
:active {
    box-shadow: 0px 1px 26px 0px rgba(0, 0, 0, 0.20);
}
`

export default function Pricing() {
    return <Container>
        <Title><span>Pricing</span></Title>
        <PricingContainer>
            <PricingOption>
                <Price tagged={true}>$0.00</Price>
                <Perks>
                    <Perk><HiTrendingUp size="16px"/><p>Up to 2000 visits per month</p></Perk>
                    <Perk><GrDomain size="16px"/><p>Custom 360 subdomain</p></Perk>
                    <Perk><HiOutlineSupport size="16px"/><p>Limitted eamil support</p></Perk>
                    <Perk><MdPanorama size="16px"/><p>Up to 5 projects</p></Perk>
                    <AccentButton>Signup now!</AccentButton>
                </Perks>
            </PricingOption>
            <PricingOption>
                <Price tagged={true}>$39.99</Price>
                <Perks>
                    <Perk><HiTrendingUp size="16px"/><p>Up to 200000 visits per month</p></Perk>
                    <Perk><GrDomain size="16px"/><p>Use your personal domain</p></Perk>
                    <Perk><HiOutlineSupport size="16px"/><p>24/7 support by developers</p></Perk>
                    <Perk><MdPanorama size="16px"/><p>Unlimitted projects</p></Perk>
                    <AccentButton>Signup now!</AccentButton>
                </Perks>
            </PricingOption>
            <PricingOption>
                <Price>Contact sales</Price>
                <Perks>
                    <Perk>
                        If you require a more elaborated implementation, feel free to conatact our sales and developers team,
                        describe your situation and will offer a solution a long side the quote related to it.
                    </Perk>
                    <AccentButton>Contact us!</AccentButton>
                </Perks>
            </PricingOption>
        </PricingContainer>
    </Container>
}