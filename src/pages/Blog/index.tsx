import React from 'react';
import PostGrid from '../../components/PostGrid';
import Navbar from '../../components/Navbar';

import {
  GlobalStyle,
  Wrapper,
} from './styles';

const Blog: React.FC = () => (
  <>
    <GlobalStyle />
    <div>
      <Navbar theme={{
        background: '#fff',
        mobileBackground: '#fff',
        shadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        fontColor: '#555',
      }}
      />
      <Wrapper>
        <PostGrid cards={new Array(7).fill(
          {
            title: 'Linguagens de programação',
            description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla, faucibus sit amet leo eget, pulvinar blandit eli.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla, faucibus sit amet leo eget, pulvinar blandit eli.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla, faucibus sit amet leo eget, pulvinar blandit eli',
            imageUrl: 'https://picsum.photos/500',
            url: '/lero',
          },
        )}
        />
      </Wrapper>
    </div>
  </>
);

export default Blog;
