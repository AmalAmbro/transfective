import React from "react";
import styled from "styled-components";
import RoundedComponent from "./RoundedComponent";

const Wrapper = styled.div`
    border-bottom: 1px solid #CCCCCC;
    padding: 50px 0 80px 0;
`
const Container = styled.div`
    width: 1280px;
    margin: 0 auto;
    font-family: 'outfit', sans-serif;
` 
const Heading = styled.h4`
    color: #119391;
    font-size: 32px;
    margin: 0;
    font-weight: 400;
`
const Contents = styled.div`
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
`

const data = [
    {
        id: 1,
        color: '#769BD4',
        background: '#F5F9FF',
        title: "Decades of Expertise",
        content: "Leverage our vast array of specialized resources and over 14 years of experience in managing intricate training programs."
    },
    {
        id: 2,
        color: '#F03C70',
        background: '#FFF3F7',
        title: "Comprehensive Discovery",
        content: "Our dedicated specialists are committed to thoroughly understanding your business objectives, pinpointing precise opportunities to enhance content delivery."
    },
    {
        id: 3,
        color: '#F89D48',
        background: '#FFFAF4',
        title: "Streamlined Solutions",
        content: "Eliminate the complexities of your localization efforts with our comprehensive, integrated service offerings and hybrid production models."
    },
    {
        id: 4,
        color: '#676FBF',
        background: '#F1F2FF',
        title: "Unmatched Quality",
        content: "Avoid the pitfalls of cross-functional miscommunications and enhance overall consistency with our unified approach to content management."
    },
    {
        id: 5,
        color: '#9A4AAB',
        background: '#FDF4FF',
        title: "Reliable Timeliness",
        content: "Depend on our proven track record of 99% on-time delivery to ensure your training materials are prepared exactly when you need them."
    }
]

const WhyChooseSection = () => {
    return (
        <Wrapper>
            <Container>
                <Heading>Why Choose Transfective?</Heading>
                <Contents>
                {data.map((item) => (
                    <RoundedComponent 
                        key={item.id} 
                        title={item.title} 
                        content={item.content} 
                        background={item.background} 
                        color={item.color} 
                    />
                ))}
                </Contents>
            </Container>
        </Wrapper>
    )
}

export default WhyChooseSection;