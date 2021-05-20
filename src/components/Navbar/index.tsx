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

interface HeaderProps {
  whiteTheme: boolean;
}

const Header: React.VFC<HeaderProps> = ({ whiteTheme }: HeaderProps) => {
  const [isOpen, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Nav whiteTheme={whiteTheme}>
      <Logo>Chiyoku</Logo>
      {(isOpen || !isMobile) && (
        <Ul whiteTheme={whiteTheme}>
          {items.map((item) => (
            <Li key={item.name} whiteTheme={whiteTheme}>
              <Link to={item.url}>
                {item.name}
              </Link>
            </Li>
          ))}
        </Ul>
      )}
      {isMobile && (
        <MenuIcon whiteTheme={whiteTheme} onClick={() => setOpen(!isOpen)}>
          {!isOpen ? <BsList /> : <BsX />}
        </MenuIcon>
      )}
    </Nav>
  );
};

export default Header;
