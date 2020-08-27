import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import { 
  Container,
  Cards,
  Card,
  TextP,
  Infos,
  BtnVerMais
} from './style';

const Team = () => {
  return (
    <Container>
      <h1>NOSSO TIME</h1>
      <Cards>
        <Card>
          <img src='/images/avatars/dan-fau.png' />
          <TextP>Daniel<span>Faustino</span></TextP>
          <Infos>
            <BtnVerMais href='#'>Saiba Mais</BtnVerMais>
            <a href='#'><FaGithub size={27}/></a>
            <a href='#'><FaLinkedinIn size={27}/></a>
          </Infos>
        </Card>
        <Card>
          <img src='/images/avatars/dan-fau.png' />
          <TextP>Daniel<span>Faustino</span></TextP>
          <Infos>
            <BtnVerMais href='#'>Saiba Mais</BtnVerMais>
            <a href='#'><FaGithub size={27}/></a>
            <a href='#'><FaLinkedinIn size={27}/></a>
          </Infos>
        </Card>
        <Card>
          <img src='/images/avatars/dan-fau.png' />
          <TextP>Daniel<span>Faustino</span></TextP>
          <Infos>
            <BtnVerMais href='#'>Saiba Mais</BtnVerMais>
            <a href='#'><FaGithub size={27}/></a>
            <a href='#'><FaLinkedinIn size={27}/></a>
          </Infos>
        </Card>
      </Cards>
    </Container>
  );
};

export default Team;
