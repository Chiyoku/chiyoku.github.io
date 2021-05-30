import React, { useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'gatsby';
import items from './items';

import {
  Nav,
  Logo,
  Ul,
  Li,
  MenuIcon,
  NavBarProps,
} from './styles';

const Header: React.VFC<NavBarProps> = ({ theme }: NavBarProps) => {
  const [isOpen, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Nav theme={theme}>
      <Logo>Chiyoku</Logo>
      {(isOpen || !isMobile) && (
        <Ul theme={theme}>
          {items.map((item) => (
            <Li key={item.name} theme={theme}>
              <Link to={item.url}>
                {item.name}
              </Link>
            </Li>
          ))}
        </Ul>
      )}
      {isMobile && (
        <MenuIcon theme={theme} onClick={() => setOpen(!isOpen)}>
          {!isOpen ? <BsList /> : <BsX />}
        </MenuIcon>
      )}
    </Nav>
  );
};

export default Header;
