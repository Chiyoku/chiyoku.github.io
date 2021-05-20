import styled from 'styled-components';

interface NavBarProps {
  whiteTheme: boolean;
}

export const Nav = styled.nav<NavBarProps>`
  position: fixed;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  flex: 0 1 auto;
  width: 100%;
  z-index: 10;
  background: ${(props) => (props.whiteTheme ? '#FFF' : 'transparent')};
  box-shadow: 0px 0px
    ${(props) => (props.whiteTheme ? '20px rgba(0, 0, 0, 0.05)' : '0px')};
  @media (max-width: 768px) {
    background: ${(props) => (props.whiteTheme ? '#FFF' : '#101010')};
  }
`;

export const Logo = styled.div`
  color: #ff5757;
`;

export const Ul = styled.ul<NavBarProps>`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    position: absolute;
    text-align: center;
    left: 0px;
    top: 80px;
    padding-bottom: 30px;
    background: ${(props) => (props.whiteTheme ? '#FFF' : '#101010')};
  }
`;

export const Li = styled.li<NavBarProps>`
  list-style-type: none;

  a {
    color: ${(props) => (props.whiteTheme ? '#555' : '#bbb')};
    margin: 0 25px;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const MenuIcon = styled.div<NavBarProps>`
  color: ${(props) => (props.whiteTheme ? '#555' : '#bbb')};
  font-size: 30px;
`;
