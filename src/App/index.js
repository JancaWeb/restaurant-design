import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

import { HomePage } from './HomePage';
import { Header } from './Header';
import { Menu } from './Menu';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap');
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap');
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 16px;
    margin: 0;
  }

  p {
    margin: 0;
  }
`

export const App = () => (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Route path="/restaurant-design/" exact component={HomePage} />
      <Route path="/restaurant-design/menu" component={Menu} />
    </BrowserRouter>
);
