import React from 'react';

import { MainWrapper } from '../styled';

import { ContactsTitle, ContactsTitleWrapper } from './styled';

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
  </MainWrapper> 
);