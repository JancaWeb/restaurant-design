import styled from 'styled-components';

import mainImageMeal from '../../images/mainImageMeal.jpg';

export const HomePageMealWrapper = styled.div`
  background-image: url(${mainImageMeal});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 80%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ChefImage = styled.img`
  position: absolute;
  height: 30rem;
  top: 0px;
  right: 20px;
  opacity: 0.8;
`;

export const HomePageTitleItem = styled.h3`
  font-family: 'IBM Plex Serif', serif;
  font-size: 3rem;
  margin: 3rem 0 0 1rem;
  background-color: #d4d2cf;
  width: fit-content;
  padding: 1rem 5rem;
  opacity: 0.9;
  border-radius: 5px;
`;