import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import { 
  Card,
  CardMeta,
  CardMetaName,
  CardMetaActions,
  CardBtn,
  CardSocialBtn
} from './style';

const TeammateCard = ({ teammate, handleOpenModal }) => {
  return (
    <Card>
      <img src={teammate.avatar} alt={`Foto de ${teammate.firstname}`} />
      <CardMeta>
        <CardMetaName>
          {teammate.firstname}<span>{teammate.lastname}</span>
        </CardMetaName>
        <CardMetaActions>
          <li>
            <CardBtn 
              onClick={() => handleOpenModal(teammate)} 
            >
              Saiba Mais
            </CardBtn>
          </li>
          <li>
            <CardSocialBtn href={teammate.github}>
              <FaGithub size={27}/>
            </CardSocialBtn>
          </li>
          <li>
            <CardSocialBtn href={teammate.linkedin}>
              <FaLinkedinIn size={27}/>
            </CardSocialBtn>
          </li>
        </CardMetaActions>
      </CardMeta>
    </Card>
  );
};

      // <img src={teammate.avatar} alt={`Foto de ${teammate.name}`}/>
      // <Infos>
      //   <TextP>{teammate.firstname}<span>{teammate.lastname}</span></TextP>
      //   <InfosBtn>
      //     <BtnVerMais 
      //       onClick={() => handleOpenModal(teammate)}
      //     >
      //       Saiba Mais
      //     </BtnVerMais>
      //     <a href={teammate.github}><FaGithub size={27}/></a>
      //     <a href={teammate.linkedin}><FaLinkedinIn size={27}/></a>
      //   </InfosBtn>
      // </Infos>

export default TeammateCard;
