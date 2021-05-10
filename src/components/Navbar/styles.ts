import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  flex: 0 1 auto;
  width: 100%;
  @media (max-width: 768px) {
    background: #101010;
  }
`;

export const Logo = styled.div`
  color: #ff5757;
`;

export const Ul = styled.ul`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    position: absolute;
    text-align: center;
    left: 0px;
    top: 80px;
    background: #101010;
  }
`;

export const Li = styled.li`
  list-style-type: none;

  a {
    color: #bbb;
    margin: 0 25px;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const MenuIcon = styled.div`
  color: #fff;
  font-size: 30px;
`;
