import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Flex, Input, message } from "antd";
import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import AuthContext from "./AuthContext";
import styled from "styled-components";

const FlexBox = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginForm = () => {
  const navigate = useNavigate();
  const {login,isAuthenticated} = useContext(AuthContext);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const handleLogin = () =>{
    login(username,password).then(({token,error}) => {
      if (!token){
        message.error(error);
      }
    });
  };

  useEffect(() => {
    isAuthenticated && navigate('/mall',{ state: { username }});
  },[isAuthenticated]);
  return (
    <div>
      <FlexBox>
        <Input 
        style={{width:200}} 
        placeholder="Account" 
        prefix={<UserOutlined />} 
        value={username}
        onChange={e => setUsername(e.target.value)}
        />
        <Input 
        style={{width:200}} 
        type="password" 
        placeholder="Password" 
        prefix={<LockOutlined />} 
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>登入</Button>
      </FlexBox>
    </div>
  )
}
export default LoginForm;