import React from 'react';
import { Container } from './style';

import Header from '../../components/Header';
import About from '../../components/About';
import Topics from '../../components/Topics';
import Team from '../../components/Team';

const Index = () => {
  return (
    <Container>
      <Header />
      <About />
      <Topics />
      <Team />
    </Container>
  );
};

export default Index;

