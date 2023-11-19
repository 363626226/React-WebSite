import React from "react";
import Slider from "react-slick";

import MoonCake1 from "../../images/products-image/mooncake01.jpg";
import MoonCake2 from "../../images/products-image/mooncake02.png";
import MoonCake3 from "../../images/products-image/mooncake03.jpg";
import styled from "styled-components";

// const SquareImage = styled.div`
//   padding: 30%;
//   background-position: center;
//   background-image: ${(props) => `url(${props.src})`};
//   background-size:cover;
// `
const Image = styled.img`
  margin: auto;
  padding: 0 10px;
`

const FeedbackCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    cssEase:"linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
            <Image src={MoonCake2}></Image>
            <Image src={MoonCake2}></Image>
            <Image src={MoonCake2}></Image>
            <Image src={MoonCake2}></Image>
            <Image src={MoonCake2}></Image>
            <Image src={MoonCake2}></Image>

            {/* <SquareImage src={MoonCake1} style={{padding:10}}></SquareImage>
            <SquareImage src={MoonCake1}></SquareImage>
            <SquareImage src={MoonCake1}></SquareImage>
            <SquareImage src={MoonCake1}></SquareImage>
            <SquareImage src={MoonCake1}></SquareImage>
            <SquareImage src={MoonCake1}></SquareImage> */}
      </Slider>
    </div>
  );
}
export default FeedbackCarousel;

/*export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      auto:true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}*/