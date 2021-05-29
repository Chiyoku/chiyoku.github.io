import React from 'react';
import Card from '../Card';
import Grid from './styles';
import { QueryRes } from '../types';

const PostGrid: React.VFC<QueryRes> = ({ mds }: QueryRes) => (
  <Grid>
    {
      mds.list.map(({ md: { fields, filename } }) => (
        <Card
          key={fields.title}
          filename={filename}
          title={fields.title}
          description={fields.desc}
        />
      ))
    }
  </Grid>
);

export default PostGrid;
