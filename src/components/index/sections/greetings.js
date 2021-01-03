import React from 'react';
import styled from 'styled-components';
import { dark, soft } from '../../colors';
import SceneBuilder from '../../sceneBuilder';
import { RiHammerFill } from 'react-icons/ri'

const ResponsiveSceneBuilder = styled(SceneBuilder)`
width: 40vw;
height: 40vw;
border-radius: 16px;
overflow: hidden;
max-width: 460px;
max-height: 460px;
`

const Container = styled.div`
margin: 0 auto;
max-width: 1200px;
display: flex;
flex-direction: row;
justify-content: space-between;
justify-items: center;
align-content: center;
align-items: center;
width: 90%;
height: 680px;
`

const BlobContainer = styled.svg`
height: 90vh;
position: absolute;
top: 0;
left: 0;
z-index: -10;
min-height: 600px;
`

const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
justify-items: left;
align-content: center;
align-items: left;   
padding: 24px;
width: 50%;
`

const Title = styled.h1`
font-size: 78pt;
`

const AccentButton = styled.div`
user-select: none;
transition: .5s;
cursor: pointer;
background-color: transparent;
border-radius: 6px;
padding: 8px;
border: 2px solid ${dark};
width: fit-content;
:hover {
    background-color: ${dark}72;
}
:active {
    box-shadow: 0px 1px 26px 0px rgba(0, 0, 0, 0.20);
}
`

export default function Greetings() {
    return <Container>
        <TextContainer>
            <Title>
                360view
            </Title>
            <p>
                Provide your customer a 360 view from the confort of their homes.
                Modern, interactive, and informative, it's how some of our clients describe this utility.
                And the best part, it's <span style={{ fontWeight: 'bolder' }}>free and easy</span> to set-up.
            </p>
            <AccentButton>
                Signup and start building! <RiHammerFill/>
            </AccentButton>
        </TextContainer>
        <ResponsiveSceneBuilder />
        <BlobContainer width="auto" height="90vh" viewBox="170 25 200 240" xmlns="http://www.w3.org/2000/svg">
            <path fill={soft} xmlns="http://www.w3.org/2000/svg" d="M216.04 205.83C248.26 198.24 259.17 157.9 235.17 135.1C201.75 103.34 139.18 43.89 101.23 7.82C85.96 -6.68 60.76 -0.1 54.54 20.02C39.62 68.32 15.18 147.38 1.96 190.15C-7.8 221.72 20.43 251.94 52.59 244.36C100.27 233.12 168.81 216.96 216.04 205.83Z" id="e1xV2YZdWS" />
        </BlobContainer>

    </Container>
}