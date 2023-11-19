import React from "react";
import styled from "styled-components";
import Container from "../common/container";
import Logo from "../../images/Logo/logo.jpg";
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
    width: 100vw;
`
const FooterFlex = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0px;
`
const FooterLogoBox = styled.div`
    width: 40%;
`
const FooterLogo = styled.img`
    @media (max-width:900px){
        width: 70%;
    }
`
const FooterMenu = styled.div`
    width: 59%;
    height: 100%;
`
const FooterRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`
const FooterColumn = styled.div`
    width: 33.33%;
    display: flex;
    flex-direction: column;
    a{
        display: flex;
        justify-content: center;
        margin: 10px 0px;
        color:#333;
        font-weight: 600;
    }
`
const FooterColumnTitle = styled.h2`
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    @media (max-width:768px){
        font-size: 16px;
    }
`
const StyledLink = styled(Link)`

    @media (max-width: 768px) {
        font-size: 12px; 
    }
`;

const Footer = () =>{
    return(
        <StyledFooter>
            <Container>
                <FooterFlex>
                    <FooterLogoBox>
                        <FooterLogo src={Logo}></FooterLogo>
                        {/* <img src={Logo} alt="Logo"></img> */}
                    </FooterLogoBox>
                    <FooterMenu>
                        <FooterRow>
                            <FooterColumn>
                                <FooterColumnTitle>網站總覽</FooterColumnTitle>
                                <StyledLink to='#!'>首頁</StyledLink>
                                <StyledLink to='#!'>產品列表</StyledLink>
                                <StyledLink to='#!'>認識我們</StyledLink>
                                <StyledLink to='#!'>聯絡我們</StyledLink>
                                <StyledLink to='#!'></StyledLink>
                            </FooterColumn>
                            <FooterColumn>
                                <FooterColumnTitle>顧客須知</FooterColumnTitle>
                                <StyledLink to='#!'>退換貨流程</StyledLink>
                                <StyledLink to='#!'>常見問題</StyledLink>
                                <StyledLink to='#!'>服務條款</StyledLink>
                                <StyledLink to='#!'>隱私權政策</StyledLink>
                                <StyledLink to='#!'></StyledLink>
                            </FooterColumn>
                            <FooterColumn>
                            <FooterColumnTitle>企業合作</FooterColumnTitle>
                                <StyledLink to='#!'>招商專區</StyledLink>
                                <StyledLink to='#!'>媒體連繫</StyledLink>
                            </FooterColumn>

                        </FooterRow>
                    </FooterMenu>
                </FooterFlex>
            </Container>
        </StyledFooter>
    )
}
 
export default Footer;

