import React, { useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import items from './items';

import {
  Nav,
  Logo,
  Ul,
  Li,
  MenuIcon,
} from './styles';

const Header: React.VFC = () => {
  const [isOpen, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Nav>
      <Logo>Chiyoku</Logo>
      {(isOpen || !isMobile) && (
        <Ul>
          {items.map((item) => (
            <Li key={item.name}>
              <Link to={item.url}>
                {item.name}
              </Link>
            </Li>
          ))}
        </Ul>
      )}
      {isMobile && (
        <MenuIcon onClick={() => setOpen(!isOpen)}>
          {!isOpen ? <BsList /> : <BsX />}
        </MenuIcon>
      )}
    </Nav>
  );
};

export default Header;
