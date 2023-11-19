import React from "react";
import DefualtLayout from "../conponents/layout/DefaultLayout";
import Container from "../conponents/common/container";
import styled from "styled-components";
import ArrowDown from "../images/header-image/arrow-down.png";
import { Link } from "react-router-dom";
import { DownOutlined, SmileOutlined,AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, message,Menu, Space  } from 'antd';
import ProductCart from "../conponents/product/ProductCard";
import GiftBox1 from "../images/products-image/giftbox01.jpg";
import GiftBox2 from "../images/products-image/giftbox02.jpg";
import GiftBox3 from "../images/products-image/giftbox03.jpg";
import MoonCake1 from "../images/products-image/mooncake01.jpg";
import MoonCake2 from "../images/products-image/mooncake02.png";
import MoonCake3 from "../images/products-image/mooncake03.jpg";

const onClick = ({ key }) => {
  message.info(`${key}`);
};
const items = [
  {
    label: '上架時間:從新到舊',
    key: '上架時間:從新到舊',
  },
  {
    label: '上架時間:從舊到新',
    key: '上架時間:從舊到新',
  },
  {
    label: '價格:從高到低',
    key: '價格:從高到低',
  },
  {
    label: '價格:從高到低',
    key: '價格:從高到低',
  },
];

const FlexBox = styled.div`
  display: flex;
  align-items: flex-start;
`
const ProductListMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  width: 30%;
  min-width: 220px;
`
const ProductListBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 69%;
  top:0px;
`
const MenuContent = styled.ul`
  /* margin-left: 50px; */
  li{
    list-style: square;
  }
`
const MenuTitle = styled.div`
  display: block;
  font-size: 24px;
  padding: 10px;
  list-style: none;
`
const MenuLink = styled(Link)`
  display: block;
  color: #333;
  text-align: left;
  font-size: 16px;
  margin-bottom: 16px;
  border: none;
`
const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 30px;
`
const BlockTitle = styled.h1`
    padding: 24px 0;
    color: #765827;
    margin: 0;
`
const ProductCollectionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const ProductContainer = styled.div`
    width: 25%;
    padding: 4px;
    text-align: left;
    @media (max-width:768px){
        width: 50%;
    }
    @media (max-width:540px){
        width: 100%;
    }
`
const ProductListPage = () => {
    return (
      <DefualtLayout>
        <FlexBox>
          <ProductListMenu>
                <MenuTitle>
                  禮盒列表
                  <img src={ArrowDown} alt="" height={20} ></img>
                </MenuTitle>
                <MenuContent>
                    <MenuLink to={"/product_list"}><li>- 2023中秋禮盒</li></MenuLink>
                    <MenuLink to={"/product_list"}><li>- 鳳梨酥、伴手禮盒</li></MenuLink>
                    <MenuLink to={"/product_list"}><li>- 6入9入12入禮盒</li></MenuLink>
                </MenuContent>

                <MenuTitle>
                  商品
                  <img src={ArrowDown} alt="" height={20} ></img>
                </MenuTitle>
                <MenuContent>
                    <MenuLink to={"/product_list"}><li>- 精緻伴手禮</li></MenuLink>
                    <MenuLink to={"/product_list"}><li>- 糖果、餅乾</li></MenuLink>
                </MenuContent>

          </ProductListMenu>
          <ProductListBody>
            <TitleBar>
              <BlockTitle>
                商品列表
              </BlockTitle>
              <Dropdown
                menu={{
                  items,
                  onClick,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    商品排序
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </TitleBar>

            <ProductCollectionContainer>
                <ProductContainer>
                    <Link to="/mall/p001">
                        <ProductCart title="禮盒一" coverUrl={GiftBox1} salePrice={[100]} listPrice={[200]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/mall/p002">
                        <ProductCart title="禮盒二" coverUrl={GiftBox2} salePrice={[100]} listPrice={[200]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/mall/p003">
                        <ProductCart title="禮盒三" coverUrl={GiftBox3} salePrice={[100]} listPrice={[200]}/>
                    </Link>
                </ProductContainer>
                <ProductContainer>
                    <Link to="/mall/p004">
                        <ProductCart title="禮盒四" coverUrl={GiftBox1} salePrice={[100]} listPrice={[200]}/>
                    </Link>
                </ProductContainer>
            </ProductCollectionContainer>
          </ProductListBody>
        </FlexBox>
      </DefualtLayout>

    )
}

export default ProductListPage;