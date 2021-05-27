import styled from 'styled-components';

interface BgProps {
  url: string;
}

export const CardFrame = styled.div`
  position: relative;
  height: 550px;
  width: 350px;
  background: white;
  border-radius: 7px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const CardBg = styled.div<BgProps>`
  height: 190px;
  width: 100%;
  background-size: cover;
  background: url(${({ url }) => url});
  cursor: pointer;
`;

export const CardBody = styled.div`
  padding: 30px;
  font-family: Poppins;

  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  p {
    font-size: 13px;
    color: #828282;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const UrlButton = styled.button`
  background: #ff5757;
  color: #fff;
  border: none;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(255, 87, 87, 0.3);
  a {
    color: #fff !important;
    text-decoration: none;
  }
`;

export const CardFooter = styled.div`
  position: absolute;
  bottom: 20px;
  padding: 0px 30px 10px 30px;
`;
