import React from 'react';
import items from './items';

import {
  Nav,
  Logo,
  Ul,
  Li,
} from './styles';

const Header: React.VFC = () => (
  <Nav>
    <Logo>Chiyoku</Logo>
    <Ul>
      {items.map((item) => (
        <Li key={item.name}>
          <a href={item.url}>
            {item.name}
          </a>
        </Li>
      ))}
    </Ul>
  </Nav>
);

export default Header;
