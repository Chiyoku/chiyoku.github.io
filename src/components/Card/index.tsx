import { navigate } from 'gatsby';
import React from 'react';

import {
  CardFrame,
  CardBody,
} from './styles';

interface CardInfo {
  title: string;
  description: string;
  filename: string;
}

const Card: React.VFC<CardInfo> = ({
  filename,
  title,
  description,
}: CardInfo) => (
  <CardFrame onClick={() => navigate(`/post/${filename}`)}>
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
