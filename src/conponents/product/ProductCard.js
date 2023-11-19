import React from "react";
import styled from "styled-components";
import { Card } from 'antd';
const { Meta } = Card;

const CustomCard = styled(Card)`
  .ant-card-body {
    padding: 8px; /* 调整 padding 大小，根据你的需求修改 */
  }
`;
const SquareImage = styled.div`
  padding: 50%;
  background-position: center;
  background-image: ${(props) => `url(${props.src})`};
  background-size:cover;
`
const ListPriceLabel = styled.span`
  color: #757575;
  margin-right: 4px;
  text-decoration: line-through;
`
const SalePriceLabel = styled.span`
  color: #ee4c2d;
`

const ProductCart = ({coverUrl,title,listPrice,salePrice,discountPercentage,salesNumber,rating,isLiked}) => (

  <CustomCard
    hoverable
    style={{}}
    cover={<SquareImage src={coverUrl} />}
  >
    <Meta title={title} description={<div>
      {listPrice && listPrice.length > 0 && (
      <ListPriceLabel>${listPrice[0]}</ListPriceLabel>)}
      {salePrice && salePrice.length > 0 && (
      <SalePriceLabel>${salePrice[0]}</SalePriceLabel>)}
    </div>} />
  </CustomCard>
)

export default ProductCart;