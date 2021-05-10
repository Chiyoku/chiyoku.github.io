import styled from 'styled-components';

export default styled.nav`
  padding: 20px;
  flex: 0 1 auto;
  background: #1d1d1d;
  border-radius: 10px;
  width: 40vw;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.02);
  margin-bottom: 40px;

  h1 {
    color: #fff;
  }

  p {
    color: #555;
  }

  @media (max-width: 950px) {
    margin: 40px;
    text-align: center;
    width: calc(100% - 80px) !important;
    width: fit-content;
  }
`;
