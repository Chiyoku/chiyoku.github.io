import React from 'react';

import {
  CardFrame,
  CardBody,
} from './styles';

interface CardInfo {
  title: string;
  description: string;
}

const Card: React.VFC<CardInfo> = ({
  title,
  description,
}: CardInfo) => (
  <CardFrame>
    <CardBody>
      <h3>
        {title}
      </h3>
      <p>
        {description}
      </p>
    </CardBody>
  </CardFrame>
);

export default Card;
