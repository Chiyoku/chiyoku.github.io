/* eslint-disable react/prop-types */

import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import React from 'react';

import Navbar from '../components/Navbar';
import { GlobalStyle } from '../components/styles';
import Seo from '../components/seo';

import { Wrapper, MarkdownTheme, Title } from './styles';
import { WrapProvider } from './highlight';

const theme = {
  background: '#131313',
  mobileBackground: '#131313',
  shadow: '20px rgba(0, 0, 0, 0.05)',
  fontColor: '#bbb',
};

const Post = ({ data }) => (
  <>
    <Seo title={data.mdx.frontmatter.title} />
    <GlobalStyle />
    <div>
      <Navbar theme={theme} />
      <Wrapper>
        <Title>{data.mdx.frontmatter.title}</Title>
        <MarkdownTheme>
          <WrapProvider element={
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          }
          />
        </MarkdownTheme>
      </Wrapper>
    </div>
  </>
);

export const query = graphql`
  query Post($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
      }
    }
  }
`;

export default Post;
