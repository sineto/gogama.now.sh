import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import { 
  Card,
  TextP,
  Infos,
  BtnVerMais,
} from './style';

const TeammateCard = ({ teammate, handleOpenModal }) => {
  return (
    <Card>
      <img src={teammate.avatar} alt={`Foto de ${teammate.name}`}/>
      <TextP>{teammate.firstname}<span>{teammate.lastname}</span></TextP>
      <Infos>
        <BtnVerMais 
          onClick={() => handleOpenModal(teammate)}
        >
          Saiba Mais
        </BtnVerMais>
        <a href={teammate.github}><FaGithub size={27}/></a>
        <a href={teammate.linkedin}><FaLinkedinIn size={27}/></a>
      </Infos>
    </Card>
  );
};

export default TeammateCard;
