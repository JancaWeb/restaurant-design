import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #d4d2cf;
  width: 80%;
  margin-top: 2rem;
`;

export const FirstRowWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const AnotherMealWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledImage = styled.img`
  height: 10rem;
  margin: 2rem;
`;

export const StyledImageFirstRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

export const MealName = styled.p`
  font-size: 1.5rem;
`;

export const OpenMealButton = styled.button`
  font-size: 1rem;
  width: 50%;
  height: 1.5rem;
  margin: 0 auto;
  border: none;
  background-color: inherit;
  &:hover {
    border: 1px solid;
    cursor: pointer;
  }
`;

export const StyledImageAnotherMealWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  flex-basis: 30%;
`;

export const StyledImageAnotherMeal = styled.img`
  height: 12rem;
  margin: 3rem;
`;