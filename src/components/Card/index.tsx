import { Link, } from 'gatsby';
import React from 'react';

interface CardInfo {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

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
  return (
    <CardFrame>
      <CardBg url={imageUrl} />
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
