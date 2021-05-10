import React from 'react';
import Container from './styles';

type Props = {
  name: string,
  desc: string,
};

const Item: React.VFC<Props> = ({ name, desc }: Props) => (
  <Container>
    <h1>
      {name}
    </h1>
    <p>
      {desc}
    </p>
  </Container>
);

export default Item;
