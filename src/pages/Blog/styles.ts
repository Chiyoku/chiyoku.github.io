import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #EBEBEB;
  }

  * {
    z-index: 1;
  }
`;

export const Wrapper = styled.div`
  padding-top: 80px;
`;
