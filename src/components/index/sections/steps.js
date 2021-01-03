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

const Container = styled.div`
display: flex;
flex-direction: row;
max-width: 1200px;
margin: 0 auto;
width: 90%;
justify-content: center;
justify-items: center;
align-content: center;
align-items: center;
min-height: 400px;
height: 400px;
`

const MovableImg = posed.img({
    position_1: {
        y: 0,
        filter: 'blur(0px)',
        opacity: 1
    },
    position_2: {
        y: 110,
        filter: 'blur(2px)',
        opacity: 1
    },
    position_3: {
        y: 220,
        filter: 'blur(4px)',
        opacity: 1
    },
    position_4: {
        y: 330,
        filter: 'blur(6px)',
        opacity: 1
    },
    props: { item: 0 }
})

const Image = styled(MovableImg)`
position: absolute;
width: 70px;
height: 70px;
transition: .5s;
`

const SubSections = styled.div`
position: relative;
display: flex;
flex-direction: column;
height: 400px;
width: 140px;
`

const Text = styled.div`
width: 100%;
padding: 24px;
max-width: 900px;
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
    const [userInteracted, setUserInteracted] = useState(false)

    function resolvePosition(currentPosition, selfPosition, print = false) {
        let relation = selfPosition - currentPosition;
        let result = 0;
        if (relation < 0) {
            result = 4 + relation
        } else {
            result = relation;
        }

        if (print) console.log(result);
        return result;
    }

    function resolveState(currentPosition, selfPosition) {
        switch (resolvePosition(currentPosition, selfPosition, false)) {
            case 0:
                return 'position_1';
            case 1:
                return 'position_2';
            case 2:
                return 'position_3';
            case 3:
                return 'position_4';
        }
    }

    setTimeout(() => {
        if (userInteracted === false) {
            let result = currentItem == 3 ? 0 : currentItem + 1;
            setCurrentItem(result);
        }
    }, 16000)

    return <Container>
        <SubSections>
            <Image onClick={() => { setCurrentItem(0); setUserInteracted(true) }} pose={resolveState(currentItem, 0)} currentItem={currentItem} item={resolvePosition(currentItem, 0, true)} src={Camera} />
            <Image onClick={() => { setCurrentItem(1); setUserInteracted(true) }} pose={resolveState(currentItem, 1)} currentItem={currentItem} item={resolvePosition(currentItem, 1, true)} src={Upload} />
            <Image onClick={() => { setCurrentItem(2); setUserInteracted(true) }} pose={resolveState(currentItem, 2)} currentItem={currentItem} item={resolvePosition(currentItem, 2, true)} src={Design} />
            <Image onClick={() => { setCurrentItem(3); setUserInteracted(true) }} pose={resolveState(currentItem, 3)} currentItem={currentItem} item={resolvePosition(currentItem, 3, true)} src={Cloud} />
        </SubSections>
        <Text>
            <TextAnimator display={currentItem == 0}>
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
                    <img style={{ width: '33%' }} src={Image1}></img>
                    <img style={{ width: '33%' }} src={Image2}></img>
                    <img style={{ width: '33%' }} src={Image3}></img>
                </ImagesHolder>
            </TextAnimator>

            <TextAnimator display={currentItem == 1}>
                <Title>
                    02. Upload your resources
                </Title>
                <p>
                    After creating your account, create a project and ulpoad each one of your photos, it is as easy as just dragging them and dropping them
                    in a box, wait for the upload to complete, and that is it, your are ready to start designing your customer experience with the various
                    resources our web site provides, you'll be able to upload up to 20 pictures while designing your project if necessary.
                </p>
            </TextAnimator>

            <TextAnimator display={currentItem == 2}>
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

            <TextAnimator display={currentItem == 3}>
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
    </Container>
}