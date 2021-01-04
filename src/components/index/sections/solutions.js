import React from 'react';
import styled from 'styled-components';
import { main, soft } from '../../colors';

const Title = styled.h1`
color: ${main};
position: relative;
font-weight: 400;
:after {
    content:"";
    position: absolute;
    bottom: 0;
    left: 200px;
    width: 30%;
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

export default function Solutions() {
    return <Container>
        <Title>Solutions</Title>
    </Container>
}