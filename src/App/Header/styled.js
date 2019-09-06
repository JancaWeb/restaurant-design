import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  background-color: #000;
  color: #d4d2cf;
  font-family: 'Open Sans Condensed';
  padding: 2rem;
`;

export const HeaderItem = styled(({ isActive, ...rest }) => <NavLink {...rest} />)`
  font-size: 1.5rem;
  color: ${props => props.isActive ? '#fff' : 'inherit'};
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${props => props.isActive ? '#fff' : '#d4d2cf'};
  text-decoration: none;
  margin: 0 2rem;
  letter-spacing: 0.1em;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;