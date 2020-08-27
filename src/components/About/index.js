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
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Sit sit elit quisque risus 
          ullamcorper blandit malesuada mauris, elementum. 
          Quam dolor et auctor nullam lectus eu. Quam gravida 
          donec nunc ac id nulla mollis. In eu condimentum 
          pellentesque diam ut. Aliquet nulla diam metus 
          morbi est urna viverra id imperdiet. Nibh et in 
          posuere dui auctor vehicula pharetra, viverra. 
          Quis enim tellus purus sed mauris malesuada viverra.
        </TextP>
      </Resume>
    </Container>
  );
}

export default About;
