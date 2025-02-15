import React, { useState } from "react";
import styled from "styled-components";
import blue from "../assets/icons/ellipse-blue.svg"
import white from "../assets/icons/ellipse-white.svg"

const Section = styled.section`
    border-bottom: 1px solid #ccc;
`
const SectionWrapper = styled.div`
    padding: 40px 0;
    border-radius: 8px;
    max-width: 1090px;
    margin: 0 auto;
    font-family: "outfit", sans-serif;
`;

const Title = styled.h2`
    font-size: 32px;
    color: #222;
    margin-bottom: 20px;
`;

const QuestionList = styled.dl`
    margin-top: 20px;
`;
const QuestionLi = styled.dd`
    display: list-item;
    list-style-image: url(${(props) => props.active ? blue : white});
    padding-inline-start: 1ch;
`

const QuestionContainer = styled.div`
    padding: 15px 0;
    cursor: pointer;
    display: flex;
    align-items: top;
    justify-content: space-between;
    color: #121212;
`;

const Question = styled.div`
    font-size: ${(props) => props.active ? "24px" : "20px"};
    color: #222;
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    width: ${(props) => props.active ? "30%" : ""};
`;

const Icon = styled.span`
    font-size: 20px;
`;

const Answer = styled.div`
    font-size: 14px;
    line-height: 1.6;
    width: 65%;
`;

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What is Neural Machine Translation?",
            answer: `Neural Machine Translation utilizes a sophisticated algorithm that learns from human-generated translations to enhance fluency, morphological agreement, and the understanding of context and semantics. By harnessing advanced deep learning technologies, NMT marks a significant advancement in the evolution of machine translation (MT), making it smarter and more efficient.`,
        },
        { question: "How does Machine Translation operate?" },
        { question: "Which languages are supported by Neural Machine Translation?" },
        { question: "What Machine Translation services are available?" },
        { question: "Where and how is Machine Translation applied?" },
        { question: "What are the advantages of Machine Translation?" },
        { question: "What are the cost and time savings offered by Machine Translation?" },
        { question: "What differentiates human translation from machine translation?" },
        { question: "Clarifying Common Misconceptions" },
    ];

    return (
        <Section>
            <SectionWrapper>
                <Title>You may find the following insights on Neural Machine Translation (NMT) and its applications valuable:</Title>
                <QuestionList>
                    {faqData.map((item, index) => (
                        <QuestionLi key={index} active={activeIndex === index}>
                            <QuestionContainer active={activeIndex === index} onClick={() => toggleFAQ(index)}>
                                <Question active={activeIndex === index}>{item.question}</Question>
                                {activeIndex === index && item.answer && (
                                    <Answer>
                                        {item.answer}{" "}
                                    </Answer>
                                )}
                                <Icon>{activeIndex === index ? "—" : "+"}</Icon>
                            </QuestionContainer>
                        </QuestionLi>
                    ))}
                </QuestionList>
            </SectionWrapper>
        </Section>
    );
};

export default FaqSection;
