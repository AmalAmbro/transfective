import React from "react";
import styled from "styled-components";
import background from "../assets/images/ai.png"

const Container = styled.div`
    background-image: url(${background});
    display: flex;
    justify-content: end;
    background-position: center center;
    background-size: cover;
`

const ContentBox = styled.div`
    width: 50%;
    color: #fff;
    font-family: 'quicksand', sans-serif;
    padding: 100px 60px;
    box-sizing: border-box;
`
const Heading = styled.h2`
    font-size: 40px;
    width: 520px;
    margin: 0;
    margin-bottom: 20px;
    font-weight: 900;
`
const SubHeading = styled.h4`
    font-size: 24px;
    margin: 0;
    margin-bottom: 20px;
`

const Paragraph = styled.div`
    font-size: 16px;
`

const Spotlight = () => {
    return (
        <Container>
            <ContentBox>
                <Heading>AI & Machine Translation, Post Human Editing</Heading>
                <SubHeading>Artificial Intelligence Solutions at Work</SubHeading>
                <Paragraph>
                    At Transfective, we leverage cutting-edge artificial intelligence and machine 
                    learning technologies to assist our clients in achieving their expansive content objectives. 
                    By integrating top-tier neural machine translation (NMT) with industry-leading strategies, 
                    we optimize both content and business processes effectively. We recognize that NMT is not a 
                    substitute for human translation, but a powerful tool to enhance the business value of translation
                    and localization efforts. Our approach ensures that skilled linguists remain a vital component of
                    the translation process, enhancing output with their expertise and insight.
                </Paragraph>
            </ContentBox>
        </Container>
    )
}

export default Spotlight;