import React from "react";
import styled from "styled-components";
import Container from "../conponents/common/container";
import Logolong from "../images/Logo/logolong.png";
import LoginForm from "../conponents/auth/LoginForm";
import Footer from "../conponents/layout/Footer";
import { Link } from "react-router-dom";

const StyledLoginBox = styled.div`
  width: 50%;
  height: 300px;
  margin: auto;
  border-radius: 3px;
  background-color: #EBE3D5;
  padding: 48px;
`
const LoginLabel = styled.h1`
  margin-top: 0px;
`
const LoginHeader = styled.div`
  padding:10px;
  height: 84px;
`
const Logo = styled(Link)`
    display: inline-block;
    vertical-align: top;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    width: 300px;
    height: 64px;
    background-image: url(${Logolong});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: red;
    white-space: nowrap;
    text-indent: 100%;
    overflow: hidden;
`
const LoginPage = () => {
  return(
  <div>
    <Container>
      <LoginHeader>
        <Logo to={"/mall"}>
            <h1>This is my Brand</h1>
        </Logo>

      </LoginHeader>

      <StyledLoginBox>
        <LoginLabel>會員登入</LoginLabel>
        <LoginForm />
      </StyledLoginBox>
    </Container>
    <Footer></Footer>
    </div>
  ) 
}

export default LoginPage;