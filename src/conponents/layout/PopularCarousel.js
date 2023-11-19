import React from "react";
import Slider from "react-slick";

import MoonCake1 from "../../images/products-image/mooncake01.jpg";
import MoonCake2 from "../../images/products-image/mooncake02.png";
import MoonCake3 from "../../images/products-image/mooncake03.jpg";
import styled from "styled-components";

const Image = styled.img`
  margin: auto;
  padding: 0 10px;
`
/*function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "green", }}
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}*/
const PopularCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    useCSS:true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings} className="popu">
            <Image src={MoonCake1}></Image>
            <Image src={MoonCake2}></Image>
            <Image src={MoonCake3}></Image>
            <Image src={MoonCake1}></Image>
            <Image src={MoonCake2}></Image>
            <Image src={MoonCake3}></Image>
      </Slider>
      <style>
        {`.popu .slick-prev:before, .popu .slick-next:before {
          color: #363636;
        }`}
      </style>
    </div>
  );
}
export default PopularCarousel;