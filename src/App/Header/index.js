import React from 'react';
import { withRouter } from 'react-router-dom';

import { 
  HeaderWrapper,
  HeaderItem
} from './styled';

const HeaderComponent = ({location: { pathname }}) => (
  <HeaderWrapper>
    <HeaderItem to="/restaurant-design/" isActive={pathname === '/restaurant-design/'}>Главная</HeaderItem>
    <HeaderItem to="/restaurant-design/menu">Меню</HeaderItem>
    <HeaderItem to="/restaurant-design/main-chef">Шеф-повор</HeaderItem>
    <HeaderItem to="/restaurant-design/contacts">Контактная информация</HeaderItem>
  </HeaderWrapper>
);

export const Header = withRouter(HeaderComponent);
