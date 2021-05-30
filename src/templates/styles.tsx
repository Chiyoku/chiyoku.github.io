import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 80px 200px 0px 200px;
  color: #FFF;

  @media (max-width: 950px) {
    padding: 80px 20px 0px 20px;
  }
`;

export const MarkdownTheme = styled.div`
  padding: 10px;
  text-align: justify;
  text-justify: inter-word;

  p, li, ul, span, a {
    font-size: 16px;
    line-height: 1.75em;
  }

  a {
    color: #ff5757;
  }
  
  h1, h2, h3 {
    color: #FFF !important;
    margin: 20px 0px 20px 0px;
  }
  p {
    color: #c2c2c2;
  }

  a {
    text-decoration: none;
  }

  pre {
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0px;
    overflow: auto;
  }

  img {
    max-width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 30px 0px 70px 0px;
  padding: 20px;
  width: fit-content;
  left: 50%;
  position: relative;
  transform: translate(-50%);
  border-bottom: 2px solid rgb(255, 255, 255);
`;
