import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #181818;
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

export const About = styled.div`
  grid-area: title;
  padding: 0 50px 0 50px;

  h1 {
    white-space: nowrap;
    font-size: 5em;
    color: #fff;
  }

  p {
    color: #737373;
  }

  @media (max-width: 950px) {
    text-align: center;

    h1 {
      font-size: 3em;
    }
  }
`;

export const Contents = styled.div`
  grid-area: contents;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 170px;
  padding: 10px;
  margin-top: 20px;
  border: none;
  background: #ff5757;
  color: #fff;
  font-weight: bold;
`;
