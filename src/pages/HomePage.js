import React from "react";
import DefualtLayout from "../conponents/layout/DefaultLayout";
import Container from "../conponents/common/container";
import styled from "styled-components";
import Banner1 from "../images/banner-image/banner3.jpg";
import Banner2 from "../images/banner-image/banner1.jpg";
import Banner3 from "../images/banner-image/banner05.jpg";
import ProductCart from "../conponents/product/ProductCard";
import GiftBox1 from "../images/products-image/giftbox01.jpg";
import GiftBox2 from "../images/products-image/giftbox02.jpg";
import GiftBox3 from "../images/products-image/giftbox03.jpg";
import MoonCake1 from "../images/products-image/mooncake01.jpg";
import MoonCake2 from "../images/products-image/mooncake02.png";
import MoonCake3 from "../images/products-image/mooncake03.jpg";
import { Link } from "react-router-dom";
import FeedbackCarousel from "../conponents/layout/FeedbackCarousel";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PopularCarousel from "../conponents/layout/PopularCarousel";



const StyledSection = styled.section`
    width: 100vw;
`
const SectionBanner = styled.div`
    width: 100%;
    padding: 0;
`
const BlockPrimary = styled.div`
    background-color: #efefef;
`
const BlockSecondary = styled.div`
    background-color: #fefefe;
`
const BlockTitle = styled.h1`
    padding: 24px 0;
    color: #765827;
    margin: 0;
`
const BlockSubtitle = styled.h2`
  padding: 16px 0;
  color: #ffc436;
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
const FeedBack = styled.div`
    background-color: #efefef;
    padding-bottom: 32px;
`
const Popular = styled.div`
    background-color: #fefefe;
    padding-bottom: 32px;
`
const HomePopularCarousel = styled(PopularCarousel)`
    color: black;
`
const HomePage = () => {
    return (
        <DefualtLayout>
            <StyledSection>
                <SectionBanner>
                    <img src={Banner1} alt="Banner" style={{width:'100%'}}></img>
                </SectionBanner>
            </StyledSection>
            <BlockPrimary>
                <Container>
                    <BlockTitle>2023中秋節禮盒．預購中！</BlockTitle>
                    <BlockSubtitle>【傳情意，溫暖心。今年中秋，熱情繼承，禮盒呈獻。悅環保，共節慶】</BlockSubtitle>
                    <img src={Banner2} alt="Banner" style={{width:'100%', padding:'16px'}}></img>
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
                </Container>
            </BlockPrimary>
            <BlockSecondary>
                <Container>
                    <BlockTitle>餅香時光，情懷同行</BlockTitle>
                    <BlockSubtitle>中秋品味之旅。舉辦品鑒活動，讓顧客品味不同口味的傳統餅食，同時講述每款餅食背後的故事和傳統文化，強調經典的傳承。</BlockSubtitle>
                    <img src={Banner3} alt="Banner" style={{width:'100%', padding:'16px'}}></img>
                    <ProductCollectionContainer>
                        <ProductContainer>
                            <Link to="/mall/p001">
                                <ProductCart title="禮盒一" coverUrl={MoonCake1} salePrice={[100]} listPrice={[200]}/>
                            </Link>
                        </ProductContainer>
                        <ProductContainer>
                            <Link to="/mall/p001">
                                <ProductCart title="禮盒二" coverUrl={MoonCake2} salePrice={[100]} listPrice={[200]}/>
                            </Link>
                        </ProductContainer>
                        <ProductContainer>
                            <Link to="/mall/p001">
                                <ProductCart title="禮盒三" coverUrl={MoonCake3} salePrice={[100]} listPrice={[200]}/>
                            </Link>
                        </ProductContainer>
                        <ProductContainer>
                            <Link to="/mall/p001">
                                <ProductCart title="禮盒四" coverUrl={MoonCake1} salePrice={[100]} listPrice={[200]}/>
                            </Link>
                        </ProductContainer>
                    </ProductCollectionContainer>
                </Container>
            </BlockSecondary>
            <FeedBack>
                <Container>
                    <BlockTitle>顧客回饋</BlockTitle>
                    <FeedbackCarousel />
                </Container>
            </FeedBack>
            <Popular>
                <Container>
                    <BlockTitle>熱銷商品</BlockTitle>
                    <HomePopularCarousel />

                </Container>

            </Popular>
        </DefualtLayout>
    )
}

export default HomePage;