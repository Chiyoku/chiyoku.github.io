import styled from 'styled-components';

export default styled.div`
  display: grid;
  place-items: center center;
  margin: 0px 200px 0px 200px;
  grid-gap: 30px;

  @media (max-width: 768px) {
    margin: 30px;
    grid-gap: 30px;
  }
`;
