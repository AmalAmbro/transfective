import React from "react";
import styled from "styled-components";
import constellations from "../assets/images/constellations.png"
import innovative from "../assets/images/innovative.png"

const Container = styled.div`
    background: url(${constellations});
    background-position: -200px -350px;
    font-family: 'quicksand', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 70px 0;
    border-bottom: 1px solid #ccc;
`
const Left = styled.div`
    width: 40%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
`
const Right = styled.div`
    width: 463;
    height: 333px;
`
const Heading = styled.h4`
    font-size: 32px;
    margin: 0;
    width: 430px;
    margin-bottom: 20px;
    font-weight: 700;
`
const Paragraph = styled.div`
    font-size: 16px;
`

const Image = styled.img`
    width: 100%;
`

const InnovativeSection = () => {
    return (
        <Container>
            <Left>
                <Heading>Innovative Business Solutions through Neural Machine Translation</Heading>
                <Paragraph>
                    In today’s dynamic market, businesses must manage an ever-increasing volume 
                    of content across numerous platforms and channels, requiring rapid adaptation 
                    and multilingual capabilities. At Transfective, our AI division is committed to
                    equipping clients with the tools to thrive in this expansive content ecosystem. 
                    We leverage cutting-edge neural machine translation technology integrated with 
                    industry-leading practices to optimize both content and business processes.
                </Paragraph>
            </Left>
            <Right>
                <Image src={innovative} alt="Innovative" />
            </Right>
        </Container>
    )
}

export default InnovativeSection;