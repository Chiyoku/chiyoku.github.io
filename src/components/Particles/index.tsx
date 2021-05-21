import React from 'react';
import Bg from './styles';

const Particles: React.VFC = () => (
  <Bg params={{
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: '#ff0000',
          blur: 3,
        },
      },
      move: {
        speed: 1,
      },
    },
  }}
  />
);

export default Particles;
