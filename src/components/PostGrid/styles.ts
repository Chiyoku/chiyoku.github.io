import styled from 'styled-components';

export default styled.div`
  display: grid;
  place-items: center center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 70px;
  grid-gap: 60px;
  padding-top: 40px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
