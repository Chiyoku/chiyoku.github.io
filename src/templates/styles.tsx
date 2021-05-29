import styled, { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
  padding: 80px 200px 0px 200px;
  color: #FFF;

  @media (max-width: 950px) {
    padding: 80px 20px 0px 20px;
  }
`;

export const MarkdownTheme = createGlobalStyle`
  h1 {
    color: #FFF !important;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 50px;
`;
