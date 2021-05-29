import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import PostGrid from '../../components/PostGrid';
import Navbar from '../../components/Navbar';

import '../../components/layout.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: #EBEBEB;
  }

  * {
    z-index: 1;
  }
`;

const Wrapper = styled.div`
  padding-top: 80px;
`;

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
        <PostGrid />
      </Wrapper>
    </div>
  </>
);

export default Blog;
