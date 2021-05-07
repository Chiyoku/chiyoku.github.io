import styled from 'styled-components';

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  flex: 0 auto;
`;

export const Logo = styled.div`
  color: #FF5757;
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  list-style-type: none;

  a {
    color: #BBB;
    margin: 0 25px;
    text-decoration: none;
  }
`;
