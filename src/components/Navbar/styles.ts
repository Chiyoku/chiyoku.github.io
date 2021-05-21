import styled from 'styled-components';

export interface NavBarProps {
  theme: {
    background: string;
    mobileBackground: string;
    shadow: string;
    fontColor: string;
  };
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
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.shadow};
  @media (max-width: 768px) {
    background: ${({ theme }) => theme.mobileBackground};
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
    background: ${({ theme }) => theme.mobileBackground};
  }
`;

export const Li = styled.li<NavBarProps>`
  list-style-type: none;

  a {
    color: ${({ theme }) => theme.fontColor} !important;
    margin: 0 25px;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const MenuIcon = styled.div<NavBarProps>`
  color: ${({ theme }) => theme.fontColor};
  font-size: 30px;
`;
