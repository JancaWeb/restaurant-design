import styled from 'styled-components';

export const SliderImageWrapper = styled.div`
  display: ${props => props.isActive ? 'flex' : 'none'};
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  width: 100%;
`;

export const SliderImage = styled.img`
  width: 100%;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowContainer = styled.p`
  width: 10px;
  height: 10px;
`;

export const LeftArrow = styled.i`
  border: solid #d4d2cf;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 7px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  &:hover {
    cursor: pointer;
    border: solid #000;
    border-width: 0 3px 3px 0;
  }
`;

export const RightArrow = styled.i`
  border: solid #d4d2cf;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 7px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transition: padding 0.3s linear;
  &:hover {
    cursor: pointer;
    border: solid #000
    border-width: 0 3px 3px 0;
  }
`;

export const ImageWrapper = styled.div`
  margin: 1rem;
  width: 100%;
`;

export const MealDescription = styled.p`
  margin-top: 2rem;
  font-size: 2.5rem;
  text-align: center;
`;