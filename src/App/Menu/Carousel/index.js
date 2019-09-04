import React from 'react';

import menuImage1 from "../../../images/menuImage1.jpg";
import menuImage2 from "../../../images/menuImage2.jpg";
import menuImage3 from "../../../images/menuImage3.jpg";
import menuImage4 from "../../../images/menuImage4.jpg";
import menuImage5 from "../../../images/menuImage5.jpg";
import menuImage6 from "../../../images/menuImage6.jpg";
import menuImage7 from "../../../images/menuImage7.jpg";
import menuImage8 from "../../../images/menuImage8.jpg";
import menuImage9 from "../../../images/menuImage9.jpg";
import menuImage10 from "../../../images/menuImage10.jpeg";

import { SliderImage, SliderImageWrapper, CarouselWrapper } from './styled';



export const Slider = ({carouselIndex}) => (
  <CarouselWrapper>
    <SliderImageWrapper>
      <SliderImage src={menuImage1} />
    </SliderImageWrapper>
    <SliderImageWrapper>
      <SliderImage src={menuImage2} />
    </SliderImageWrapper>
    <SliderImageWrapper>
      <SliderImage src={menuImage3} />
    </SliderImageWrapper>
    <SliderImageWrapper>
      <SliderImage src={menuImage4} />
    </SliderImageWrapper>
    <SliderImageWrapper>
      <SliderImage src={menuImage5} />
    </SliderImageWrapper>
    <SliderImageWrapper>
      <SliderImage src={menuImage6} />
    </SliderImageWrapper>
    <SliderImageWrapper>
      <SliderImage src={menuImage7} />
    </SliderImageWrapper>
    <SliderImageWrapper>
      <SliderImage src={menuImage8} />
    </SliderImageWrapper>
    <SliderImageWrapper>
      <SliderImage src={menuImage9} />
    </SliderImageWrapper>
    <SliderImageWrapper>
      <SliderImage src={menuImage10} />
    </SliderImageWrapper>
  </CarouselWrapper>
)