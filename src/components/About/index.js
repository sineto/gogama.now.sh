import React from 'react';

import { 
  Container, 
  Resume, 
  TextH1, 
  TextP 
} from './style';

const About = () => {
  return (
    <Container>
      <img srcset='/images/heroes.png' />      
      <Resume>
        <TextH1>
          Somos um Time de Desenvolvedores preparado 
          para o desafio
        </TextH1>
        <TextP>
          Sabe quando os super-heróis reúnem suas habilidades 
          para salvar o mundo? Foi bem assim que Os Impossíveis 
          se conheceram! Tínhamos o desafio de participar 
          de um treinamento com 3.000 fantásticos competidores 
          e, após 26 semanas de muito estudo, trabalho e 
          superação, chegamos à semi-final do Desafio Hiring Coders 2020. 
        </TextP>

        <TextP>
          Todos os 10 integrantes desta equipe multisciplinar 
          possuem o superpoder de adquirir novas competências 
          com facilidade, além de superdisposição para 
          ajudar no que for necessário e, principalmente, 
          muita força de vontade de conquistar o primeiro 
          lugar!
        </TextP>

        <TextP>
          Confira abaixo um pouco mais sobre nosso Squad.
        </TextP>
      </Resume>
    </Container>
  );
}



// Confira abaixo um pouco mais sobre nosso Squad.
export default About;
