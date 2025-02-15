// src/components/Header.jsx
import React from "react";
import logo from "../assets/images/logo.png"
import styled from "styled-components";
import arrowDown from "../assets/icons/arrow-down.svg"
import arrowDownWhite from "../assets/icons/arrow-down-white.svg"


const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    font-family: 'outfit', sans-serif;
`
const Logo = styled.div`
    width: 296px;
`
const Img = styled.img`
    display: block;
    width: 100%;
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
`

const GreenTab = styled.div`
    display: flex;
    gap: 8px;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: #119391;
    color: #FFFFFF;
`
const Tab = styled.div`
    padding: 5px 8px;
`

const Lang = styled.div`
    display: flex;
    gap: 8px;
    border: 1px solid #EEEEEE;
    border-radius: 8px;
    padding: 5px 10px;
`
const ArrowDown = styled.div`
    width: 14px;
    height: 14px;
`
const Icon = styled.img`
    width: 100%;
`


const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Img src={logo} alt="Logo" />
      </Logo>

      <Nav>
        <GreenTab>
            <span>Services</span>
            <ArrowDown>
                <Icon src={arrowDownWhite} alt="ArrowDown" />
            </ArrowDown>
        </GreenTab>

        <GreenTab>
            <span>Sectors</span>
            <ArrowDown>
                <Icon src={arrowDownWhite} alt="ArrowDown" />
            </ArrowDown>
        </GreenTab>

        <Tab>Our Process</Tab>
        <Tab>Technology</Tab>
        <Tab>Blog</Tab>

        <GreenTab>
            <span>Contact</span>
        </GreenTab>

        <Lang>
            <span>EN</span>
            <ArrowDown>
                <Icon src={arrowDown} alt="Arrow Down" />
            </ArrowDown>
        </Lang>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
