import React from 'react';
import Navbar from '../components/Navbar';
import LangList from '../components/LangList';
import Particles from '../components/Particles';
import Seo from '../components/seo';

import '../components/layout.css';

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
    <Particles />
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
          <Button type="button">
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
