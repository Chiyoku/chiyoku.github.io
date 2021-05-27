import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import CardInfo from '../../types';

import {
  CardFrame,
  UrlButton,
  CardBg,
  CardBody,
  CardFooter,
} from './styles';

const Card: React.VFC<CardInfo> = ({
  title,
  url,
  imageUrl,
  description,
}: CardInfo) => {
  const history = useHistory();
  return (
    <CardFrame>
      <CardBg url={imageUrl} onClick={() => history.push(url)} />
      <CardBody>
        <h3>
          {title}
        </h3>
        <p>
          {description}
        </p>
      </CardBody>
      <CardFooter>
        <UrlButton>
          <Link to={url}>
            READ MORE
          </Link>
        </UrlButton>
      </CardFooter>
    </CardFrame>
  );
};

export default Card;
