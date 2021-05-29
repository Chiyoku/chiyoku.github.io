import React from 'react';
import Card from '../Card';
import Grid from './styles';
import { QueryRes } from '../types';

const PostGrid: React.VFC<QueryRes> = ({ mds }: QueryRes) => (
  <Grid>
    {
      mds.list.map(({ md: { fields } }) => (
        <Card
          key={fields.title}
          title={fields.title}
          description={fields.desc}
        />
      ))
    }
  </Grid>
);

export default PostGrid;
