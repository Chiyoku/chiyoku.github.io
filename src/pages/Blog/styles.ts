import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #EBEBEB;
  }

  * {
    z-index: 1;
  }
`;

export const Container = styled.div`
  margin-top: 120px;
  display: grid;
  grid-template:
    '.     contents'
    'title contents'
    '.     contents';
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  flex: 1;
  @media (max-width: 950px) {
    grid-template:
      'title'
      'contents';
  }
`;
