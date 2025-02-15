import React from "react";
import styled from "styled-components";
import machine from "../assets/images/machine.png"

const SectionWrapper = styled.div`
    background-color: #EAF7FF;
    padding: 40px;
    border-bottom: 1px solid #ccc;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1090px;
    margin: 0 auto;
    font-family: "quicksand";
`;

const TopBar = styled.div`
    flex: 1;
    display: flex;
`;

const Tab = styled.div`
    background-color: ${(props) => (props.active ? "#FFFFFF" : "transparent")};
    padding: 16px;
    border-radius: ${(props) => (props.active ? "20px 20px 0 0" : "0 0 20px 20px")};
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => (props.active ? "#0072C1" : "#000")};
    cursor: pointer;
    transition: 0.3s ease-in-out;
    border: ${(props) => (props.active ? "1px solid #ccc" : "none")};
    border-bottom: 0;
    width: 250px;
    max-width: 250px;
`;

const ContentBox = styled.div`
    background-color: #FFFFFF;
    padding: 20px;
    border: 1px solid #ccc;
    border-top: 0;
    border-radius: 0 20px 20px 20px;
    display: flex;
    justify-content: space-between;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 635px;
    color: #5E555C;
`

const Heading = styled.h2`
    font-size: 32px;
    color: #222;
    margin: 0;
    margin-bottom: 10px;
    width: 560px;
`;

const Paragraph = styled.div`
    font-size: 16px;
    color: #555;
    line-height: 24.6px;
    margin: 0;
`;

const List = styled.ul`
    margin-top: 10px;
    padding-left: 20px;
`;

const ListItem = styled.li`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 14px;
`;

const ImageContainer = styled.div`
    width: 390px;
`

const Image = styled.img`
    width: 100%;
    border-radius: 16px;
`;

const TranslationSection = () => {
    return (
        <SectionWrapper>
            <Container>
                {/* TopBar with Tabs */}
                <TopBar>
                    <Tab active>Machine Translation with Light Post-Editing</Tab>
                    <Tab>Machine Translation with Full Post-Editing</Tab>
                </TopBar>

                {/* Content Section */}
                <ContentBox>
                    <ImageContainer>
                        <Image src={machine} alt="Translation process" />
                    </ImageContainer>
                    <Content>
                        <Heading>Machine Translation with Light Post-Editing</Heading>
                        <Paragraph>
                            Our light post-editing approach involves minimal intervention by linguists. 
                            They make only essential corrections to ensure the translated content is comprehensible 
                            and retains the original meaning, without aiming for stylistic perfection. This method:
                        </Paragraph>
                        <List>
                            <ListItem>Delivers clear translations free from significant errors.</ListItem>
                            <ListItem>
                                Is ideal for less critical content where speed outweighs precision, potentially 
                                resulting in translations that may seem literal or slightly unnatural.
                            </ListItem>
                        </List>
                    </Content>
                </ContentBox>
            </Container>
        </SectionWrapper>
    );
};

export default TranslationSection;
