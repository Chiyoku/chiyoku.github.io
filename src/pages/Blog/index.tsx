import React from 'react';
import Navbar from '../../components/Navbar';

import {
  GlobalStyle,
} from './styles';

const Blog: React.FC = () => (
  <>
    <GlobalStyle />
    <Navbar theme={{
      background: '#fff',
      mobileBackground: '#fff',
      shadow: '20px rgba(0, 0, 0, 0.05)',
      fontColor: '#555',
    }}
    />
  </>
);

export default Blog;
