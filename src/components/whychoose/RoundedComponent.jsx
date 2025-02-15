import React from "react";
import styled from "styled-components";


const Container = styled.div`
    border: 1px solid ${(props) => props.border};
    border-radius: 118px;
    padding: 28px 40px;
    background-color: ${(props) => props.background};
`
const Title = styled.h5`
    font-size: 24px;
    color: ${(props) => props.color};
    margin: 0;
`
const Content = styled.div`
    background: ${(props) => props.background};
    width: 480px;
    color: #5E555C;
`

const RoundedComponent = ({ title, content, color, background }) => {
    return (
        <Container border={color} background={background}>
            <Title color={color}>{title}</Title>
            <Content>{content}</Content>
        </Container>
    )
}

export default RoundedComponent;