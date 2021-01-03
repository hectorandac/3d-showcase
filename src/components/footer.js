import React from 'react';
import styled from 'styled-components';
import { main } from './colors';

const FooterContainer = styled.footer`
margin-top: 64px;
width: 100%;
height: 320px;
background-color: ${main};
`

export default function Footer() {
    return (
        <FooterContainer>
        </FooterContainer>
    )
}