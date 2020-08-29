import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import TeammateModal from './TeammateModal';
import people from '../../teammates.json';

import { 
  Container,
  TextH1,
  Cards,
  Card,
  TextP,
  Infos,
  BtnVerMais,
} from './style';


const questions= [
  'Qual o seu maior medo?',
  'O que quero aprender?',
  'O que posso ensinar?',
  'Suas expectativas para o VTEX Trainning Week:'
]

const Team = () => {
  const [open, setOpen] = useState(false);
  const [personForModal, setPersonForModal] = useState({});

  const handleOpen = (person) => {
    setOpen(true);
    setPersonForModal(person);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sortCb = (nameA, nameB) => {
    const a = nameA.firstname.toLowerCase();
    const b = nameB.firstname.toLowerCase();
    if (a < b) { return -1; }
    if (a > b) { return 1; }
    return 0;
  };

  const peopleSorted = people.sort(sortCb);

  return (
    <Container>
      <TextH1>O TIME</TextH1>
      <Cards>
        {peopleSorted.map((person) => {
          return (
            <Card>
              <img src={person.avatar} />
              <TextP>{person.firstname}<span>{person.lastname}</span></TextP>
              <Infos>
                <BtnVerMais 
                  onClick={() => handleOpen(person)}
                >
                  Saiba Mais
                </BtnVerMais>
                <a href={person.github}><FaGithub size={27}/></a>
                <a href={person.linkedin}><FaLinkedinIn size={27}/></a>
                <TeammateModal 
                  handleClose={handleClose}
                  visible={open}
                  person={personForModal}
                />
              </Infos>
            </Card>
          )
        })}
      </Cards>
    </Container>
  );
};

export default Team;
