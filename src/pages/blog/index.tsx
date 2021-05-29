import { graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import PostGrid from '../../components/PostGrid';
import Navbar from '../../components/Navbar';

import '../../components/layout.css';
import { QueryRes } from '../../components/types';

/** TODO: Separate styles from this page */
const GlobalStyle = createGlobalStyle`
  body {
    background: #181818;
  }

  * {
    z-index: 1;
  }
`;

const Wrapper = styled.div`
  padding-top: 80px;
`;

const Title = styled.div`
  text-align: center;
  margin: 40px;
  font-size: 30px;
  width: 300px;
  left: calc(50% - 190px);
  position: relative;
  color: #FFF;
  border-bottom: 2px solid #ff6b6b;
`;

interface BlogProps {
  data: QueryRes
}

const Blog: React.FC<BlogProps> = ({ data }: BlogProps) => (
  <>
    <GlobalStyle />
    <div>
      <Navbar theme={{
        background: '#131313',
        mobileBackground: '#131313',
        shadow: '20px rgba(0, 0, 0, 0.05)',
        fontColor: '#bbb',
      }}
      />
      <Wrapper>
        <Title>
          LASTEST POSTS
        </Title>
        <PostGrid mds={data.mds} />
      </Wrapper>
    </div>
  </>
);

export const query = graphql`
query MyQuery {
  mds: allMdx {
    list:edges {
      md: node {
        fields: frontmatter {
          desc
          date
          title
        }
      }
    }
  }
}
`;

export default Blog;
