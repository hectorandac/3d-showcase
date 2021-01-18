import React, { useState } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

import Camera from '../../../images/camera.svg'
import Upload from '../../../images/upload.svg'
import Design from '../../../images/design.svg'
import Cloud from '../../../images/cloud.svg'

import Image1 from '../../../images/landing/360_1.jpeg'
import Image2 from '../../../images/landing/360_2.jpeg'
import Image3 from '../../../images/landing/360_3.jpeg'

import { main, soft } from '../../colors';

const TitleSection = styled.h1`
color: ${main};
position: relative;
font-weight: 400;
:after {
    content:"";
    position: absolute;
    bottom: 0;
    left: 240px;
    width: 30%;
    height: 0.5em;
    border-top: 2px solid ${soft};
    z-index: -1;
}
`

const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
width: 90%;
margin-top: 32px;
height: 600px;
`

const ItemsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
justify-items: center;
align-content: center;
align-items: center;
height: 600px;
height: fit-content;
`

const MovableImg = posed.img({
    position_1: {
        y: 0,
        opacity: 1
    },
    position_2: {
        y: 110,
        opacity: 0.6
    },
    position_3: {
        y: 220,
        opacity: 0.2
    },
    position_4: {
        y: 330,
        opacity: 0.1
    },
    props: { item: 0 }
})

const Image = styled(MovableImg)`
position: absolute;
width: 40px;
height: 40px;
transition: .5s;
cursor: pointer;
`

const SubSections = styled.div`
position: relative;
display: flex;
align-items: center;
flex-direction: column;
height: 400px;
width: 70px;
`

const Text = styled.div`
width: 100%;
padding: 0 12px;
max-width: 900px;
min-height: 400px;
height: 100%;
position: relative;
`

const TextAnimator = styled.div`
position: absolute;
opacity: ${props => props.display ? 1 : 0};
transition: .5s;
width: 100%;
height: 100%;
z-index: ${props => props.display ? 10 : 0};
`

const Title = styled.h1`
@media only screen and (max-width: 480px){
    font-size: 18pt;
}
`

const ImagesHolder = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
justify-items: center;
align-content: center;
align-items: center;
width: 100%;
overflow: hidden;
`

export default function Steps() {

    const [currentItem, setCurrentItem] = useState(0);

    function resolvePosition(currentPosition, selfPosition) {
        let relation = selfPosition - currentPosition;
        let result = 0;
        if (relation < 0) {
            result = 4 + relation
        } else {
            result = relation;
        }

        return result;
    }

    function resolveState(currentPosition, selfPosition) {
        switch (resolvePosition(currentPosition, selfPosition)) {
            case 0:
                return 'position_1';
            case 1:
                return 'position_2';
            case 2:
                return 'position_3';
            default:
                return 'position_4';
        }
    }

    return <Container>
        <TitleSection>How to start</TitleSection>
        <ItemsContainer>
            <SubSections>
                <Image onClick={() => { setCurrentItem(0) }} pose={resolveState(currentItem, 0)} currentItem={currentItem} item={resolvePosition(currentItem, 0)} src={Camera} />
                <Image onClick={() => { setCurrentItem(1) }} pose={resolveState(currentItem, 1)} currentItem={currentItem} item={resolvePosition(currentItem, 1)} src={Upload} />
                <Image onClick={() => { setCurrentItem(2) }} pose={resolveState(currentItem, 2)} currentItem={currentItem} item={resolvePosition(currentItem, 2)} src={Design} />
                <Image onClick={() => { setCurrentItem(3) }} pose={resolveState(currentItem, 3)} currentItem={currentItem} item={resolvePosition(currentItem, 3)} src={Cloud} />
            </SubSections>
            <Text>
                <TextAnimator display={currentItem === 0}>
                    <Title>
                        01. Take the 360 photos
                </Title>
                    <p>
                        Inside your store take 360 pictures of different points that you can later link together, providing an experience similar
                        to walking into your place and scout your products, make sure that the relevant items are in display and that every aspect
                        that might drive curiosity to the viewer is covered, lastly we recomment the users use high quality images, preferably from
                    devices like a <span style={{ fontWeight: 'bolder' }}>GoPro MAX</span>, if you don't have any 360 camera avilable,
                    you can also use <span style={{ fontWeight: 'bolder' }}>Google Street View App</span> it will let you create 360 images using your phone.
                </p>
                    <ImagesHolder>
                        <img alt="Example of 360" style={{ width: '33%' }} src={Image1}></img>
                        <img alt="Example of 360" style={{ width: '33%' }} src={Image2}></img>
                        <img alt="Example of 360" style={{ width: '33%' }} src={Image3}></img>
                    </ImagesHolder>
                </TextAnimator>
                <TextAnimator display={currentItem === 1}>
                    <Title>
                        02. Upload your resources
                </Title>
                    <p>
                        After creating your account, create a project and ulpoad each one of your photos, it is as easy as just dragging them and dropping them
                        in a box, wait for the upload to complete, and that is it, your are ready to start designing your customer experience with the various
                        resources our web site provides, you'll be able to upload up to 20 pictures while designing your project if necessary.
                </p>
                </TextAnimator>
                <TextAnimator display={currentItem === 2}>
                    <Title>
                        03. Design your customer experience
                </Title>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium lacus nec velit maximus posuere.
                        Duis nibh augue, ultricies eget tempor sed, interdum quis odio. Aenean aliquet neque quis elit posuere finibus.
                        Ut tempor felis sed ultricies porta. Aliquam non sodales erat, vel consequat velit. Fusce in nisl augue.
                        Nam at mauris varius quam porttitor molestie. Aenean fermentum tincidunt sem facilisis convallis. Cras consequat purus sed ultrices egestas.
                </p>
                </TextAnimator>
                <TextAnimator display={currentItem === 3}>
                    <Title>
                        04. Publish your masterpieces
                </Title>
                    <p>
                        Nullam luctus sit amet lacus sit amet accumsan. Proin venenatis mauris semper odio finibus pellentesque.
                        Nulla accumsan laoreet nibh, nec facilisis ex auctor vitae. Quisque suscipit metus a nisi tempor, sit amet consequat sapien ultrices.
                        Proin tellus mi, efficitur non velit sit amet, blandit faucibus lorem. Pellentesque consequat purus fermentum, aliquet lorem vel, rutrum velit.
                        Etiam tristique justo risus, in ullamcorper nisl mollis nec. Phasellus ultrices ornare laoreet. Quisque auctor leo eu erat commodo,
                        a aliquet sapien eleifend. Cras dictum consectetur efficitur. Curabitur condimentum orci ut tellus ultrices, et egestas sem pharetra.
                        Duis ultrices orci eget orci commodo consequat. Duis eget justo velit. Nullam nibh felis, cursus sed ipsum blandit, dignissim suscipit felis.
                </p>
                </TextAnimator>
            </Text>
        </ItemsContainer>
    </Container>
}