import React, { useState, useContext } from 'react';

import DataContext from '../../context/DataContext';
import TeammateCard from './TeammateCard';
import TeammateModal from './TeammateModal';

import { 
  Container,
  TextH1,
  Cards,
} from './style';

const Team = () => {
  const { people, person, setPerson } = useContext(DataContext);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = (teammate) => {
    setPerson(teammate);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  console.log('isOpenModal:', isOpenModal);

  return (
    <Container>
      <TextH1>O TIME</TextH1>
      <Cards>
        {people.map((teammate, idx) => {
          return (
            <TeammateCard
              key={idx + 1}
              teammate={teammate}
              handleOpenModal={handleOpenModal}
            />
          )
        })}
        <TeammateModal 
          handleCloseModal={handleCloseModal}
          isOpenModal={isOpenModal}
          person={person}
        />
      </Cards>
    </Container>
  );
};

export default Team;
