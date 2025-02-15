import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import map from "../assets/images/map.png"

const Wrapper = styled.div`
    width: 1380px;
    margin: 0 auto;
`

const Container = styled.div`
    padding: 80px 40px;
`

const Logo = styled.div`
    width: 296px;
    margin-bottom: 40px;
`
const Img = styled.img`
    width: 100%;
    display: block;
`
const Section = styled.div`
    display: flex;
    gap: 60px;
    font-family: 'roboto';
`

const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    color: #5E555C;
`
const SectionContentTitle = styled.span`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 12px;
    white-space: nowrap;
`
const SectionContentItem = styled.a`
    text-decoration: none;
    color: #5E555C;
    display: inline-block;
    width: fit-content;
    white-space: nowrap;
`

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Logo>
                    <Img src={logo} alt="Logo" />
                </Logo>
                <Section>
                    <SectionContent>
                        <SectionContentTitle>Quick Links</SectionContentTitle>
                        <SectionContentItem href="#">About Us</SectionContentItem>
                        <SectionContentItem href="#">Blog</SectionContentItem>
                        <SectionContentItem href="#">Our Process</SectionContentItem>
                        <SectionContentItem href="#">Technology</SectionContentItem>
                        <SectionContentItem href="#">Industries</SectionContentItem>
                    </SectionContent>

                    <SectionContent>
                        <SectionContentTitle>Services</SectionContentTitle>
                        <SectionContentItem href="#">Translation Services</SectionContentItem>
                        <SectionContentItem href="#">Software Localization & Testing</SectionContentItem>
                        <SectionContentItem href="#">Desktop Publishing Services</SectionContentItem>
                        <SectionContentItem href="#">Training & E-Learning Services</SectionContentItem>
                        <SectionContentItem href="#">Website Localization Services</SectionContentItem>
                        <SectionContentItem href="#">Multimedia Services</SectionContentItem>
                        <SectionContentItem href="#">Multicultural Marketing Services</SectionContentItem>
                        <SectionContentItem href="#">Call Center Support Services</SectionContentItem>
                        <SectionContentItem href="#">Interpretation Services</SectionContentItem>
                        <SectionContentItem href="#">Legal Services</SectionContentItem>
                    </SectionContent>

                    <SectionContent>
                        <SectionContentTitle>Industries</SectionContentTitle>
                        <SectionContentItem href="#">E Commerce Retail</SectionContentItem>
                        <SectionContentItem href="#">Life Sciences</SectionContentItem>
                        <SectionContentItem href="#">Legal</SectionContentItem>
                        <SectionContentItem href="#">Multimedia Entertainment</SectionContentItem>
                        <SectionContentItem href="#">Banking Finance</SectionContentItem>
                        <SectionContentItem href="#">Advertising, Marketing & PR</SectionContentItem>
                        <SectionContentItem href="#">Government</SectionContentItem>
                        <SectionContentItem href="#">Hardware, Software & Technology</SectionContentItem>
                        <SectionContentItem href="#">Energy & Mining</SectionContentItem>
                        <SectionContentItem href="#">Travel & Hospitality</SectionContentItem>
                        <SectionContentItem href="#">Industrial & Manufacturing</SectionContentItem>
                    </SectionContent>

                    <SectionContent>
                        <Img src={map} alt="map" />
                    </SectionContent>
                </Section>
            </Container>
        </Wrapper>
    )
}

export default Footer;