import styled from 'styled-components';

import mainImage from '../images/mainImage.jpg';

export const MainWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${mainImage});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GrowWrapper = styled.div`
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.025);
  }
`;