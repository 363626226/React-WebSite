import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Userimage from "../../images/header-image/user.png";
import Cartimage from "../../images/header-image/shopping-cart.png";
import Commentimage from "../../images/header-image/comment.png";
import Logolong from "../../images/Logo/logolong.png";
import Container from "../common/container";
import { Link, useLocation } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { Menu,Button, Tree  } from 'antd';
import AuthContext from "../auth/AuthContext";
import RWDmenu from "./RWDmenu";


const Menuitems = [
    {
      label: '中秋專區',
      key: 'mail',
    },
    {
      label: '禮盒系列',
      key: 'Giftbox',
      icon: <DownOutlined />,
      children: [
        {
            label: (
                <a href="#!">2023中秋禮盒</a>
            ),
            key: 'Giftbox-1',
        },
        {
            label: (
                <a href="#!">鳳梨酥、伴手禮盒</a>
            ),
            key: 'Giftbox-2',
        },
        {
            label: (
                <a href="#!">6入9入12入禮盒</a>
            ),
            key: 'Giftbox-3',
        }
      ]
    },
    {
      label: '全系列商品',
      key: 'Alltype',
      icon: <DownOutlined />,
      children: [
        {
            label: (
                <a href="#!">精緻伴手禮</a>
            ),
            key: 'Alltype-1',
        },
        {
            label: (
                <a href="#!">糖果、餅乾</a>
            ),
            key: 'Alltype-2',
        },
      ]
    },
    {
      label: '優惠活動',
      key: 'Discount',
      icon: <DownOutlined />,
      children: [
        {
            label: (
                <a href="#!">2023中秋專區</a>
            ),
            key: 'Discount-1',
        },
        {
            label: (
                <a href="#!">指定品項85折</a>
            ),
            key: 'Discount-2',
        },
      ],
    },
    {
        label: (
          <a href="#!" rel="noopener noreferrer">
            品牌簡介
          </a>
        ),
    },
    {
      label: (
        <a href="#!" rel="noopener noreferrer">
          出貨方式
        </a>
      ),
    },
  ];
const StyledHeader = styled.div`
    width: 100vw;
`
const HeaderTop = styled.div`
    display: flex;
    justify-content: end;
    height: 20px;
    padding:20px;
    @media (max-width:900px ){
        height: 30px;
        /* margin: -10px -10px 0 -10px; */
        padding: 5px 10px;
        background-color: rgba(0,0,0,0.4);
        justify-content: space-between;

        position: fixed;
        z-index: 500;
        width: 100%;
        left: 0;
        top: 0;
    }
`
const HeaderTopFlex = styled.div`
    display: flex;
`
const HeaderTopItem = styled.div`
    a{
        display: flex;
        align-items: center;
        color:#2D2727;
    }
    height: 20px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    @media (max-width: 900px){
        display: none;
    }
`
const HeaderTopItemRWD = styled.div`
    a{
        display: flex;
        align-items: center;
    }
    height: 20px;
    display: none;
    align-items: center;
    padding-right: 5px;
    
    @media (max-width: 900px){
        display: flex;
    }
`
const MenuToggle = styled.div`
    margin-right: 4px;
    span{
        width: 16px;
        height: 2px;
        background-color: #ddd;
        /* position: absolute; */
        left: 50%;
        transform: translate(-50%,0);
        display: block;
    }
    span:nth-child(1){
        top: -3px;
    }
    span:nth-child(2){
        top: 0px;
    }
    span:nth-child(3){
        top: 3px;
    }
`
const MenuLabel = styled.h4`
    display: inline-block;
    color: #ddd;
    a{
        color: #ddd;
    }
`
const HeaderMid = styled.div`
    height: 64px;
    @media (max-width:900px){
        margin-top: 30px;
    }
`
const Logo = styled.a`
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
const HeaderBottom = styled.div`
    height: 64px;
    display: block;
    @media (max-width: 900px){
        display: none;
    }
    @media (min-width: 901px){
        display: block;
    }
`
const Menuflex = styled.div`
    display: flex;
    justify-content: center;
`
const Logout = styled(Button)`
    margin-left: 4px;
    padding: 0 4px;
`
const RWDmenudiv = styled.div`
    display: ${(props) => (props.visible ? 'block' : 'none')};
`

const Header = () =>{
    const {isAuthenticated,logout} = useContext(AuthContext);
    const location = useLocation();
    const [username, setUsername] = useState();
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
      setMenuVisible((prevVisible) => !prevVisible);
    };
    useEffect(() => {
        const { state } = location;
        if(state && state.username){
            setUsername(state.username);
        }
    },[location])
    return(
        <StyledHeader>
            <RWDmenudiv visible={menuVisible}>
                <RWDmenu />
            </RWDmenudiv>
            <HeaderTop>
                <HeaderTopFlex>
                    <HeaderTopItemRWD onClick={toggleMenu} style={{cursor:'pointer'}}>
                        <MenuToggle>
                            <span></span>
                            <span></span>
                            <span></span>
                        </MenuToggle>
                        <MenuLabel>
                              選單
                        </MenuLabel>
                    </HeaderTopItemRWD>
                </HeaderTopFlex>
                <HeaderTopFlex>
                    <HeaderTopItemRWD>
                        <MenuLabel>
                            {isAuthenticated ? <Link to ="/login">{username}</Link> : <Link to ="/login">登入</Link>}
                        </MenuLabel>
                    </HeaderTopItemRWD>
                    <HeaderTopItemRWD>
                        <MenuLabel>
                            <Link to ="/mall">
                                購物車
                            </Link>
                        </MenuLabel>
                    </HeaderTopItemRWD>
                </HeaderTopFlex>
                <HeaderTopItem>
                    {isAuthenticated ? 
                    <Link to ="/member">
                        <img src={Userimage} alt="userimage" height={20} ></img>
                        <span>{username}</span>
                    </Link>
                    :
                    <Link to ="/login">
                        <img src={Userimage} alt="userimage" height={20} ></img>
                        <span>會員登入</span>
                    </Link>
                    }
                </HeaderTopItem>
                <HeaderTopItem>
                    <a href="#!">
                        <img src={Cartimage} alt="cartimage" height={20} ></img>
                        <span>購物車</span>
                    </a>
                </HeaderTopItem>
                <HeaderTopItem>
                    <a href="#!">
                        <img src={Commentimage} alt="commonimage" height={20} ></img>
                        <span>聯絡我們</span>
                    </a>
                    {isAuthenticated ? 
                    <Link to ="/">
                        <Logout onClick={() => logout()}>登出</Logout>
                    </Link>
                    :''
                    }
                </HeaderTopItem>
            </HeaderTop>
            <HeaderMid>
                <Container>
                    <Logo href="#!">
                        <h1>This is my Brand</h1>
                    </Logo>
                </Container>
            </HeaderMid>
            <HeaderBottom>
                <Container>
                    <Menuflex>
                        <Menu mode="horizontal" items={Menuitems} />
                    </Menuflex>
                </Container>
            </HeaderBottom>
        </StyledHeader>
    )
}
 
export default Header;

