import styled from 'styled-components';

export const CardFrame = styled.div`
  position: relative;
  width: 100%;
  background: #1d1d1d;
  border-radius: 7px;
  overflow: hidden;
`;

export const CardBody = styled.div`
  padding: 30px;
  font-family: Poppins;

  h3 {
    font-size: 20px;
    margin-bottom: 5px;
    color: #ff6b6b;
  }

  p {
    font-size: 13px;
    color: #fff;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
