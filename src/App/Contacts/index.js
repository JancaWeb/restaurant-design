import React from 'react';

import { Input } from 'reactstrap';

import { 
  ContactsTitle, 
  ContactsTitleWrapper, 
  MainWrapper,
  ContactsFormWrapper,
  AddressDescription,
  InputWrapper,
  StyledInput
} from './styled';

export const Contacts = () => (
  <MainWrapper>
    <ContactsTitleWrapper>
      <ContactsTitle>
        Контактная
      </ContactsTitle>
      <ContactsTitle>
        информация 
      </ContactsTitle>
    </ContactsTitleWrapper>
    <ContactsFormWrapper>
      <InputWrapper>
        <StyledInput type="text" />
        <StyledInput type="text" />
        <Input type="textarea" rows={5}/>
      </InputWrapper>
      <div>
        <AddressDescription>Кухня</AddressDescription>
        <AddressDescription>Россия</AddressDescription>
        <AddressDescription>15035, у л. Балчуг, 7</AddressDescription>
        <AddressDescription>Тел.: +7(495) 000 00 00</AddressDescription>
        <AddressDescription>info@mysite.com</AddressDescription>
      </div>
    </ContactsFormWrapper>
  </MainWrapper> 
);