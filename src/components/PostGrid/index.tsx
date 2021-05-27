import React from 'react';
import Card from '../Card';
import Grid from './styles';
import dataPosts from '../../posts/posts';

const encodeURL = (url: string) => (
  url.toLowerCase().replace(/[ ]/g, '-')
);

const PostGrid: React.VFC = () => {
  const posts = dataPosts;
  return (
    <Grid>
      {
        posts.map((cardinfo, i) => (
          <Card
            key={cardinfo.url}
            title={cardinfo.title}
            url={`/post/${encodeURL(cardinfo.title)}/${i.toString()}`}
            description={cardinfo.description}
            imageUrl={cardinfo.imageUrl}
          />
        ))
      }
    </Grid>
  );
};

export default PostGrid;
