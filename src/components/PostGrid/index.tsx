import React from 'react';
import CardInfo from '../../types';
import Card from '../Card';
import Grid from './styles';

interface GridParams {
  cards: Array<CardInfo>
}

const PostGrid: React.VFC<GridParams> = ({ cards }: GridParams) => (
  <Grid>
    {
      cards.map((cardinfo) => (
        <Card
          title={cardinfo.title}
          url={cardinfo.url}
          description={cardinfo.description}
          imageUrl={cardinfo.imageUrl}
        />
      ))
    }
  </Grid>
);

export default PostGrid;
