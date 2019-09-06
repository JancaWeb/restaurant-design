import styled from 'styled-components';
import { Input } from 'reactstrap';

import mainImage from '../../images/mainImage.jpg';

export const ContactsTitle = styled.h2`
  padding: 0 5rem;
  margin: 0;
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 10px;
  color: #000;
  font-weight: bold;
`;

export const ContactsTitleWrapper = styled.div`
  padding: 1rem
  background-color: #f5f0ed;
  width: fit-content;
  text-align: left;
  opacity: 0.5;
`;

export const MainWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${mainImage});
  padding: 2rem;
`;

export const ContactsFormWrapper = styled.div`
  background-color: #d9cfce;
  width: 80%;
  display: flex;
  justify-content: space-around;
  padding: 3rem 1rem;
  margin: 2rem auto;
`; 

export const AddressDescription = styled.p`
  font-size: 1.5rem;
  letter-spacing: 10px;
  font-weight: bold;
`;

export const InputWrapper = styled.div`
  width: 50%;
`;

export const StyledInput = styled(Input)`
  width: 70%;
  margin-bottom: 1rem;
`;