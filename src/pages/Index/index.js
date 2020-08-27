import React from 'react';
import { Container } from './style';

import Header from '../../components/Header';
import About from '../../components/About';
import Team from '../../components/Team';

const Index = () => {
  return (
    <Container>
      <Header />
      <About />
      <Team />
    </Container>
  );
};

export default Index;

