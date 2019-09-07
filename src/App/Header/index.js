import React from 'react';
import { withRouter } from 'react-router-dom';

import { HeaderMobile } from './HeaderMobile';
import { 
  HeaderWrapper,
  HeaderItem
} from './styled';

const HeaderComponent = ({location: { pathname }}) => {


  return (
    <HeaderWrapper>
      <HeaderMobile />
      <HeaderItem to="/restaurant-design/" isActive={pathname === '/restaurant-design/'}>Главная</HeaderItem>
      <HeaderItem to="/restaurant-design/menu" isActive={pathname === '/restaurant-design/menu'}>Меню</HeaderItem>
      <HeaderItem to="/restaurant-design/main-chef" isActive={pathname === '/restaurant-design/main-chef'}>Шеф-повар</HeaderItem>
      <HeaderItem to="/restaurant-design/contacts" isActive={pathname === '/restaurant-design/contacts'}>Контактная информация</HeaderItem>
    </HeaderWrapper>
  )
};

export const Header = withRouter(HeaderComponent);
