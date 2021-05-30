import { navigate } from 'gatsby';
import React from 'react';
import Navbar from '../components/Navbar';
import LangList from '../components/LangList';
import Seo from '../components/seo';

import {
  GlobalStyle,
  Container,
  About,
  Contents,
  Wrapper,
  Button,
} from '../components/styles';

const navBarTheme = {
  background: 'transparent',
  mobileBackground: '#111',
  shadow: '20px rgba(0, 0, 0, 0.05)',
  fontColor: '#bbb',
};

const Home: React.FC = () => (
  <>
    <Seo title="Home" />
    <GlobalStyle />
    <Wrapper>
      <Navbar theme={navBarTheme} />
      <Container>
        <About>
          <h1>
            I’M FELIPE G
          </h1>
          <p>
            Im a developer that loves interpreters,
            functional programming and actor model.
          </p>
          <Button type="button" onClick={() => navigate('/blog')}>
            BLOG
          </Button>
        </About>
        <Contents>
          <LangList />
        </Contents>
      </Container>
    </Wrapper>
  </>
);

export default Home;
